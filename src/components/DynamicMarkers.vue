<script setup lang="ts">
import * as Vue from 'vue'
import { watchLocations } from '../db'
import type { LatLng } from '../db'
import { pathParams } from '../pathParams'
import * as MercatorProjection from 'mercator-projection'
import _ from 'lodash'
import { HIDE_TIMEOUT_MS, STALE_TIMEOUT_MS } from '../dimensions'

const props = defineProps<{
  width: number
  height: number
}>()

export type Location = { coordinates: LatLng; timestamp: number }
export type KeyedLocation = Record<string, Location>
export interface LocationWithKey extends Location {
  key: string
}
export type Dimensions = { width: number; height: number }

const dataToShow = Vue.ref([] as LocationWithKey[])
const WIDTH_PX = 42
const HEIGHT_PX = 62

watchLocations(
  pathParams().sharingKey,
  HIDE_TIMEOUT_MS,
  (locations: KeyedLocation | null): void => {
    if (locations) {
      // Sort by timestamp, so that the latest timestamp
      // comes last... which means they will have the highest effective
      // z-index
      dataToShow.value = _.sortBy(
        Object.entries(locations).map(([key, value]) => ({
          ...value,
          key
        })),
        (r: LocationWithKey) => r.timestamp
      )
    } else {
      dataToShow.value = []
    }
  }
)

function makeLabel(r: LocationWithKey) {
  return r.key.substring(r.key.length - 4)
}

function computeColor(r: LocationWithKey) {
  const perc = (parseInt(r.key.substring(r.key.length - 4), 16) / 65536) * 360

  return `hsl(${perc} 60% 80%)`
}

function computePosition(r: LocationWithKey) {
  const dimensions: Dimensions = {
    width: props.width,
    height: props.height
  }
  const { parsedZoom, parsedCenter } = pathParams()
  const scale = Math.pow(2, parsedZoom)

  const centerPx = MercatorProjection.fromLatLngToPoint(parsedCenter)
  const pointPx = MercatorProjection.fromLatLngToPoint(r.coordinates)

  const diff = {
    x: (pointPx.x - centerPx.x) * scale,
    y: (pointPx.y - centerPx.y) * scale
  }

  const isStale = Date.now() - r.timestamp > STALE_TIMEOUT_MS

  return {
    left: Math.round(dimensions.width / 2 + diff.x - WIDTH_PX / 2) + 'px',
    top: Math.round(dimensions.height / 2 + diff.y - HEIGHT_PX) + 'px',

    opacity: isStale ? 0.5 : 1.0,
    'z-index': isStale ? 10 : 1
  }
}
</script>
<style scoped>
.circle {
  text-align: center;
  vertical-align: top;
  padding-top: 0.5em;
  position: absolute;
  width: 42px;
  height: 62px;
}

.marker {
  stroke: #000;
  stroke-width: 2;
  box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 1);
}
</style>
<template>
  <div v-for="loc in dataToShow" :key="loc.key" class="circle" :style="computePosition(loc)">
    <svg :width="42" :height="62" style="position: absolute; left: 0; top: 0">
      <path
        d="
M 3.76 31
A 20 20 1 1 1 38.32 31
L 21 61

Z"
        :style="{ fill: computeColor(loc) }"
        class="marker"
      />
    </svg>
    <div style="position: absolute; left: 0; top: 0.2em; right: 0; text-align: center; z-index: 1">
      {{ makeLabel(loc) }}
    </div>
  </div>
</template>

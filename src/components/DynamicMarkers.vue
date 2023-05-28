<script setup lang="ts">
import * as Vue from 'vue'
import { watchLocations } from '../db'
import type { LatLng } from '../db'
import { pathParams } from '../pathParams'
import * as MercatorProjection from 'mercator-projection'

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
const WIDTH_PX = 40
const HEIGHT_PX = 40

watchLocations(pathParams().sharingKey, 120 * 60e3, (locations: KeyedLocation | null): void => {
  if (locations) {
    dataToShow.value = Object.entries(locations).map(([key, value]) => ({
      ...value,
      key
    }))
  } else {
    dataToShow.value = []
  }
})

function makeLabel(r: LocationWithKey) {
  return r.key.substring(r.key.length - 4)
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

  const perc = (parseInt(r.key.substring(r.key.length - 4), 16) / 65536) * 360

  return {
    left: Math.round(dimensions.width / 2 + diff.x - WIDTH_PX / 2) + 'px',
    top: Math.round(dimensions.height / 2 + diff.y - HEIGHT_PX / 2) + 'px',

    'background-color': `hsl(${perc} 60% 80%)`
  }
}
</script>
<style scoped>
.circle {
  border: solid 2px black;
  background: #fff;
  text-align: center;
  vertical-align: middle;
  border-radius: 20px;
  position: absolute;
  width: 40px;
  height: 40px;
  box-shadow: 0.1em 0.1em 1em rgba(0,0,0,1.0)
}
</style>
<template>
  <div v-for="loc in dataToShow" :key="loc.key" class="circle" :style="computePosition(loc)">
    {{ makeLabel(loc) }}
  </div>
</template>

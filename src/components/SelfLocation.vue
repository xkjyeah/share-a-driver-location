<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { LatLng } from '../db';
import * as MercatorProjection from 'mercator-projection'
import { pathParams } from '../pathParams'

type Dimensions = { width: number; height: number }

const props = defineProps<{
  width: number
  height: number
}>()


const selfLocation = ref({
  lat: 0,
  lng: 0
})
const watch = ref(0);
const WIDTH = 20;
const HEIGHT = 20;

function startTracking() {
  watch.value = navigator.geolocation.watchPosition((p) => {
    selfLocation.value = {
      lat: p.coords.latitude,
      lng: p.coords.longitude,
    }
  })
}

function stopTracking() {
  navigator.geolocation.clearWatch(watch.value)
}

onMounted(() => {
  startTracking()
})

onUnmounted(() => {
  stopTracking()
})

function computePosition(r: LatLng) {
  const dimensions: Dimensions = {
    width: props.width,
    height: props.height
  }
  const { parsedZoom, parsedCenter } = pathParams()
  const scale = Math.pow(2, parsedZoom)

  const centerPx = MercatorProjection.fromLatLngToPoint(parsedCenter)
  const pointPx = MercatorProjection.fromLatLngToPoint(r)

  const diff = {
    x: (pointPx.x - centerPx.x) * scale,
    y: (pointPx.y - centerPx.y) * scale
  }

  return {
    left: Math.round(dimensions.width / 2 + diff.x - WIDTH / 2) + 'px',
    top: Math.round(dimensions.height / 2 + diff.y - HEIGHT / 2) + 'px',
  }
}

</script>
<style scoped>
.self-marker {
  width: 200px;
  height: 20px;
  position: absolute;
  user-select: none;
  overflow: visible;
  white-space: pre;
  color: #933;
}

.marker {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #F66;
  display: inline-block;
}

.label {
  position: absolute;
  left: 22px;
  top: -2px;
  font-weight: bold;
}
</style>
<template>
  <div class="self-marker" :style="computePosition(selfLocation)">
    <div class="marker">
    </div>
    <div class="label">
      You are here
    </div>
  </div>
</template>
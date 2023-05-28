<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { submitLocation } from '../db'
import { getSendLocationSettings, setSendLocationSettings } from '../user'

const sendingLocation = ref(getSendLocationSettings())
const watch = ref(0)

function startSending() {
  watch.value = navigator.geolocation.watchPosition((p) => {
    submitLocation({
      lat: p.coords.latitude,
      lng: p.coords.longitude,
    }, p.timestamp)
  })
  sendingLocation.value = true
  setSendLocationSettings(true)
}

function stopSending() {
  navigator.geolocation.clearWatch(watch.value)
  sendingLocation.value = false
  setSendLocationSettings(false)
}

onMounted(() => {
  if (sendingLocation.value) {
    startSending()
  }
})

onUnmounted(() => {
  if (watch.value) {
    navigator.geolocation.clearWatch(watch.value)
  }
})

</script>
<template>
  <template v-if="sendingLocation">
    <button
      id="send-location"
      :style="{right: '10px', top: '10px', position: 'fixed'}"
      @click="stopSending"
    >Stop sending location</button>
  </template>
  <template v-else>
    <button
      id="send-location"
      :style="{right: '10px', top: '10px', position: 'fixed'}"
      @click="startSending"
    >Send location</button>
  </template>
</template>
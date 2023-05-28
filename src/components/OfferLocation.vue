<script setup lang="ts">
import { ref } from 'vue'
import { submitLocation } from '../db'

const sendingLocation = ref(false)
const watch = ref(0)

function startSending() {
  watch.value = navigator.geolocation.watchPosition((p) => {
    submitLocation({
      lat: p.coords.latitude,
      lng: p.coords.longitude,
    }, p.timestamp)
  })
  sendingLocation.value = true
}

function stopSending() {
  navigator.geolocation.clearWatch(watch.value)
  sendingLocation.value = false
}

</script>
<template>
  <template v-if="sendingLocation">
    <button
      :style="{right: '10px', top: '10px', position: 'absolute'}"
      @click="stopSending"
    >Sending location</button>
  </template>
  <template v-else>
    <button
      :style="{right: '10px', top: '10px', position: 'absolute'}"
      @click="startSending"
    >Not sending location</button>
  </template>
</template>
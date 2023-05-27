<script setup lang="ts">
import { ref } from 'vue'
import { submitLocation } from '../db'

function startSending() {
  navigator.geolocation.watchPosition((p) => {
    submitLocation({
      lat: p.coords.latitude,
      lng: p.coords.longitude,
    }, p.timestamp)
  })
}


</script>
<template>
  <template v-if="sendingLocation">
    <button :style="{right: '10px', top: '10px', position: 'absolute'}">Sending location</button>
  </template>
  <template v-else>
    <button :style="{right: '10px', top: '10px', position: 'absolute'}" @click="startSending">Not sending location</button>
  </template>
</template>
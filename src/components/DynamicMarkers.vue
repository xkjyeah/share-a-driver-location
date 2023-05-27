<script setup lang="ts">
import * as Vue from 'vue'
import {getDatabase, ref, query} from 'firebase/database';
import {watchLocations} from '../db'
import { pathParams } from '../pathParams';

const dataToShow = Vue.ref([])

watchLocations(pathParams().sharingKey, 120, (locations) => {
  dataToShow.value = locations
})


</script>
<template>
  <template v-if="sendingLocation">
    <button :style="{right: '10px', top: '10px', position: 'absolute'}">Sending location</button>
  </template>
  <template v-else>
    <button :style="{right: '10px', top: '10px', position: 'absolute'}" @click="startSending">Not sending location</button>
  </template>
</template>
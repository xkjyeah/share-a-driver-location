<script setup lang="ts">
import { ref } from 'vue'
import StaticMap from './components/StaticMap.vue'
import DynamicMarkers from './components/DynamicMarkers.vue'
import OfferLocation from './components/OfferLocation.vue'
import {pathParams} from './pathParams'

const mapWidth = 500;
const mapHeight = 500;
const {zoom, center} = pathParams()

</script>

<template>
  <div :style="{position: 'relative', width: mapWidth, height: mapHeight, overflow: 'hidden'}">
    <StaticMap
      :center="center"
      :zoom="zoom"
      :mapWidth="mapWidth"
      :mapHeight="mapHeight"
    />

    <OfferLocation />
    <DynamicMarkers :width="mapWidth" :height="mapHeight" />
  </div>
</template>

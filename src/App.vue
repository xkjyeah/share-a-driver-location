<script setup lang="ts">
import { ref } from 'vue'
import StaticMap from './components/StaticMap.vue'
import WakeLock from './components/WakeLock.vue'
import DynamicMarkers from './components/DynamicMarkers.vue'
import OfferLocation from './components/OfferLocation.vue'
import SelfLocation from './components/SelfLocation.vue'
import {pathParams} from './pathParams'
import {IMAGE_WIDTH, IMAGE_HEIGHT} from './dimensions'

const mapWidth = IMAGE_WIDTH;
const mapHeight = IMAGE_HEIGHT;
const {zoom, center} = pathParams()

</script>

<template>
  <div :style="{position: 'relative', width: mapWidth + 'px', height: mapHeight + 'px', overflow: 'hidden'}">
    <WakeLock />
    <StaticMap
      :center="center"
      :zoom="zoom"
      :mapWidth="mapWidth"
      :mapHeight="mapHeight"
    />
    <DynamicMarkers :width="mapWidth" :height="mapHeight" />
    <SelfLocation :width="mapWidth" :height="mapHeight" />
  </div>
  <OfferLocation />
</template>

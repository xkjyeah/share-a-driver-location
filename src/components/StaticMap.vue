<script setup lang="ts">
import * as MercatorProjection from "mercator-projection";

type LatLng = {
  lat: number;
  lng: number;
};

function getCorners(
  center: LatLng,
  zoom: number,
  mapWidth: number,
  mapHeight: number,
) {
  var scale = Math.pow(2, zoom);
  var centerPx = MercatorProjection.fromLatLngToPoint(center);
  var SWPoint = {
    x: centerPx.x - mapWidth / 2 / scale,
    y: centerPx.y + mapHeight / 2 / scale,
  };
  var SWLatLon = MercatorProjection.fromPointToLatLng(SWPoint);
  var NEPoint = {
    x: centerPx.x + mapWidth / 2 / scale,
    y: centerPx.y - mapHeight / 2 / scale,
  };
  var NELatLon = MercatorProjection.fromPointToLatLng(NEPoint);

  return { SWLatLon, NELatLon };
}

const props = defineProps<{
  zoom: string,
  center: string,
  mapWidth: number,
  mapHeight: number,
}>()

const url = new URL("https://maps.googleapis.com/maps/api/staticmap");
url.searchParams.set("zoom", props.zoom);
url.searchParams.set("center", props.center);
url.searchParams.set("key", "AIzaSyDImU7k6IetA47jAxOPlhWiMlWcefJoIiw");
url.searchParams.set("size", `${props.mapWidth}x${props.mapHeight}`);
url.searchParams.set("scale", '2');

</script>
<template>
  <img :src="url.toString()" :style="{width: props.mapWidth + 'px', height: props.mapHeight + 'px'}" />
</template>
<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

const wakeLockFailed = ref(false)

let sentinel = null;

onMounted(async () => {
  if ('wakeLock' in window.navigator) {
    try {
      sentinel = await (window.navigator.wakeLock as any).request('screen')
      wakeLockFailed.value = false
    } catch {
      wakeLockFailed.value = true
    }
  } else {
    wakeLockFailed.value = true
  }
})

onUnmounted(() => {
  if (sentinel) {
    sentinel.release()
  }
})

</script>
<style scoped>
.wake-lock {
  background-color: red;
  opacity: 0.5;
  color: white;
  font-size: 80%;
}
</style>
<template>
  <div class="wake-lock" v-if="wakeLockFailed.value">
    Could not set wake lock -- your phone may go to sleep
  </div>
</template>

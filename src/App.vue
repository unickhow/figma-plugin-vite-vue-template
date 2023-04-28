<script setup lang="ts">
import { ref } from 'vue'

const count = ref(5)

function handleCreate () {
  parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: count.value } }, '*')
}

function handleCancel () {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
</script>

<template>
  <div class="flex flex-col text-center max-w-[500px] mx-auto">
    <h2>Rectangle Creator</h2>
    <p>Count: <input type="number" v-model.number="count"></p>
    <div class="flex justify-center gap-2">
      <button id="create" class="button" @click="handleCreate">Create</button>
      <button id="cancel" class="button" @click="handleCancel">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
</style>

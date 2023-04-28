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
  <h2>Rectangle Creator</h2>
  <p>Count: <input type="number" v-model.number="count"></p>
  <button id="create" @click="handleCreate">Create</button>
  <button id="cancel" @click="handleCancel">Cancel</button>
</template>

<style scoped>
</style>

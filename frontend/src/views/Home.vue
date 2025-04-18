<template>
  <div>
    <h2>Home</h2>
    <button @click="fetchData">Fetch Random</button>
    <div v-if="data">
      <p>Random Number: {{ data.number }}</p>
      <p>Server Time: {{ new Date(data.time).toLocaleString() }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref(null);

async function fetchData() {
  const res = await fetch('/api/random');
  data.value = await res.json();
}
</script>

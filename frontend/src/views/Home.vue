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

<script>
export default {
  data() {
    return {
      data: null
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch('/api/random');
      this.data = await res.json();
    }
  }
};
</script>

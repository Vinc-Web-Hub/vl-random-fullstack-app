<template>
  <div>
    <h1>Vue + Node API</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// nothing here yet
</script>

<style scoped>
nav {
  margin-bottom: 1em;
}
nav a {
  margin: 0 0.5em;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>

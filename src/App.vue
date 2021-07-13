<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <foot/>
  </div>
</template>

<script>
import navbar from '../src/components/navbar.vue'
import foot from '../src/components/foot.vue'

export default {
  name: 'App',
  components: {
    navbar,
    foot
  }
}
</script>

<style>
 body {
   background: #2D3645;
 }
</style>

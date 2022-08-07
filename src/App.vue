<template>
  <header-component />
  <router-view />
  <footer-component />
</template>
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>


<style>
body {
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  min-height: 100vh;
}
</style>

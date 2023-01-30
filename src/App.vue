<template>
  <div id="main-container" class="relative container m-auto max-w-3xl min-h-screen flex items-center justify-center">
    <div class="h-full max-h-[480px] w-full rounded-lg shadow-xl overflow-hidden">
      <NavBar />
      <div class="rounded-b-lg overflow-hidden bg-amber-100 bg-opacity-80">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
});
</script>

<style>
#main-container:before {
  background-color: #FEB94A;
  background-image: url("https://i.imgur.com/lqWcxKS.jpeg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  content: "";
  z-index: -1;
  opacity: 0.9;
  animation: both 3s ease-in-out latido infinite;
}

@keyframes latido {
  0% {
    opacity: 0.8;
  }

  50% {
    opacity: 0.9;
  }

  100% {
    opacity: 0.8;
  }
}
</style>
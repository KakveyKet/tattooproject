<template>
  <div>
    <MenuBar />
    <router-view />
    <FooterVue />
  </div>
</template>

<script>
import MenuBar from "../client/MenuBar.vue";
import FooterVue from "../client/Footer";
export default {
  components: {
    MenuBar,
    FooterVue,
  },
};
</script>

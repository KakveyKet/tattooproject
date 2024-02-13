<template>
  <div class="containerweb">
    <Navbar />
    <div>
      <SideBar />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    Navbar,
    SideBar,
  },
  setup() {
    return {};
  },
};
</script>

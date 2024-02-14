<template>
  <div class="bg-isGray scrollbar-hide">
    <div>
      <h1 class="text-center py-2 text-white text-2xl font-semibold">
        Meet our Artist
      </h1>
    </div>
    <div class="w-full p-6 overflow-auto scrollbar-hide h-[350px] gap-3 flex">
      <div
        v-for="cart in 8"
        :key="cart"
        class="p-2 w-[250px] h-[95%] bg-gray-200 rounded-md overflow-hidden flex-none"
      >
        <img
          class="w-[70%] h-[65%] object-cover mx-auto"
          src="https://i.pinimg.com/236x/0d/53/08/0d53085aaea2286feb39653c08ae74b0.jpg"
        />
        <div>
          <div class="w-full text-center">
            <h1 class="text-red-600 text-xl font-semibold">Luffy</h1>
          </div>
          <div>
            <p class="text-isGray text-lg text-center">Tattoo design</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style>
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>

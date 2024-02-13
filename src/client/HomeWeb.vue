<template>
  <div class="w-full">
    <div class="content w-full bg-opacity-50 h-[250px]">
      <div
        class="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 p-3"
      >
        <h1
          class="text-center font-serif text-xl text-white text-opacity-90 font-semibold"
        >
          Welcome to the Acorns Tattoo!
        </h1>
        <p class="text-center text-white text-sm">
          Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis.
          Integer ultrices posuere cubilia Curae,
        </p>
        <div class="flex justify-between space-x-10 mt-8">
          <button
            class="px-4 py-1 border-2 text-white border-red-600 rounded-md"
          >
            Call Us</button
          ><button
            class="px-4 py-1 border-2 text-white border-red-600 rounded-md"
          >
            Loaction
          </button>
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

<style scoped>
.content {
  width: 100%;
  object-fit: cover;
  background-image: url("https://i.pinimg.com/564x/0a/fb/e4/0afbe485f8d9cd4397d196b303dd3bd3.jpg");
}
</style>

<template>
  <div class="w-full h-full bg-isGray">
    <div class="content w-full bg-opacity-50 h-[550px]">
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
            @click="handleGotoBooking"
            class="px-14 py-3 border-2 text-white text-xl border-red-600 rounded-md"
          >
            Booking
          </button>
        </div>
      </div>
    </div>
    <div>
      <ProductPage />
    </div>
    <div>
      <ArtistPageVue />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import ArtistPageVue from "./ArtistPage.vue";
import ProductPage from "./ProductPage.vue";
export default {
  components: {
    ProductPage,
    ArtistPageVue,
  },

  setup() {
    const router = useRouter();
    const handleGotoBooking = () => {
      router.push({ name: "bookingUser" });
    };
    return { handleGotoBooking };
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

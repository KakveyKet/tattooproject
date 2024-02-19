<template>
  <div class="w-[90%] bg-white h-[1px] rounded-md mx-auto"></div>
  <div class="bg-isGray scrollbar-hide">
    <div>
      <h1 class="text-center py-2 text-white text-2xl font-semibold">
        Meet our Artist
      </h1>
    </div>
    <div
      class="w-full p-6 overflow-auto scrollbar-hide h-[350px] gap-3 lg:hidden xl:hidden md:hidden flex"
    >
      <div
        v-for="artist in dataitem"
        :key="artist.id"
        class="p-2 w-[250px] h-[95%] bg-isGray border-2 border-card border-opacity-50 rounded-md overflow-hidden flex-none"
      >
        <img class="w-[70%] h-[65%] object-cover mx-auto" :src="artist.image" />
        <div>
          <div class="w-full text-center">
            <h1 class="text-red-600 text-xl font-semibold">
              {{ artist.name }}
            </h1>
          </div>
          <div>
            <p class="text-card text-sm text-center">{{ artist.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-[100%] p-5 lg:flex xl:flex md:flex hidden mx-auto">
    <div class="grid grid-cols-5 gap-2">
      <div
        v-for="artist in dataitem"
        :key="artist.id"
        class="p-2 w-[90%] h-[400px] bg-isGray border-2 border-card border-opacity-50 flex flex-col rounded-md mx-auto"
      >
        <img
          class="w-[70%] h-[250px] object-cover mx-auto"
          :src="artist.image"
        />
        <div>
          <div class="w-full text-center">
            <h1 class="text-red-600 text-xl font-semibold">
              {{ artist.name }}
            </h1>
          </div>
          <div>
            <p class="text-card text-sm text-center">{{ artist.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollectionQuery } from "@/composible/getCollection";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const dataitem = ref([]);
    onMounted(() => {
      getData();
    });
    const getData = async () => {
      try {
        await getCollectionQuery(
          "artists",
          [],
          (data) => {
            dataitem.value = data;
          },
          true
        );
      } catch (error) {
        return error.message;
      }
    };
    return { dataitem };
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

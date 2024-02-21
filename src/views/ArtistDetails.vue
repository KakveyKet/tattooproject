<template>
  <div class="flex w-full bg-card h-screen items-center justify-center">
    <div class="bg-white p-5 rounded-md w-1/2">
      <div v-if="product" class="w-[70%] space-y-2">
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">Name :</h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.name }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Status :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.statuse }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Image :
            </h1>
          </div>
          <div class="w-1/2">
            <img class="w-32 h-40" :src="product.image" alt="" />
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Description :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.bio }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              WorkingDay :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.workingday }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Workingtime :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.workingtime }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      product: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    const productId = to.params.id;
    const productRef = doc(projectFirestore, "artists", productId);
    const product = ref(null);

    const unsubscribe = onSnapshot(productRef, (snapshot) => {
      if (snapshot.exists()) {
        product.value = { id: snapshot.id, ...snapshot.data() };
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }
    });

    next((vm) => {
      vm.product = product;
    });

    return unsubscribe;
  },
};
</script>

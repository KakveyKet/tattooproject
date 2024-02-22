<template>
  <div class="flex flex-col items-center justify-center relative">
    <router-link
      to="/report"
      class="w-10 h-10 bg-card shadow-xl rounded-full fixed top-2 left-2 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </router-link>
    <div>
      <button
        class="w-10 h-10 bg-blue-500 text-white shadow-xl rounded-full fixed top-14 left-2 flex items-center justify-center"
        @click="handlePrint"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      id="print-invoice"
      class="h-[297mm] w-[210mm] bg-slate-100 shadow-md p-5"
    >
      <div class="w-full flex justify-center">
        <div class="flex items-center space-x-3">
          <div>
            <div>
              <span class="icon-[ant-design--dashboard-outlined]"></span>
              <img class="w-10 h-10 ml-2" src="../assets/img/logo.png" alt="" />
            </div>
          </div>
          <h1 class="text-primary1 text-[27px] ml-3 font-bold tracking-wide">
            Ac🌰rns Tattoo
          </h1>
        </div>
      </div>
      <div class="w-full mt-20 flex justify-center">
        <div class="w-1/2 mt-14 space-y-2">
          <div class="w-full">
            <h1 class="text-xl font-semibold text-isGray">
              Invoice Number :
              <span class="font-normal">{{ invoiceNumber }}</span>
            </h1>
          </div>
          <div class="w-full">
            <h1 class="text-xl font-semibold text-isGray">
              Company Phone Number: <span class="font-normal">098 765 432</span>
            </h1>
          </div>
          <div class="w-full">
            <h1 class="text-xl font-semibold text-isGray">
              Company Loaction: <span class="font-normal">Battambang</span>
            </h1>
          </div>
        </div>
        <div class="w-1/2 mt-14 space-y-2 text-end">
          <div class="w-full">
            <h1 class="text-xl font-semibold text-isGray">
              Date : <span class="font-normal">{{ today }}</span>
            </h1>
          </div>
          <div class="w-full">
            <h1 class="text-xl font-semibold text-isGray">
              Company name: <span class="font-normal">Acorns Tattoo </span>
            </h1>
          </div>
        </div>
      </div>
      <div
        class="w-full border-t-2 border-b-2 text-lg font-semibold border-isGray mt-20 flex justify-between py-2"
      >
        <div class="w-[20%]">Client name</div>
        <div class="w-[20%]">Artist name</div>
        <div class="w-[20%]">Phone</div>
        <div class="w-[20%]">Service</div>
        <div class="w-[20%]">Booking at</div>
        <div class="w-[20%]">Action</div>
      </div>
      <div
        v-if="product"
        class="w-full flex text-lg gap-5 justify-between py-2"
      >
        <div class="w-[20%]">{{ product.lastname }}</div>
        <div class="w-[20%]">{{ product.artist }}</div>
        <div class="w-[20%]">{{ product.phone }}</div>
        <div class="w-[20%]">{{ product.option }}</div>
        <div class="w-[20%]">
          {{ new Date(product.datetime.seconds * 1000).toLocaleString() }}
        </div>
        <div class="w-[20%]">---------</div>
      </div>
      <div class="w-full flex justify-end mt-20">
        <div class="w-1/2 border-b-2 border-isGray">
          <div class="flex justify-between">
            <h1>Subtotal :</h1>
            <h1>---------</h1>
          </div>
          <div class="flex justify-between py-5">
            <h1 class="text-xl font-body text-isGray">Total :</h1>
            <h1>---------</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { projectFirestore } from "@/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import printJS from "print-js";
import moment from "moment";
import { getCollectionQuery } from "../composible/getCollection";

export default {
  data() {
    const invoiceNumber = ref(1);
    const today = moment().format("dddd, Do MMM, YYYY");
    watch(getCollectionQuery("bookings").documents, (newVal, oldVal) => {
      if (newVal.length <= 0) {
        invoiceNumber.value = "000" + invoiceNumber.value;
      } else {
        const invoiceLength = (invoiceNumber.value =
          "000" + invoiceNumber.value.length);

        if (newVal.length < 10) {
          invoiceNumber.value = "000" + invoiceLength;
        } else if (invoiceLength < 100) {
          invoiceNumber.value = "00" + invoiceLength;
        } else if (invoiceLength < 1000) {
          invoiceNumber.value = "0" + invoiceLength;
        } else {
          invoiceNumber.value = invoiceLength;
        }
      }
    });

    return {
      product: null,
      today,
      invoiceNumber,
    };
  },

  methods: {
    async handlePrint() {
      printJS({
        printable: "print-invoice",
        type: "html",
        targetStyles: ["*"],
      });
    },
  },

  beforeRouteEnter(to, from, next) {
    const productId = to.params.id;
    const productRef = doc(projectFirestore, "bookings", productId);
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

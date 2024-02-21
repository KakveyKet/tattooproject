<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <button @click="handlePrint">Print</button>
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

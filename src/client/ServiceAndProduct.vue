<template>
  <div class="p-5 w-full bg-isGray">
    <div class="w-full flex justify-end">
      <div
        class="lg:w-[20%] md:w-[30%] xl:w-[25%] w-[60%] h-10 relative bg-white rounded-3xl flex items-center justify-between"
      >
        <input
          class="outline-none bg-transparent px-4"
          type="text"
          placeholder="Search"
        />
        <span class="absolute top-1 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 48 48"
          >
            <g fill="#616161">
              <path d="m29.175 31.99l2.828-2.827l12.019 12.019l-2.828 2.827z" />
              <circle cx="20" cy="20" r="16" />
            </g>
            <path
              fill="#37474f"
              d="m32.45 35.34l2.827-2.828l8.696 8.696l-2.828 2.828z"
            />
            <circle cx="20" cy="20" r="13" fill="#64b5f6" />
            <path
              fill="#bbdefb"
              d="M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-.4.4-.3 1.1.1 1.4c.4.4 1.1.3 1.4-.1C16 13.9 17.9 13 20 13s4 .9 5.4 2.5c.2.2.5.4.8.4c.2 0 .5-.1.6-.2c.4-.4.4-1.1.1-1.5"
            />
          </svg>
        </span>
      </div>
    </div>
    <div><ServiceHigthlightVue /></div>
  </div>
</template>

<script>
import ServiceHigthlightVue from "./ServiceHigthlight.vue";
export default {
  components: {
    ServiceHigthlightVue,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

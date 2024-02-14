<template>
  <div class="p-5 w-full h-full bg-isGray relative">
    <!-- seach -->
    <div
      class="w-full bg-isGray flex justify-end fixed right-2 z-20 top-[60px] p-1"
    >
      <div
        class="lg:w-[20%] md:w-[30%] xl:w-[25%] w-[60%] h-10 relative bg-white rounded-3xl flex items-center justify-between"
      >
        <input
          class="outline-none w-full bg-transparent px-4"
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
    <!-- service -->
    <div><ServiceHigthlightVue /></div>
    <!-- product -->
    <div class="w-full">
      <h1 class="text-center py-2 text-white text-2xl font-semibold">
        All Products
      </h1>
    </div>
    <div
      class="w-full h-auto grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-5 lg:gap-3 xl:gap-3 gap-1"
    >
      <div
        class="bg-[url('https://i.pinimg.com/736x/55/cf/f7/55cff7168c5445ad51f30c5b7c55b18d.jpg')] bg-cover w-[90%] xl:w-[300px] h-[200px] lg:h-96 relative m-2"
      >
        <button
          class="absolute group top-0 right-0 duration-300 focus:bg-slate-900 focus:bg-opacity-70 w-full h-full flex flex-col items-center justify-center"
        >
          <div>
            <h1
              class="text-[18px] font-bold group-focus:text-green-400 text-transparent py-2"
            >
              Small tattoo
            </h1>
          </div>
          <div class="w-[70%] h-[90%]">
            <p
              class="text-transparent text-[12px] inline-block group-focus:text-white font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </button>
      </div>
      <div
        class="bg-[url('https://i.pinimg.com/564x/5a/06/90/5a0690b3c5d1e235a962324d6a23db79.jpg')] bg-cover w-[90%] xl:w-[300px] h-[200px] lg:h-96 relative m-2"
      >
        <button
          class="absolute group top-0 right-0 duration-300 focus:bg-slate-900 focus:bg-opacity-70 w-full h-full flex flex-col items-center justify-center"
        >
          <div>
            <h1
              class="text-[18px] font-bold group-focus:text-green-400 text-transparent py-2"
            >
              Small tattoo
            </h1>
          </div>
          <div class="w-[70%] h-[90%]">
            <p
              class="text-transparent text-[12px] inline-block group-focus:text-white font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </button>
      </div>
      <div
        class="bg-[url('https://i.pinimg.com/564x/f3/38/c5/f338c5cd371671da1ee47dcf9aecdcf0.jpg')] bg-cover w-[90%] xl:w-[300px] h-[200px] lg:h-96 relative m-2"
      >
        <button
          class="absolute group top-0 right-0 duration-300 focus:bg-slate-900 focus:bg-opacity-70 w-full h-full flex flex-col items-center justify-center"
        >
          <div>
            <h1
              class="text-[18px] font-bold group-focus:text-green-400 text-transparent py-2"
            >
              Small tattoo
            </h1>
          </div>
          <div class="w-[70%] h-[90%]">
            <p
              class="text-transparent text-[12px] inline-block group-focus:text-white font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </button>
      </div>
      <div
        class="bg-[url('https://i.pinimg.com/736x/b4/ef/1f/b4ef1f7b73c48480b6e5cb3c6c389e15.jpg')] bg-cover w-[90%] xl:w-[300px] h-[200px] lg:h-96 relative m-2"
      >
        <button
          class="absolute group top-0 right-0 duration-300 focus:bg-slate-900 focus:bg-opacity-70 w-full h-full flex flex-col items-center justify-center"
        >
          <div>
            <h1
              class="text-[18px] font-bold group-focus:text-green-400 text-transparent py-2"
            >
              Small tattoo
            </h1>
          </div>
          <div class="w-[70%] h-[90%]">
            <p
              class="text-transparent text-[12px] inline-block group-focus:text-white font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </button>
      </div>
      <div
        class="bg-[url('https://i.pinimg.com/564x/17/b1/0f/17b10f5d693f5f6039fdaa3284bd52b1.jpg')] bg-cover w-[90%] xl:w-[300px] h-[200px] lg:h-96 relative m-2"
      >
        <button
          class="absolute group top-0 right-0 duration-300 focus:bg-slate-900 focus:bg-opacity-70 w-full h-full flex flex-col items-center justify-center"
        >
          <div>
            <h1
              class="text-[18px] font-bold group-focus:text-green-400 text-transparent py-2"
            >
              Small tattoo
            </h1>
          </div>
          <div class="w-[70%] h-[90%]">
            <p
              class="text-transparent text-[12px] inline-block group-focus:text-white font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </button>
      </div>
      <div
        class="bg-[url('https://i.pinimg.com/564x/5b/97/39/5b97395c7edb0e70406ac9e031a29692.jpg')] bg-cover w-[90%] xl:w-[300px] h-[200px] lg:h-96 relative m-2"
      >
        <button
          class="absolute group top-0 right-0 duration-300 focus:bg-slate-900 focus:bg-opacity-70 w-full h-full flex flex-col items-center justify-center"
        >
          <div>
            <h1
              class="text-[18px] font-bold group-focus:text-green-400 text-transparent py-2"
            >
              Small tattoo
            </h1>
          </div>
          <div class="w-[70%] h-[90%]">
            <p
              class="text-transparent text-[12px] inline-block group-focus:text-white font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </button>
      </div>
    </div>

    <!-- minose < 18 -->
    <div class="w-full mt-3">
      <div class="bg-red-500 flex items-center p-3 rounded-md space-x-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-20 h-20 text-white"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m288.5 682.8L277.7 224C258 240 240 258 224 277.7l522.8 522.8C682.8 852.7 601 884 512 884c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372c0 89-31.3 170.8-83.5 234.8"
            />
            <path
              fill="currentColor"
              fill-opacity="0.15"
              d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372c89 0 170.8-31.3 234.8-83.5L224 277.7c16-19.7 34-37.7 53.7-53.7l522.8 522.8C852.7 682.8 884 601 884 512c0-205.4-166.6-372-372-372"
            />
          </svg>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-white text-center">Minorse</h1>
          <p class="text-start text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias
            temporibus tempore!
          </p>
        </div>
      </div>
    </div>
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

<template>
  <div class="w-full h-auto bg-isGray">
    <div class="w-full lg:w-1/2 mx-auto md:w-1/3 xl:w-1/2 p-2">
      <h1 class="text-center text-white text-xl font-serif font-bold mt-14">
        LET'S GET IN TOUCH
      </h1>
      <form class="w-full">
        <!-- 1 -->
        <div class="mt-10 space-y-4">
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              name="email"
              required
              autofocus
              placeholder="First Name *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              name="email"
              required
              placeholder="Last Name *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
          <input type="checkbox" class="w-5 h-5 bg-transparent" />
          <span class="ml-3 text-white">I'm 18 Years old or older</span>
        </div>
        <!-- 2 -->
        <div class="mt-4 space-y-4">
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              required
              placeholder="Email *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              required
              placeholder="Phone Number *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
        </div>
        <!-- 3 -->
        <div class="mt-2">
          <ejs-datetimepicker placeholder="សូមជ្រើសរើស"> </ejs-datetimepicker>
        </div>
        <!-- 4 -->
        <div class="mt-2">
          <h1 class="text-white text-xl font-semibold">
            Choose Service <span class="text-red-600">*</span>
          </h1>
          <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="flexRadioDefault"
              id="radioDefault01"
            />
            <label
              class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white text-sm"
              for="radioDefault01"
            >
              Tattoo
            </label>
          </div>
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="flexRadioDefault"
              id="radioDefault02"
              checked
            />
            <label
              class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white text-sm"
              for="radioDefault02"
            >
              Piercing
            </label>
          </div>
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="flexRadioDefault"
              id="radioDefault02"
              checked
            />
            <label
              class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white text-sm"
              for="radioDefault02"
            >
              Tattoo Removal
            </label>
          </div>
        </div>
        <!-- 5 -->
        <div class="mt-4 space-y-4">
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              required
              placeholder="Preferred Artist *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              placeholder="Preferred Loacation body "
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              placeholder="Other "
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <textarea
              type="text"
              placeholder="Description "
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
        </div>
        <!-- 6 -->
        <div class="mt-4">
          <section class="overflow-auto w-full h-1/2 flex flex-col">
            <header
              class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
            >
              <p
                class="mb-3 font-semibold text-white flex flex-wrap justify-center"
              >
                <span>Photo Preferred</span>
              </p>
              <input id="hidden-input" type="file" />
            </header>
          </section>
        </div>

        <div class="mt-4 flex">
          <button
            type="submit"
            class="bg-delete px-5 py-1 rounded-lg mx-auto text-white text-xl"
          >
            Submit
          </button>
        </div>
      </form>
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

<style></style>

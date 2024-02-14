<template>
  <div class="w-full bg-isGray h-auto">
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
    <div class="w-full bg-card flex items-center h-[350px] p-2 space-x-3">
      <div class="w-1/2 h-full overflow-hidden">
        <img
          class="h-full overflow-hidden hover:scale-105 duration-300 w-full lg:object-none xl:object-none md:object-cover object-cover"
          src="https://images.squarespace-cdn.com/content/v1/542dc06ae4b0a98dd74f94db/d0a9dc98-f235-4857-8559-ad2ce6865ba8/ZEE231.jpg?format=500w"
          alt=""
        />
      </div>
      <div class="w-1/2">
        <h1 class="text-center text-isGray text-2xl font-bold">ZEE</h1>
        <h2 class="text-center text-isGray text-[14px] font-bold">
          Founder also an artist
        </h2>
        <p class="text-sm inline-block">
          Specializes in black and gray realism, and fine line. Zee says
          ”Flowers are my favorite subject to tattoo. I collect a huge amount of
          information to help me prepare each design. I buy a lot of fresh
          flowers and use these as references for my drawings”.
        </p>
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
.content {
  width: 100%;
  object-fit: cover;
  background-image: url("https://i.pinimg.com/564x/0a/fb/e4/0afbe485f8d9cd4397d196b303dd3bd3.jpg");
}
</style>

<template>
  <div class="w-full bg-isGray">
    <div class="w-full">
      <h1 class="text-center py-2 text-white text-2xl font-semibold">
        Outstanding Tattoos
      </h1>
    </div>
    <div class="w-full lg:hidden p-2 grid grid-cols-3 lg:grid-cols-4 gap-2">
      <img
        class="w-[100%] lg:rounded-none xl:rounded-none md:rounded-none duration-300 ease-in-out rounded-md h-full"
        src="https://i.pinimg.com/564x/a6/43/c2/a643c239f380c61740b2f41413802ed4.jpg"
        alt=""
      />
      <img
        class="w-[100%] lg:rounded-none xl:rounded-none md:rounded-none duration-300 ease-in-out rounded-md h-full"
        src="https://i.pinimg.com/236x/c4/8a/29/c48a29fe74984084e1ab3f6f5291ad4d.jpg"
        alt=""
      />
      <img
        class="w-[100%] lg:rounded-none xl:rounded-none md:rounded-none duration-300 ease-in-out rounded-md h-full"
        src="https://i.pinimg.com/564x/63/06/d3/6306d3ac3c8ebe6eab0abac46741ea9f.jpg
      "
        alt=""
      />
      <img
        class="w-[100%] lg:rounded-none xl:rounded-none md:rounded-none duration-300 ease-in-out rounded-md h-full"
        src="https://i.pinimg.com/564x/09/25/c0/0925c07f702084446af9a9b29df9eac9.jpg"
        alt=""
      />
      <img
        class="w-[100%] lg:rounded-none xl:rounded-none md:rounded-none duration-300 ease-in-out rounded-md h-full"
        src="https://i.pinimg.com/564x/c5/75/48/c57548acac4ca0d2d79bdeb1daaa2f8c.jpg"
        alt=""
      />
      <img
        class="w-[100%] lg:rounded-none xl:rounded-none md:rounded-none duration-300 ease-in-out rounded-md h-full"
        src="https://i.pinimg.com/564x/b8/0d/92/b80d92414556038da1ea269922db8d39.jpg
      "
        alt=""
      />
    </div>
    <div class="lg:block xl:block md:block hidden h-auto w-[90%] mx-auto">
      <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
      <div
        id="carouselExampleIndicators"
        class="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        <!--Carousel indicators-->
        <div
          class="absolute bottom-0 left-0 right-0 z-[2] hidden mx-[15%] mb-4 list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="0"
            data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial hidden cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="1"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="2"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>

        <!--Carousel items-->
        <div
          class="relative w-full h-[700px] overflow-hidden after:clear-both after:block after:content-['']"
        >
          <!--First item-->
          <div
            class="relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/230106141452-02-chen-jie.jpg?q=w_2000,c_fill"
              class="block w-full h-full object-cover brightness-50"
              alt="Wild Landscape"
            />
          </div>
          <!--Second item-->
          <div
            class="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://www.vaseline.com/sk-eu/content/dam/brands/vaseline/global_use/74010719-gettyimages-1169302783---header---2400-x-1350.jpg.rendition.991.741.jpg"
              class="block w-full h-full object-cover brightness-50"
              alt="Camera"
            />
          </div>
          <!--Third item-->
          <div
            class="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/confident-tattooed-man-at-studio-royalty-free-image-1615300686.?crop=0.833xw:0.624xh;0.168xw,0.247xh&resize=1200:*"
              class="block w-full h-full object-cover brightness-50"
              alt="Exotic Fruits"
            />
          </div>
        </div>

        <!--Carousel controls - prev item-->
        <button
          class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="prev"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Previous</span
          >
        </button>
        <!--Carousel controls - next item-->
        <button
          class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="next"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Next</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, initTE } from "tw-elements";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      initTE({ Carousel });
    });
    return {};
  },
};
</script>

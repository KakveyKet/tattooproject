<template>
  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
  <!-- Sidenav -->
  <nav
    id="sidenav-4"
    class="group left-0 z-[35] h-[90%] w-60 bg-[white] space-y-3 -translate-x-full overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-slim='true']:hidden data-[te-sidenav-slim-collapsed='true']:w-[77px] data-[te-sidenav-slim='true']:w-[77px] data-[te-sidenav-hidden='false']:translate-x-0 [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='false']]:hidden [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='true']]:[display:unset]"
    data-te-sidenav-init
    data-te-sidenav-hidden="false"
    data-te-sidenav-mode="side"
    data-te-sidenav-slim="true"
    data-te-sidenav-content="#slim-content"
    data-te-sidenav-slim-collapsed="true"
  >
    <ul
      class="relative m-0 list-none space-y-1 px-[0.2rem] mt-20 p-2"
      data-te-sidenav-menu-ref
    >
      <!-- dash -->
      <li>
        <router-link to="/admin" class="relative rounded-lg border-opacity-0">
          <a
            class="flex h-12 cursor-pointer focus:shadow-md focus:bg-nav items-center truncate rounded-[5px] px-2 py-4 text-[0.875rem] text-gray-600 transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
            data-te-sidenav-link-ref
          >
            <span class="[&>svg]:h-[32px] mr-2 [&>svg]:w-[32px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                class="text-black mr-2"
              >
                <path
                  fill="currentColor"
                  d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4a446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96a446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4M761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263c70.3-70.3 163.7-109 263-109c99.4 0 192.8 38.7 263 109c70.3 70.3 109 163.7 109 263c0 105.6-44.5 205.5-122.6 276M623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2a55.95 55.95 0 0 0 79.2 0a55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8m260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3m-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8"
                />
              </svg>
            </span>
            <span
              class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden font-bold text-[18px]"
              data-te-sidenav-slim="false"
              >Dashboard</span
            >
          </a>
        </router-link>
      </li>

      <!-- service -->
      <li class="relative">
        <router-link
          to="/products"
          class="flex h-12 cursor-pointer focus:shadow-md focus:bg-nav items-center truncate rounded-[5px] px-2 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref
        >
          <span class="[&>svg]:h-[32px] mr-2 [&>svg]:w-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z"
              />
              <path
                fill="currentColor"
                d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1"
              />
            </svg>
          </span>
          <span
            class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden font-bold ml-4 text-[18px]"
            data-te-sidenav-slim="false"
            >Service</span
          >
          <span
            class="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
            data-te-sidenav-rotate-icon-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 opacity-0"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </router-link>
        <ul
          class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        ></ul>
      </li>
      <!-- artist -->
      <li class="relative">
        <router-link
          to="/artist"
          class="flex h-12 cursor-pointer focus:shadow-md focus:bg-nav items-center truncate rounded-[5px] px-2 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref
        >
          <span class="[&>svg]:h-[32px] mr-2 [&>svg]:w-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="M16.43 16.69a7 7 0 1 1 7-7a7 7 0 0 1-7 7m0-11.92a5 5 0 1 0 5 5a5 5 0 0 0-5-5M22 17.9a25.41 25.41 0 0 0-16.12 1.67a4.06 4.06 0 0 0-2.31 3.68v5.95a1 1 0 1 0 2 0v-5.95a2 2 0 0 1 1.16-1.86a22.91 22.91 0 0 1 9.7-2.11a23.58 23.58 0 0 1 5.57.66Zm.14 9.51h6.14v1.4h-6.14z"
              />
              <path
                fill="currentColor"
                d="M33.17 21.47H28v2h4.17v8.37H18v-8.37h6.3v.42a1 1 0 0 0 2 0V20a1 1 0 0 0-2 0v1.47H17a1 1 0 0 0-1 1v10.37a1 1 0 0 0 1 1h16.17a1 1 0 0 0 1-1V22.47a1 1 0 0 0-1-1"
              />
            </svg>
          </span>
          <span
            class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden font-bold ml-4 text-[18px]"
            data-te-sidenav-slim="false"
            >Artist</span
          >
          <span
            class="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
            data-te-sidenav-rotate-icon-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 opacity-0"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </router-link>
        <ul
          class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        ></ul>
      </li>
      <!-- booking -->
      <li class="relative">
        <router-link
          to="/booking"
          class="flex h-12 cursor-pointer focus:shadow-md focus:bg-nav items-center truncate rounded-[5px] px-2 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref
        >
          <span class="[&>svg]:h-[32px] mr-2 [&>svg]:w-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="M15 8h9v2h-9z"
                class="clr-i-outline clr-i-outline-path-1"
              />
              <path
                fill="currentColor"
                d="M15 12h9v2h-9z"
                class="clr-i-outline clr-i-outline-path-2"
              />
              <path
                fill="currentColor"
                d="M15 16h9v2h-9z"
                class="clr-i-outline clr-i-outline-path-3"
              />
              <path
                fill="currentColor"
                d="M15 20h9v2h-9z"
                class="clr-i-outline clr-i-outline-path-4"
              />
              <path
                fill="currentColor"
                d="M15 24h9v2h-9z"
                class="clr-i-outline clr-i-outline-path-5"
              />
              <path
                fill="currentColor"
                d="M11 8h2v2h-2z"
                class="clr-i-outline clr-i-outline-path-6"
              />
              <path
                fill="currentColor"
                d="M11 12h2v2h-2z"
                class="clr-i-outline clr-i-outline-path-7"
              />
              <path
                fill="currentColor"
                d="M11 16h2v2h-2z"
                class="clr-i-outline clr-i-outline-path-8"
              />
              <path
                fill="currentColor"
                d="M11 20h2v2h-2z"
                class="clr-i-outline clr-i-outline-path-9"
              />
              <path
                fill="currentColor"
                d="M11 24h2v2h-2z"
                class="clr-i-outline clr-i-outline-path-10"
              />
              <path
                fill="currentColor"
                d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 30H8V4h20Z"
                class="clr-i-outline clr-i-outline-path-11"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          </span>
          <span
            class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden font-bold ml-4 text-[18px]"
            data-te-sidenav-slim="false"
            >Booking List</span
          >
          <span
            class="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
            data-te-sidenav-rotate-icon-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 opacity-0"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </router-link>
        <ul
          class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        ></ul>
      </li>
      <!-- report -->
      <li class="relative">
        <a
          class="flex h-12 cursor-pointer focus:shadow-md focus:bg-nav items-center truncate rounded-[5px] px-2 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref
        >
          <span class="[&>svg]:h-[32px] mr-2 [&>svg]:w-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 56 56"
            >
              <path
                fill="currentColor"
                d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508c0-3.024-.328-4.336-2.203-6.258L32.57 5.102c-1.78-1.829-3.234-2.227-5.882-2.227H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m.187-3.773c-2.414 0-3.68-1.29-3.68-3.633V10.305c0-2.32 1.266-3.657 3.704-3.657h10.406v13.618c0 2.953 1.5 4.406 4.406 4.406h13.36v21.047c0 2.343-1.243 3.633-3.68 3.633ZM31 21.132c-.914 0-1.29-.374-1.29-1.312V7.375l13.5 13.758Zm5.625 9.985h-17.79c-.843 0-1.452.633-1.452 1.43c0 .82.61 1.453 1.453 1.453h17.789a1.43 1.43 0 0 0 1.453-1.453c0-.797-.633-1.43-1.453-1.43m0 8.18h-17.79c-.843 0-1.452.656-1.452 1.476c0 .797.61 1.407 1.453 1.407h17.789c.82 0 1.453-.61 1.453-1.407c0-.82-.633-1.476-1.453-1.476"
              />
            </svg>
          </span>
          <span
            class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden font-bold ml-4 text-[18px]"
            data-te-sidenav-slim="false"
            >Report</span
          >
          <span
            class="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
            data-te-sidenav-rotate-icon-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 opacity-0"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </a>
        <ul
          class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        ></ul>
      </li>
      <!-- setting -->
      <li class="relative">
        <a
          class="flex h-12 cursor-pointer focus:shadow-md focus:bg-nav items-center truncate rounded-[5px] px-2 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref
        >
          <span class="[&>svg]:h-[32px] mr-2 [&>svg]:w-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  fill="currentColor"
                  d="m5.399 5.88l.375-.65a.75.75 0 0 0-.925.14zM3.4 9.344l-.717-.222a.75.75 0 0 0 .342.871zm-.002 5.311l-.375-.65a.75.75 0 0 0-.341.872zm2 3.464l-.55.51a.75.75 0 0 0 .925.14zm4.6 2.655h-.75c0 .35.243.653.584.731zm4.001.002l.167.732a.75.75 0 0 0 .583-.732zM18.6 18.12l-.375.65a.75.75 0 0 0 .925-.14zm1.998-3.466l.717.222a.75.75 0 0 0-.342-.871zm.002-5.311l.375.65a.75.75 0 0 0 .341-.872zm-2-3.465l.55-.509a.75.75 0 0 0-.925-.14zM14 3.225h.75a.75.75 0 0 0-.583-.731zm-4-.002l-.167-.732a.75.75 0 0 0-.583.732zm4 1.849h-.75zm5 8.66l-.375.65zm-2 3.464l-.375.65zM5 13.732l.375.65zm2-6.928l-.375.65zM4.117 9.566a8.24 8.24 0 0 1 1.831-3.177l-1.1-1.02a9.74 9.74 0 0 0-2.164 3.754zm.738 6.559a8.279 8.279 0 0 1-.74-1.69l-1.432.443a9.78 9.78 0 0 0 .873 1.997zm1.094 1.486a8.28 8.28 0 0 1-1.094-1.486l-1.299.75a9.78 9.78 0 0 0 1.292 1.755zm7.884 2.435a8.24 8.24 0 0 1-3.666-.002l-.334 1.462a9.741 9.741 0 0 0 4.334.003zm6.05-5.612a8.241 8.241 0 0 1-1.831 3.177l1.1 1.02a9.74 9.74 0 0 0 2.164-3.754zm-.738-6.559c.315.547.56 1.113.74 1.69l1.432-.443a9.778 9.778 0 0 0-.873-1.997zM18.05 6.389c.41.443.778.94 1.094 1.486l1.299-.75A9.778 9.778 0 0 0 19.15 5.37zm-7.884-2.435a8.24 8.24 0 0 1 3.666.002l.334-1.462a9.74 9.74 0 0 0-4.334-.003zm.583 1.118v-1.85h-1.5v1.85zM7.375 6.154L5.774 5.23l-.75 1.299l1.6.924zm-2.75 6.929l-1.601.924l.75 1.299l1.6-.924zm.75-3.465l-1.6-.923l-.75 1.3l1.6.923zm5.375 11.157v-1.847h-1.5v1.847zm-4.125-4.228l-1.601.924l.75 1.3l1.6-.925zm12.351.924l-1.601-.924l-.75 1.299l1.601.924zm-4.226 3.306v-1.849h-1.5v1.85zm5.476-12.083l-1.601.924l.75 1.3l1.601-.925zm.748 5.312l-1.599-.924l-.75 1.3l1.6.923zM14.75 5.072V3.225h-1.5v1.847zm3.476.158l-1.601.924l.75 1.3l1.601-.925zm-4.976-.158c0 2.117 2.292 3.44 4.125 2.381l-.75-1.299a1.25 1.25 0 0 1-1.875-1.082zm5.375 4.546c-1.833 1.059-1.833 3.705 0 4.764l.75-1.3a1.25 1.25 0 0 1 0-2.165zm-1.25 6.929c-1.833-1.059-4.125.264-4.125 2.381h1.5a1.25 1.25 0 0 1 1.875-1.082zm-6.625 2.381c0-2.117-2.292-3.44-4.125-2.381l.75 1.299a1.25 1.25 0 0 1 1.875 1.082zm-5.375-4.546c1.833-1.059 1.833-3.705 0-4.764l-.75 1.3a1.25 1.25 0 0 1 0 2.165zm3.875-9.31a1.25 1.25 0 0 1-1.875 1.082l-.75 1.3c1.833 1.058 4.125-.265 4.125-2.382z"
                />
              </g>
            </svg>
          </span>
          <span
            class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden font-bold ml-4 text-[18px]"
            data-te-sidenav-slim="false"
            >Setting
          </span>
          <span
            class="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none"
            data-te-sidenav-rotate-icon-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 opacity-0"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </a>
        <ul
          class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        ></ul>
      </li>
    </ul>
  </nav>
  <!-- Sidenav -->

  <div
    id="slim-content"
    class="!pl-[77px] p-8 h-screen bg-[#f4f4f4f4] fixed left-0 right-0"
  >
    <router-view></router-view>
  </div>
</template>

<script>
import { Sidenav, initTE } from "tw-elements";
import { onMounted } from "vue";
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
  setup() {
    onMounted(() => {
      initTE({ Sidenav });
    });

    return {};
  },
};
</script>

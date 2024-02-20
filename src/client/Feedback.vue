<template>
  <div class="w-full h-[90vh] bg-isGray p-5 relative">
    <div class="w-full mt-14">
      <h1 class="font-bold text-2xl text-white text-center">Feedback</h1>
    </div>
    <div
      class="w-[90%] mx-auto bg-isGray flex p-3 items-center justify-between"
    >
      <div>
        <h1 class="text-xl text-card">Feedback entires</h1>
      </div>
      <div>
        <button
          data-te-toggle="modal"
          data-te-target="#exampleModal"
          data-te-ripple-init
          class="px-5 py-2 text-white rounded-md border-2 border-card border-opacity-50"
        >
          Add feedback
        </button>
      </div>
    </div>
    <div class="w-1/2 mx-20 mt-12 space-y-2">
      <div
        v-for="feedback in dataitem"
        :key="feedback.id"
        class="w-full max-w-[70%] p-4 bg-card rounded-md"
      >
        <div class="flex items-center space-x-3">
          <div
            class="w-10 h-10 border-2 rounded-full bg-isGray text-white bg-opacity-80 flex items-center justify-center"
          >
            K
          </div>
          <div class="leading-none">
            <h1 class="font-semibold text-sm text-isGray">
              {{ feedback.userName }}
            </h1>
            <p>{{ feedback.userEmail }}</p>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex flex-col">
            <div v-if="feedback.rating == 1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-pending"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div v-if="feedback.rating == 2" class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-pending"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-pending"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div v-if="feedback.rating == 3" class="flex">
              <svg
                v-for="star in 3"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-pending"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div v-if="feedback.rating == 4" class="flex">
              <svg
                v-for="star in 4"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-pending"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div v-if="feedback.rating == 5" class="flex">
              <svg
                v-for="star in 5"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-pending"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              {{ feedback.comment }}
            </div>
          </div>
        </div>
      </div>

      <div
        data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div
            class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-card"
          >
            <div
              class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
            >
              <!--Close button-->
              <button
                type="button"
                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!--Modal body-->
            <div class="relative flex-auto p-4" data-te-modal-body-ref>
              <form @submit.prevent="handleFeedback" class="p-5 bg-card">
                <div class="text-4xl font-semibold">
                  <h1>Add Feedback</h1>
                </div>
                <div class="space-y-2">
                  <label class="text-lg">Rating</label>
                  <br />
                  <input
                    type="number"
                    :value="Rating"
                    @input="Rating = $event.target.value"
                    required
                    class="text-lg px-3 py-2 rounded-lg outline-none w-full"
                    placeholder="Rating limit 5 points"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-lg">Comment</label>
                  <br />
                  <input
                    type="text"
                    :value="Comment"
                    @input="Comment = $event.target.value"
                    required
                    class="text-lg px-3 py-2 rounded-lg outline-none w-full"
                    placeholder="Comment"
                  />
                </div>

                <div class="space-y-2 mt-4">
                  <button
                    type="submit"
                    class="w-full py-2 bg-active text-white rounded-lg"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, Ripple, initTE } from "tw-elements";
import useCollection from "@/composible/useCollection";
import { ref, onMounted } from "vue";
import { timestamp } from "@/firebase/config";
import getUser from "@/composible/getUser";
import { getCollectionQuery } from "@/composible/getCollection";

export default {
  setup() {
    onMounted(() => {
      getData();
      initTE({ Modal, Ripple });
    });
    const dataitem = ref([]);
    const getData = async () => {
      try {
        await getCollectionQuery(
          "feedbacks",
          [],
          (data) => {
            dataitem.value = data;
          },
          true
        );
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    const { addDocs } = useCollection("feedbacks");
    const { user } = getUser();
    const Rating = ref(null);
    const Comment = ref("");

    const handleFeedback = async () => {
      // Check if user is logged in
      if (user.value) {
        try {
          // Convert Rating to a number
          const ratingValue = parseInt(Rating.value);

          // Construct feedback object with user info
          const feedbackData = {
            rating: ratingValue,
            comment: Comment.value,
            userId: user.value.uid, // Assuming user object has uid property
            userName: user.value.displayName, // Assuming user object has displayName property
            userEmail: user.value.email, // Assuming user object has email property
            createdAt: timestamp(),
          };

          // Add feedback to Firestore
          await addDocs(feedbackData);

          // Reset fields after adding feedback
          Rating.value = null;
          Comment.value = "";
          // Optionally, close the modal or display a success message
        } catch (error) {
          console.error("Error adding feedback:", error.message);
        }
      } else {
        console.error("User is not logged in");
      }
    };
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };
    return {
      Rating,
      Comment,
      handleFeedback,
      isModalOpen,
      openModal,
      closeModal,
      dataitem,
    };
  },
};
</script>

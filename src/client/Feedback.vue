<template>
  <div class="w-full h-[90vh] bg-isGray p-5 relative">
    <div class="w-full mt-12">
      <h1 class="font-bold text-2xl text-white text-center">Feedback</h1>
    </div>
    <div
      class="w-[90%] mx-auto bg-isGray flex p-3 items-center justify-between"
    >
      <div>
        <h1 class="lg:text-xl md:text-xl xl:text-xl text-sm text-card">
          Feedback entires
        </h1>
      </div>
      <div>
        <button
          @click="openModal"
          class="px-8 py-1 lg:hidden xl:hidden md:hidden block text-white rounded-md border-2 text-sm border-card border-opacity-50"
        >
          feedback
        </button>
      </div>
    </div>
    <div class="w-full flex">
      <div
        class="lg:w-1/2 h-[500px] overflow-auto xl:w-1/2 md:w-1/2 w-full xl:mx-20 lg:mx-20 md:mx-20 mx-auto mt-12 space-y-2"
      >
        <div
          v-for="feedback in dataitem"
          :key="feedback.id"
          class="w-full lg:max-w-[70%] overflow-hidden xl:max-w-[70%] md:max-w-[70%] max-w-full p-4 bg-card rounded-md"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 border-2 rounded-full bg-isGray text-white bg-opacity-80 flex items-center justify-center"
            >
              {{ feedback.userName[2] }}
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

        <TransitionRoot appear :show="isOpen" as="template">
          <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="fixed inset-0 backdrop-blur-sm bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div
                class="flex min-h-full items-center justify-center p-4 text-center"
              >
                <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95"
                >
                  <DialogPanel
                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                  >
                    <DialogTitle
                      as="h3"
                      class="text-lg font-medium leading-6 text-gray-900"
                    >
                      Add feedback
                    </DialogTitle>
                    <div class="mt-2">
                      <form @submit.prevent="handleFeedback" class="p-5">
                        <div class="space-y-2">
                          <label class="text-lg">Rating</label>
                          <br />
                          <input
                            type="number"
                            :value="Rating"
                            @input="Rating = $event.target.value"
                            required
                            class="text-lg px-3 py-2 rounded-lg outline-none w-full border-2 border-isGray"
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
                            class="text-lg px-3 py-2 rounded-lg outline-none w-full border-2 border-isGray"
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

                    <div class="mt-4 absolute top-0 right-4">
                      <button type="button" @click="closeModal">
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
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
      <div
        class="hidden p-5 w-1/2 lg:flex xl:flex md:flex items-center justify-center"
      >
        <form
          @submit.prevent="handleFeedback"
          class="p-5 text-white border-2 border-card w-[70%] rounded-lg"
        >
          <div class="space-y-2">
            <label class="text-lg">Rating</label>
            <br />
            <input
              type="number"
              :value="Rating"
              @input="Rating = $event.target.value"
              required
              class="text-lg px-3 py-2 rounded-lg text-isGray outline-none w-full border-2 border-isGray"
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
              class="text-lg px-3 py-2 rounded-lg outline-none text-isGray w-full border-2 border-isGray"
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
    <div
      class="fixed bg-white z-40 p-5 top-20 right-4 flex items-center justify-center gap-5 rounded-md shadow"
      :class="{
        '-translate-x-[1%] transition ease-in-out duration-300': isPending,
        'translate-x-[120%] transition ease-in-out duration-300 ': !isPending,
      }"
    >
      <div class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-red-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div>
        <h1>
          Your dont have an account! <br />
          please Login or create new account before post <br />
          feedback
        </h1>
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  setup() {
    const isPending = ref(false);
    onMounted(() => {
      getData();
      initTE({ Modal, Ripple });
    });
    const isOpen = ref(false);
    function closeModal() {
      isOpen.value = false;
    }
    function openModal() {
      isOpen.value = true;
    }
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
    const notUser = ref("Your dont have an account or not logged in");
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
          closeModal();
          // Optionally, close the modal or display a success message
        } catch (error) {
          console.error("Error adding feedback:", error.message);
        }
      } else {
        setTimeout(() => {
          isPending.value = true;

          // Set isPending back to false after another 3 seconds
          setTimeout(() => {
            isPending.value = false;
          }, 1000);
        }, 2000);
        return notUser.value;
        Rating.value = null;
        Comment.value = "";
      }
    };

    return {
      Rating,
      Comment,
      handleFeedback,
      openModal,
      isOpen,
      closeModal,
      dataitem,
      user,
      isPending,
      notUser,
    };
  },
};
</script>

<!-- <form @submit.prevent="handleFeedback" class="p-5 bg-card">
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
</form> -->

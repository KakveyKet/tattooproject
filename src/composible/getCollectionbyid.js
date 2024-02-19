import { projectFirestore } from "@/firebase/config";
import { doc, getDoc } from "@firebase/firestore";
import { ref } from "vue";

const getDataById = (collectionName) => {
    const error = ref(null);
    const document = ref(null); // Initialize as null instead of []

    const fetchPostById = async (id) => {
        error.value = null;
        try {
            const postRef = doc(projectFirestore, collectionName, id);
            const result = await getDoc(postRef);

            if (result.exists()) {
                document.value = { id: result.id, ...result.data() };
                console.log("Fetched post data:", document.value);
            } else {
                error.value = `Post with ID ${id} does not exist.`;
            }
        } catch (error) {
            error.value = error.message;
        }
    };

    return { error, document, fetchPostById };
};

export default getDataById;

import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { projectStorage } from '../firebase/config';


const useStorage = () => {
    const uploadImage = async (storagePath, imageFile) => {
        const imageRef = storageRef(projectStorage, storagePath);

        try {
            // Upload the file
            await uploadBytes(imageRef, imageFile);

            // Get the download URL of the uploaded image
            const imageURL = await getDownloadURL(imageRef);

            return imageURL;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error; // Propagate the error back to the caller
        }
    };

    const removeImage = async (storagePath) => {
        const imageRef = storageRef(projectStorage, storagePath);

        try {
            // Delete the file
            await deleteObject(imageRef);

            console.log('Image deleted successfully.');
        } catch (error) {
            console.error('Error deleting image:', error);
            throw error; // Propagate the error back to the caller
        }
    };

    return { uploadImage, removeImage };
};

export default useStorage;
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../database";



export const uploadImage = async (file: File, filePath: string) => {
    try {
        const storageRef = ref(storage, filePath);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return {
            data: url,
            status: true
        }
    } catch (e) {
        console.log(e);
        return {
            data: null,
            status: false
        }
    }
}
export const deleteImage = async (filePath: string) => {
    try {
        const storageRef = ref(storage, filePath);
        await deleteObject(storageRef);
        return {
            status: true
        }
    } catch (e) {
        console.log(e);
        return {
            status: false
        }
    }
}

export const multipleUpload = async (files: File[], filePath: string) => {
    try {
        const urls = await Promise.all(files.map(async (file) => {
            return await uploadImage(file, filePath);
        }));
        return {
            data: urls,
            status: true
        }
    } catch (e) {
        console.log(e);
        return {
            data: null,
            status: false
        }
    }
}

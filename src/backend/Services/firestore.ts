import { collection, addDoc, setDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../database";



export const postData = (path: string, data: any) => {
    try {
        const docRef = addDoc(collection(db, path), data);
        return {
            status: true,
            data: docRef
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            data: null
        }
    }
}

export const updateData = async (data: any, path: string, id: string) => {
    try {
        await setDoc(doc(db, path, id), data);
        return {
            status: true
        }
    } catch (error) {
        console.log(error);
        return {
            status: false
        }
    }
}

export const deleteData = async (path: string, id: string) => {
    try {
        await setDoc(doc(db, path, id), { status: 'deleted' });
        return {
            status: true
        }
    } catch (error) {
        console.log(error);
        return {
            status: false
        }
    }
}

export const getData = async (path: string) => {
    try {
        const querySnapshot = await getDocs(collection(db, path));
        const data = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        return {
            status: true,
            data
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            data: []
        }
    }
}

export const getDatById = async (path: string, id: string) => {
    try {
        const docRef = doc(db, path, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                status: true,
                data: docSnap.data()
            }
        } else {
            return {
                status: false,
                data: null
            }
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            data: null
        }
    }
}
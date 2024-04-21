import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"

export async function getDecoration() {
    const querySnapshot = await getDocs(collection(db, "Decoration"));
    const decoration = querySnapshot.docs.map((doc) => doc.data());
    return decoration;
}

export async function getComics() {
    const querySnapshot = await getDocs(collection(db, "HQs"));
    const comics = querySnapshot.docs.map((doc) => doc.data());
    return comics;
}

export async function getBooks() {
    const querySnapshot = await getDocs(collection(db, "Books"));
    const books = querySnapshot.docs.map((doc) => doc.data());
    return books;
}
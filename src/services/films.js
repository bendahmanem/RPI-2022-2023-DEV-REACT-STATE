import { getDocs, collection } from "firebase/firestore"; 
import { getDb } from "./firebase"

const collection_name = "Films"

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(film => {
        res.push({
            id: film.id, 
            ...film.data()
        })
    })

    return res
}
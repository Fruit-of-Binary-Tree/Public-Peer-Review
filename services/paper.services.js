import {db} from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const paperCollectionRef = collection(db, "papers");
class PaperDataService{
    addPaper = (newPaper) => {
        return addDoc(paperCollectionRef, newPaper);
    }

    updatePaper = (id, updatedPaper) => {
        const paperDoc = doc(db, "papers", id);
        return updateDoc(paperDoc,updatedPaper);
    };

    deletePaper = (id) => {
        return deleteDoc(paperDoc);
    };

    getAllPapers = () => {
        return getDocs(paperCollectionRef);
    };

    getPaper = (id) => {
        const paperDoc = doc(db, "papers", id);
        return getDoc(paperDoc);
    };
}

export default new PaperDataService();

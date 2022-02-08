import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebase.config";

const colRef = collection(db, "listings");
const q = query(colRef, where("category", "==", "value"));

const createListing = (data) => {
  return addDoc(colRef, data);
};
const getAllListings = () => {
  let data = [];

  return data;
};
const useApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  onSnapshot(colRef, (snapshot) => {
    setLoading(true);
    snapshot.docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    setLoading(false);
  });

  return { data, error, loading };
};

export { createListing, getAllListings };

import { updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

const addUser = (id, data) => {
  data.timestamp = serverTimestamp();
  return setDoc(doc(db, "users", id), data);
};

const updateCurrentUserName = (name) => {
  updateProfile(auth.currentUser, {
    displayName: name,
  });
};
export { addUser, updateCurrentUserName };

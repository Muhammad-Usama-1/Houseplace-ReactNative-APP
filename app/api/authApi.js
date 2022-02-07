import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.config";

const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export { signUp, signIn };

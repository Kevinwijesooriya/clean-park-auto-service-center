import { getAuth } from "firebase/auth";
import { app } from "./firebaseConfig";

export const auth = getAuth(app);

export const getCurrentUser = () => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = currentUser.uid;
    console.log("onAuthStateChanged ~ uid:", uid);
    return currentUser;
  } else {
    return null;
  }
};

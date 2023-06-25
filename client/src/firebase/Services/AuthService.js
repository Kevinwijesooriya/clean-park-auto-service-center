import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../manageUsers";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const authSignIn = async (payload) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    const user = userCredential.user;
    console.log("AuthService.authSignIn ~ user:", user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("AuthService.authSignIn ~ errorCode:", errorCode);
    console.log("AuthService.authSignIn ~ errorMessage:", errorMessage);
    throw error;
  }
};
export const authSignUp = async (payload) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    const user = userCredential.user;
    // Add user data to Firestore collection
    const userDocRef = doc(db, "user", user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      // Add additional data from the payload
      // excluding the password field
      ...payload,
      password: "",
    });
    console.log("AuthService.authSignUp ~ user:", user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("AuthService.authSignUp ~ errorCode:", errorCode);
    console.log("AuthService.authSignUp ~ errorMessage:", errorMessage);
    throw error;
  }
};

export const authSignOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
    // Perform any additional actions after successful logout
  } catch (error) {
    console.log("Error occurred during sign out:", error);
    // Handle any error that occurred during logout
  }
};

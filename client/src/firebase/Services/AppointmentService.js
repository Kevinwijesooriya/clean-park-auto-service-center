import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const addAppointment = async (appointment) => {
  try {
    const appointmentWithTimestamp = {
      ...appointment,
      createdAt: serverTimestamp(),
    };
    const docRef = await addDoc(
      collection(db, "appointments"),
      appointmentWithTimestamp
    );
    return docRef.id;
  } catch (error) {
    console.error("Error adding appointment: ", error);
    throw error;
  }
};

const getAppointment = async (appointmentId) => {
  try {
    const docRef = doc(db, "appointments", appointmentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      throw new Error("Appointment not found.");
    }
  } catch (error) {
    console.error("Error getting appointment: ", error);
    throw error;
  }
};

const getMyAppointments = async (uid) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "appointments"), where("userId", "==", uid))
    );
    const appointments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(
      "🚀 ~ file: AppointmentService.js:59 ~ appointments ~ appointments:",
      appointments
    );
    return appointments;
  } catch (error) {
    console.error("Error getting appointments: ", error);
    throw error;
  }
};
const getAllAppointments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "appointments"));
    const appointments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return appointments;
  } catch (error) {
    console.error("Error getting appointments: ", error);
    throw error;
  }
};

const updateAppointment = async (appointmentId, newData) => {
  try {
    const appointmentRef = doc(db, "appointments", appointmentId);
    await updateDoc(appointmentRef, newData);
  } catch (error) {
    console.error("Error updating appointment: ", error);
    throw error;
  }
};

const deleteAppointment = async (appointmentId) => {
  try {
    const appointmentRef = doc(db, "appointments", appointmentId);
    await deleteDoc(appointmentRef);
  } catch (error) {
    console.error("Error deleting appointment: ", error);
    throw error;
  }
};

const updateAppointmentStatus = async (appointmentId, newStatus) => {
  try {
    const appointmentRef = doc(db, "appointments", appointmentId);
    await updateDoc(appointmentRef, { status: newStatus });
  } catch (error) {
    console.error("Error updating appointment status: ", error);
    throw error;
  }
};

export {
  addAppointment,
  getMyAppointments,
  getAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
  updateAppointmentStatus,
};

/** @format */

import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	doc,
	addDoc,
	setDoc,
	updateDoc,
	arrayUnion,
	arrayRemove
} from "firebase/firestore";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDEdy6-35heD4BFgEOOhCiot2MH-lihAn4",
	authDomain: "ontrack-89b63.firebaseapp.com",
	projectId: "ontrack-89b63",
	storageBucket: "ontrack-89b63.appspot.com",
	messagingSenderId: "958307691664",
	appId: "1:958307691664:web:4ce8d51f919e708c203c15",
	measurementId: "G-EQEGXFZYZW",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const logInWithEmailAndPassword = async (email, password) => {
	try {
		console.log("signed in", email);
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

export const registerWithEmailAndPassword = async (firstName, surName, email, school, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;

		await setDoc(doc(db, "users", user.uid), {
			uid: user.uid,
			email,
			firstName,
			surName,
			school
		});
	} catch (err) {
		console.error(err.mesage);
	}
};

export const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent!");
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

export const logout = () => {
	signOut(auth);
	console.log("signed out");
};

export const getDocument = async (collection, documentID) => {
	const docRef = doc(db, collection, documentID);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		// console.log(docSnap.data());
		return docSnap.data();
	} else {
		console.log("No such document!");
	}
};

export const addSubCollection = async (uid, courseName) => {
  const docRef = doc(db, `users/${uid}/courses`, courseName);
	const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(doc(db, `users/${uid}/courses`, courseName), {
      name: courseName,
      completeArray: []
    });
  } else {
    console.log("course already added")
  }
  

  console.log("added subject subcollection")

};


export const getCoursesList = async (uid) => {
  const querySnapshot = await getDocs(collection(db, `users/${uid}/courses`));
  const coursesObj = {}
  querySnapshot.forEach((doc) => {
    coursesObj[doc.id] = doc.data();
  });

  return coursesObj;

};


export const addToCompleteArray = async (uid, courseName, spec) => {
	const docRef = doc(db, `users/${uid}/courses`, courseName);
	const docSnap = await getDoc(docRef);

	const info  = docSnap.data()
	const doesInclude = info.completeArray !== undefined? info.completeArray.includes(spec) : false;

	try {
		await updateDoc(docRef, {
			completeArray: doesInclude? arrayRemove(spec) : arrayUnion(spec)
			});

		console.log(`mutated ${courseName} complete array`)
		
	} catch (error) {
		console.error(error)
		
	}
  };


 export const getCompleteArray = async(uid, courseName) => {
	const docRef = doc(db, `users/${uid}/courses`, courseName);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		console.log("No such document!");
	}
  }

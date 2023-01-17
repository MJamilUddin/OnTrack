/** @format */

import { getDocument, auth } from "../services/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import SpecView from "../components/specView";
import HomePage from "./homePage";

const Origin = (props) => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const [userData, setUserData] = useState(null);

	const fetchUser = async () => {
		try {
			const doc = await getDocument("users", user.uid);
			// console.log(doc);
			setUserData(doc);
		} catch (err) {
			console.error(err, "An error occured while fetching user data");
		}
	};

	useEffect(() => {
		if (loading) return;
		if (!user) {
			return navigate("/login");
		}  else {
			return navigate("/home");
		}
		//  fetchUser();
	}, [user, navigate]);

};

export default Origin;

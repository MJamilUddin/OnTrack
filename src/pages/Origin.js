/** @format */

import { getDocument, auth } from "../services/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import SpecView from "../components/specView";
import HomePage from "./homePage";


const Origin = () => {
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
		if (!user) return navigate("/login");
		//  fetchUser();
	}, [user, navigate]);

	return (
		<>
		<div
			style={{
				margin: 50,
				borderWidth: 2,
				display: "flex",
				flexDirection: "row",
			}}>
            <HomePage />
			
		</div>

		</>
	);
};

export default Origin;

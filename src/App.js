/** @format */

import logo from "./logo.svg";
import {
	useNavigate,
	HashRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import { auth, getDocument } from "./services/firebase";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Origin from "./pages/Origin";
import Courses from "./pages/courses";
import NavBar from "./components/navBar";
import MiniDrawer from "./components/navBar2";
import TopBar from "./components/topBar";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";
import Redirect from "./pages/loginRedirect";
import HomePage from "./pages/homePage";
import SpecView from "./components/specView";
import SpecSelection from "./pages/specSelection";
import AboutUs from "./pages/aboutUs";
import FAQ from "./pages/faq";

export const UserContext = React.createContext();

function App() {
	const [user, loading, error] = useAuthState(auth);
	let height = window.innerHeight;
	let width = window.innerWidth;
	// backgroundImage: `url("/images/background.jpg")`

	const [userData, setUserData] = useState(null)

	const getUserData = async () => {
		const data = await getDocument('users', user.uid);
		setUserData(data)
	};

	useEffect(() => {
		getUserData();
	}, [user])

	return (
		<div style={{display: "flex", width: width, height: height, backgroundColor: "#F9F9FF", fontFamily: "Poppins" }}>
			<Router>
				{!user ? (
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/aboutUs" element={<AboutUs />} />
						<Route path="/faq" element={<FAQ />} />
					</Routes>
				) : (
					<div
						style={{
							margin: 0,
							borderWidth: 2,
							display: "flex",
							flexDirection: "row",
						}}>
						{userData !== null?
							<UserContext.Provider value={userData}>
							<MiniDrawer />
							<div style={{display: "flex", flexDirection: 'column'}}>
							<TopBar />
							<Routes>
								<Route path="/" element={<Origin />} />
								<Route path="/login" element={<Redirect />} />
								<Route path="/register" element={<Redirect />} />
								<Route path="/home" element={<HomePage />} />
								<Route path="/spec" element={<SpecView />} />
								<Route path="/courses" element={<Courses />} />
								<Route path="/selection" element={<SpecSelection />} />
							</Routes>

							</div>
							
						</UserContext.Provider>
						:
							<div>Loading</div>
						}
						
					</div>
				)}
			</Router>
		</div>
	);
}

export default App;

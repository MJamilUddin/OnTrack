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
import TopBarMain from "./components/topBarMain";
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
	const [width, setWindowWidth] = useState(0);
	const [height, setWindowHeight] = useState(0);

	useEffect(() => { 

		updateDimensions();

		window.addEventListener('resize', updateDimensions);
		return () => 
		window.removeEventListener('resize',updateDimensions);
		}, []);

		const updateDimensions = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		setWindowWidth(width);
		setWindowHeight(height);
		}
	

	const [userData, setUserData] = useState(null)

	const getUserData = async () => {
		const data = await getDocument('users', user.uid);
		setUserData(data)
	};

	useEffect(() => {
		getUserData();
	}, [user])

	return (
		<div style={{display: "flex", width: width, height: height, backgroundColor: "#F8F6FF", fontFamily: "Poppins" }}>
			<Router>
				{!user ? (
					<div style={{display: 'flex', flexDirection: 'column', width: width, height: height}}>
					<Routes>
						<Route path="/" element={<Main width={width} height={height} />} />
						<Route path="/login" element={<Login width={width} height={height} />} />
						<Route path="/register" element={<Register width={width} height={height} />} />
						<Route path="/aboutUs" element={<AboutUs  width={width} height={height} />} />
						<Route path="/faq" element={<FAQ  width={width} height={height} />} />
					</Routes>
					</div>
				) : (
					<div
						style={{
							margin: 0,
							borderWidth: 2,
							display: "flex",
							flexDirection: "row",
							width: width, 
							height: height
						}}>
						{userData !== null?
							<UserContext.Provider value={userData}>
							<MiniDrawer />
							<div style={{display: "flex", flexDirection: 'column'}}>
							<TopBar width={width} height={height} />
							<Routes>
								<Route path="/" element={<Origin  />} />
								<Route path="/login" element={<Redirect />} />
								<Route path="/register" element={<Redirect />} />
								<Route path="/home" element={<HomePage width={width} height={height} />} />
								<Route path="/spec" element={<SpecView width={width} height={height} />} />
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

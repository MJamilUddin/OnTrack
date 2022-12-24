/** @format */

import { Outlet, Link, useNavigate } from "react-router-dom";
import { logout } from "../services/firebase";

let height = window.innerHeight;
let width = window.innerWidth;

const NavBar = () => {
	let navigate = useNavigate();

	return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: height,
					width: 300,
					backgroundColor: "white",
					// border: "1px solid black",
					borderRadius: 20,
					alignItems: "center",
				}}>
				<img src="/images/logo.png" style={{ width: 150, height: 24, marginTop: 40 }} />

				<nav>
					<Link to="/home">
						<div
							style={{
								display: "flex",
								width: 245,
								height: 70,
								borderRadius: 18,
								backgroundColor: "#7A6FF6",
								marginTop: 30,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<text style={{ color: "white" }}>Dashboard</text>
						</div>
					</Link>

					<Link to="/courses">
						<div
							style={{
								display: "flex",
								marginTop: 10,
								alignItems: "center",
								justifyContent: "center",
							}}>
							<text style={{ color: "black" }}>Courses</text>
						</div>
					</Link>
					
					<Link to="/login">
					<button onClick={() => logout()} >Logout</button>
					</Link>
				</nav>

				
				{/* <Outlet /> */}
			</div>
	);
};

export default NavBar;

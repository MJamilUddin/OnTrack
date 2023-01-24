/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	registerWithEmailAndPassword,
	logInWithEmailAndPassword,
} from "../services/firebase";

const Login = (props) => {
	let height = props.height;
	let width = props.width;

	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "email") {
			setEmail(value);
		}
		if (id === "password") {
			setPassword(value);
		}
	};

	const handleLogin = async () => {
		console.log(email, password);
		await logInWithEmailAndPassword(email, password);
	};

	return (
		<div style={{ display: "flex", width: width, height: height }}>
			<div
				style={{
					display: "flex",
					flex: 8,
					backgroundColor: "white",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						boxShadow: "0.5px 0.5px 14px #DEDEDE",
						margin: "4em",
						padding: "1em",
						maxWidth: 600,
						minWidth: 300,
						width: "60%",
						minHeight: 400,
						height: "70%",
						borderRadius: 20,
						padding: 60,
						justifyContent: "center",
						alignContent: "center",
					}}>
					<div
						style={{
							display: "flex",
						}}>
						<img src="/images/logo.png" />
					</div>

					<div style={{ marginTop: 50 }}>
						<text
							style={{
								marginTop: 20,
								color: "black",
								fontFamily: "inherit",
								fontSize: 21,
								fontWeight: "900",
							}}>
							Welcome back !
						</text>
					</div>

					<div style={{ marginTop: 80 }}>
						<div>
							<label style={{ fontSize: 20 }}>Email </label>
							<br />
							<input
								type="email"
								id="email"
								className="form__input"
								value={email}
								onChange={(e) => handleInputChange(e)}
								placeholder=""
								style={{
									marginTop: 10,
									width: '95%',
									height: 50,
									borderRadius: 10,
									backgroundColor: "#F2F2F2",
									border: "none",
									paddingLeft: "20px",
									fontSize: 16,
								}}
							/>
						</div>
						<div style={{ marginTop: 30 }}>
							<label style={{ fontSize: 20 }} for="password">
								Password{" "}
							</label>
							<br />
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => handleInputChange(e)}
								placeholder=""
								style={{
									marginTop: 10,
									width: '95%',
									height: 50,
									borderRadius: 10,
									backgroundColor: "#F2F2F2",
									border: "none",
									paddingLeft: "20px",
									fontSize: 16,
								}}
							/>
						</div>
						<div
							class="footer"
							style={{
								display: "flex",
								flexDirection: "column",
								alignContent: "center",
							}}>
							<button
								onClick={() => handleLogin()}
								type="submit"
								style={{
									height: 51,
									width: '95%',
									borderRadius: 30,
									padding: 16,
									marginTop: 50,
									backgroundColor: "#7E6FEE",
									border: "none",
									color: "white",
									fontSize: 18,
								}}>
								Login
							</button>

							<div style={{ display: "flex", justifyContent: "center" }}>
								<text style={{ color: "#C0C0C0" }}>
									Don’t have an account?
									<button
										onClick={() => navigate("/register")}
										style={{
											backgroundColor: "white",
											border: "none",
											marginTop: 20,
											fontFamily: "inherit",
											fontSize: 16,
											color: "#7E6FEE",
										}}>
										Sign up
									</button>
								</text>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					width: '70%',
					height: '80%',
					display: "flex",
					flex: 4,
					backgroundColor: "#F8F6FF",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<img src="/images/login1.png" style={{width: '70%', height: '70%'}}/>
			</div>
		</div>
	);
};

export default Login;

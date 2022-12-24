/** @format */

import { useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword, logInWithEmailAndPassword } from "../services/firebase";

const Register = () => {
	let height = window.innerHeight;
	let width = window.innerWidth;
	
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

	const handleRegister = async() => {
		console.log(email, password);
        await registerWithEmailAndPassword(email, password);
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
						boxShadow: "2px 1px 9px grey",
						margin: "4em",
						padding: "1em",
						width: 550,
						height: 700,
						borderRadius: 20,
						padding: 60,
						justifyContent: "center",
					}}>
					<img src="/images/logo.png" style={{ marginTop: 40 }} />

					<div style={{ marginTop: 50 }}>
						<text
							style={{
								marginTop: 20,
								color: "black",
								fontFamily: "inherit",
								fontSize: 21,
								fontWeight: "900",
							}}>
							Welcome back, Farzanah!
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
									width: 520,
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
									width: 520,
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
								onClick={() => handleRegister()}
								type="submit"
								style={{
									height: 51,
									width: 540,
									borderRadius: 30,
									padding: 16,
									marginTop: 50,
									backgroundColor: "#7E6FEE",
									border: "none",
									color: "white",
									fontSize: 18,
								}}>
								Register
							</button>

							<div style={{display: 'flex', justifyContent: 'center'}}>
								<text style={{color: '#C0C0C0'}}>
									Have an account?
									<button
										onClick={() => navigate('/login')}
										style={{
											backgroundColor: "white",
											border: "none",
											marginTop: 20,
											fontFamily: "inherit",
											fontSize: 16,
											color: '#7E6FEE'
										}}>
										Sign in
									</button>
								</text>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flex: 4,
					backgroundColor: "#F8F6FF",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<img src="/images/login1.png" />
			</div>
		</div>
        
	);
};

export default Register;
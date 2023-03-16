/** @format */

import { useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import {
	registerWithEmailAndPassword,
	logInWithEmailAndPassword,
} from "../services/firebase";

const Register = (props) => {
	let height = props.height;
	let width = props.width;

	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstname] = useState("");
	const [surname, setSurname] = useState("");
	const [school, setSchool] = useState("");

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "email") {
			setEmail(value);
		}
		if (id === "password") {
			setPassword(value);
		}
		if (id === "firstname") {
			setFirstname(value);
		}
		if (id === "surname") {
			setSurname(value);
		}
		if (id === "school") {
			setSchool(value);
		}
	};

	const handleRegister = async () => {
		console.log(email, password);
		await registerWithEmailAndPassword(firstName, surname, email, school, password,);
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
							marginTop: 20,
						}}>
						<img src="/images/logo.png" />
					</div>

					<div style={{ marginTop: 20 }}>
						<text
							style={{
								marginTop: 20,
								color: "black",
								fontFamily: "inherit",
								fontSize: 21,
								fontWeight: "900",
							}}>
							Create an account!
						</text>
					</div>

					<div style={{ marginTop: 50 }}>
						<div style={{ display: "flex", flexDirection: "row", width: width }}>
							<div style={{ marginRight: 30 }}>
								<label style={{ fontSize: 20 }}>Firstname </label>
								<br />
								<input
									type="firstname"
									id="firstname"
									className="form__input"
									value={firstName}
									onChange={(e) => handleInputChange(e)}
									placeholder=""
									style={{
										marginTop: 10,
										width: 230,
										height: 50,
										borderRadius: 10,
										backgroundColor: "#F2F2F2",
										border: "none",
										paddingLeft: "20px",
										fontSize: 16,
									}}
								/>
							</div>
							<div>
								<label style={{ fontSize: 20 }}>Surname </label>
								<br />
								<input
									type="surname"
									id="surname"
									className="form__input"
									value={surname}
									onChange={(e) => handleInputChange(e)}
									placeholder=""
									style={{
										marginTop: 10,
										width: 230,
										height: 50,
										borderRadius: 10,
										backgroundColor: "#F2F2F2",
										border: "none",
										paddingLeft: "20px",
										fontSize: 16,
									}}
								/>
							</div>
						</div>
						<div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
							<div style={{ marginRight: 30 }}>
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
										width: 230,
										height: 50,
										borderRadius: 10,
										backgroundColor: "#F2F2F2",
										border: "none",
										paddingLeft: "20px",
										fontSize: 16,
									}}
								/>
							</div>
							<div>
								<label style={{ fontSize: 20 }}>School </label>
								<br />
								<input
									type="input"
									id="school"
									className="form__input"
									value={school}
									onChange={(e) => handleInputChange(e)}
									placeholder=""
									style={{
										marginTop: 10,
										width: 230,
										height: 50,
										borderRadius: 10,
										backgroundColor: "#F2F2F2",
										border: "none",
										paddingLeft: "20px",
										fontSize: 16,
									}}
								/>
							</div>
						</div>

						<div style={{ marginTop: 20 }}>
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

							<div style={{ display: "flex", justifyContent: "center" }}>
								<text style={{ color: "#C0C0C0" }}>
									Have an account?
									<button
										onClick={() => navigate("/login")}
										style={{
											backgroundColor: "white",
											border: "none",
											marginTop: 20,
											fontFamily: "inherit",
											fontSize: 16,
											color: "#7E6FEE",
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

export default Register;

/** @format */

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import TopBarMain from "../components/topBarMain";

const Main = (props) => {
	const navigate = useNavigate();

	let height = props.height;
	let width = props.width;

	const Button = (props) => {
		const [hover, setHover] = useState(false);
		return (
			<button
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				style={{
					width: props.width,
					height: 51,
					borderRadius: 30,
					backgroundColor: hover ? "purple" : props.background,
					border: "3px solid #7F6FEB",
					color: props.color,
					fontSize: 17,
					marginRight: 30,
				}}
				onClick={() => {
					navigate(props.navigate);
				}}>
				{props.text}
			</button>
		);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: 2200,
				backgroundColor: "#F8F6FF",
				//minHeight: "100vh",
				width: width,
				minWidth: 200,
				alignItems: "center",
			}}>
			<TopBarMain width={width} height={height} />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 50,
					width: "90%",
					justifyContent: "center",
				}}>
				<div
					style={{
						width: 750,
						height: 450,
						marginRight: 20,
					}}>
					<div style={{ marginTop: 50 }} />
					<text
						style={{
							fontFamily: "inherit",
							fontSize: 57,
							fontWeight: "900",
							lineHeight: 1.1,
							color: "#242220",
						}}>
						{" "}
						Making studying <br /> easier {"&"} hassle free
					</text>
					<div style={{ marginTop: 40 }} />
					<text
						style={{
							marginTop: 20,
							color: "#8F8F8F",
							fontFamily: "inherit",
							fontSize: 20,
							fontWeight: "900",
						}}>
						We provide you with correct information from the specification, so
						you don’t have to stress.
					</text>
					<div style={{ marginTop: 40 }} />
					<Button
						text="Create an account"
						navigate="/register"
						background="#7F6FEB"
						color="white"
						width={190}
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginLeft: 50
					}}>
					<img
						src="/images/main1.png"
						style={{ minWidth: 400, width: "100%", height: "80%" }}
					/>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					width: "90%",
					marginTop: 100,
					marginLeft: 50,
				}}>
				<img src="/images/main2.png" />
				<div
					style={{
						width: 700,
						height: 450,
						marginLeft: 40,
					}}>
					<div style={{ marginTop: 180 }} />
					<text
						style={{
							marginTop: 20,
							color: "#8F8F8F",
							fontFamily: "inherit",
							fontSize: 16,
							fontWeight: "900",
						}}>
						OnTrack is built on the belief that studying should be easy and
						accessible for all students. Our platform offers a wide range of
						resources and materials for various subjects and exam boards,
						empowering learners with simplicity and accesibilty.
					</text>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 60,
					width: "90%",
					justifyContent: "center",
				}}>
				<div
					style={{
						width: 700,
						height: 450,
						marginRight: 20,
					}}>
					<div style={{ marginTop: 180, marginRight: 30 }} />
					<text
						style={{
							marginTop: 20,
							color: "#8F8F8F",
							fontFamily: "inherit",
							fontSize: 17,
							fontWeight: "900",
						}}>
						We have organised our educational resources according to the exam
						board specification to make it easy for students to find the
						specific information they need.
						<br />
						<br />
						By searching for their subject and exam board, students can quickly
						access relevant resources and save time in their studies. This
						approach helps students stay focused and achieve better academic
						outcomes.
					</text>
				</div>
				<img src="/images/main3.png" />
			</div>
			<div style={{ marginTop: 180 }} />
		</div>
	);
};

export default Main;

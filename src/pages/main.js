/** @format */

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import TopBarMain from "../components/topBarMain";

const Main = () => {
	const navigate = useNavigate();

	let height = window.innerHeight;
	let width = window.innerWidth;

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
				backgroundColor: "#F8F6FF",
				height: "200%",
				minHeight: "100vh",
				width: width,
				minWidth: "100vh",
				alignItems: "center",
				marginTop: -10
			}}>
			 <TopBarMain />

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 150,
				}}>
				<div
					style={{
						width: 750,
						height: 450,
						marginRight: 20,
					}}>
					<div style={{ marginTop: 80 }} />
					<text
						style={{
							fontFamily: "inherit",
							fontSize: 65,
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
							fontSize: 25,
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
				<img src="/images/main1.png" />
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 200,
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
							fontSize: 17,
							fontWeight: "900",
						}}>
						OnTrack is built on the belief that studying should be easy and
						accessible for all students. Our platform offers a wide range of
						resources and materials for various subjects and exam boards, making
						it easy for anyone to find what they need. Our goal is to empower
						and support all learners through education.
					</text>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 60,
				}}>
				<div
					style={{
						width: 750,
						height: 450,
						marginRight: 20,
					}}>
					<div style={{ marginTop: 180 }} />
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
						specific information they need. By searching for their subject and
						exam board, students can quickly access relevant resources and save
						time in their studies. This approach helps students stay focused and
						achieve better academic outcomes.
					</text>
				</div>
				<img src="/images/main3.png" />
			</div>
		</div>
	);
};

export default Main;

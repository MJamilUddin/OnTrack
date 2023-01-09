/** @format */

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

let height = window.innerHeight;
let width = window.innerWidth;

const TopBarMain = () => {
	const navigate = useNavigate();

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
					backgroundColor: hover ? "#F2F2F2" : props.background,
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

	const UnderlinedButton = (props) => {
		const [hover, setHover] = useState(false);
		return (
			<button
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				style={{
					width: props.width,
					height: 41,
					borderRadius: 13,
					backgroundColor: hover ? "#F2F2F2" : "transparent",
					color:  "black",
					border: "none",
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
				flexDirection: "row",
				width: width - 600,
				height: 150,
				flex: 1 / 12,
				marginTop: 50,
				justifyContent: "space-between",
			}}>
			<img src="/images/logo.png" style={{ width: 222, height: 33 }} />

			<div>
				<UnderlinedButton
					text="Home"
					navigate="/"
					background="#7F6FEB"
					color="white"
					width={100}
				/>
				<UnderlinedButton
					text="About Us"
					navigate="/aboutUs"
					background="#7F6FEB"
					color="white"
					width={100}
				/>
				<UnderlinedButton
					text="FAQ"
					navigate="/faq"
					background="#7F6FEB"
					color="white"
					width={100}
				/>
				<Button
					text="Login"
					navigate="/login"
					background="white"
					color="#7F6FEB"
					width={170}
				/>
			</div>
		</div>
	);
};

export default TopBarMain;

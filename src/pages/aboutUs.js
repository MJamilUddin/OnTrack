/** @format */

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import TopBarMain from "../components/topBarMain";

const AboutUs = (props) => {
	let height = props.height;
	let width = props.width;

	const WhiteBox = (props) => {
		return (
			<div
				style={{
					display: "flex",
					width: 540,
					height: "auto",
					borderRadius: 10,
					backgroundColor: "white",
					color: "#23398C",
					border: "none",
					fontSize: 15,
					marginRight: 30,
					marginTop: 10,
					padding: 20,
				}}>
				<text
					style={{
						color: "#23398C",
						fontFamily: "Inter",
						fontSize: 18,
						fontWeight: "400",
					}}>
					{props.text}
				</text>
			</div>
		);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#F8F6FF",
				height: 2200,
				// minHeight: "100vh",
				width: width,
				minWidth: "100vh",
				alignItems: "center",
				marginTop: -10,
			}}>

			<TopBarMain width={width} height={height} />

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 80,
					marginLeft: 0,
					justifyContent: "center",
					width: '85%'
				}}>
				<div
					style={{
						width: 650,
						height: 250,
						marginLeft: 0,
					}}>
					<text
						style={{
							marginTop: 20,
							color: "#8F8F8F",
							fontFamily: "inherit",
							fontSize: 24,
							fontWeight: "900",
						}}>
						About us
					</text>
					<div style={{ marginTop: 60 }} />
					<text
						style={{
							marginTop: 20,
							color: "black",
							fontFamily: "inherit",
							fontSize: 36,
							fontWeight: "900",
						}}>
						Helping students achieve the best results.
					</text>
				</div>

				<div
					style={{
						width: 580,
						height: 250,
						marginLeft: 0,
					}}>
					<div style={{ marginTop: 80 }} />
					<text
						style={{
							marginTop: 20,
							color: "#8F8F8F",
							fontFamily: "inherit",
							fontSize: 17,
							fontWeight: "900",
						}}>
						We understand that exam board specifications can be complex and
						confusing, especially for students who are preparing for important
						exams. That's why we've created this platform – to help students
						make sense of these specifications and succeed in their studies.
					</text>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					width: '70%',
					height: 300,
					marginTop: 100,
					marginLeft: -40,
					alignItems: "center",
					flexDirection: "column",
				}}>
				<text
					style={{
						marginTop: 20,
						color: "#8F8F8F",
						fontFamily: "inherit",
						fontSize: 17,
						fontWeight: "900",
					}}>
					What we offer
				</text>
				<div style={{ marginTop: 20 }} />
				<text
					style={{
						marginTop: 20,
						color: "black",
						fontFamily: "inherit",
						fontSize: 36,
						fontWeight: "900",
						textAlign: "center",
					}}>
					Unlock your full potential with a wealth of educational resources at
					your fingertips!
				</text>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 10,
					marginBottom: 50
				}}>
				<img src="/images/aboutUs.png" style={{ height: 400, width: 450 }} />
				<div
					style={{
						marginLeft: 60,
						marginTop: 10,
					}}>
					<WhiteBox text={"Clear and concise summaries of the key points"} />
					<WhiteBox
						text={
							"A selection of high-quality external resources that can supplement and enhance students learning experiences."
						}
					/>
					<WhiteBox
						text={
							"Practice questions to help students test their knowledge and identify areas where they may need additional support."
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;

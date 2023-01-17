/** @format */

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import TopBarMain from "../components/topBarMain";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const FAQ = (props) => {
	let height = props.height;
	let width = props.width;

	const textObj = {
		question1: "What is the specification for this educational platform?",
		answer1: "The specification for this educational platform outlines the features, requirements, and design of the platform. It helps to ensure that the platform is effective, reliable, and user-friendly.",
		question2: "What types of features can I expect to find on this educational platform?",
		answer2: "- A course catalog with a variety of educational courses and materials.  \n - A learning management system (LMS) to track progress and access course materials. \n - Interactive tools such as quizzes, forums, and virtual classrooms",
		question3: "Is this educational platform available to everyone?",
		answer3: "Access to this educational platform may be limited to certain individuals or groups, such as students, teachers, or educational institutions. However, some resources and materials may be available to the general public.",
		question4: "How do I access this educational platform?",
		answer4: "To access this educational platform, you will typically need to create an account and log in with a username and password. You may also need to have certain technical requirements, such as a compatible web browser and internet connection.",
		question5: "Is there technical support available for this educational platform?",
		answer5: "Yes, technical support is typically available for this educational platform. You can usually find help resources, such as a user manual or FAQ section, on the platform itself. If you have a specific issue or question, you can also contact the technical support team for assistance.",
	}

	const FaqBlock = (props) => {
		const [isOpen, setIsOpen] = useState(false);
		const [hover, setHover] = useState(false);

		return (
			<>
				<div
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => setIsOpen(!isOpen)}
					style={{
						marginTop: 20,
						display: "flex",
						width: 960,
						height: 70,
						justifyContent: "space-between",
						alignItems: "center",
						paddingLeft: 40,
						paddingRight: 40,
						backgroundColor: hover? "#F2F2F2" : "white",
					}}>
					<text
						style={{
							color: "black",
							fontFamily: "inter",
							fontSize: 18,
							fontWeight: "600",
						}}>
						{props.question}
					</text>

					{isOpen ? (
						<RemoveCircleOutlineIcon
							style={{ color: "#7A6FF6", width: 30, height: 30 }}
						/>
					) : (
						<AddCircleOutlineIcon
							style={{ color: "#7A6FF6", width: 30, height: 30 }}
						/>
					)}
				</div>

				{isOpen ? (
					<div
						style={{
							display: "flex",
							width: 960,
							height: 72,
							justifyContent: "flex-start",
							paddingLeft: 40,
							paddingRight: 40,
							paddingBottom: 10,
							backgroundColor: "white",
						}}>
						<text
							style={{
								color: "black",
								fontFamily: "inter",
								fontSize: 16,
								fontWeight: "400",
								marginTop: 10
							}}>
							{props.answer}
						</text>
					</div>
				) : null}
			</>
		);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#F8F6FF",
				height: 2000,
				//minHeight: "100vh",
				width: width,
				minWidth: "100vh",
				alignItems: "center",
				marginTop: -10,
			}}>

			<TopBarMain width={width} height={height} />

			<div
				style={{
					display: "flex",
					width: 1200,
					height: "auto",
					marginTop: 50,
					marginBottom: 150,
					marginLeft: -40,
					alignItems: "center",
					flexDirection: "column",
				}}>
				<text
					style={{
						marginTop: 20,
						color: "black",
						fontFamily: "inter",
						fontSize: 19,
						fontWeight: "700",
					}}>
					What do you want to know?
				</text>
				<div style={{ marginTop: 20 }} />
				<text
					style={{
						marginTop: 20,
						color: "black",
						fontFamily: "inter",
						fontSize: 35,
						fontWeight: "600",
						textAlign: "center",
						width: 1000,
					}}>
					Some of the most frequently asked questions?
				</text>
				<div style={{ marginTop: 20 }} />
				<text
					style={{
						marginTop: 20,
						color: "black",
						fontFamily: "inter",
						fontSize: 16,
						fontWeight: "500",
					}}>
					Have any questions? We’re here to help.
				</text>

				<div style={{ marginTop: 40 }} />

				<FaqBlock question={textObj.question1} answer={textObj.answer1} />
				<FaqBlock question={textObj.question2} answer={textObj.answer2} />
				<FaqBlock question={textObj.question3} answer={textObj.answer3} />
				<FaqBlock question={textObj.question4} answer={textObj.answer4} />
				<FaqBlock question={textObj.question5} answer={textObj.answer5} />
			</div>
		</div>
	);
};

export default FAQ;

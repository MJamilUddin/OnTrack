/** @format */

import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addSubCollection } from "../services/firebase";
import { UserContext } from "../App";

const data = {
	maths: [
		{ name: "GCSE Maths AQA", code: "GCSEMathsAQA" },
		{ name: "ALevel Maths AQA", code: "AlevelMathsAQA" },
	],
	physics: [
		{ name: "GCSE Physics AQA", code: "GCSEPhysicsAQA" },
		{ name: "ALevel Physics AQA", code: "ALevelPhysicsAQA" },
	],
};

function SpecSelection() {
	const userData = useContext(UserContext);
	const { state } = useLocation();
	const { name } = state;
	const mapArray = data[name];

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginTop: 0,
					marginLeft: 50,
				}}>
				<h2 style={{marginLeft: 30}}>Specifications</h2>	
				{mapArray.map((course) => {
					return (
						<div
							style={{
								width: 1280,
								backgroundColor: "white",
								display: "flex",
								margin: 10,
								height: "auto",
								borderRadius: 10,
								flexDirection: "row",
								padding: 30,
								alignItems: 'center',
								justifyContent: "space-between",
							}}>
							<text style={{ fontSize: 22, color: "black", fontFamily: 'inter'  }}>
								{course.name}
							</text>
							<button
								style={{
									width: 90,
									height: 40,
									borderRadius: 10,
									backgroundColor: "#FABB18",
									marginRight: 20,
								}}
								onClick={() => {
									addSubCollection(userData.uid, course.code);
								}}>
								<text style={{ fontWeight: 900, fontSize: 16 }}>Add</text>
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default SpecSelection;

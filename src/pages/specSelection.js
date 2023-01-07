/** @format */

import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addSubCollection } from "../services/firebase";
import { UserContext } from "../App";

const data = {
	maths: [{name: "GCSE Maths AQA", code: "GCSEMathsAQA"}, {name: "ALevel Maths AQA", code: "AlevelMathsAQA"}],
	physics: [{name: "GCSE Physics AQA", code: "GCSEPhysicsAQA"}, {name: "ALevel Physics AQA", code: "ALevelPhysicsAQA"}],
};

function SpecSelection() {
	const userData = useContext(UserContext);
	const { state } = useLocation();
	const { name } = state;
	const mapArray = data[name];

	return (
		<div
			style={{
				display: "flex",
                flexDirection: "column",
				backgroundColor: 'white',
				borderRadius: 34,
				marginTop: 60,
				marginLeft: 100,
				width: 1300,
				height: 400
			}}>
			<text style={{fontSize: 28, marginLeft: 30, marginTop: 40, marginBottom: 30}}>Specifications</text>
			{mapArray.map((course) => {
				return (
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: 'space-between',
							alignItems: 'center',
							width: 600,
							height: 60,
							border: "1px solid #E5E4E1",
							borderRadius: 14,
							backgroundColor: 'white',
							margin: 8,
							marginLeft: 22
						}}>
						<text style={{fontWeight: 900, marginLeft: 20, }}>{course.name}</text>
						<button style={{ width: 90, height: 40, borderRadius: 10, backgroundColor: '#FABB18', marginRight: 20,  }}
                            onClick={() => {addSubCollection(userData.uid, course.code)}}
                        > 
						<text style={{fontWeight: 900, fontSize: 16}}>Add</text>
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default SpecSelection;

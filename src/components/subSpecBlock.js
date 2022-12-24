/** @format */

import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import StudentTracker from "../pages/studentTracker";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const SubBlock = (props) => {
	const courseObj = props.course;
	const checkedArray = props.completeArray;
	const sub = props.num;
	const key = props.keyNum;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div
				style={{
					border: "1px solid black",
					width: 700,
					backgroundColor: isOpen ? "#FABB18" : "green",
					display: "flex",
					margin: 20,
					height: "auto",
					borderRadius: 10,
					flexDirection: "row",
					padding: 25,
					justifyContent: "space-between",
				}}
				onClick={() => setIsOpen(!isOpen)}>
				<text style={{ fontSize: 22, color: isOpen ? "black" : "white" }}>
					{sub} {courseObj[key].subs[sub]["sub-topic"]}
				</text>
			</div>

			{isOpen === true ? (
				<div>
					{Object.keys(courseObj[key].subs[sub]["spec"]).map((specs, index) => {
						const isThere =
							checkedArray !== undefined ? checkedArray.includes(specs) : false;
						return (
							<div>
								<StudentTracker
									specNumber={specs}
									specification={courseObj[key].subs[sub].spec[specs]}
									checked={isThere}
									course={courseObj}
								/>
							</div>
						);
					})}
				</div>
			) : (
				<div />
			)}
		</>
	);
};

export default SubBlock;

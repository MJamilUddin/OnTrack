/** @format */

import StudentTracker from "../pages/studentTracker";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const SecondSubBlock = (props) => {
	const courseObj = props.course;
	const completeArray = props.completeArray;
	const sub = props.num;
	const key = props.keyNum;
	const secondSub = props.specNumber;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div
				style={{
					width: "96%",
					backgroundColor: isOpen ? "#FFCFCF" : "pink",
					display: "flex",
					margin: 20,
					height: "auto",
					borderRadius: 10,
					flexDirection: "row",
					padding: 25,
					justifyContent: "space-between",
				}}
				onClick={() => setIsOpen(!isOpen)}>
				<text style={{ fontSize: 22, color: isOpen ? "black" : "black" }}>
					{secondSub} {courseObj[key].subs[sub].spec[secondSub]["sub-topic"]}
				</text>
			</div>

			{isOpen === true ? (
				<div>
					{Object.keys(courseObj[key].subs[sub].spec[secondSub]["spec"]).map((specs, index) => {
						const isThere =
							completeArray !== undefined
								? completeArray.includes(specs)
								: false;

						return (
							<>
								{props.showFlag ? (
									<>
										{isThere == props.completedMode ? (
											<div>
												<StudentTracker
													specNumber={specs}
													specification={courseObj[key].subs[sub].spec[secondSub].spec[specs]}
													checked={isThere}
													course={courseObj}
													completeArray={props.completeArray}
													setCompleteArray={props.setCompleteArray}
												/>
											</div>
										) : null}
									</>
								) : (
									<div>
										<StudentTracker
											specNumber={specs}
											specification={courseObj[key].subs[sub].spec[secondSub].spec[specs]}
											checked={isThere}
											course={courseObj}
											completeArray={props.completeArray}
											setCompleteArray={props.setCompleteArray}
										/>
									</div>
								)}
							</>
						);
					})}
				</div>
			) : (
				<div />
			)}
		</>
	);
};

export default SecondSubBlock;

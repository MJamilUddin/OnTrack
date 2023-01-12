/** @format */

import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import StudentTracker from "../pages/studentTracker";
import SubBlock from "./subSpecBlock";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import { findSpecAmountByTopic } from "../functions/courseFuncs";

const SpecBlock = (props) => {
	const [perc, setPerc] = useState(props.perc);
	const courseObj = props.course;
	const completeArray = props.completeArray;
	const key = props.num;
	const isSelected = props.isSelected;
	const [isOpen, setIsOpen] = useState(false);

	// useEffect(() => {
	// 	if (completeArray) {
	// 		const topicCompleteArray = completeArray.filter(num => num.substring(0, num.indexOf(".")) === key);
	// 		setPerc(topicCompleteArray.length / findSpecAmountByTopic(courseObj, courseObj[key].topic))
	// 	}
       
	// }, [props.completeArray])

	return (
		<>
			{isSelected === true ? (
				<>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							height: 100,
							width: 1300,
							borderRadius: 10,
							marginBottom: 0,
							backgroundColor: isOpen ? "white" : "white",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: 25,
							zIndex: 0,
						}}>
						<div
							style={{
								display: "flex",
								width: Math.floor(1300 * props.perc),
								height: 10,
								backgroundColor: "#D6DFFF",
								marginBottom: 0,
								zIndex: 1,
								borderRadius: 10,
								alignSelf: "flex-start",
							}}
						/>
						<div
							style={{
								display: "flex",
								height: 85,
								width: 1300,
								borderRadius: 10,
								marginBottom: 0,
								backgroundColor: isOpen ? "white" : "white",
								alignItems: "center",
								justifyContent: "space-between",
								zIndex: 0,
							}}
							onClick={() => {
								setIsOpen(!isOpen);
								if (isOpen === true) {
									props.setHighlight(-1);
								} else {
									props.setHighlight(props.num);
								}
							}}>
							{/* <div
					style={{
						display: "flex",
						width: `${perc * 100}%`,
						height: "100%",
						backgroundColor: "#D6DFFF",
						zIndex: 1,
						borderRadius: 10,
						alignItems: "center",
						justifyContent: "space-between",
						position: 'relative'
					}}/> */}
							<text
								style={{
									color: "black",
									fontSize: 23,
									fontWeight: "350",
									fontFamily: "sans-serif",
									marginLeft: 40,
									zIndex: 2,
									position: "relative",
								}}>
								{courseObj[key].topic}
							</text>

							<div style={{ display: "flex", flexDirection: "row" }}>
								<text
									style={{
										color: "black",
										fontSize: 25,
										fontWeight: "350",
										fontFamily: "sans-serif",
										marginRight: 20,
										zIndex: 2,
										position: "relative",
									}}>
									{Math.floor(props.perc * 100)}%
								</text>
								<div
									style={{
										display: "flex",
										height: 35,
										width: 35,
										borderRadius: 24,
										backgroundColor: "#7A6FF6",
										marginRight: 60,
										justifyContent: "center",
										alignItems: "center",
									}}>
									{props.isSelected? (
										<KeyboardArrowRightRoundedIcon
											style={{ color: "white" }}
											fontSize="medium"
										/>
									) : (
										<KeyboardArrowDownRoundedIcon
											style={{ color: "white" }}
											fontSize="medium"
										/>
									)}
								</div>
							</div>
						</div>
					</div>

					{isOpen === true ? (
						<div>
							{Object.keys(courseObj[key].subs).map((sub, index) => {
								return (
									<div>
										<SubBlock
											course={courseObj}
											num={sub}
											keyNum={key}
											completeArray={completeArray}
											setCompleteArray={props.setCompleteArray}
										/>
									</div>
								);
							})}
						</div>
					) : (
						<div />
					)}
				</>
			) : (
				<div />
			)}
		</>
	);
};

export default SpecBlock;

/** @format */

import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import StudentTracker from "../pages/studentTracker";
import SubBlock from "./subSpecBlock";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

const SpecBlock = (props) => {
	const courseObj = props.course;
	const completeArray = props.completeArray;
	const key = props.num;
	const isSelected = props.isSelected;

	const [isOpen, setIsOpen] = useState(false);
	const perc = Math.random() * 1;

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
								width: 1300 * perc,
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
									{Math.floor(perc * 100)}%
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
										/>
									</div>
								);
							})}
						</div>
						// <div>
						// 	{Object.keys(courseObj[key].subs[`${key}.1`]["spec"]).map(
						// 		(specs, index) => {
						// 			const isThere =
						// 				completeArray !== undefined
						// 					? completeArray.includes(specs)
						// 					: false;
						// 			return (
						// 				<div>
						// 					<StudentTracker
						// 						specNumber={specs}
						// 						specification={
						// 							courseObj[key].subs[`${key}.1`].spec[specs]
						// 						}
						// 						checked={isThere}
						// 						course={courseObj}
						// 					/>
						// 				</div>
						// 			);
						// 		}
						// 	)}
						// </div>
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

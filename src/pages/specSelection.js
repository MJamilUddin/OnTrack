/** @format */

import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addSubCollection, getCoursesList } from "../services/firebase";
import { UserContext } from "../App";

const data = {
	maths: [
		{ name: "GCSE Maths AQA", code: "GCSEMathsAQA" },
		{ name: "ALevel Maths AQA", code: "AlevelMathsAQA" },
	],
	biology: [
		{ name: "GCSE Biology AQA", code: "GCSEBiologyAQA" },
		{ name: "ALevel Biology AQA", code: "AlevelBiologyAQA" },
	],
	chemistry: [
		{ name: "GCSE Chemistry AQA", code: "GCSEChemistryAQA" },
		{ name: "ALevel Chemistry AQA", code: "AlevelChemistryAQA" },
	],
	physics: [
		{ name: "GCSE Physics AQA", code: "GCSEPhysicsAQA" },
		{ name: "ALevel Physics AQA", code: "ALevelPhysicsAQA" },
	],
};

const SpecSelection = (props) => {
	const width = props.width
	const userData = useContext(UserContext);
	const { state } = useLocation();
	const { name } = state;
	const mapArray = data[name];
	const [courseList, setCourseList] = useState();

	useEffect(() => {
		const getCourseData = async() => {
			const info = await getCoursesList(userData.uid);
			setCourseList(Object.keys(info));
		}

		getCourseData();
	}, [])

	const SpecButton = (props) => {
		const [hover, setHover] = useState(false);
		let courseIn = false

		if (courseList !== undefined) {
			courseIn = courseList.includes(props.code);
		}
		
		return (
			<div
				style={{
					width: width < 300? width - 350 : width - 600,
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
				<text style={{ fontSize: 20, color: "black", fontFamily: 'inter', fontWeight: '500'  }}>
					{props.name}
				</text>
				<div
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					style={{
						display: 'flex',
						width: 90,
						height: 40,
						borderRadius: 10,
						backgroundColor: hover || courseIn? "green" : "#FABB18",
						marginRight: 20,
						justifyContent: 'center',
						alignItems: 'center'
					}}
					onClick={() => {
						addSubCollection(userData.uid, props.code);
						setCourseList(prev => [...prev, props.code])
					}}>
						{courseIn? 
						<text style={{ fontWeight: 900, fontSize: 16, color: 'black' }}>Added</text>
						:
						<text style={{ fontWeight: 900, fontSize: 16, color: 'black' }}>Add</text>
						}
					
				</div>
			</div>
		);
	}


	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginTop: 0,
					marginLeft: 50,
					width: 'auto',
					height: props.height
				}}>
				<h2 style={{marginLeft: 30}}>Specifications</h2>	
				{mapArray.map((course) => {
					return (
					<SpecButton name={course.name} code={course.code} />
					)
				})}
			</div>
		</>
	);
}

export default SpecSelection;

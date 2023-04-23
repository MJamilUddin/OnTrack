/** @format */

import { useEffect, useState, useContext } from "react";
import { useNavigate, Link, Route, Routes } from "react-router-dom";
import { UserContext } from "../App";
import { CourseBox } from "../components/courseBox";
import { getCoursesList } from "../services/firebase";
import nameTransfer from "../functions/nameTransfer";
import { width } from "@mui/system";

const HomePage = (props) => {
	const width = props.width;
	const height = props.height;
	let navigate = useNavigate();
	const userData = useContext(UserContext);
	const [courseInfo, setCourseInfo] = useState(null);

	function isEmptyObject(obj){
		return JSON.stringify(obj) == '{}';
	};

	const getCoursesInfo = async () => {
		const data = await getCoursesList(userData.uid);
		const isEmpty =  isEmptyObject(data);

		if (isEmpty) {
			setCourseInfo(null)
		} else {
			setCourseInfo(data);
		}
		
	};

	useEffect(() => {
		getCoursesInfo();

	}, []);


	const AddCourses = (props) => {
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
					navigate("/courses");
				}}>
				{props.text}
			</button>
		);
	};

	return (
		<div style={{ marginLeft: 30, width: "auto", height: height }}>
			<h2 style={{ marginLeft: 50 }}>My Subjects</h2>
			<h4 style={{ marginLeft: 50 }}>Click on a subject to complete the specification, qizzes and exam questions!</h4>
			{courseInfo !== null ? (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "left",
						alignContent: "flex-start",
						marginLeft: 30,
						marginRight: 45,
						paddingBottom: 50,
						width: "auto",
						height: "auto",
					}}>
					{Object.keys(courseInfo).map((key, index) => {
						const courseName = nameTransfer[key];
						return (
							<>
								<CourseBox
									name={courseName}
									image={"/images/maths.jpg"}
									add={false}
									navigate={"/spec"}
									state={{ name: key }}
								/>
							</>
						);
					})}
				</div>
			) : (
				<div style={{display: "flex", flexDirection: "row", width: "auto", height: "auto", justifyContent: 'center', marginTop: 70 }}>
					<div style={{display: "flex", flexDirection: "column", alignItems: "center", width: '30%'}}>
						<text style={{fontSize: 20, fontWeight: '500', marginBottom: 20}}>
							You don't have any courses 
						</text>
						<AddCourses
							text="Add Courses"
							background="white"
							color="#7F6FEB"
							width={170}
						/>
						
					</div>
					<div>
						<img src={"/Traveler.png"} style={{width: 500, height: 500}} />
					</div>
					
					
				</div>
			)}
		</div>
	);
};

export default HomePage;

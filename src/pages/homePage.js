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

	const getCoursesInfo = async () => {
		const data = await getCoursesList(userData.uid);
		setCourseInfo(data);
	};

	useEffect(() => {
		getCoursesInfo();
		// console.log("userContext", userData);
	}, []);

	return (
		<div style={{ marginLeft: 30, width: 'auto', height: height }}>
			<h2 style={{marginLeft: 50}}>My Subjects</h2>
			{courseInfo !== null ? (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "left",
						alignContent: 'flex-start',
						marginLeft: 30,
						marginRight: 45,
						paddingBottom: 50,
						width: 'auto',
						height: 'auto',
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
				<div style={{width: 'auto',
				height: 'auto',}}>Add some courses!</div>
			)}
		</div>
	);
};

export default HomePage;

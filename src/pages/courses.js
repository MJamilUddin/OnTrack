/** @format */

import { useNavigate } from "react-router-dom";
import { CourseBox } from "../components/courseBox";

const Courses = () => {
	let navigate = useNavigate();
	return (
		<div style={{ marginLeft: 30 }}>
			<h2>Add Subjects</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					marginLeft: 30,
					width: 700,
					height: 800,
				}}>
				<CourseBox name={"Maths"} image={"/images/maths.jpg"} add={true} navigate={"/selection"} state={{name: "maths"}} />
				<CourseBox name={"Physics"} image={"/images/physics.jpg"} add={true} navigate={"/selection"} state={{name: "physics"}} />
			</div>
		</div>
	);
};

export default Courses;

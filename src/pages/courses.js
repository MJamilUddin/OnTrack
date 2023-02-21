/** @format */

import { useNavigate } from "react-router-dom";
import { CourseBox } from "../components/courseBox";

const Courses = (props) => {
	let navigate = useNavigate();
	const width = props.width;
	const height = props.height;

	return (
		<div style={{ marginLeft: 30, width: 'auto', height: height }}>
			<h2 style={{marginLeft: 50}}>Add Subjects</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					marginLeft: 30,
					marginRight: props.width < 150? 0 : 45,
					width: 'auto',
					height: 'auto',
					paddingBottom: 50
				}}>
				<CourseBox name={"Maths"} image={"math.png"} add={true} navigate={"/selection"} state={{name: "maths"}} />
				<CourseBox name={"Physics"} image={"math.png"} add={true} navigate={"/selection"} state={{name: "physics"}} />
				<CourseBox name={"Biology"} image={"math.png"} add={true} navigate={"/selection"} state={{name: "biology"}} />
			</div>
		</div>
	);
};

export default Courses;

/** @format */

import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import StudentTracker from "../pages/studentTracker";
import SubBlock from "./subSpecBlock";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const SpecBlock = (props) => {
	const courseObj = props.course;
	const completeArray = props.completeArray;
	const key = props.num;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
		<div style={{display: 'flex', border: '1px solid black' , height: 120, width: 900, borderRadius: 17, margin: 10, backgroundColor: isOpen? '#6D7CB7': '#23398C', alignItems: 'center', justifyContent: 'space-between'}}
		onClick={() => setIsOpen(!isOpen)}>
			<text style={{color: 'white', fontSize: 30, fontWeight: 'lighter', fontFamily: 'sans-serif', marginLeft: 40}}>{courseObj[key].topic}</text>
			<div style={{display: 'flex', height: 50, width: 50, borderRadius: 8, backgroundColor: '#FABB18', marginRight: 60}} />
		</div>

		{isOpen === true?
			<div>
			
			{Object.keys(courseObj[key].subs).map((sub, index) => {
				return (
					<div>
						<SubBlock course={courseObj} num={sub} keyNum={key} completeArray={completeArray} />
					</div>
				);
			})}
		</div>
		:
		<div />
		}
		</>
	);
};

export default SpecBlock;

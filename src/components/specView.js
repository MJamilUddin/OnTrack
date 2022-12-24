/** @format */

import SpecBlock from "./specBlock";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";
import { specPicker } from "../functions/specPicker";
import { getCompleteArray } from "../services/firebase";
import { useEffect, useState, useContext } from "react";

const SpecView = () => {
	const { state } = useLocation();
	const userData = useContext(UserContext);

	const courseObj = specPicker(state.name);
	const [completeArray, setCompleteArray] = useState();

	const gettingCompleteArray = async() => {
		const data = await getCompleteArray(userData.uid, state.name);
		// console.log('complete Array', data.completeArray);
		if (data.completeArray !== undefined) {
			setCompleteArray(data.completeArray);
		} else {
			setCompleteArray([])
		}
		
	};

	useEffect(() => {
		gettingCompleteArray()
	}, []);

	return (
		<div style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}>
			<h1>{courseObj[1].name}</h1>

			<div style={{backgroundColor: 'white', width: 1000, height: 800, padding: 40, borderRadius: 32, overflow: 'scroll'}}>
				{Object.keys(courseObj).map((key, index) => {
					return <SpecBlock course={courseObj} num={key} completeArray={completeArray} />;
				})}
			</div>

			
		</div>


	);
};

export default SpecView;

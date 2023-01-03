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
	const [highlight, setHighlight] = useState(-1);

	const gettingCompleteArray = async () => {
		const data = await getCompleteArray(userData.uid, state.name);
		// console.log('complete Array', data.completeArray);
		if (data.completeArray !== undefined) {
			setCompleteArray(data.completeArray);
		} else {
			setCompleteArray([]);
		}
	};

	useEffect(() => {
		gettingCompleteArray();
	}, []);

	const shouldBeShown = (num) => {
		if (highlight === -1) {
			return true 
		} else if (highlight === num) {
			return true 
		} else {
			return false
		}

	}

	return (
		<div style={{ display: "flex", flexDirection: "column", marginLeft: 100 }}>
			<h2>{courseObj[1].name}</h2>

			<div style={{ width: 1320, height: 800, paddingBottom: 20, overflow: "scroll", marginBottom: 10, }}>
				{Object.keys(courseObj).map((key, index) => {
					return (
						<SpecBlock
							course={courseObj}
							num={key}
							completeArray={completeArray}
							isSelected={shouldBeShown(key)}
							setHighlight={setHighlight}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SpecView;

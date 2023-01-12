/** @format */

import SpecBlock from "./specBlock";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";
import { specPicker } from "../functions/specPicker";
import { getCompleteArray } from "../services/firebase";
import { useEffect, useState, useContext } from "react";
import {
	findSpecAmount,
	findSpecAmountByTopic,
} from "../functions/courseFuncs";

const SpecView = () => {
	const { state } = useLocation();
	const userData = useContext(UserContext);
	const courseObj = specPicker(state.name);
	const [completeArray, setCompleteArray] = useState();
	const [sortedArray, setSortedArray] = useState();
	const [completePercentage, setCompletePercentage] = useState(0);
	const [highlight, setHighlight] = useState(-1);

	const [sortedMode, setSortedMode] = useState(false);

	const gettingCompleteArray = async () => {
		const data = await getCompleteArray(userData.uid, state.name);
		// console.log('complete Array', data.completeArray);
		if (data.completeArray !== undefined) {
			setCompleteArray(data.completeArray);

			const percentageNumber =
				data.completeArray.length / findSpecAmount(courseObj);
			setCompletePercentage(parseFloat(percentageNumber.toFixed(2)));
		} else {
			setCompleteArray([]);
		}
	};

	useEffect(() => {
		gettingCompleteArray();
	}, []);

	const shouldBeShown = (num) => {
		if (highlight === -1) {
			return true;
		} else if (highlight === num) {
			return true;
		} else {
			return false;
		}
	};

	const topicPercentageFinder = (key) => {
		if (completeArray) {
		const topicCompleteArray = completeArray.filter(
			(num) => num.substring(0, num.indexOf(".")) === key
		);
		const percentage =
			topicCompleteArray.length /
			findSpecAmountByTopic(courseObj, courseObj[key].topic);
		
		return percentage * 100;
	}
	};

	const orderedListFormulator = () => {
		if (completeArray) {
			const keysArray = Object.keys(courseObj);
			const newArray = keysArray.sort((a, b) => {
				return topicPercentageFinder(b) - topicPercentageFinder(a);
			});
			setSortedArray(newArray);
		}
	};

	// useEffect(() => {
	// 	orderedListFormulator();
	// }, [completeArray]);

	return (
		<div style={{ display: "flex", flexDirection: "column", marginLeft: 100 }}>
			<div style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
				<h2>{courseObj[1].name}</h2>
				<button
					onClick={() => {
						orderedListFormulator();
						setSortedMode(!sortedMode);
					}}>
					+
				</button>
				<button
					onClick={() => {
						console.log("gg");
					}}>
					()
				</button>
				<h2>{Math.floor(completePercentage * 100)}%</h2>
			</div>

			<div
				style={{
					width: 1320,
					height: 800,
					paddingBottom: 20,
					overflow: "scroll",
					marginBottom: 10,
					marginTop: 30,
				}}>
				{sortedMode === false
					? Object.keys(courseObj).map((key, index) => {
							return (
								<SpecBlock
									perc={topicPercentageFinder(key)/100}
									course={courseObj}
									num={key}
									completeArray={completeArray}
									setCompleteArray={setCompleteArray}
									isSelected={shouldBeShown(key)}
									setHighlight={setHighlight}
								/>
							);
					  })
					: sortedArray?.map((key, index) => {
							return (
								<SpecBlock
									perc={topicPercentageFinder(key)/100}
									course={courseObj}
									num={key}
									completeArray={completeArray}
									setCompleteArray={setCompleteArray}
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

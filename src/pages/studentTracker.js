/** @format */

import { useState, useContext } from "react";
import { addToCompleteArray } from "../services/firebase";
import { UserContext } from "../App";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const StudentTracker = (props) => {
	const userData = useContext(UserContext);
	const [checked, setChecked] = useState(props.checked);
	const [otherChecked, setOtherChecked] = useState(false);

	const instantAdjustment = () => {
		const doesInclude =  props.completeArray.includes(props.specNumber);

		if (doesInclude) {
			const filteredArr = props.completeArray.filter(spec => { return spec !== props.specNumber });
			props.setCompleteArray(filteredArr);
		} else {
			props.setCompleteArray(prev => [...prev, props.specNumber])
		}
	}

	const addingToCompleteArray = async () => {
		await addToCompleteArray(
			userData.uid,
			props.course[1].code,
			props.specNumber
		);

	};

	return (
		<div
			style={{
				display: "flex",
				margin: 20,
				width: "96%",
				height: "auto",
				borderRadius: 10,
				flexDirection: "row",
				padding: 25,
				backgroundColor: "white",
				justifyContent: 'space-evenly',
			}}>
                <div style={{display: "flex", flexDirection: 'row', flex: 11.3}}>
                <div>
					<text style={{ fontSize: 22, color: "black" }}>
						{props.specNumber}
					</text>
				</div>
				<div style={{marginLeft: 20}}>
                    
					<text style={{ fontSize: 17, color: "black" }}>
						{props.specification}
					</text>
				</div>
                </div>
				
			<div
				style={{
					display: "flex",
                    flex: 0.7,
					justifyContent: "center",
                    right: 10,
					alignItems: "center",
					width: 70,
					height: "auto",
				}}>
				<button
					style={{
						display: 'flex',
						width: 35,
						height: 35,
						backgroundColor: checked ? "#D1F5EA" : "#DEDEDE",
						borderRadius: 30,
						justifyContent: 'center',
						alignItems: 'center',
						border: 'none',

					}}
					onClick={() => {
						setChecked(!checked);
						addingToCompleteArray();
						instantAdjustment();
					}}
				>
                    {checked? 
                    <CheckRoundedIcon />
                        : 
                        null
                        }
                     
                </button>
			</div>
		</div>
	);
};

export default StudentTracker;

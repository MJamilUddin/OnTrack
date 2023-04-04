import { useNavigate } from "react-router-dom";
import { specPicker } from "../functions/specPicker";
import { imgPicker } from "../functions/courseImgTransfer";
import { getCompleteArray } from "../services/firebase";
import { useEffect, useState, useContext } from "react";
import { findSpecAmount, findSpecAmountNested } from "../functions/courseFuncs";
import { UserContext } from "../App";


export const CourseBox = (props) => {
    const navigate = useNavigate();
    const userData = useContext(UserContext);
    const courseObj = specPicker(props.state.name);
    const imgName = props.add? props.image : imgPicker(props.state.name);
	const [completeArray, setCompleteArray] = useState();
	const [completePercentage, setCompletePercentage] = useState(0);

	const gettingCompleteArray = async () => {
		const data = await getCompleteArray(userData.uid, props.state.name);
		// console.log('complete Array', data.completeArray);
		if (data.completeArray !== undefined) {
			setCompleteArray(data.completeArray);

            const nested = courseObj[1].nested || false;
			const specAmount = nested? findSpecAmountNested(courseObj) : findSpecAmount(courseObj);
			
			const percentageNumber = data.completeArray.length/specAmount;
			setCompletePercentage(parseFloat(percentageNumber.toFixed(2)))
		} else {
			setCompleteArray([]);
		}
	};

    useEffect(() => {
		gettingCompleteArray();
	}, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: 300,
                height: 170,
                background: "blue",
                borderRadius: 34,
                alignItems: "center",
                justifyContent: "flex-start",
                margin: 8,
                boxShadow: "8px 12px 16px #F2F2F2",
                backgroundColor: 'white'
            }}
            onClick={() => {
                navigate(props.navigate, {state: props.state});
            }}>
                <div style={{width: 320, height: 50, marginTop: 35, marginLeft: 90}}>
                    <text style={{size: 28, fontWeight: 'bold'}}>{props.name}</text>
                    <br />
                    {props.add? 
                    <text style={{size: 28, color: '#8F8F8F', fontWeight: '600'}}>GCSE, A-level</text>
                    :
                    <text style={{size: 28, color: '#8F8F8F', fontWeight: '600'}}>AQA</text>
                    }
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'row',}}>
                    <div style={{display: 'flex', width: 100, height: 100, borderRadius: 32, justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0}}> 
                        <text style={{fontWeight: '900', fontSize: 20}}>{!props.add? `${Math.floor(completePercentage*100)}%` : ''}</text>
                    </div>
                    <div style={{display: 'flex', width: 100, height: 80, borderRadius: 32, backgroundColor: '', justifyContent: 'center', alignItems: 'center', marginLeft: 40}}>
                        <img src={`/images/courseImages/${imgName}`} />
                    </div>

                </div>
            
        </div>
    );
};
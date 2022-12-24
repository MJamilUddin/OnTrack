import { useState, useContext } from "react";
import { addToCompleteArray } from "../services/firebase";
import { UserContext } from "../App";


const  StudentTracker = (props) => {

    const userData = useContext(UserContext);
    const [checked, setChecked] = useState(props.checked);
    const [otherChecked, setOtherChecked] = useState(false);

    const addingToCompleteArray = async () => {
        await addToCompleteArray(userData.uid, props.course[1].code, props.specNumber)
    }

    return (
        <div style={{display: 'flex', margin: 20, width: 800, height: 'auto', borderRadius: 10, flexDirection: 'row', padding: 25, backgroundColor: '#656565', justifyContent: 'space-between' }}>
            <div>
            <text style={{fontSize: 22, color: 'white'}}>{props.specNumber}</text>
            <br />
            <text style={{fontSize: 15, color: 'white'}}>{props.specification}</text>
            
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 70, height: 'auto'}}>
                <button style={{width: 50, height: 50, backgroundColor: checked? 'green' : "white", borderRadius: 10}}
            onClick={() => {
                setChecked(!checked);
                addingToCompleteArray();
            }}/>
            </div>
            

        </div>
    )
};

export default StudentTracker;
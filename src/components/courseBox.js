import { useNavigate } from "react-router-dom";


export const CourseBox = (props) => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: 320,
                height: 200,
                background: "blue",
                borderRadius: 34,
                alignItems: "center",
                justifyContent: "flex-start",
                margin: 8,
                // border: "1px solid black",
                // backgroundImage: `url(${props.image})`,
                backgroundColor: 'white'
            }}
            onClick={() => {
                navigate(props.navigate, {state: props.state});
            }}>
                <div style={{width: 320, height: 50, marginTop: 20, marginLeft: 30}}>
                    <text style={{size: 28}}>{props.name}</text>
                    <br />
                    <text style={{size: 28, color: '#8F8F8F'}}>GCSE, AQA</text>
                </div>
                <div style={{display: 'flex', flexDirection: 'row',}}>
                    <div style={{display: 'flex', width: 100, height: 100, borderRadius: 32, justifyContent: 'center', alignItems: 'center'}}> 
                        <text>30%</text>
                    </div>
                    <div style={{display: 'flex', width: 100, height: 100, borderRadius: 32, backgroundColor: '#FDF7E9', justifyContent: 'center', alignItems: 'center'}}>
                        d
                    </div>

                </div>
            
        </div>
    );
};
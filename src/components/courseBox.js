import { useNavigate } from "react-router-dom";


export const CourseBox = (props) => {
    const navigate = useNavigate();

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
                    <text style={{size: 28, color: '#8F8F8F', fontWeight: '600'}}>GCSE</text>
                </div>
                <div style={{display: 'flex', flexDirection: 'row',}}>
                    <div style={{display: 'flex', width: 100, height: 100, borderRadius: 32, justifyContent: 'flex-start', alignItems: 'center', marginLeft: 0}}> 
                        <text style={{fontWeight: '900', fontSize: 20}}>30%</text>
                    </div>
                    <div style={{display: 'flex', width: 100, height: 100, borderRadius: 32, backgroundColor: '', justifyContent: 'center', alignItems: 'center', marginLeft: 30}}>
                        d
                    </div>

                </div>
            
        </div>
    );
};
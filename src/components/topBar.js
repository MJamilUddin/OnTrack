import React from "react";

let height = window.innerHeight;
let width = window.innerWidth;

const TopBar = () => {
    return(
    <div
    style={{
        display: "flex",
        flexDirection: "column",
        height: 150,
        width: width-320,
        backgroundColor: "white",
        // border: "1px solid black",
        borderRadius: 20,
        justifyContent: "center",
    }}>
        <text style={{display: 'flex', alignSelf: "flex-start"}}>Dashboard</text>

        <text style={{display: 'flex', alignSelf: "flex-end"}}>Asma Khatol</text>

    </div>
    )

};

export default TopBar;
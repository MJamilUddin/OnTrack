/** @format */

import React, { useState, useContext } from "react";
import { UserContext } from "../App";



const TopBar = (props) => {
    const userData = useContext(UserContext);
    let width = props.width;
    const firstName = userData.firstName || "Katie";
    const surName = userData.surName || "Hopkins";
    const school = userData.school || "SlimeBucket";

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: 150,
				width: width - 350,
				borderRadius: 20,
				justifyContent: "center",
                alignItems: 'flex-end',
                marginTop: 15,
                marginRight: 40
			}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <text style={{fontFamily: 'inter', fontSize: 12, color: '#ACACAC' }}>
                    STUDENT
                </text>
                <text style={{fontFamily: 'inter', fontSize: 14, color: 'black' }}>
                    {firstName + " " + surName}
                </text>
                <text style={{fontFamily: 'inter', fontSize: 12, color: '#ACACAC' }}>
                    {school}
                </text>
            </div>
            <img src="/images/defaultUser.png" style={{marginLeft: 20, width: 45, height: 45 }} />
            </div>
			
		</div>
	);
};

export default TopBar;

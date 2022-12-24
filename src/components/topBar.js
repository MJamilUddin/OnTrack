/** @format */

import React from "react";

let height = window.innerHeight;
let width = window.innerWidth;

const TopBar = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: 150,
				width: width - width/5,
				borderRadius: 20,
				justifyContent: "center",
                alignItems: 'flex-end'
			}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <text style={{fontFamily: 'inter', fontSize: 12, color: '#ACACAC' }}>
                    STUDENT
                </text>
                <text style={{fontFamily: 'inter', fontSize: 14, color: 'black' }}>
                    Asma Khatol
                </text>
                <text style={{fontFamily: 'inter', fontSize: 12, color: '#ACACAC' }}>
                    King Solomon Academy
                </text>
            </div>
            <img src="/images/defaultProfile.png" style={{marginLeft: 10 }} />
            </div>
			
		</div>
	);
};

export default TopBar;

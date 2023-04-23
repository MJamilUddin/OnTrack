/** @format */

import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import BasicPopover from "./FBPopover";

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
				// alignItems: 'flex-end',
				marginTop: 15,
				marginRight: 40,
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignSelf: "flex-start",
				}}>
				<BasicPopover content={
                <div style={{width: 200, height: 130}}>
                    Email us your feedback at
                    ontrack.inbox@gmail.com
                    Anything you would like to see on the app.
                </div>
            } />
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignSelf: "flex-end",
				}}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-end",
					}}>
					<text style={{ fontFamily: "inter", fontSize: 12, color: "#ACACAC" }}>
						STUDENT
					</text>
					<text style={{ fontFamily: "inter", fontSize: 14, color: "black" }}>
						{firstName + " " + surName}
					</text>
					<text style={{ fontFamily: "inter", fontSize: 12, color: "#ACACAC" }}>
						{school}
					</text>
				</div>
				<img
					src="/images/defaultUser.png"
					style={{ marginLeft: 20, width: 45, height: 45 }}
				/>
			</div>
		</div>
	);
};

export default TopBar;

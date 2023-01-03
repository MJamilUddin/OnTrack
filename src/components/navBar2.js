/** @format */

import * as React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { logout } from "../services/firebase";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

// interface AppBarProps extends MuiAppBarProps {
// 	open?: boolean;
// }

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function MiniDrawer() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(true);
	let navigate = useNavigate();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<img
						src="/images/logo.png"
						style={{ width: 130, height: 21, marginTop: 10, }}
					/>

					<div style={{Left: 20}}> 
					<IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
						{!open ? (
							<ChevronRightIcon
								style={{
									marginTop: 10,
									marginLeft: 30,
									backgroundColor: "#806FEA",
									borderRadius: 24,
									color: "white",
									width: 36,
									height: 36,
									
								}}
							/>
						) : (
							<ChevronLeftIcon
								style={{
									marginTop: 10,
									marginLeft: 10,
									backgroundColor: "#806FEA",
									borderRadius: 24,
									color: "white",
									width: 36,
									height: 36,
								}}
							/>
						)}
					</IconButton>
					</div>
				</DrawerHeader>

				<List>
					{open ? (
						<button
						onClick={() => navigate("/home")}
							style={{
								display: "flex",
								width: 195,
								height: 50,
								borderRadius: 12,
								backgroundColor: "#7A6FF6",
								marginTop: 30,
								marginBottom: 10,
								marginLeft: 20,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GridViewRoundedIcon
								style={{ color: "white", marginRight: 10 }}
							/>
							<text style={{ color: "white" }}>Dashboard</text>
							{/* <ExpandLessRoundedIcon
								style={{ color: "white", marginLeft: 10 }}
							/> */}
						</button>
					) : (
						<div
							style={{
								display: "flex",
								width: 45,
								height: 45,
								borderRadius: 12,
								backgroundColor: "#7A6FF6",
								marginTop: 30,
								marginBottom: 10,
								marginLeft: 10,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GridViewRoundedIcon
								style={{ color: "white", marginRight: 0 }}
							/>
						</div>
					)}

					{[
						{ text: "Courses", link: "/courses", img: "/images/coursesImg.png" },
					].map((item, index) => (
						<ListItem
							key={index}
							disablePadding
							sx={{ display: "block", marginLeft: open? 2 : 0 }}>
							<ListItemButton
								onClick={() => navigate(item.link)}
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}>
									<img src={item.img} />
								</ListItemIcon>
								<ListItemText
									primary={item.text}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{[{ text: "Settings", link: "/login", img: "images/settingsImg.png" }, 
					{text: "Logout", link: "/login", img: "images/logoutImg.png"}].map((item, index) => (
						<ListItem
							key={index}
							disablePadding
							sx={{ display: "block", marginLeft: open? 2 : 0 }}>
							<ListItemButton
								onClick={() => {
									navigate(item.link);
									logout();
								}}
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}>
									<img src={item.img} />
								</ListItemIcon>
								<ListItemText
									primary={item.text}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}

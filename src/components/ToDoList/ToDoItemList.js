import React from "react";
import Card from "../UI/Card";
import classes from "./ToDoItemList.module.css";

const ToDoItemList = (props) => {
	const id = props.id;
	const deleteHandler = (e) => {
		props.onDeleteList(e);
	};
	return (
		<Card>
			<div
				onClick={() => {
					deleteHandler(id);
				}}
			>
				<h1 className={classes.title}>{props.title}</h1>
				<p className={classes.desc}>{props.desc}</p>
			</div>
		</Card>
	);
};

export default ToDoItemList;

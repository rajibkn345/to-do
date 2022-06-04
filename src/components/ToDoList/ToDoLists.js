import React from "react";
import Card from "../UI/Card";
import classes from "./ToDoItemList.module.css";
import ToDoItemList from "./ToDoItemList";
const ToDoLists = (props) => {
	const lists = props.lists;
	const deleteListHandler = (id) => {
		props.onDelete(id);
	};
	return (
		<Card
			className={props.lists.length !== 0 ? classes.container : classes.none}
		>
			{lists.map((list) => {
				return (
					<ToDoItemList
						onDeleteList={deleteListHandler}
						id={list.id}
						key={list.id}
						title={list.title}
						desc={list.desc}
					/>
				);
			})}
		</Card>
	);
};

export default ToDoLists;

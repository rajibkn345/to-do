import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddToDo.module.css";
import Button from "../UI/Button";

const AddToDo = (props) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		const Lists = { id: Math.random().toString(), title: title, desc: desc };
		props.onSave(Lists);
		setDesc("");
		setTitle("");
	};
	const titleHandler = (event) => {
		setTitle(event.target.value);
	};
	const descHandler = (event) => {
		setDesc(event.target.value);
	};

	return (
		<Card className={classes.container}>
			<form onSubmit={submitHandler}>
				<div className={classes.formGroup}>
					<label className={classes.formControl} htmlFor='title'>
						Title
					</label>
					<input
						onChange={titleHandler}
						className={classes.formControl}
						type='text'
						id='title'
						value={title}
					/>
				</div>
				<div className={classes.formGroup}>
					<label className={classes.formControl} htmlFor='desc'>
						Description
					</label>
					<input
						onChange={descHandler}
						className={classes.formControl}
						type='text'
						id='desc'
						value={desc}
					/>
				</div>
				<div className={classes.formGroup}>
					<Button type={"submit"}>Add List</Button>
				</div>
			</form>
		</Card>
	);
};

export default AddToDo;

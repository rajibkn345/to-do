import React, { useState } from "react";
import AddToDo from "./components/ToDoList/AddToDo";
import ToDoLists from "./components/ToDoList/ToDoLists";
import "./App.css";

function App() {
	const [lists, setLists] = useState([]);
	const saveHandler = (a) => {
		setLists((prev) => {
			return [a, ...prev];
		});
	};
	const filterHandler = (id) => {
		setLists((preLists) => {
			return preLists.filter((list) => {
				return id !== list.id;
			});
		});
	};

	return (
		<div className='App'>
			<h1 className='center'>ToDo Lists</h1>
			<AddToDo onSave={saveHandler} />
			<ToDoLists onDelete={filterHandler} lists={lists} />
		</div>
	);
}

export default App;

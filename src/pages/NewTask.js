// React
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import TaskNewForm from "../components/task/TaskNewForm";
import { readLocalStorage, updateLocalStorage } from "../services/boardOps";
// MUI
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";

const NewTask = () => {

    const navigate = useNavigate();
    const urlParams = useParams();

    const addTaskHandler = (taskInfo) => {
        const taskBoardLocalStorage = readLocalStorage("taskBoard");
        taskBoardLocalStorage.get(urlParams.colName).push(taskInfo);
        updateLocalStorage("taskBoard", taskBoardLocalStorage);
        navigate("/task-board/");
    };

	return (
		<Container>
			<Typography
				component='h1'
				variant='h5'
				marginTop={2}
				color='#1976d2'
			>
				New Task
			</Typography>
			<Typography variant='h6' component='h2' padding={1}>
				{urlParams.colName}
			</Typography>
			<TaskNewForm onAddTaskHandler={addTaskHandler} />
		</Container>
	);
};

export default NewTask;
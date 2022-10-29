// React
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import TaskEditForm from "../components/task/TaskEditForm";
import { readLocalStorage, updateLocalStorage } from "../services/boardOps";
// MUI
import { Typography } from "@mui/material";
import Container from "@mui/system/Container";

const EditTask = () => {
	
	const navigate = useNavigate();
	const urlParams = useParams();

	const [taskDetails, setTaskDetails] = useState({});

	useEffect(()=>{
		setTaskDetails(
			readLocalStorage("taskBoard").get(urlParams.colName).find(task => task.name === decodeURI(urlParams.taskName))
		);
	}, [urlParams.colName, urlParams.taskName]);

	const updateTaskHandler = (taskInfo) => {
		const taskBoardLocalStorage = readLocalStorage("taskBoard");
		taskBoardLocalStorage.get(urlParams.colName).forEach(task => {
        if (task.name === decodeURI(urlParams.taskName)){
            task.name = taskInfo.name;
            task.deadline = taskInfo.deadline;
            task.description = taskInfo.description;
        }
    });
		updateLocalStorage("taskBoard", taskBoardLocalStorage);
		navigate("/task-board/");
	};

	return (
		<Container>
			<Typography component='h1' variant='h5' marginTop={2} color='#1976d2'>
				Edit Task
			</Typography>
			<Typography variant='h6' component='h2' padding={1}>
				{urlParams.colName} - {urlParams.taskName}
			</Typography>
			<TaskEditForm details = {taskDetails} onUpdateTaskHandler={updateTaskHandler} />
		</Container>
	);
};

export default EditTask;
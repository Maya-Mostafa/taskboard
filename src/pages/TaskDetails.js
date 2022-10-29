// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Components
import Task from "../components/task/Task";
import { readLocalStorage } from "../services/boardOps";
// MUI
import Container from "@mui/system/Container";
import Typography from "@mui/material/Typography";

const TaskDetails = () => {
	const urlParams = useParams();
  const [taskDetails, setTaskDetails] = useState({});

	useEffect(() => {
		setTaskDetails(
			readLocalStorage("taskBoard").get(urlParams.colName).find((task) => task.name === decodeURI(urlParams.taskName))
		);
	}, [urlParams.colName, urlParams.taskName]);

  return (
    <Container>
      <Typography component='h1' variant='h5' marginTop={2} color='#1976d2'>
				Task Details
			</Typography>
      <Task colName = {urlParams.colName} details = {taskDetails}  />
    </Container>
  )
};

export default TaskDetails;

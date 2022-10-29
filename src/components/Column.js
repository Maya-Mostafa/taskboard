// React
import React from "react";
import { Link as RouterLink } from "react-router-dom";
// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Component
import TaskCard from "./task/TaskCard";

export const Column = ({ colName, tasks, deleteTaskHandler }) => {
	return (
		<Box>
			<Typography component='h2' variant='h6' paddingBottom={2}>
				{colName}
			</Typography>
			{tasks.map((task, index) => {
				return (
					<TaskCard
						key={index}
						col={colName}
						taskInfo={task}
						deleteClickHandler={() => deleteTaskHandler(colName, task.name)}
					/>
				);
			})}
			<Button
				component={RouterLink}
				variant='contained'
				color='primary'
				to={`${colName}/tasks/new-task/`}
			>
				Add Task
			</Button>
		</Box>
	);
};
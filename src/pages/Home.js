// React
import React, { useEffect, useState } from "react";
// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
// Components
import {BoardMapInit} from '../constants/data';
import {mapToArr, readLocalStorage, updateLocalStorage} from '../services/boardOps';
import Column from '../components/Column';

const Home = () => {
	
    const [board , setBoard] = useState([]);

    useEffect(()=>{
        if (!localStorage.taskBoard){
            setBoard(mapToArr(BoardMapInit));
            updateLocalStorage("taskBoard", BoardMapInit);
        }else{
            setBoard(mapToArr(readLocalStorage('taskBoard')));
        }
    }, []);

	  const deleteTaskHandler = (colName, taskName) => {
		const taskBoardLocalStorage = readLocalStorage("taskBoard");
		taskBoardLocalStorage.set(colName, taskBoardLocalStorage.get(colName).filter(task => task.name !== taskName)); 
		updateLocalStorage("taskBoard", taskBoardLocalStorage);
		setBoard(mapToArr(taskBoardLocalStorage));
	};

    return (
		<Container>
			<Typography component='h1' variant='h5' marginTop={2} color='#1976d2'>
				Welcome to your Task Board!
			</Typography>

			<Box paddingTop={5}>
				{board.length !== 0 &&
					board.map((item, index) => {
						return (
							<Column
								key = {index}
								colName = {item.col}
								tasks = {item.tasks}
								deleteTaskHandler = {deleteTaskHandler}
							/>
						);
					})}
			</Box>
		</Container>
	);
};

export default Home;
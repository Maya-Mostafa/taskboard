//React
import React, { useState } from "react";
import { Link as RouterLink} from 'react-router-dom';
// MUI
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const TaskNewForm = ({ onAddTaskHandler }) => {

    const [nameValue, setNameValue] = useState('');
    const [deadlineValue, setDeadlineValue] = useState(null);
    const [descriptionValue, setDescriptionValue] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        onAddTaskHandler({name: nameValue, deadline: deadlineValue, description: descriptionValue});
    };

	return (
		<Box
			component='form'
			sx={{
				"& .MuiTextField-root": { m: 1, width: "40ch" },
			}}
			noValidate
			autoComplete='off'
			onSubmit={formSubmitHandler}
		>
			<div>
				<TextField required label='Title' value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
			</div>
			<div>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DatePicker
						label='Deadline'
						value={deadlineValue}
						onChange={(newValue) => {setDeadlineValue(newValue)}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
			</div>
			<div>
				<TextField
					label='Description'
					multiline
					rows={4}
					value={descriptionValue}
					onChange = {(e) => setDescriptionValue(e.target.value)}
				/>
			</div>
			<Stack direction='row' spacing={2} padding={1}>
				<Button variant='contained' size='small' type='submit' disabled={!nameValue || !deadlineValue}>
					Add
				</Button>
				<Button variant='outlined' size='small' component={RouterLink} to="/">
					Cancel
				</Button>
			</Stack>
		</Box>
	);
};

export default TaskNewForm;
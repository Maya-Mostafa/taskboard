// React
import { Link as RouterLink } from "react-router-dom";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';

const Task = ({colName, details}) => {
	
	return (
		<Box padding={2}>
			<Typography variant='h6' component='h2' padding={1}>
				{colName} - {details.name}
			</Typography>
			<Chip icon={<CalendarIcon />} label={`Due by ${moment(new Date(details.deadline)).format("MM/DD/YYYY")}`} />
			<Box padding={1}>
				<Typography variant='body1' gutterBottom>
					Description
				</Typography>
				<Typography variant='body2' gutterBottom>
					{details.description}
				</Typography>
			</Box>
			<Button
				variant='outlined'
				sx={{ marginTop: 5 }}
				size='small'
				component={RouterLink}
				to='/'
			>
				Back
			</Button>
		</Box>
	);
};

export default Task;
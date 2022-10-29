// React
import { Navigate, Route, Routes } from 'react-router-dom';
// Components 
import Home from './pages/Home';
import EditTask from './pages/EditTask';
import NewTask from './pages/NewTask';
import NotFound from './pages/NotFound';
import TaskDetails from './pages/TaskDetails';
// MUI
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate replace to="task-board" />} />
          <Route path="/task-board/" element={<Home />} />
          <Route path="/task-board/:colName/tasks/task-details/:taskName" element={<TaskDetails />} />
          <Route path="/task-board/:colName/tasks/edit-task/:taskName" element={<EditTask />} />
          <Route path="/task-board/:colName/tasks/new-task/" element={<NewTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

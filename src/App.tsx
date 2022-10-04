import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './rtk/hooks/hooks';
import { getStudents } from './rtk/features/comp1Slice';
import { getTeachers } from './rtk/features/comp2Slice';
import { COMPONENTS_FUNCTIONALITY, Status } from './interfaces/utilInterface';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
// import Comp1 from '../src/components/comp1/comp1';
import ScrollExample from '../src/components/scroll-example/scrollExample';

function App() {
  const dispatch = useAppDispatch();

  const { students } = useAppSelector(state => state.comp1);
  const { teachers } = useAppSelector(state => state.comp2);
  const { components } = useAppSelector(state => state.apiStatus)

// console.log(components['comp1_students'].status);
  useEffect(() => {
    dispatch(getStudents());
    dispatch(getTeachers());
  },[dispatch]);

  const renderStudents = () => {
      if(students && components && Object.entries(components).length > 0) {
        return components[COMPONENTS_FUNCTIONALITY.COMP1_STUDENTS].status === Status.LOADING ? <CircularProgress /> : students && students.map(student => (<div className='items' key={student}>{student}</div>))
      }
  }

  const renderTeachers = () => {
    if(teachers && components && Object.entries(components).length > 0) {
      return components[COMPONENTS_FUNCTIONALITY.COMP2_TEACHERS].status === Status.LOADING ? <CircularProgress /> : teachers && teachers.map(teacher => (<div className='items' key={teacher}>{teacher}</div>))
    }
}

  return (
    <div className='container'>
      {/* <Box className='item'>
        {renderStudents()}
      </Box>
      <Box className='item'>
        {renderTeachers()}
      </Box> */}
      <Box className='item'>
        <ScrollExample />
      </Box>
    </div>
  );
}

export default App;

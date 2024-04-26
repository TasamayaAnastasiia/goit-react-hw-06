import { useState, useEffect } from 'react';
import { Task } from '../Task/Task.jsx';


export const TaskList = ({task}) => {
    const[list, setList] = useState([]);

    useEffect(() => {
        setList([...list, task]);
      }, [task]);
   
    return (
        list.length !== 0 && ( <Task tasks={list}/> )
    )
};
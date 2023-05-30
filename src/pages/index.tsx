import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Dashboard from '../components/Dashboard';
import { Task } from '../interfaces/Task';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title: string, timeRequired: number) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      timeRequired,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalHours = tasks.reduce((sum, task) => sum + task.timeRequired, 0);

  return (
    <>
    <Head>
        <title>Task Management App | Ramazan Azimli</title>
        <meta name="description" content="Ramazan Azimli | Task Management App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <div className='task-interface'>
      <h1 className='first-content'>Task Management App</h1>
      <h3 className='creator-content'>Developed by <a href="https://rmzn.netlify.app" target='_blank'>Ramazan Azimli</a></h3>
    <div>
      <Dashboard totalTasks={tasks.length} totalHours={totalHours} /> 
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
    </div>
    </>
  );
};

export default Home;

import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle.length > 0){
      const newTask: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      setTasks(currentTasks => [...currentTasks, newTask])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const newTaskList = tasks;
    newTaskList.map(task => {
      if(task.id === id){
        task.done = true;
      }
    }
    );

    

    setTasks([...newTaskList]);
  }

  function handleRemoveTask(id: number) {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}
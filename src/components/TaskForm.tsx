import React, { useState } from 'react';

interface TaskFormProps {
  onSubmit: (title: string, timeRequired: number) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [timeRequired, setTimeRequired] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!title || title.length > 128) {
      setError('Task title must be between 1 and 128 characters.');
      return;
    }
  

    const time = parseFloat(timeRequired);
    if (isNaN(time) || time < 0 || time > 24) {
      setError('Time required must be a number between 0 and 24.');
      return;
    }

    onSubmit(title, time);
    setTitle('');
    setTimeRequired('');
    setError('');
  };

  return (
    <div className='task-form'>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Task Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="timeRequired">Time Required (0-24):</label>
            <input
              type="text"
              id="timeRequired"
              value={timeRequired}
              onChange={(e) => setTimeRequired(e.target.value)}
            />
         </div>
         <div>
              <button type="submit">Add</button>
         </div>
    </form>
    {error && <div className='error-action'>{error}</div>}
  </div>
  );
};

export default TaskForm;

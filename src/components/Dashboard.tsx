import React from 'react';

interface DashboardProps {
  totalTasks: number;
  totalHours: number;
}

const Dashboard: React.FC<DashboardProps> = ({ totalTasks, totalHours }) => {
  const totalDays = parseFloat((totalHours / 8).toFixed(2));

  return (
    <div className='dashboard'>
      <div className='dash-item'>Total Tasks: <br /> <b>{totalTasks}</b></div>
      <div className='dash-item'>Total Days: <br /> <b>{totalDays}</b></div>
      <div className='dash-item'>Total Hours: <br /> <b>{totalHours}</b></div>
    </div>
  );
};

export default Dashboard;

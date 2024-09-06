import React from 'react';
import UsersTable from './UsersTable';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management System</h1>
      </header>
      <UsersTable />
    </div>
  );
}

export default App;

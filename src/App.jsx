import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import { mockData } from './data/mockData';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(() => localStorage.getItem('kanban_groupBy') || 'status');
  const [sortBy, setSortBy] = useState(() => localStorage.getItem('kanban_sortBy') || 'priority');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTickets(mockData.tickets);
      setUsers(mockData.users);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading your workspace...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Board
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App; 
export const STATUS_ORDER = ['To Do', 'In Progress', 'Pending', 'Completed'];

export const PRIORITY_ORDER = [
  { value: 4, label: 'Urgent', icon: '🔴' },
  { value: 3, label: 'High', icon: '🟠' },
  { value: 2, label: 'Medium', icon: '🟡' },
  { value: 1, label: 'Low', icon: '🔵' },
  { value: 0, label: 'No priority', icon: '⚪' }
];

export const groupTickets = (tickets, groupBy, users) => {
  const groups = {};

  if (groupBy === 'status') {
    STATUS_ORDER.forEach(status => {
      groups[status] = tickets.filter(ticket => ticket.status === status);
    });
  } else if (groupBy === 'user') {
    users.forEach(user => {
      groups[user.name] = tickets.filter(ticket => ticket.userId === user.id);
    });
  } else if (groupBy === 'priority') {
    PRIORITY_ORDER.forEach(({ value, label }) => {
      groups[label] = tickets.filter(ticket => ticket.priority === value);
    });
  }

  return groups;
};

export const sortTickets = (tickets, sortBy) => {
  return [...tickets].sort((a, b) => {
    if (sortBy === 'priority') {
      return b.priority - a.priority;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
};

export const getPriorityIcon = (priority) => {
  return PRIORITY_ORDER.find(p => p.value === priority)?.icon || '⚪';
};

export const getStatusColor = (status) => {
  const colors = {
    'To Do': '#e8e4ff',
    'In Progress': '#fff4e6',
    'Pending': '#fff9e6',
    'Completed': '#e6f4ff'
  };
  return colors[status] || '#f5f5f5';
};

export const getStatusIcon = (status) => {
  const icons = {
    'To Do': '⚪',
    'In Progress': '🟠',
    'Pending': '🟡',
    'Completed': '✓'
  };
  return icons[status] || '●';
};
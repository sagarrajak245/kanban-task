import Card from '../Card/Card';
import './Column.css';

const Column = ({ title, tickets, groupBy, users, color }) => {
    return (
        <div className="column" style={{ backgroundColor: color }}>
            <div className="column-header">
                <div className="column-title-section">
                    <span className="column-icon">
                        {groupBy === 'status' && '⚪'}
                        {groupBy === 'user' && '👤'}
                        {groupBy === 'priority' && '🎯'}
                    </span>
                    <span className="column-title">{title}</span>
                    <span className="ticket-count">{tickets.length}</span>
                </div>
                <div className="column-actions">
                    <button className="icon-btn">+</button>
                    <button className="icon-btn">⋯</button>
                </div>
            </div>

            <div className="cards-container">
                {tickets.map((ticket) => (
                    <Card
                        key={ticket.id}
                        ticket={ticket}
                        groupBy={groupBy}
                        users={users}
                    />
                ))}

                <button className="add-task-btn">
                    <span>+</span> Add Task
                </button>
            </div>
        </div>
    );
};

export default Column;
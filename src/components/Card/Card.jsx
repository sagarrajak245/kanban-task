import { getPriorityIcon } from '../../utils/grouping';
import './Card.css';

const Card = ({ ticket, groupBy, users }) => {
    const getUserById = (userId) => {
        return users.find(user => user.id === userId);
    };

    const assignedUser = getUserById(ticket.userId);

    return (
        <div className="card">
            <div className="card-header">
                <span className="card-id">{ticket.id}</span>
                {groupBy !== 'user' && assignedUser && (
                    <div className="card-avatar-wrapper">
                        <img
                            src={assignedUser.avatar}
                            alt={assignedUser.name}
                            className="card-avatar"
                        />
                        <span className={`availability-dot ${assignedUser.available ? 'online' : 'offline'}`}></span>
                    </div>
                )}
            </div>

            <div className="card-title">{ticket.title}</div>

            {ticket.description && (
                <div className="card-description">{ticket.description}</div>
            )}

            {ticket.assignedUsers && ticket.assignedUsers.length > 1 && (
                <div className="card-avatars">
                    {ticket.assignedUsers.slice(0, 3).map((user, idx) => (
                        <img
                            key={user.id}
                            src={user.avatar}
                            alt={user.name}
                            className="card-avatar-small"
                            style={{ marginLeft: idx > 0 ? '-8px' : '0' }}
                            title={user.name}
                        />
                    ))}
                    {ticket.assignedUsers.length > 3 && (
                        <div className="card-avatar-small avatar-more">
                            +{ticket.assignedUsers.length - 3}
                        </div>
                    )}
                </div>
            )}

            <div className="card-footer">
                {groupBy !== 'priority' && (
                    <div className="priority-badge">
                        <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
                    </div>
                )}

                {ticket.tag && ticket.tag.map((tag, idx) => (
                    <div key={idx} className="card-tag">
                        <span className="tag-dot">●</span> {tag}
                    </div>
                ))}
            </div>

            <div className="card-date">
                <span className="date-icon">📅</span>
                <span>{ticket.dueDate}</span>
                {ticket.hasTime && (
                    <button className="time-btn">+ Time</button>
                )}
            </div>
        </div>
    );
};

export default Card;
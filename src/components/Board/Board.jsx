import { useMemo } from 'react';
import { getStatusColor, groupTickets, sortTickets } from '../../utils/grouping';
import Column from '../Column/Column';
import './Board.css';

const Board = ({ tickets, users, groupBy, sortBy }) => {
    const sortedTickets = useMemo(() => {
        return sortTickets(tickets, sortBy);
    }, [tickets, sortBy]);

    const groupedTickets = useMemo(() => {
        return groupTickets(sortedTickets, groupBy, users);
    }, [sortedTickets, groupBy, users]);

    return (
        <div className="board">
            {Object.entries(groupedTickets).map(([groupName, groupTickets]) => (
                <Column
                    key={groupName}
                    title={groupName}
                    tickets={groupTickets}
                    groupBy={groupBy}
                    users={users}
                    color={groupBy === 'status' ? getStatusColor(groupName) : '#f9fafb'}
                />
            ))}
        </div>
    );
};

export default Board; 
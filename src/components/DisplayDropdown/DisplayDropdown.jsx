import { useState } from 'react';
import './DisplayDropdown.css';

const DisplayDropdown = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown-wrapper">
            <button
                className="display-btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="display-icon">⚙️</span>
                <span>Display</span>
                <span className="chevron">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-row">
                        <label className="dropdown-label">Grouping</label>
                        <select
                            value={groupBy}
                            onChange={(e) => {
                                setGroupBy(e.target.value);
                                localStorage.setItem('kanban_groupBy', e.target.value);
                            }}
                            className="dropdown-select"
                        >
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>

                    <div className="dropdown-row">
                        <label className="dropdown-label">Ordering</label>
                        <select
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value);
                                localStorage.setItem('kanban_sortBy', e.target.value);
                            }}
                            className="dropdown-select"
                        >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DisplayDropdown; 
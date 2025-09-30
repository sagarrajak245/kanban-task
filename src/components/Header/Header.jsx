import DisplayDropdown from '../DisplayDropdown/DisplayDropdown';
import './Header.css';

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
    return (
        <header className="header">
            <div className="header-left">
                <div className="view-tabs">
                    <button className="view-tab">
                        <span>☰</span> List View
                    </button>
                    <button className="view-tab active">
                        <span>⊞</span> Kanban
                    </button>
                </div>
            </div>

            <div className="header-right">
                <DisplayDropdown
                    groupBy={groupBy}
                    setGroupBy={setGroupBy}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
                <button className="filter-btn">
                    <span>▼</span> Filter
                </button>
                <button className="new-event-btn">
                    <span>+</span> New Event
                </button>
            </div>
        </header>
    );
};

export default Header; 
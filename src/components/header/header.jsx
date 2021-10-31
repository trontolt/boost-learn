import { useEffect } from 'react';
import './header.css';
import Filter from './filter/filter';
const Header = props => {
    const { title, shortDesc, description } = props.taskData;
    const { setActiveTab, activeTab, filterAction } = props;

    useEffect(() => {
        document.getElementsByClassName('header-content')[0].innerHTML =
            `<b>${title}</b> ` +
            shortDesc +
            "<hr class='separate-line'>" +
            (description ? description : '');
    }, [title, shortDesc, description, activeTab]);

    return (
        <div className="header-container">
            <div className="dash">
                <div className="left-tabs">
                    <button
                        className={`tablinks  ${
                            activeTab === 0 ? 'active' : ''
                        }`}
                        onClick={() => {
                            setActiveTab(0);
                        }}
                    >
                        JS
                    </button>
                    <button
                        className={`tablinks  ${
                            activeTab === 1 ? 'active' : ''
                        }`}
                        onClick={() => {
                            setActiveTab(1);
                        }}
                    >
                        React
                    </button>
                </div>
                <div className="right-filters">
                    <Filter filterAction={filterAction} />
                </div>
                <div className="right-menu">
                    <button
                        className="tablinks"
                        onClick={() => {
                            console.log('menu');
                        }}
                    >
                        Some menu
                    </button>
                </div>
            </div>
            <div className="header-content"></div>
        </div>
    );
};

export default Header;

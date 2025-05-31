import './Topbar.css';

function Topbar({ onClick }) {

    return (
        <div className="top-bar-container">
            <div className="top">
                <div className="left-content">
                    <div className="back-prev-icon">
                        <i className="fa-solid fa-arrow-left"></i>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="heading">
                        <p>File system</p>
                    </div>
                </div>
                <div onClick={onClick}  className="right-container">
                    <i className="fa-solid fa-folder-plus"></i>
                </div>
            </div>
            <div className="bottom">
                <input className="path-container" type="text" value="File System > Videos > Course" />
            </div>
        </div>
    )
}

export default Topbar;
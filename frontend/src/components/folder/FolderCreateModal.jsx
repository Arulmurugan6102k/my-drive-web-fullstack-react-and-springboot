
import './FolderCreateModal.css';

function FolderCreateModal({ handleCreateFolder, folderName, setFolderName, onClose }) {

    return (
        <div className="create-folder-modal-background-overlay">
            <div className="create-folder-modal-conatiner">
                <div className="top">
                    <button onClick={onClose}>Cancel</button>
                    <p>New Folder</p>
                    <button onClick={handleCreateFolder}>Create</button>
                </div>
                <div className="bottom">
                    <p>Folder name</p>
                    <input 
                    type = "text"
                    value = {folderName}
                    onChange = { (e) => setFolderName(e.target.value)}
                     />
                </div>
            </div>
        </div>
    )
}

export default FolderCreateModal;
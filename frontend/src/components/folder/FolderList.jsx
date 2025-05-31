import './Folder.css';
import FolderIcon from '../../assets/images/folder_icon.png';

function FolderList({foldersData}) {

    return (
        <div>
            <div className='main-folders-container'>
            {foldersData.map((folderData, index) => (
                <div className="folder-container" role="button" aria-label="Folder">
                    <div className="folder-image-container">
                        <img className="folder-image" src={FolderIcon} alt="Folder Icon" />
                    </div>
                    <div className="folder-input-container">
                        <input type="text" value={folderData.folderName} />
                    </div>
                </div>

))}
            </div>

        </div>
    )
}
export default FolderList;
import { useState,useEffect } from 'react';
import FolderList from './components/folder/FolderList';
import Topbar from './components/topbar/TopBar';
import FolderCreateModal from './components/folder/FolderCreateModal';
import {createFolder, getFolders} from './api/folderApi'

function App() {

  const [showCreateFoldeModal, setShowCreateFoldeModal] = useState(false);
  const [folderData, setFolderData] = useState('');
  const [foldersData, setFoldersData] = useState([]);

  const toggleCreateFolderModalShow = () => {
    setShowCreateFoldeModal(!showCreateFoldeModal)
  }

  // Create folders
  const handleCreateFolder = async () => {
    const data = {
      folderName: folderData,
      parentId: 0,
      path: '/',
      level: 0,
      description: 'Default folder',
      isActive: true,
    }

    try {
      await createFolder(data);
      setShowCreateFoldeModal(!showCreateFoldeModal)
    } catch (error) {
      console.error('Error creating folder : ', error)
    }

  }

  // Get folders
  const handleGetFolderData = async () => {
      try {
          const response = await getFolders();
          setFoldersData(response.data)
      } catch (error) {
          console.error('Error fetching folders data : ', error)
      }
  }

  useEffect(() => {
      handleGetFolderData();
  },[showCreateFoldeModal]);

  return (
    <>
      {showCreateFoldeModal &&
        <  FolderCreateModal 
        handleCreateFolder={handleCreateFolder} 
        folderName={folderData} 
        setFolderName={setFolderData} 
        onClose={toggleCreateFolderModalShow}
         />
      }
      <Topbar onClick={toggleCreateFolderModalShow} />
      <FolderList 
      foldersData = {foldersData}
       />
    </>
  )
}

export default App

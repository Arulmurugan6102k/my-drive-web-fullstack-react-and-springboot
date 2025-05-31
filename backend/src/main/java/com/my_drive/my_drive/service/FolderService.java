package com.my_drive.my_drive.service;

import com.my_drive.my_drive.model.Folder;
import com.my_drive.my_drive.repository.FolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.lang.Integer;


@Service
public class FolderService {
    @Autowired
    private FolderRepository folderRepository;

    public Folder saveFolder(Folder folder){
        return folderRepository.save(folder);
    }

    public List<Folder> getAllFolders(){
        return folderRepository.findAll();
    }

    public Folder editFolder(Integer id, Folder updatedFolder) {
        Folder folder = folderRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Folder not found with id " + id));

        folder.setFolderName(updatedFolder.getFolderName());
        folder.setDescription(updatedFolder.getDescription()); 

        return folderRepository.save(folder);   
    }

    public void deleteFolder(Integer id) {
        Folder folder = folderRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Folder not found with id " + id));
        folderRepository.delete(folder);    
    }
}
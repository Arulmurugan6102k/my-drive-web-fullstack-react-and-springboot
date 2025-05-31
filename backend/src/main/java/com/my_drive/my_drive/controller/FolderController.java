package com.my_drive.my_drive.controller;

import com.my_drive.my_drive.model.Folder;
import com.my_drive.my_drive.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.lang.Integer;


@RestController
@RequestMapping("/api/folders")
public class FolderController {
    @Autowired
    private FolderService folderService;

    // POST /api/folders
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Folder createFolder(@RequestBody Folder folder) {
        return folderService.saveFolder(folder);
    }

    //GET /api/folders/
    @GetMapping
    public List<Folder> getFolders(){
        return folderService.getAllFolders();
    }

    // PUT api/folders/{id}
    @PutMapping("/{id}")
    public Folder updateFolder(@PathVariable Integer id, @RequestBody Folder updatedFolder) {
        return folderService.editFolder(id, updatedFolder);
    }

    // DELETE api/folders/{id}
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFolder(@PathVariable Integer id) {
        folderService.deleteFolder(id);
    }




}
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UploadService } from 'src/app/services/upload.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  roles: string[];
  isLoggedIn = false;
  username: string;
  id: number;
  description: string;
  currentFileUpload: File;
  currentUser: any;

  constructor(private uploadService: UploadService, private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService) { }

  x: Observable<any>;
  fileInfos: Observable<any>;
  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = user.username;
      this.id = user.id;
    }
    
  }
  isSuccessful=false;
  uploadfile() {


    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.uploaddetails(this.currentFileUpload, this.id).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);

      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
      }
    
      this.isSuccessful = true;

      //     this.fileInfos = this.uploadService.uploadfichier(this.fileName);

    },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  

  // latest snapshot
  public imagePath;
  imgURL: any;
  fileName: any;
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.item(0).name);
    
    this.selectedFiles = event.target.files;

        if (event.target.files.length > 0)
        {
          const file = event.target.files[0];


          var reader = new FileReader();

        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
      
        }
}





  }}
















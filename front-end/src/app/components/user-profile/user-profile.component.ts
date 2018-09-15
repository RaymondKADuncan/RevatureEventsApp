import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ImageService } from '../../services/image.service';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private selectedFiles: FileList;
  private user: User;

  constructor(
    private image: ImageService,
    private context: ContextService
  ) { }

  ngOnInit() {
    const user = this.context.getUser();
    if (user === null) {
      console.log('User not received from context');
    } else {
      this.user = user;
    }
  }

  uploadImage() {
    const file = this.selectedFiles.item(0);
    this.image.uploadUserProfileImage(file, this.user.username);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}

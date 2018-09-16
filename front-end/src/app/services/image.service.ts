import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

import { properties } from '../app.properties';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private FOLDER = 'profile-images/';

  constructor() { }

  private getS3Bucket(): any {
    const bucket = new S3(
      {
        accessKeyId: properties.awsAccessKeyId,
        secretAccessKey: properties.awsSecretAccessKey,
        region: properties.awsRegion
      }
    );
    return bucket;
  }

  uploadUserProfileImage(file: File, username: String) {
    const bucket = this.getS3Bucket();

    const params = {
      Bucket: properties.awsS3Bucket,
      Key: this.FOLDER + `${username}/` + file.name,
      Body: file,
      ACL: properties.awsS3ACL
    };

    return bucket.upload(params, function(err, data) {
      if (err) {
        console.log('There was an error uploading the photo');
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}

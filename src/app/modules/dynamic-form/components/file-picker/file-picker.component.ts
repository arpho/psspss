import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {

  constructor(private imagePicker:ImagePicker) { }
  chooseFile(){
    const options:ImagePickerOptions={maximumImagesCount:1,
    allow_video:false,
  title:"picture"}
    console.log('ciao')
    this.imagePicker.getPictures(options
      
    ).then(uri=>console.log('picture',uri)).catch(e=>console.error(e))
  }

  ngOnInit() {}

}

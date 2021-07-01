import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {

  constructor(private fileChooser:FileChooser) { }
  chooseFile(){
 
    console.log('ciao')
    this.fileChooser.open().
    then(uri=>console.log(uri? uri:'canceled')).
    catch(e=>console.error(e))
    
  }

  ngOnInit() {}

}

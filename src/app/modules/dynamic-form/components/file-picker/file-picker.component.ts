import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {
  

  constructor(fileChooser:File) { }
  chooseFile(){
 
    console.log('ciao')
 
    
  }

  ngOnInit() {}

}

import { Component } from '@angular/core';
import { CSVBoxMethods } from "angular-adapter"

@Component({
  selector: 'app-root',
  template: `
    <csvbox-button
      [licenseKey]="licenseKey"
      [user]="user"
      [dynamicColumns]="dynamicColumns"
      [onImport]="onData.bind(this)"
      [onSubmit]="onSubmit.bind(this)"
      [onClose]="onClose.bind(this)"
      [onReady]="onReady.bind(this)">
      Import
    </csvbox-button>
  `
})
export class AppComponent implements CSVBoxMethods {

  title = 'example';
  licenseKey = '3HRBJvxsxEkHncXTmC43zbsCCS8DVZ';
  user = { user_id: 'default123' };
  dynamicColumns = [
    // {
    //   column_name: 'col2',
    //   type: 'text'
    // }
  ];

  onData(result: boolean, data: any) {
    console.log("result", result, "data", data)
    if(result) {
      console.log("Sheet uploaded successfully");
      console.log(data.row_success + " rows uploaded");
    }else{
      console.log("There was some problem uploading the sheet");
    }
  }

  onClose(){
    console.log("onClose");
  }

  onSubmit(data){
    console.log("onSubmit");
    console.log(data);
  }

  onReady(){
    console.log("onReady");
  }

}

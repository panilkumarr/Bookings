import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  reserveForm: any;
  constructor(private ds:DataService,private dialog:MatDialog,@Inject ( MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  onNo()
{
  setTimeout(
    function()
    {
      location.reload();
    },1000);
  

}
onOk()
  {
    // console.log(this.data)
    // this.ds.deleteData(this.data.SlNo);
    // //window.location.reload();
    // setTimeout(function(){
    //   location.reload();
    // },1000);
    // console.log("ok");
    
    // window.location.reload();
    this.data.patchValue({
      SlNo:this.data.SlNo
    })
    this.ds.deleteData(this.data.SlNo).subscribe();
    setTimeout(
     function()
     {
       location.reload();
     },1000);
  }



}

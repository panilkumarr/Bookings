import { DecimalPipe } from '@angular/common';
import { Component, AfterViewInit,ViewChild, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
 
import {MatSort} from '@angular/material/sort';
 
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddComponent } from '../add/add.component'; 
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DeleteComponent } from '../delete/delete.component';
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit{
  loginForm!: FormGroup;
  // data: any =new MatTableDataSource();
  displayedColumns: string[] = ['SlNo', 'Hotel', 'Arrival', 'Departure','Type','Guests','price','Manage'];
  datasource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  // dataSource = ELEMENT_DATA;

  constructor( private dialog: MatDialog,private ds:DataService,private route:Router,private _liveAnnouncer: LiveAnnouncer) {
  }
  List:any=[];
  ngOnInit() { 
    this.ds.getData().subscribe((data: any)=>{
      //this.List=data;
    // });
      this.datasource=new MatTableDataSource(data)
    this.datasource.sort = this.matsort;
    this.datasource.paginator = this.paginator;
    })

  }
  logout(){
    this.route.navigate(['']);
  }
  openDialog(){
    this.dialog.open(AddComponent,{
      height:"70%",
      width:"30%"
    });
  }
  openEdit(value: any){
    this.dialog.open(AddComponent,{
      height:"70%",
      width:"30%",
      data:value
    });
  }

  openDelete(value:any){
    this.dialog.open(DeleteComponent,{
      height:"30%",
      width:"50%",
      data:value
    });
    console.log(value)
  }
  filterData($event:any){
    this.datasource.filter=$event.target.value;
  }


         
}


 
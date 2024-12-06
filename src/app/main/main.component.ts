import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { CustomDialogComponent } from '../shared/custom-dialog/custom-dialog.component';
import { NetworkService } from '../services/network.service';

export interface Article {
  id:string
  title: string;
  body: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  data: Array<Article> = [];
  constructor(
    public dialog: MatDialog,
    public networkService: NetworkService
  ) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.networkService.isAdded.subscribe({
      next: (res) => {
        this.getData();
      },
    });
  }

  getData() {
    this.networkService.getArticles().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res;
      },
    });
  }

  openDialog(type:string,id?:string): void {

    this.networkService.formType.next(type);
    if(type=='edit'){
      this.networkService.articleId=id;
    }

    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {formType: type},
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

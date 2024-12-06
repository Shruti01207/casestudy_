import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { CustomDialogComponent } from '../shared/custom-dialog/custom-dialog.component';

export interface Article {
  title: string;
  body: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  data: Array<Article> = [
    {
      title: 'The Rise of AI in Everyday Life',
      body: 'Artificial intelligence is transforming the way we live, work, and communicate. From virtual assistants to self-driving cars, AI is becoming an integral part of our daily routines.',
    },
    {
      title: '10 Tips for Healthy Living',
      body: 'A balanced diet, regular exercise, and adequate sleep are essential for maintaining a healthy lifestyle. This article explores practical tips to help you achieve overall wellness.',
    },
    {
      title: "Exploring the Cosmos: A Beginner's Guide",
      body: 'The universe is vast and full of wonders. This guide introduces the basics of astronomy, from stargazing techniques to understanding constellations and celestial events.',
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: { name: 'shruti', animal: 'dog' },
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

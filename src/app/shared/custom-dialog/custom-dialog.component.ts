import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css'],
})
export class CustomDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    public networkService: NetworkService
  ) {}

  ngOnInit(): void {
    this.networkService.isAdded.next(false);
    this.networkService.isAdded.subscribe({
      next: (res) => {
        if(res==true)
        this.dialogRef.close();
      },
    });
  }
}

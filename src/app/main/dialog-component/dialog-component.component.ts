import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponent {

  myForm: FormGroup;


constructor(private networkService: NetworkService,private fb: FormBuilder) {
  this.myForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  });
}



addArticle( ){
  console.log("this.myForm.value=",this.myForm.value);
  
  this.networkService.addArticles(this.myForm.value).subscribe({
    next:(res)=>{
      console.log("res=",res);
      this.networkService.isAdded.next(true);     
    }
  })
}

close( ){
  this.networkService.isAdded.next(true);
}

}

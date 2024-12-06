import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponent implements OnInit{

  myForm: FormGroup;
  flag:boolean=true;
  id:string="";
constructor(private networkService: NetworkService,private fb: FormBuilder) {
  this.myForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  });
}

 ngOnInit(): void {
   this.networkService.formType.subscribe({
     next:(res)=>{
      console.log(res);
      if(res=='add'){
       this.flag=true;
      }
      else{
        this.flag=false;
        this.getFormValue( );
      }
     }
   })
 }
 action(){
  if(this.flag==true){
    this.addArticle( );
  }
  else{
    this.editArticle( );
  }
 }

 getFormValue( ){
  this.id= this.networkService.articleId;
  this.networkService.getArticleById(this.id).subscribe({
    next:(res)=>{
      console.log("res=",res);
      this.myForm.patchValue(res[0]);
    }
  })
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

editArticle( ){
  this.networkService.editArticle(this.myForm.value,this.id)
  .subscribe({
    next:(res)=>{
      console.log(res);
      this.close( );
    }
  })


}

close( ){
  console.log("close");
  this.networkService.isAdded.next(true);
}

}

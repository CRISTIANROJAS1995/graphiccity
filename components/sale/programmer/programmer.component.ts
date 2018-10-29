import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateRoutesService } from '../../../services/common/validate-routes.service';
import { CallingRestServices } from '../../../services/common/calling-rest.services';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styles: []
})
export class ProgrammerComponent implements OnInit {
  
  private dataServices = {
    status:'1'
  }

  private data = []

  private idForModal = 0;
  
  private isEdit = "true";

  permissions;
  isPermissions:boolean;
  constructor(private toastr: ToastrService,private _callingServices:CallingRestServices,private router:Router, private _validateRoute: ValidateRoutesService) { }

  getPermissions(){
    this.permissions = JSON.parse(sessionStorage.getItem("access"));
  }

  ngOnInit() {
    this.getPermissions();
    this.getQuoatations();
    this.isPermissions = this._validateRoute.validateRoutes(this.permissions, this.router.url);
    console.log(this.isPermissions);

/*
    if(this.isPermissions === false || this.isPermissions === undefined || this.isPermissions === null){
        this.router.navigateByUrl("/login");
        console.log(this.isPermissions);
    }
  */ 
  }

  changeStatus(idquotation:Number,idStatus:Number){
    let guid = JSON.parse(sessionStorage.getItem("userG"));
    this._callingServices.PostService(environment.portSale, '/api/Programmer/ChangeQuotationStatus', {

      itemsQuotation:[{
        q_id:idquotation,
        q_id_quotation_state:idStatus
      }],
      uguid: guid

    }).subscribe((_data)=>{

      if(_data.success == true){
        this.toastr.success(_data.message);
        console.log(_data);
        this.data = _data.quotations;

      }else{
        this.toastr.error("Algo fallo al intentar cambiar el estado de la solicitud");
        console.log("Oppps algo fallo");
        
      }
    });
  }

  addObservation(idQuotation:Number,text:String){
    this._callingServices.PostService(environment.portSale,'/api/Programmer/changeStatus',{"idQuotation":idQuotation,"text":text}).subscribe((_data)=>{
      if(_data.success == true){
        console.log("Se agrego la observacion");
        this.data = _data.quotations;
      }else{
        console.log("Algo salio mal");
      }
    })
  }

  getQuoatations(){
    this._callingServices.PostService(environment.portSale,'/api/Programmer/Getquotations',this.dataServices).subscribe((_data) =>{
      if(_data.success == true){
        console.log("Bro funka!")
        this.data = _data.quotations;
        console.log(this.data);
      }else{
        console.log("Sorry bro is false")
      }
    });
  }

}

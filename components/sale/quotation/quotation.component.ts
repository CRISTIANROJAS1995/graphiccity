
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

// Import Componets
import { ModalQuotationComponent } from '../modals/modal-quotation/modal-quotation.component';

// Import Service
import { ValidateRoutesService } from '../../../services/common/validate-routes.service';
import { CallingRestServices } from '../../../services/common/calling-rest.services';
import { ProductSelectService } from '../../../services/quotation/product-select.service';
import { PriceProductMockService } from '../../../services/quotation/price-product-mock.service';

// Import Entities
import { CustomerInformation } from '../../../entities/sale/customer-information';
import { ProductResponse } from '../../../entities/sale/product-response';
import { Quotation } from '../../../entities/sale/quotation';

// Import external
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})

export class QuotationComponent implements OnInit {

  constructor(
    private router: Router,
    private _validateRoute: ValidateRoutesService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _callingRestServices: CallingRestServices,
    private _productSelectService: ProductSelectService,
    private _priceProductMockService: PriceProductMockService,
    private toastr: ToastrService
  ) {
    this.createFormProduct();
    this.createFormQuotation();
  }

  // Product Variables
  frmProduct: FormGroup;
  frmQuotation: FormGroup;
  usersForm: FormGroup;
  validFieldAmount = false;
  validFieldSaleValue = false;

  // Custormer Information variables
  answer: any;
  answerProduct: any;
  validFertilizer: any = {
    value: 0,
    valid: false
  };

  // Permissions variables
  permissions;
  isPermissions: boolean;

  listClient: any[] = [];
  errorMessage: string;

  listPricePaper: any[] = [];
  listPricePlancha: any[] = [];
  listPriceImpresion: any[] = [];

  validselectClient = false;
  validSelectProduct = false;

  // Entity type listings
  listCustomerInformation: CustomerInformation[] = [];

  // Entities
  modelCustomerInformation: CustomerInformation;
  requestCustomerInformation: object = { Filter: null };
  requestProduct: object = { Filter: null };
  requestEmail: object = { EmailToAddress: null, Subject: null, Body: null };
  responseProduct: ProductResponse[] = [];
  listProductsQuotation: any[] = [];
  viewQuotation: ProductResponse[] = [];
  objQuotation: Quotation;
  requestQuotation: { itemsQuotation: Quotation[], cguid: string, uguid: string };

  optionsModalProduct: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    keyboard: false
  };
  
  // Initial Entities
  initializeEntities(param?: number) {

    // Value Param 1 = CustomerInformation, 2 = Products
    switch (param) {
      case 1:

        this.modelCustomerInformation = {
          id: null,
          guid: null,
          name: null,
          identificationNumber: null,
          identificationType: null,
          email: null,
          cellphone: null,
          phone: null,
          address: null,
          filterInfClient: null
        };

        break;

      case 2:

        this.requestProduct = {
          filter: null
        };

        break;

      case 3:

        this.requestQuotation = {
          itemsQuotation: [],
          cguid: null,
          uguid: null
        };

        this.objQuotation = {
          q_id_product: null,
          q_amount: null,
          q_sale_value: null,
          q_percentage_profit: null,
          q_sale_value_final: null
        };

        break;
    }

  }

  keyPressNumber(event: any) {

    //const pattern = /^[1-9999]$/;
      const pattern = /^[0-9]+/;
      let inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
  }

  // Events
  ngOnInit() {

    this.usersForm = this.formBuilder.group({
      users: this.formBuilder.array([
        this.formBuilder.group({
          address: [null, [Validators.required]],
          phone: [null, [Validators.required]]
        })
      ])
    });

    this.initializeEntities(1);
    this.initializeEntities(2);
    this.initializeEntities(3);
    this.getPermissions();

    //Get prices
    this.listPricePaper = this._priceProductMockService.getProduct(1);
    this.listPricePlancha = this._priceProductMockService.getProduct(2);
    this.listPriceImpresion = this._priceProductMockService.getProduct(3);

    // Permissions
    this.isPermissions = this._validateRoute.validateRoutes(this.permissions, this.router.url);
    if (this.isPermissions === false || this.isPermissions === undefined || this.isPermissions === null) {
      this.router.navigateByUrl('/login');
    }

  }

  private createFormProduct() {
    this.frmProduct = this.formBuilder.group({
      searchProduct: [null]
    });
  }

  private createFormQuotation() {
    this.frmQuotation = this.formBuilder.group({
      name: [null],
      productType: [null],
      inventoryId: [null],
      attributes: [null],
      deserializeAttributes: [null],
      amount: [null, [Validators.required, Validators.pattern('^[0-9]+([,][0-9]+)?$')]],
      sale_value: [null]
    });
  }

  openFormModalProduct() {

    const modalRef = this.modalService.open(ModalQuotationComponent, this.optionsModalProduct);
    modalRef.componentInstance.id = 10;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  getPermissions() {
    this.permissions = JSON.parse(sessionStorage.getItem('access'));
  }

  getListFilterClients(value: string) {

    if (value !== undefined) {

      this.requestCustomerInformation = { Filter: value };
      this._callingRestServices.PostService(
        environment.portSale, '/api/Client/GetClient', this.requestCustomerInformation).subscribe(data => {

          if (data.success === true) {

            if (data.clients.length > 0) {
              this.clearDataClient();
              this.listCustomerInformation = data.clients;
            } else {
              this.toastr.error('No existen coincidencias del cliente solicitado.');
            }
          } else {
            this.toastr.error(data.message);
          }
        });
    }

  }

  getListFilterProducts(value: string) {

    if (value !== undefined) {

      this.validSelectProduct = false;
      this.requestProduct = { Filter: value };

      this._callingRestServices.PostService(environment.portSale, '/api/Product/FilterProducts', this.requestProduct).subscribe(data => {

        if (data !== undefined) {
          if (data.success === true) {

            if (data.products.length > 0) {

              this.responseProduct = data.products;

              // Deserialize attributes
              for (let i = 0; i < this.responseProduct.length; i++) {
                this.responseProduct[i].deserializeAttributes = JSON.parse(this.responseProduct[i].attributes);
              }
              console.log(this.responseProduct);
            } else {
              this.toastr.error('No existen coincidencias del producto solicitado.');
            }

          } else {
            this.toastr.error(data.message);
          }
        } else {
          console.log('Problemas de configuración de consumo de servicio.');
          this.toastr.error('Ocurrio un error en el sistema, favor validar con el administrador...');
        }


      });
    }

  }

  selectClient(identification: any) {

    this.answer = this.listCustomerInformation.find(function (e) { return e.identificationNumber === identification; });
    if (this.answer !== undefined) {

      this.validselectClient = true;

      this.modelCustomerInformation.name = this.answer.name;
      this.modelCustomerInformation.identificationNumber = this.answer.identificationNumber;
      this.modelCustomerInformation.identificationType = this.answer.identificationType;
      this.modelCustomerInformation.email = this.answer.email;
      this.modelCustomerInformation.cellphone = this.answer.cellphone;
      this.modelCustomerInformation.phone = this.answer.phone;
      this.modelCustomerInformation.address = this.answer.address;
      this.modelCustomerInformation.filterInfClient = null;
    } else {
      this.validselectClient = false;
    }

  }

  selectProduct(value: ProductResponse) {

    if (value !== undefined) {
      let valueSelect = this._productSelectService.addProduct(value);
      console.log(valueSelect);
      this.openFormModalProduct();
    }
  }

  submitCuotation() {

    if (this.viewQuotation.length > 0) {

      for (let i = 0; i < this.viewQuotation.length; i++) {

        this.objQuotation.q_id_product = this.viewQuotation[i].id;
        this.objQuotation.q_amount = this.viewQuotation[i].amount;
        this.objQuotation.q_sale_value = this.viewQuotation[i].sale_value;
        this.objQuotation.q_percentage_profit = this.viewQuotation[i].percentage_profit;

        if (
          this.viewQuotation[i].amount !== undefined &&
          this.viewQuotation[i].sale_value !== undefined &&
          this.viewQuotation[i].percentage_profit) {

          this.objQuotation.q_sale_value_final =
            ((this.viewQuotation[i].amount * this.viewQuotation[i].sale_value) + this.viewQuotation[i].percentage_profit);
        }

        this.listProductsQuotation.push(this.objQuotation);

        this.objQuotation = {
          q_id_product: null,
          q_amount: null,
          q_sale_value: null,
          q_percentage_profit: null,
          q_sale_value_final: null
        };

      }

      if (this.listProductsQuotation.length > 0) {

        this.requestQuotation.itemsQuotation = this.listProductsQuotation;
        this.requestQuotation.cguid = this.answer.guid;
        this.requestQuotation.uguid = 'eea9cb9fd9a441f29f43ad36040e665f';

        this._callingRestServices.PostService(
          environment.portSale, '/api/Quotation/SetQuotation', this.requestQuotation).subscribe(data => {

            if (data !== undefined) {
              if (data.success === true) {
                this.toastr.success(data.message);
              } else {
                this.toastr.error(data.message);
              }
            } else {
              console.log('Problemas de configuración de consumo de servicio.');
              this.toastr.error('Ocurrio un error en el sistema, favor validar con el administrador...');
            }

          });
      }
      this.initializeEntities(3);
    }
  }

  clearDataClient() {
    this.validselectClient = false;
    this.initializeEntities(1);
    this.listCustomerInformation = [];
  }

  makeFertilizer(value: number) {

    if (value === 1) {
      this.validFertilizer.value = 1;
    } else {
      this.validFertilizer.value = 0;
    }
  }

  totQuotation() {

    let acum = 0;
    if (this.viewQuotation.length > 0) {

      for (let i = 0; i < this.viewQuotation.length; i++) {
        if (this.viewQuotation[i].amount !== undefined && this.viewQuotation[i].sale_value) {
          acum = acum + ((this.viewQuotation[i].amount * this.viewQuotation[i].sale_value) +
            (((this.viewQuotation[i].amount * this.viewQuotation[i].sale_value) * this.viewQuotation[i].percentage_profit) / 100));
        }
      }
    }
    return acum;
  }

  deleteQuotationProduct(value) {

    if (value != null) {
      this.viewQuotation.splice(value, 1);
    }
  }



}

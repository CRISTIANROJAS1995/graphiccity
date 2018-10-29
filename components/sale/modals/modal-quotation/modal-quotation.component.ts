import { Component, Output, EventEmitter, Input, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Import Service
import { ProductSelectService } from '../../../../services/quotation/product-select.service';
import { PriceProductMockService } from '../../../../services/quotation/price-product-mock.service';

// Import Entities
import { ProductResponse } from '../../../../entities/sale/product-response';

// Mock Data
import { PrintMockDataService } from '../../../../services/quotation/printMock.service';
import { TypeFinishesService } from '../../../../services/quotation/typeFinishes.service';

@Component({
  selector: 'app-modal-quotation',
  templateUrl: './modal-quotation.component.html',
  styleUrls: ['./modal-quotation.component.css']
})
export class ModalQuotationComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private _productSelectService: ProductSelectService,
    private _priceProductMockService: PriceProductMockService,
    private _printMockData: PrintMockDataService,
    private _typeFinishesService: TypeFinishesService) {
    this.createForm();
  }

  subTotal = 0;
  frmProduct: FormGroup;
  productSelect: ProductResponse[] = [];
  typeFinishes: any[] = [];
  finishes: any[] = [];

  objMed = {
    pLadoMayor: null,
    pLadoMenor: null,
    cLadoMayor: null,
    cLadoMenor: null
  };
  objPrint = {
    valuePrintX: null,
    valuePrintY: null,
    valueMillar: null,
    valueProduct: null,
    typeInk: null,
    subTotal: 0
  };
  objTypeAcab = {
    name: null,
    format: null,
    valueMillar: null,
    valueSheet: null,
    valueMin: null
  }
  resultados: any[] = [];
  prueba = 0;
  ancho;
  calto;
  cancho;
  irpaso2;
  orienta;
  fila1: any[] = [];
  col1: any[] = [];
  sob_alto1: any[] = [];
  sob_ancho1: any[] = [];
  c_alto: any[] = [];
  c_ancho: any[] = [];
  fila_f: any[] = [];
  col_f: any[] = [];
  sob_alto_f: any[] = [];
  sob_ancho_f: any[] = [];
  c_alto_f: any[] = [];
  c_ancho_f: any[] = [];
  grafica: any[] = [];
  total1;
  grafica_f;
  grafica_f2;
  s2;
  a;
  b;
  c;
  d;
  a1;
  b1;
  c1;
  d1;
  style1;
  style2;
  uno = 0;
  alto;
  aux;
  aux2;
  pu;
  pd;
  alt;
  anc;
  l1;
  l2;
  tabla;
  g1;
  g2;
  an;
  w;
  con;
  tabla2;
  h;
  af;
  style;
  tablasec;
  tablasec2;
  tablasec3;
  tablappalH;
  tablafAlto;
  tablafAncho;
  tablappalAuxH;
  valueTotPaper = 0;
  valueTotPleg = 0;

  ngOnInit() {

    this.productSelect = this._productSelectService.getProduct();
    this.typeFinishes = this._typeFinishesService.getTypeFinishes();

    if (this.productSelect.length > 0) {

      this.objMed.cLadoMenor = this.productSelect[0].valueY;
      this.objMed.cLadoMayor = this.productSelect[0].valueX;

      // 70x100
      if (this.productSelect[0].typePaperSize === '1') {
        this.objMed.pLadoMenor = 70;
        this.objMed.pLadoMayor = 100;
      } else if (this.productSelect[0].typePaperSize === '2') {
        this.objMed.pLadoMenor = 60;
        this.objMed.pLadoMayor = 90;
      }

      //Asignar valores a sección de impresión.
      this.objPrint.valueMillar = this.productSelect[0].amount;
      this.objPrint.valuePrintX = this.productSelect[0].valuePrintX;
      this.objPrint.valuePrintY = this.productSelect[0].valuePrintY;

      this._productSelectService.removeProduct();
      this.calcular_corte();
    }
  }

  private createForm() {
    this.frmProduct = this.formBuilder.group({
      productName: '',
      cantidad: 0,
      valorUnitario: 0
    });
  }

  private submitForm() {
    this.activeModal.close(this.frmProduct.value);
  }

  keyPressNumber(event: any) {

    //const pattern = /^[1-9999]$/;
    const pattern = /^[0-9]+/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  estilo() {
    console.log('grafica_f:' + this.grafica_f);
    if (this.grafica_f === 1) {
      this.w = (this.ancho - this.sob_ancho_f[0]) / this.ancho;
      this.w = this.w * 100;
      this.w = Math.floor(this.w);

      let h = (this.alto - this.sob_alto_f[0]) / this.alto;
      h = h * 100;
      h = Math.floor(h);
      this.style1 = 'width:' + this.w + '%;height:' + h + '%;';
    } else {
      if (this.sob_ancho_f[0] === 0) {
        const w = '100';
      } else {
        let w = (this.ancho - this.sob_ancho_f[0]) / this.ancho;
        w = w * 100;
        w = Math.floor(w);
      }
      if (this.sob_alto_f[0] === 0) {
        const h = '100';
      } else {
        let h = (this.alto - this.sob_alto_f[0]) / this.alto;
        h = h * 100;
        h = Math.floor(h);
      }
      this.style1 = 'width:' + this.w + '%;height:' + this.h + '%;';

      if (this.sob_ancho_f[1] === 0) {
        const w = '100';
      } else {
        let w = (this.ancho - this.sob_ancho_f[1]) / this.ancho;
        w = w * 100;
        w = Math.floor(w);
      }
      if (this.sob_alto_f[1] === 0) {
        const h = '100';
      } else {
        let h = (this.alto - this.sob_alto_f[1]) / this.alto;
        h = h * 100;
        h = Math.floor(h);
      }
      this.style2 = 'width:' + this.w + '%;height:' + this.h + '%;';

    }
  }

  graficar() {

    this.tabla = '';
    this.g1 = '';
    this.g2 = '';
    this.an = '';

    this.estilo();
    this.g1 = this.creatabla(this.fila_f[0], this.col_f[0], this.style1);
    if (this.fila_f[1] > 0) {
      this.g2 = this.creatabla(this.fila_f[1], this.col_f[1], this.style2);
    } else {
      this.g2 = '';
    }

    this.af = (280 * this.alto) / this.ancho;
    this.af = Math.floor(this.af);

    this.tablafAlto = this.alto;
    this.tabla = '<div id=\'altog\'>' + this.alto + '</div>';

    if (this.grafica_f === 1) {

      this.tablappalH = this.af;
      this.tablasec = this.g1;
      this.tabla = this.tabla + '<table class=\'tablappal\' style=\'height:' + this.af + 'px !important;max-width:100% !important;\' ><tr><td>' + this.g1 + '</td></tr></table>';

    } else if (this.grafica_f === 2) {

      let auxalto = this.col_f[0] * this.c_alto_f[0];
      auxalto = (auxalto * 100) / this.alto;
      auxalto = Math.floor(auxalto);

      let an = this.col_f[0] * this.c_ancho_f[0];
      an = an / this.alto;
      an = an * 100;
      an = Math.floor(an);

      this.tablasec = this.g1;
      this.tablasec2 = this.g2;

      this.tabla = this.tabla + '<table class=\'tablappal\' style=\'height:' + this.af + 'px !important;max-width:100% !important;\'><tr height=' + auxalto + '%><td width=\'' + an + '%\'>' + this.g1 + '</td></tr><tr><td>' + this.g2 + '</td></tr></table>';
    } else {

      let an = this.fila_f[0] * this.c_ancho_f[0];
      an = an / this.ancho;
      an = an * 100;
      an = Math.floor(an);
      this.tabla = this.tabla + '<table class=\'tablappal\' style=\'height:' + this.af + 'px !important;max-width:100% !important;\'><tr><td width=\'' + an + '%\'>' + this.g1 + '</td><td>' + this.g2 + '</td></tr></table>';
    }

    this.tabla = this.tabla + '<div id=\'anchog\'>' + this.ancho + '</div>';
    this.tablafAncho = this.ancho;

  }

  creatabla(col, fil, style) {


    this.con = '';
    this.tabla2 = '';
    let i = 0;
    let j = 0;
    this.con = '';
    for (i = 0; i < fil; i++) {
      this.con = this.con + '<tr>';
      for (j = 0; j < col; j++) {
        this.con = this.con + '<td>&nbsp;</td>';
      }
      this.con = this.con + '</tr>';
    }

    this.tabla2 = this.con;
    return this.tabla2;
  }

  calcular_corte() {


    this.aux = '';
    this.aux2 = '';

    // Tamaño del pliego
    this.alto = this.objMed.pLadoMenor;
    this.ancho = this.objMed.pLadoMayor;

    if (parseFloat(this.alto) > parseFloat(this.ancho)) {
      this.aux = this.alto;
      this.alto = this.ancho;
      this.ancho = this.aux;
    }

    this.calto = this.objMed.cLadoMenor;
    this.cancho = this.objMed.cLadoMayor;

    if (parseFloat(this.calto) > parseFloat(this.cancho)) {
      this.aux = this.calto;
      this.calto = this.cancho;
      this.cancho = this.aux;
    }

    this.resultados[0] = this.paso1();
    this.resultados[1] = this.paso2(0, 1, 2);
    this.resultados[2] = this.paso3(3, 4, 5);
    this.resultados[3] = this.paso4(6, 7, 8);

    this.asignar1();

    // cambio el papel de corte
    this.fila1 = new Array();
    this.col1 = new Array();
    this.sob_alto1 = new Array();
    this.sob_ancho1 = new Array();
    this.c_alto = new Array();
    this.c_ancho = new Array();
    this.grafica = new Array();

    this.aux = this.calto;
    this.calto = this.cancho;
    this.cancho = this.aux;

    this.resultados[0] = this.paso1();
    this.resultados[1] = this.paso2(0, 1, 2);
    this.resultados[2] = this.paso3(3, 4, 5);
    this.resultados[3] = this.paso4(6, 7, 8);

    if (this.resultados[0] > this.resultados[1]) {
      if (this.resultados[0] > this.resultados[2]) {
        if (this.resultados[0] >= this.resultados[3]) {
          this.grafica_f2 = this.grafica[0];
          this.s2 = 1;
        } else {
          this.grafica_f2 = this.grafica[8];
          this.s2 = 4;
        }
      } else if (this.resultados[2] >= this.resultados[3]) {
        this.grafica_f2 = this.grafica[5];
        this.s2 = 3;
      } else {
        this.grafica_f2 = this.grafica[8];
        this.s2 = 4;
      }
    } else if (this.resultados[1] > this.resultados[2]) {
      if (this.resultados[1] >= this.resultados[3]) {
        this.grafica_f2 = this.grafica[2];
        this.s2 = 2;
      } else {
        this.grafica_f2 = this.grafica[8];
        this.s2 = 4;
      }
    } else if (this.resultados[2] >= this.resultados[3]) {
      this.grafica_f2 = this.grafica[5];
      this.s2 = 3;
    } else {
      this.grafica_f2 = this.grafica[8];
      this.s2 = 4;
    }

    // comparo que lado me da mejor resultado
    if (this.s2 === 1) {
      this.aux = this.resultados[0];
    } else if (this.s2 === 2) {
      this.aux = this.resultados[1];
    } else if (this.s2 === 3) {
      this.aux = this.resultados[2];
    } else {
      this.aux = this.resultados[3];
    }
    // nuevo
    if (this.s2 > 1) {
      if (this.resultados[0] === this.aux) {
        this.aux = this.resultados[0];
      }
      if (this.total1 === this.aux) {
        if (this.uno === 0) {
          this.asignar1();
        }
      }
    }
    if (this.total1 < this.aux) {
      this.asignar1();
    }

    // fin nuevo

    const atot = this.alto * this.ancho;
    const auso = (this.calto * this.cancho) * this.total1;
    const ades = atot - auso;

    this.pu = (auso / atot) * 100;
    this.pd = (ades / atot) * 100;

    this.pu = parseFloat(this.pu).toFixed(2);
    this.pd = parseFloat(this.pd).toFixed(2);

    console.log(this.total1);
    console.log(parseFloat(this.pu).toFixed(2) + '%');
    console.log(parseFloat(this.pd).toFixed(2) + '%');


    this.graficar();
    this.valueTotPleg = this.getCalcPliegos();

    if (this.productSelect.length > 0) {
      if (this.productSelect[0].typePaper !== undefined || this.productSelect[0].typePaper != null) {

        // tslint:disable-next-line:radix
        const valueGram = this._priceProductMockService.getFirsProduct(parseInt(this.productSelect[0].typePaper));
        if (valueGram.gramaje != null || valueGram.gramaje !== undefined) {

          if (this.tablafAncho === 90) {
            this.valueTotPaper = (this.valueTotPleg * valueGram.med90x60);
          } else if (this.tablafAncho === 100) {
            this.valueTotPaper = (this.valueTotPleg * valueGram.med70x100);
          }
        }
      }
    }

  }

  asignar1() {
    this.uno = 0;

    if (this.resultados[0] > this.resultados[1]) {
      if (this.resultados[0] > this.resultados[2]) {
        if (this.resultados[0] >= this.resultados[3]) {
          this.fila_f[0] = this.fila1[0];
          this.col_f[0] = this.col1[0];
          this.sob_alto_f[0] = this.sob_alto1[0];
          this.sob_ancho_f[0] = this.sob_ancho1[0];
          this.c_alto_f[0] = this.c_alto[0];
          this.c_ancho_f[0] = this.c_ancho[0];
          this.grafica_f = this.grafica[0];

          this.total1 = this.col_f[0] * this.fila_f[0];
          this.uno = 1;
        } else {
          this.fila_f[0] = this.fila1[7];
          this.col_f[0] = this.col1[7];
          this.sob_alto_f[0] = this.sob_alto1[7];
          this.sob_ancho_f[0] = this.sob_ancho1[7];
          this.c_alto_f[0] = this.c_alto[7];
          this.c_ancho_f[0] = this.c_ancho[7];

          this.fila_f[1] = this.fila1[8];
          this.col_f[1] = this.col1[8];
          this.sob_alto_f[1] = this.sob_alto1[8];
          this.sob_ancho_f[1] = this.sob_ancho1[8];
          this.c_alto_f[1] = this.c_alto[8];
          this.c_ancho_f[1] = this.c_ancho[8];
          this.grafica_f = this.grafica[8];

          this.total1 = (this.col_f[0] * this.fila_f[0]) + (this.col_f[1] * this.fila_f[1]);
        }
      } else {
        if (this.resultados[2] > this.resultados[3]) {
          this.fila_f[0] = this.fila1[4];
          this.col_f[0] = this.col1[4];
          this.sob_alto_f[0] = this.sob_alto1[4];
          this.sob_ancho_f[0] = this.sob_ancho1[4];
          this.c_alto_f[0] = this.c_alto[4];
          this.c_ancho_f[0] = this.c_ancho[4];

          this.fila_f[1] = this.fila1[5];
          this.col_f[1] = this.col1[5];
          this.sob_alto_f[1] = this.sob_alto1[5];
          this.sob_ancho_f[1] = this.sob_ancho1[5];
          this.c_alto_f[1] = this.c_alto[5];
          this.c_ancho_f[1] = this.c_ancho[5];
          this.grafica_f = this.grafica[5];

          this.total1 = (this.col_f[0] * this.fila_f[0]) + (this.col_f[1] * this.fila_f[1]);
        } else {
          this.fila_f[0] = this.fila1[7];
          this.col_f[0] = this.col1[7];
          this.sob_alto_f[0] = this.sob_alto1[7];
          this.sob_ancho_f[0] = this.sob_ancho1[7];
          this.c_alto_f[0] = this.c_alto[7];
          this.c_ancho_f[0] = this.c_ancho[7];

          this.fila_f[1] = this.fila1[8];
          this.col_f[1] = this.col1[8];
          this.sob_alto_f[1] = this.sob_alto1[8];
          this.sob_ancho_f[1] = this.sob_ancho1[8];
          this.c_alto_f[1] = this.c_alto[8];
          this.c_ancho_f[1] = this.c_ancho[8];
          this.grafica_f = this.grafica[8];

          this.total1 = (this.col_f[0] * this.fila_f[0]) + (this.col_f[1] * this.fila_f[1]);
        }
      }
    } else if (this.resultados[1] > this.resultados[2]) {
      if (this.resultados[1] >= this.resultados[3]) {
        this.fila_f[0] = this.fila1[1];
        this.col_f[0] = this.col1[1];
        this.sob_alto_f[0] = this.sob_alto1[1];
        this.sob_ancho_f[0] = this.sob_ancho1[1];
        this.c_alto_f[0] = this.c_alto[1];
        this.c_ancho_f[0] = this.c_ancho[1];

        this.fila_f[1] = this.fila1[2];
        this.col_f[1] = this.col1[2];
        this.sob_alto_f[1] = this.sob_alto1[2];
        this.sob_ancho_f[1] = this.sob_ancho1[2];
        this.c_alto_f[1] = this.c_alto[2];
        this.c_ancho_f[1] = this.c_ancho[2];
        this.grafica_f = this.grafica[2];

        this.total1 = (this.col_f[0] * this.fila_f[0]) + (this.col_f[1] * this.fila_f[1]);
      } else {
        this.fila_f[0] = this.fila1[7];
        this.col_f[0] = this.col1[7];
        this.sob_alto_f[0] = this.sob_alto1[7];
        this.sob_ancho_f[0] = this.sob_ancho1[7];
        this.c_alto_f[0] = this.c_alto[7];
        this.c_ancho_f[0] = this.c_ancho[7];

        this.fila_f[1] = this.fila1[8];
        this.col_f[1] = this.col1[8];
        this.sob_alto_f[1] = this.sob_alto1[8];
        this.sob_ancho_f[1] = this.sob_ancho1[8];
        this.c_alto_f[1] = this.c_alto[8];
        this.c_ancho_f[1] = this.c_ancho[8];
        this.grafica_f = this.grafica[8];

        this.total1 = (this.col_f[0] * this.fila_f[0]) + (this.col_f[1] * this.fila_f[1]);
      }
    } else {
      if (this.resultados[2] >= this.resultados[3]) {
        this.fila_f[0] = this.fila1[4];
        this.col_f[0] = this.col1[4];
        this.sob_alto_f[0] = this.sob_alto1[4];
        this.sob_ancho_f[0] = this.sob_ancho1[4];
        this.c_alto_f[0] = this.c_alto[4];
        this.c_ancho_f[0] = this.c_ancho[4];

        this.fila_f[1] = this.fila1[5];
        this.col_f[1] = this.col1[5];
        this.sob_alto_f[1] = this.sob_alto1[5];
        this.sob_ancho_f[1] = this.sob_ancho1[5];
        this.c_alto_f[1] = this.c_alto[5];
        this.c_ancho_f[1] = this.c_ancho[5];
        this.grafica_f = this.grafica[5];

        this.total1 = (this.col_f[0] * this.fila_f[0]) + (this.col_f[1] * this.fila_f[1]);
      } else {
        this.fila_f[0] = this.fila1[7];
        this.col_f[0] = this.col1[7];
        this.sob_alto_f[0] = this.sob_alto1[7];
        this.sob_ancho_f[0] = this.sob_ancho1[7];
        this.c_alto_f[0] = this.c_alto[7];
        this.c_ancho_f[0] = this.c_ancho[7];

        this.fila_f[1] = this.fila1[8];
        this.col_f[1] = this.col1[8];
        this.sob_alto_f[1] = this.sob_alto1[8];
        this.sob_ancho_f[1] = this.sob_ancho1[8];
        this.c_alto_f[1] = this.c_alto[8];
        this.c_ancho_f[1] = this.c_ancho[8];
        this.grafica_f = this.grafica[8];

        this.total1 = (this.col_f[0] * this.fila_f[0]) + (this.col_f[1] * this.fila_f[1]);
      }
    }
    if (this.uno === 0) {
      // console.log("resultados[0] ",resultados[0]);
      if (this.resultados[0] === this.total1) {
        this.uno = 1;
        this.fila_f[0] = this.fila1[0];
        this.col_f[0] = this.col1[0];
        this.sob_alto_f[0] = this.sob_alto1[0];
        this.sob_ancho_f[0] = this.sob_ancho1[0];
        this.c_alto_f[0] = this.c_alto[0];
        this.c_ancho_f[0] = this.c_ancho[0];
        this.grafica_f = this.grafica[0];

        this.total1 = this.col_f[0] * this.fila_f[0];

        this.fila_f[1] = 0;
        this.col_f[1] = 0;
      }
    }

  }

  calculo(nalto, nancho, tipo) {

    this.alt = this.alto;
    this.anc = this.ancho;

    if (nalto > 0) {
      this.alt = nalto;
    }
    if (nancho > 0) {
      this.anc = nancho;
    }

    this.a = this.alt / this.calto;
    this.c = Math.floor(this.a);

    this.b = this.anc / this.cancho;
    this.d = Math.floor(this.b);

    this.a = this.alt - (this.calto * this.c);
    this.b = this.anc - (this.cancho * this.d);

    this.a = parseFloat(this.a).toFixed(2);
    this.b = parseFloat(this.b).toFixed(2);



    if (tipo === 2) {
      this.a1 = this.alt / this.cancho;
      this.c1 = Math.floor(this.a1);

      this.b1 = this.anc / this.calto;
      this.d1 = Math.floor(this.b1);

      this.a1 = this.alt - (this.cancho * this.c1);
      this.b1 = this.anc - (this.calto * this.d1);

      this.a1 = parseFloat(this.a1).toFixed(2);
      this.b1 = parseFloat(this.b1).toFixed(2);

      if ((this.c1 * this.d1) > (this.c * this.d)) {
        this.a = this.a1;
        this.b = this.b1;
        this.c = this.c1;
        this.d = this.d1;
        this.orienta = 2;
      } else {
        this.orienta = 1;
      }

    }
  }

  paso1() {


    this.l1 = 0;
    this.l2 = 0;

    this.calculo(0, 0, 1);

    if (parseFloat(this.calto) <= parseFloat(this.a) || parseFloat(this.cancho) <= parseFloat(this.a)) {
      this.l1 = 1;
    }
    if (parseFloat(this.calto) <= parseFloat(this.b) || parseFloat(this.cancho) <= parseFloat(this.b)) {
      this.l2 = 1;
    }

    if (this.l1 === 1 && this.l2 === 1) {
      this.irpaso2 = 3;
    } else if (this.l1 === 1) {
      this.irpaso2 = 1;
    } else if (this.l2 === 1) {
      this.irpaso2 = 2;
    } else {
      this.irpaso2 = 0;
    }

    this.sob_alto1[0] = this.a;
    this.sob_ancho1[0] = this.b;
    this.col1[0] = this.c;
    this.fila1[0] = this.d;
    this.c_alto[0] = this.calto;
    this.c_ancho[0] = this.cancho;

    this.grafica[0] = 1;

    return this.c * this.d;
  }

  paso2(p1, n1, n2) {

    let aux;
    if (this.irpaso2 > 0) {
      this.col1[n1] = this.col1[p1];
      this.fila1[n1] = this.fila1[p1];
      this.c_alto[n1] = this.c_alto[p1];
      this.c_ancho[n1] = this.c_ancho[p1];

      if (this.irpaso2 === 1) {
        this.calculo(this.sob_alto1[p1], 0, 2);
        this.grafica[n2] = 2;

        this.sob_alto1[n1] = 0;
        this.sob_ancho1[n1] = this.sob_ancho1[p1];
      } else if (this.irpaso2 === 2) {
        this.calculo(0, this.sob_ancho1[p1], 2);
        this.grafica[n2] = 3;

        this.sob_alto1[n1] = this.sob_alto1[p1];
        this.sob_ancho1[n1] = 0;
      } else {
        this.calculo(this.sob_alto1[p1], 0, 2);
        aux = this.c * this.d;
        this.calculo(0, this.sob_ancho1[p1], 2);

        if (aux > (this.c * this.d)) {
          this.calculo(this.sob_alto1[p1], 0, 2);
          this.grafica[n2] = 2;

          this.sob_alto1[n1] = 0;
          this.sob_ancho1[n1] = this.sob_ancho1[p1];
        } else {
          this.grafica[n2] = 3;

          this.sob_alto1[n1] = this.sob_alto1[p1];
          this.sob_ancho1[n1] = 0;
        }
      }

      this.sob_alto1[n2] = this.a;
      this.sob_ancho1[n2] = this.b;
      this.col1[n2] = this.c;
      this.fila1[n2] = this.d;
      if (this.orienta === 1) {
        this.c_alto[n2] = this.calto;
        this.c_ancho[n2] = this.cancho;
      } else {
        this.c_alto[n2] = this.cancho;
        this.c_ancho[n2] = this.calto;
      }

      return (this.c * this.d) + (this.col1[n1] * this.fila1[n1]);

    } else {
      return 0;
    }
  }

  paso3(p1, n1, n2) {
    this.prueba = 1;
    let l1 = 0;
    let l2 = 0;
    let final = 0;
    let aux;
    let paso = 0;

    for (let i = 1; i < this.fila1[0] - 1; i++) {
      this.a = this.col1[0];
      this.b = this.fila1[0] - i;

      this.c = this.calto * this.a;
      this.d = this.cancho * this.b;

      this.a1 = this.alto - this.c;
      this.b1 = this.ancho - this.d;

      this.sob_alto1[p1] = this.a1;
      this.sob_ancho1[p1] = this.b1;
      this.col1[p1] = this.a;
      this.fila1[p1] = this.b;
      this.c_alto[p1] = this.calto;
      this.c_ancho[p1] = this.cancho;

      if (parseFloat(this.calto) <= parseFloat(this.a1) || parseFloat(this.cancho) <= parseFloat(this.a1)) {
        l1 = 1;
      }
      if (parseFloat(this.calto) <= parseFloat(this.b1) || parseFloat(this.cancho) <= parseFloat(this.b1)) {
        l2 = 1;
      }


      if (l1 === 1 && l2 === 1) {
        this.irpaso2 = 3;
      } else if (l1 === 1) {
        this.irpaso2 = 1;
      } else if (l2 === 1) {
        this.irpaso2 = 2;
      } else {
        this.irpaso2 = 0;
      }
      aux = this.paso2(p1, n1, n2);
      if (aux > final) {
        final = aux;
        paso = i;
      }
    }

    this.a = this.col1[0];
    this.b = this.fila1[0] - paso;

    this.c = this.calto * this.a;
    this.d = this.cancho * this.b;

    this.a1 = this.alto - this.c;
    this.b1 = this.ancho - this.d;

    this.sob_alto1[p1] = this.a1;
    this.sob_ancho1[p1] = this.b1;
    this.col1[p1] = this.a;
    this.fila1[p1] = this.b;
    this.c_alto[p1] = this.calto;
    this.c_ancho[p1] = this.cancho;

    if (parseFloat(this.calto) <= parseFloat(this.a1) || parseFloat(this.cancho) <= parseFloat(this.a1)) {
      l1 = 1;
    }
    if (parseFloat(this.calto) <= parseFloat(this.b1) || parseFloat(this.cancho) <= parseFloat(this.b1)) {
      l2 = 1;
    }

    if (l1 === 1 && l2 === 1) {
      this.irpaso2 = 3;
    } else if (l1 === 1) {
      this.irpaso2 = 1;
    } else if (l2 === 1) {
      this.irpaso2 = 2;
    } else {
      this.irpaso2 = 0;
    }
    return this.paso2(p1, n1, n2);
  }

  paso4(p1, n1, n2) {
    let l1 = 0;
    let l2 = 0;
    let final = 0;
    let aux;
    let paso = 0;

    for (let i = 1; i < this.col1[0] - 1; i++) {
      this.a = this.col1[0] - i;
      this.b = this.fila1[0];
      this.c = this.calto * this.a;
      this.d = this.cancho * this.b;

      this.a1 = this.alto - this.c;
      this.b1 = this.ancho - this.d;
      this.sob_alto1[p1] = this.a1;
      this.sob_ancho1[p1] = this.b1;
      this.col1[p1] = this.a;
      this.fila1[p1] = this.b;
      this.c_alto[p1] = this.calto;
      this.c_ancho[p1] = this.cancho;

      if (parseFloat(this.calto) <= parseFloat(this.a1) || parseFloat(this.cancho) <= parseFloat(this.a1)) {
        l1 = 1;
      }
      if (parseFloat(this.calto) <= parseFloat(this.b1) || parseFloat(this.cancho) <= parseFloat(this.b1)) {
        l2 = 1;
      }

      if (l1 === 1 && l2 === 1) {
        this.irpaso2 = 3;
      } else if (l1 === 1) {
        this.irpaso2 = 1;
      } else if (l2 === 1) {
        this.irpaso2 = 2;
      } else {
        this.irpaso2 = 0;
      }

      aux = this.paso2(p1, n1, n2);
      if (aux > final) {
        final = aux;
        paso = i;
      }
    }

    this.a = this.col1[0] - paso;
    this.b = this.fila1[0];
    this.c = this.calto * this.a;
    this.d = this.cancho * this.b;

    this.a1 = this.alto - this.c;
    this.b1 = this.ancho - this.d;
    this.sob_alto1[p1] = this.a1;
    this.sob_ancho1[p1] = this.b1;
    this.col1[p1] = this.a;
    this.fila1[p1] = this.b;
    this.c_alto[p1] = this.calto;
    this.c_ancho[p1] = this.cancho;

    if (parseFloat(this.calto) <= parseFloat(this.a1) || parseFloat(this.cancho) <= parseFloat(this.a1)) {
      l1 = 1;
    }
    if (parseFloat(this.calto) <= parseFloat(this.b1) || parseFloat(this.cancho) <= parseFloat(this.b1)) {
      l2 = 1;
    }

    if (l1 === 1 && l2 === 1) {
      this.irpaso2 = 3;
    } else if (l1 === 1) {
      this.irpaso2 = 1;
    } else if (l2 === 1) {
      this.irpaso2 = 2;
    } else {
      this.irpaso2 = 0;
    }
    return this.paso2(p1, n1, n2);
  }

  getCalcPliegos() {

    let value = 0;
    let valueSobrante = 0;

    if (this.productSelect.length > 0) {
      if (this.productSelect[0].amount !== undefined || this.productSelect[0].amount != null) {

        valueSobrante = (this.productSelect[0].amount * 100);
      }
    }

    value = (((((this.productSelect[0].amount * 1000) / 2) + valueSobrante) / this.total1));

    return value;
  }

  calcPrint(product: number, typeInk: string) {

    let valueInkOne: number = 0;
    let valueInkTwo: number = 0;
    let valueProduct;

    if (product > 0) {
      valueProduct = this._printMockData.getFirsPrintMockData(product);

      switch (typeInk) {
        case '1':
          valueInkOne = ((valueProduct.oneInk * this.productSelect[0].valuePrintX) * this.productSelect[0].amount);
          valueInkTwo = ((valueProduct.oneInk * this.productSelect[0].valuePrintY) * this.productSelect[0].amount);
          break;
        case '2':
          valueInkOne = ((valueProduct.special * this.productSelect[0].valuePrintX) * this.productSelect[0].amount);
          valueInkTwo = ((valueProduct.special * this.productSelect[0].valuePrintY) * this.productSelect[0].amount);
          break;
        case '3':
          valueInkOne = ((valueProduct.polychromy * this.productSelect[0].valuePrintX) * this.productSelect[0].amount);
          valueInkTwo = ((valueProduct.polychromy * this.productSelect[0].valuePrintY) * this.productSelect[0].amount);
          break;
      }
      this.objPrint.subTotal = (valueInkOne + valueInkTwo);

    } else {
      this.objPrint.subTotal = 0;
      this.objPrint.valueMillar = null;
      this.objPrint.valuePrintX = null;
      this.objPrint.valuePrintY = null;
      this.objPrint.typeInk = null;
    }
  }

  addFinishes (value: number) {

    let dataFinishes = this._typeFinishesService.getFirsTypeFinishes(value);
    if (dataFinishes != null || dataFinishes != undefined) {

      //Validar si existe
      let evaluate = this.finishes.find(function (e) { return e.id === parseInt(dataFinishes.id); });
      if (evaluate == null || evaluate == undefined) {
        //total
        dataFinishes.total = (this.productSelect[0].amount * dataFinishes.valueMillar);
        this.finishes.push(dataFinishes);
      }

    }

  }

  deleteFinishes (value: number) {
    if (value != null) {
      this.finishes.splice(value, 1);
    }
  }

  totFinishes () {
    let valueTot = 0;
    if (this.finishes.length > 0) {
      for (let i = 0; i < this.finishes.length; i++) {
        valueTot = valueTot + this.finishes[i].total;
      }
    }
    return valueTot;
  }

}

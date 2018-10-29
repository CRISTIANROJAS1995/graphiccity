import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceProductMockService {

  private paperPriceProduct: any[] = [
 
    {
      id: 1,
      name: 'Propalcote',
      grammage: 90,
      price70_100: 380,
      price90_60: 310
    },
    {
      id: 2,
      name: 'Propalcote',
      grammage: 115,
      price70_100: 405,
      price90_60: 340
    },
    {
      id: 3,
      name: 'Propalcote',
      grammage: 150,
      price70_100: 450,
      price90_60: 370
    },
    {
      id: 4,
      name: 'Propalcote',
      grammage: 200,
      price70_100: 600,
      price90_60: 470
    },
    {
      id: 5,
      name: 'Propalcote',
      grammage: 250,
      price70_100: 780,
      price90_60: 680
    },
    {
      id: 6,
      name: 'Propalcote',
      grammage: 300,
      price70_100: 900,
      price90_60: 780
    },
    {
      id: 7,
      name: 'Propalcote',
      grammage: 350,
      price70_100: 1100,
      price90_60: 900
    },
    {
      id: 8,
      name: 'Propalmate',
      grammage: 90,
      price70_100: 380,
      price90_60: 350
    },
    {
      id: 9,
      name: 'Propalmate',
      grammage: 115,
      price70_100: 420,
      price90_60: 350
    },
    {
      id: 10,
      name: 'Propalmate',
      grammage: 150,
      price70_100: 530,
      price90_60: 420
    },
    {
      id: 11,
      name: 'Propalmate',
      grammage: 200,
      price70_100: 680,
      price90_60: 530
    },
    {
      id: 12,
      name: 'Propalmate',
      grammage: 250,
      price70_100: 800,
      price90_60: 680
    },
    {
      id: 13,
      name: 'Propalmate',
      grammage: 300,
      price70_100: 1000,
      price90_60: 0
    },
    {
      id: 14,
      name: 'Periodico Corriente',
      grammage: 0,
      price70_100: 150,
      price90_60: 0
    },
    {
      id: 15,
      name: 'Periodico de Colores',
      grammage: 0,
      price70_100: 230,
      price90_60: 0
    },
    {
      id: 16,
      name: 'Bond',
      grammage: 60,
      price70_100: 230,
      price90_60: 190
    },
    {
      id: 17,
      name: 'Bond',
      grammage: 75,
      price70_100: 250,
      price90_60: 220
    },
    {
      id: 18,
      name: 'Bond',
      grammage: 90,
      price70_100: 350,
      price90_60: 280
    },
    {
      id: 19,
      name: 'Bond de Colores',
      grammage: 75,
      price70_100: 480,
      price90_60: 0
    },
    {
      id: 20,
      name: 'Bristol',
      grammage: 160,
      price70_100: 540,
      price90_60: 0
    },
    {
      id: 21,
      name: 'Manifol',
      grammage: 35,
      price70_100: 225,
      price90_60: 0
    },
    {
      id: 22,
      name: 'Manifol',
      grammage: 60,
      price70_100: 280,
      price90_60: 0
    },
    {
      id: 23,
      name: 'Manila',
      grammage: 75,
      price70_100: 450,
      price90_60: 0
    },
    {
      id: 24,
      name: 'Kraft',
      grammage: 60,
      price70_100: 210,
      price90_60: 0
    },
    {
      id: 25,
      name: 'Kraft',
      grammage: 85,
      price70_100: 320,
      price90_60: 0
    },
    {
      id: 26,
      name: 'Kraft',
      grammage: 0,
      price70_100: 1350,
      price90_60: 0
    },
    {
      id: 27,
      name: 'Kraft',
      grammage: 0,
      price70_100: 1890,
      price90_60: 0
    },
    {
      id: 28,
      name: 'Carton Prensado',
      grammage: 1,
      price70_100: 2900,
      price90_60: 0
    },
    {
      id: 29,
      name: 'Carton Prensado',
      grammage: 2,
      price70_100: 3500,
      price90_60: 0
    },
    {
      id: 30,
      name: 'Carton Prensado',
      grammage: 0,
      price70_100: 3970,
      price90_60: 0
    },
    {
      id: 31,
      name: 'Quimico Original',
      grammage: 0,
      price70_100: 347,
      price90_60: 0
    },
    {
      id: 32,
      name: 'Quimico Intermedio',
      grammage: 0,
      price70_100: 372,
      price90_60: 0
    },
    {
      id: 33,
      name: 'Quimico Final',
      grammage: 0,
      price70_100: 347,
      price90_60: 0
    },
    {
      id: 34,
      name: 'Adhesivo Fasson',
      grammage: 0,
      price70_100: 1535,
      price90_60: 0
    },
    {
      id: 35,
      name: 'Adhesivo Arclad SH',
      grammage: 0,
      price70_100: 1800,
      price90_60: 0
    },
    {
      id: 36,
      name: 'Adhesivo Bond',
      grammage: 0,
      price70_100: 1900,
      price90_60: 0
    },
    {
      id: 37,
      name: 'Adhesivo Freezer',
      grammage: 0,
      price70_100: 2100,
      price90_60: 0
    },
    {
      id: 38,
      name: 'Adhesivo radiante rosado',
      grammage: 0,
      price70_100: 2800,
      price90_60: 0
    },
    {
      id: 39,
      name: 'Adhesivo base Caucho',
      grammage: 0,
      price70_100: 2200,
      price90_60: 0
    },
    {
      id: 40,
      name: 'Adhesivo cascara de Huevo',
      grammage: 0,
      price70_100: 31000,
      price90_60: 0
    },
    {
      id: 41,
      name: 'Adhesivo Vinilo Transparente',
      grammage: 0,
      price70_100: 3700,
      price90_60: 0
    },
    {
      id: 42,
      name: 'Adhesivo Vinilo Blanco',
      grammage: 0,
      price70_100: 3700,
      price90_60: 0
    },
    {
      id: 43,
      name: 'Opalina',
      grammage: 180,
      price70_100: 1200,
      price90_60: 0
    },
    {
      id: 44,
      name: 'Opalina',
      grammage: 220,
      price70_100: 1800,
      price90_60: 0
    },
    {
      id: 45,
      name: 'Pergamino',
      grammage: 90,
      price70_100: 1350,
      price90_60: 0
    },
    {
      id: 46,
      name: 'Pergamino',
      grammage: 115,
      price70_100: 1980,
      price90_60: 0
    },
    {
      id: 47,
      name: 'Pergamino',
      grammage: 150,
      price70_100: 2430,
      price90_60: 0
    },
    {
      id: 48,
      name: 'Pergamino',
      grammage: 180,
      price70_100: 3070,
      price90_60: 0
    },
    {
      id: 49,
      name: 'Prisma',
      grammage: 220,
      price70_100: 4320,
      price90_60: 0
    },
    {
      id: 50,
      name: 'Sobre ecologico carta',
      grammage: 0,
      price70_100: 140,
      price90_60: 0
    },
    {
      id: 51,
      name: 'Sobre ecologico 1/2 carta',
      grammage: 0,
      price70_100: 120,
      price90_60: 0
    },
    {
      id: 52,
      name: 'Sobre ecologico carta especial',
      grammage: 0,
      price70_100: 153,
      price90_60: 0
    },
    {
      id: 53,
      name: 'Sobre ecologico oficio',
      grammage: 0,
      price70_100: 154,
      price90_60: 0
    },
    {
      id: 54,
      name: 'Sobre radiografia',
      grammage: 0,
      price70_100: 244,
      price90_60: 0
    },
    {
      id: 55,
      name: 'Sobre Manila carta',
      grammage: 75,
      price70_100: 181,
      price90_60: 0
    },
    {
      id: 56,
      name: 'Sobre Manila oficio',
      grammage: 75,
      price70_100: 200,
      price90_60: 0
    },
    {
      id: 57,
      name: 'Sobre bond carta',
      grammage: 75,
      price70_100: 149,
      price90_60: 0
    },
    {
      id: 58,
      name: 'Sobre bond oficio',
      grammage: 75,
      price70_100: 173,
      price90_60: 0
    },
    {
      id: 59,
      name: 'Sobre ventanilla 20A',
      grammage: 0,
      price70_100: 100,
      price90_60: 0
    },
    {
      id: 60,
      name: 'Sobre SIN ventanilla 20A',
      grammage: 0,
      price70_100: 90,
      price90_60: 0
    },
    {
      id: 61,
      name: 'Sobre diezmo bond',
      grammage: 60,
      price70_100: 78,
      price90_60: 0
    },
    {
      id: 62,
      name: 'Earth pact',
      grammage: 70,
      price70_100: 290,
      price90_60: 240
    },
    {
      id: 63,
      name: 'Earth pact',
      grammage: 90,
      price70_100: 420,
      price90_60: 320
    },
    {
      id: 64,
      name: 'Earth pact',
      grammage: 150,
      price70_100: 570,
      price90_60: 450
    },
    {
      id: 65,
      name: 'Earth pact',
      grammage: 200,
      price70_100: 730,
      price90_60: 610
    },
    {
      id: 66,
      name: 'Earth pact',
      grammage: 263,
      price70_100: 850,
      price90_60: 850
    },
    {
      id: 67,
      name: 'Earth pact',
      grammage: 295,
      price70_100: 950,
      price90_60: 950
    }
  ];

  constructor() { }

  getPaperPriceProduct() {
    return this.paperPriceProduct;
  }

  getFirsPaperPriceProduct(id: number) {
      return this.paperPriceProduct.find(function (e) { return e.id === id; });

  }




}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceProductMockService {

  private papelProducts: any[] = [

    {
      id: 1,
      name: 'Propalcote',
      gramaje: 90,
      med70x100: 380,
      med90x60: 310
    },
    {
      id: 2,
      name: 'Propalcote',
      gramaje: 115,
      med70x100: 405,
      med90x60: 340
    },
    {
      id: 3,
      name: 'Propalcote',
      gramaje: 150,
      med70x100: 450,
      med90x60: 370
    },
    {
      id: 4,
      name: 'Propalcote',
      gramaje: 200,
      med70x100: 600,
      med90x60: 470
    },
    {
      id: 5,
      name: 'Propalcote',
      gramaje: 250,
      med70x100: 780,
      med90x60: 680
    },
    {
      id: 6,
      name: 'Propalcote',
      gramaje: 300,
      med70x100: 900,
      med90x60: 780
    },
    {
      id: 7,
      name: 'Propalcote',
      gramaje: 350,
      med70x100: 1100,
      med90x60: 900
    },
    {
      id: 8,
      name: 'Propalmate',
      gramaje: 90,
      med70x100: 380,
      med90x60: 350
    },
    {
      id: 9,
      name: 'Propalmate',
      gramaje: 115,
      med70x100: 420,
      med90x60: 350
    },
    {
      id: 10,
      name: 'Propalmate',
      gramaje: 150,
      med70x100: 530,
      med90x60: 420
    },
    {
      id: 11,
      name: 'Propalmate',
      gramaje: 200,
      med70x100: 680,
      med90x60: 530
    },
    {
      id: 12,
      name: 'Propalmate',
      gramaje: 250,
      med70x100: 800,
      med90x60: 680
    },
    {
      id: 13,
      name: 'Propalmate',
      gramaje: 300,
      med70x100: 1000,
      med90x60: 0
    },
    {
      id: 14,
      name: 'Periodico Corriente',
      gramaje: 0,
      med70x100: 150,
      med90x60: 0
    },
    {
      id: 15,
      name: 'Periodico de Colores',
      gramaje: 0,
      med70x100: 230,
      med90x60: 0
    },
    {
      id: 16,
      name: 'Bond',
      gramaje: 60,
      med70x100: 230,
      med90x60: 190
    },
    {
      id: 17,
      name: 'Bond',
      gramaje: 75,
      med70x100: 250,
      med90x60: 220
    },
    {
      id: 18,
      name: 'Bond',
      gramaje: 90,
      med70x100: 350,
      med90x60: 280
    },
    {
      id: 19,
      name: 'Bond de Colores',
      gramaje: 75,
      med70x100: 480,
      med90x60: 0
    },
    {
      id: 20,
      name: 'Bristol',
      gramaje: 160,
      med70x100: 540,
      med90x60: 0
    },
    {
      id: 21,
      name: 'Manifol',
      gramaje: 35,
      med70x100: 225,
      med90x60: 0
    },
    {
      id: 22,
      name: 'Manifol',
      gramaje: 60,
      med70x100: 280,
      med90x60: 0
    },
    {
      id: 23,
      name: 'Manila',
      gramaje: 75,
      med70x100: 450,
      med90x60: 0
    },
    {
      id: 24,
      name: 'Kraft',
      gramaje: 60,
      med70x100: 210,
      med90x60: 0
    },
    {
      id: 25,
      name: 'Kraft',
      gramaje: 85,
      med70x100: 320,
      med90x60: 0
    },
    {
      id: 26,
      name: 'Quimico Original',
      gramaje: 0,
      med70x100: 347,
      med90x60: 0
    },
    {
      id: 27,
      name: 'Quimico Intermedio',
      gramaje: 0,
      med70x100: 372,
      med90x60: 0
    },
    {
      id: 28,
      name: 'Quimico Final',
      gramaje: 0,
      med70x100: 347,
      med90x60: 0
    },
    {
      id: 29,
      name: 'Adhesivo Fasson',
      gramaje: 0,
      med70x100: 1535,
      med90x60: 0
    },
    {
      id: 30,
      name: 'Adhesivo Arclad SH',
      gramaje: 0,
      med70x100: 1800,
      med90x60: 0
    },
    {
      id: 31,
      name: 'Adhesivo Bond',
      gramaje: 0,
      med70x100: 1900,
      med90x60: 0
    },
    {
      id: 32,
      name: 'Adhesivo Freezer',
      gramaje: 0,
      med70x100: 2100,
      med90x60: 0
    },
    {
      id: 33,
      name: 'Adhesivo radiante rosado',
      gramaje: 0,
      med70x100: 2800,
      med90x60: 0
    },
    {
      id: 34,
      name: 'Adhesivo base Caucho',
      gramaje: 0,
      med70x100: 2200,
      med90x60: 0
    },
    {
      id: 35,
      name: 'Adhesivo cascara de Huevo',
      gramaje: 0,
      med70x100: 31000,
      med90x60: 0
    },
    {
      id: 36,
      name: 'Adhesivo Vinilo Transparente',
      gramaje: 0,
      med70x100: 3700,
      med90x60: 0
    },
    {
      id: 37,
      name: 'Adhesivo Vinilo Blanco',
      gramaje: 0,
      med70x100: 3700,
      med90x60: 0
    },
    {
      id: 38,
      name: 'Opalina',
      gramaje: 180,
      med70x100: 1200,
      med90x60: 0
    },
    {
      id: 39,
      name: 'Opalina',
      gramaje: 220,
      med70x100: 1800,
      med90x60: 0
    },
    {
      id: 40,
      name: 'Pergamino',
      gramaje: 90,
      med70x100: 1350,
      med90x60: 0
    },
    {
      id: 41,
      name: 'Pergamino',
      gramaje: 115,
      med70x100: 1980,
      med90x60: 0
    },
    {
      id: 42,
      name: 'Pergamino',
      gramaje: 150,
      med70x100: 2430,
      med90x60: 0
    },
    {
      id: 43,
      name: 'Pergamino',
      gramaje: 180,
      med70x100: 3070,
      med90x60: 0
    },
    {
      id: 44,
      name: 'Prisma',
      gramaje: 220,
      med70x100: 4320,
      med90x60: 0
    },
    {
      id: 45,
      name: 'Sobre ecologico carta',
      gramaje: 0,
      med70x100: 140,
      med90x60: 0
    },
    {
      id: 46,
      name: 'Sobre ecologico 1/2 carta',
      gramaje: 0,
      med70x100: 120,
      med90x60: 0
    },
    {
      id: 47,
      name: 'Sobre ecologico carta especial',
      gramaje: 0,
      med70x100: 153,
      med90x60: 0
    },
    {
      id: 48,
      name: 'Sobre ecologico oficio',
      gramaje: 0,
      med70x100: 154,
      med90x60: 0
    },
    {
      id: 49,
      name: 'Sobre radiografia',
      gramaje: 0,
      med70x100: 244,
      med90x60: 0
    },
    {
      id: 50,
      name: 'Sobre Manila carta',
      gramaje: 75,
      med70x100: 181,
      med90x60: 0
    },
    {
      id: 51,
      name: 'Sobre Manila oficio',
      gramaje: 75,
      med70x100: 200,
      med90x60: 0
    },
    {
      id: 52,
      name: 'Sobre bond carta',
      gramaje: 75,
      med70x100: 149,
      med90x60: 0
    },
    {
      id: 53,
      name: 'Sobre bond oficio',
      gramaje: 75,
      med70x100: 173,
      med90x60: 0
    },
    {
      id: 54,
      name: 'Sobre ventanilla 20A',
      gramaje: 0,
      med70x100: 100,
      med90x60: 0
    },
    {
      id: 55,
      name: 'Sobre SIN ventanilla 20A',
      gramaje: 0,
      med70x100: 90,
      med90x60: 0
    },
    {
      id: 56,
      name: 'Sobre diezmo bond',
      gramaje: 60,
      med70x100: 78,
      med90x60: 0
    },
    {
      id: 57,
      name: 'Earth pact',
      gramaje: 70,
      med70x100: 290,
      med90x60: 240
    },
    {
      id: 58,
      name: 'Earth pact',
      gramaje: 90,
      med70x100: 420,
      med90x60: 320
    },
    {
      id: 59,
      name: 'Earth pact',
      gramaje: 150,
      med70x100: 570,
      med90x60: 450
    },
    {
      id: 60,
      name: 'Earth pact',
      gramaje: 200,
      med70x100: 730,
      med90x60: 610
    },
    {
      id: 61,
      name: 'Earth pact',
      gramaje: 263,
      med70x100: 850,
      med90x60: 850
    },
    {
      id: 62,
      name: 'Earth pact',
      gramaje: 295,
      med70x100: 950,
      med90x60: 950
    }    

  ];

  private papelPlanchas: any[] = [
    {
      name: 'Gto 52',
      areaImpresion: '35X50',
      valorUnit: 8000
    },
    {
      name: 'Speed 525',
      areaImpresion: '35X50',
      valorUnit: 10000
    },
    {
      name: 'Speed 745',
      areaImpresion: '70X50',
      valorUnit: 20000
    }
  ];

  private papelImpresion: any[] = [
    {
      name: 'Gto 52',
      areaImpreison: '50x34',
      valorPolicromia: 60000,
      valor1Tinta: 15000,
      valorXTintaEspecial: 95000
    },
    {
      name: 'Speed 525',
      areaImpreison: '50x34',
      valorPolicromia: 60000,
      valor1Tinta: 15000,
      valorXTintaEspecial: 95000
    },
    {
      name: 'Speed 745',
      areaImpreison: '70x49',
      valorPolicromia: 80000,
      valor1Tinta: 30000,
      valorXTintaEspecial: 130000
    },
    {
      name: 'Pliego',
      areaImpreison: '100x69',
      valorPolicromia: 570000,
      valor1Tinta: 200000,
      valorXTintaEspecial: 350000
    }
  ];

  private papelPlastificado: any[] = [];
  private papelAcabados: any[] = [];

  constructor() { }

  // 1 = PAPEL, 2 = PLANCHAS, 3 = IMPRESION, 4 = PLASTIFICADO, 5 = ACABADOS.
  getProduct(id: number) {

    if (id === 1) {
      return this.papelProducts;
    } else if (id === 2) {
      return this.papelPlanchas;
    } else if (id === 3) {
      return this.papelImpresion;
    } else {
      return [];
    } 
  }

  getFirsProduct(id: number) {
    return this.papelProducts.find(function (e) { return e.id === id; });
  }




}

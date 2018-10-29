import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TypeFinishesService {

    constructor() { }

    private typeFinishes: any[] = [
        {
            id: 1,
            name: 'Plastificado Mate',
            format: '1/2 CARTA - CARTA',
            valueMillar: 50000,
            valueSheet: 50,
            valueMin: 20000
        },
        {
            id: 2,
            name: 'Plastificado Mate',
            format: 'OFICIO- OCTAVO',
            valueMillar: 70000,
            valueSheet: 70,
            valueMin: 25000
        },
        {
            id: 3,
            name: 'Plastificado Mate',
            format: 'CUARTO',
            valueMillar: 120000,
            valueSheet: 120,
            valueMin: 30000
        },
        {
            id: 4,
            name: 'Plastificado Mate',
            format: 'MEDIO',
            valueMillar: 180000,
            valueSheet: 180,
            valueMin: 40000
        },
        {
            id: 5,
            name: 'Plastificado Mate',
            format: 'PLIEGO',
            valueMillar: 360000,
            valueSheet: 360,
            valueMin: 60000
        },
        {
            id: 6,
            name: 'Plastificado Dry',
            format: '1/2 CARTA - CARTA',
            valueMillar: 50000,
            valueSheet: 50,
            valueMin: 20000
        },
        {
            id: 7,
            name: 'Plastificado Dry',
            format: 'OFICIO- OCTAVO',
            valueMillar: 70000,
            valueSheet: 70,
            valueMin: 25000
        },
        {
            id: 8,
            name: 'Plastificado Dry',
            format: 'CUARTO',
            valueMillar: 120000,
            valueSheet: 120,
            valueMin: 30000
        },
        {
            id: 9,
            name: 'Plastificado Dry',
            format: 'MEDIO',
            valueMillar: 180000,
            valueSheet: 180,
            valueMin: 40000
        },
        {
            id: 10,
            name: 'Plastificado Dry',
            format: 'PLIEGO',
            valueMillar: 360000,
            valueSheet: 360,
            valueMin: 60000
        },
        {
            id: 11,
            name: 'Plastificado Brillante',
            format: '1/2 CARTA - CARTA',
            valueMillar: 25000,
            valueSheet: 25,
            valueMin: 15000
        },
        {
            id: 7,
            name: 'Plastificado Brillante',
            format: 'OFICIO- OCTAVO',
            valueMillar: 35000,
            valueSheet: 35,
            valueMin: 20000
        },
        {
            id: 8,
            name: 'Plastificado Brillante',
            format: 'CUARTO',
            valueMillar: 50000,
            valueSheet: 50,
            valueMin: 25000
        },
        {
            id: 9,
            name: 'Plastificado Brillante',
            format: 'MEDIO',
            valueMillar: 90000,
            valueSheet: 90,
            valueMin: 35000
        },
        {
            id: 10,
            name: 'Plastificado Brillante',
            format: 'PLIEGO',
            valueMillar: 180000,
            valueSheet: 180,
            valueMin: 50000
        },
        {
            id: 11,
            name: 'Brillo UV Total',
            format: 'OCTAVO',
            valueMillar: 40000,
            valueSheet: 0,
            valueMin: 30000
        },
        {
            id: 12,
            name: 'Brillo UV Total',
            format: 'CUARTO',
            valueMillar: 60000,
            valueSheet: 0,
            valueMin: 40000
        },
        {
            id: 13,
            name: 'Brillo UV Total',
            format: 'MEDIO',
            valueMillar: 120000,
            valueSheet: 0,
            valueMin: 70000
        },
        {
            id: 14,
            name: 'Brillo UV Total',
            format: 'PLIEGO',
            valueMillar: 240000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 15,
            name: 'Troquelado',
            format: 'TARJETA - OCTAVO',
            valueMillar: 20000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 16,
            name: 'Troquelado',
            format: 'CUARTO',
            valueMillar: 30000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 17,
            name: 'Troquelado',
            format: 'MEDIO',
            valueMillar: 50000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 18,
            name: 'Troquelado',
            format: 'PLIEGO',
            valueMillar: 100000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 19,
            name: 'Grafa',
            format: 'TARJETA - OCTAVO',
            valueMillar: 20000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 20,
            name: 'Grafa',
            format: 'CUARTO',
            valueMillar: 20000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 21,
            name: 'Grafa',
            format: 'MEDIO',
            valueMillar: 30000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 22,
            name: 'Grafa',
            format: 'PLIEGO',
            valueMillar: 90000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 23,
            name: 'Semicorte',
            format: 'TARJETA - OCTAVO',
            valueMillar: 20000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 24,
            name: 'Semicorte',
            format: 'CUARTO',
            valueMillar: 30000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 25,
            name: 'Semicorte',
            format: 'MEDIO',
            valueMillar: 40000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 26,
            name: 'Semicorte',
            format: 'PLIEGO',
            valueMillar: 100000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 27,
            name: 'Repujado',
            format: 'CUARTO',
            valueMillar: 20000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 28,
            name: 'Estampado',
            format: 'MEDIO',
            valueMillar: 30000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 29,
            name: 'Perforado Fisto',
            format: '',
            valueMillar: 10000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 30,
            name: 'Perforado Agujas',
            format: '',
            valueMillar: 15000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 31,
            name: 'Despunte',
            format: '',
            valueMillar: 5000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 32,
            name: 'Pegue',
            format: '',
            valueMillar: 40000,
            valueSheet: 0,
            valueMin: 0
        },
        {
            id: 33,
            name: 'Caballete',
            format: '',
            valueMillar: 30000,
            valueSheet: 0,
            valueMin: 0
        }
              
    ];

    getTypeFinishes() {
        return this.typeFinishes;
    }

    getFirsTypeFinishes(id: any) {
        return this.typeFinishes.find(function (e) { return e.id === parseInt(id); });
    }

    addFinishes( value: any) {

        if (value != null || value !== undefined) {
          this.typeFinishes.push(value);
        }
        return this.getTypeFinishes();
      }
    
      removeFinishes() {
          this.typeFinishes = [];
      }

}

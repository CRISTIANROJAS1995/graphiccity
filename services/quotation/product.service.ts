import { Injectable } from '@angular/core';
import { TypeProductService } from '../../services/quotation/typeProduct.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private product: any[] = [
        {
            id: 1,
            name: 'Invitaciones',
            idTypeProduct: 1
        },
        {
            id: 2,
            name: 'Diplomas',
            idTypeProduct: 1
        },
        {
            id: 3,
            name: 'Abanicos',
            idTypeProduct: 2
        },
        {
            id: 4,
            name: 'Adhesivos',
            idTypeProduct: 2
        },
        {
            id: 5,
            name: 'Afiches',
            idTypeProduct: 2
        },
        {
            id: 6,
            name: 'Agendas',
            idTypeProduct: 2
        },
        {
            id: 7,
            name: 'Boletas',
            idTypeProduct: 2
        },
        {
            id: 8,
            name: 'Bolsas',
            idTypeProduct: 2
        },
        {
            id: 9,
            name: 'Broshure',
            idTypeProduct: 2
        },
        {
            id: 10,
            name: 'Cajas',
            idTypeProduct: 2
        },
        {
            id: 11,
            name: 'Calendarios',
            idTypeProduct: 2
        },
        {
            id: 12,
            name: 'Carpetas',
            idTypeProduct: 2
        },
        {
            id: 13,
            name: 'Catalogos',
            idTypeProduct: 2
        },
        {
            id: 14,
            name: 'Colgapuertas',
            idTypeProduct: 2
        },
        {
            id: 15,
            name: 'Cuadernos',
            idTypeProduct: 2
        },
        {
            id: 16,
            name: 'Cupos',
            idTypeProduct: 2
        },
        {
            id: 17,
            name: 'Etiquetas',
            idTypeProduct: 2
        },
        {
            id: 18,
            name: 'Facturas',
            idTypeProduct: 2
        },
        {
            id: 19,
            name: 'Habladores',
            idTypeProduct: 2
        },
        {
            id: 20,
            name: 'Imanes',
            idTypeProduct: 2
        },
        {
            id: 21,
            name: 'Individuales',
            idTypeProduct: 2
        },
        {
            id: 22,
            name: 'Libros',
            idTypeProduct: 2
        },
        {
            id: 23,
            name: 'Membretes',
            idTypeProduct: 2
        },
        {
            id: 24,
            name: 'Papel Regalo',
            idTypeProduct: 2
        },
        {
            id: 25,
            name: 'Planeadores',
            idTypeProduct: 2
        },
        {
            id: 26,
            name: 'Plegables',
            idTypeProduct: 2
        },
        {
            id: 27,
            name: 'Portavasos',
            idTypeProduct: 2
        },
        {
            id: 28,
            name: 'Postales',
            idTypeProduct: 2
        },
        {
            id: 29,
            name: 'Revistas',
            idTypeProduct: 2
        },
        {
            id: 30,
            name: 'Sobres',
            idTypeProduct: 2
        },
        {
            id: 31,
            name: 'Tacos',
            idTypeProduct: 2
        },
        {
            id: 32,
            name: 'Talonarios',
            idTypeProduct: 2
        },
        {
            id: 33,
            name: 'Tapetes',
            idTypeProduct: 2
        },
        {
            id: 34,
            name: 'Tarjetas',
            idTypeProduct: 2
        },
        {
            id: 35,
            name: 'Volantes',
            idTypeProduct: 2
        },
        {
            id: 36,
            name: 'Menú',
            idTypeProduct: 2
        },
        {
            id: 37,
            name: 'Diplomas',
            idTypeProduct: 2
        },
        {
            id: 38,
            name: 'Invitaciones',
            idTypeProduct: 2
        },
        {
            id: 39,
            name: 'Banner',
            idTypeProduct: 3
        },
        {
            id: 40,
            name: 'Vinilos',
            idTypeProduct: 3
        },
        {
            id: 41,
            name: 'Microperforado',
            idTypeProduct: 3
        },
        {
            id: 42,
            name: 'Lona Mesh',
            idTypeProduct: 3
        },
        {
            id: 43,
            name: 'Tela',
            idTypeProduct: 3
        },
        {
            id: 44,
            name: 'Reflectivo',
            idTypeProduct: 3
        },
        {
            id: 45,
            name: 'Panaflex',
            idTypeProduct: 3
        },
        {
            id: 46,
            name: 'Iman para carro',
            idTypeProduct: 3
        },
        {
            id: 47,
            name: 'Frost',
            idTypeProduct: 3
        },
        {
            id: 48,
            name: 'Backlight',
            idTypeProduct: 3
        },
        {
            id: 49,
            name: 'Floorgraphic',
            idTypeProduct: 3
        },
        {
            id: 50,
            name: 'Conformable',
            idTypeProduct: 3
        },
        {
            id: 51,
            name: 'Bastidor',
            idTypeProduct: 3
        },
        {
            id: 52,
            name: 'Caja de Luz',
            idTypeProduct: 3
        },
        {
            id: 53,
            name: 'Tropezon',
            idTypeProduct: 3
        },
        {
            id: 54,
            name: 'Poliestileno',
            idTypeProduct: 3
        },
        {
            id: 55,
            name: 'Acrilico',
            idTypeProduct: 3
        },
        {
            id: 56,
            name: 'Foam Board',
            idTypeProduct: 3
        },
        {
            id: 57,
            name: 'Secuenciales',
            idTypeProduct: 3
        },
        {
            id: 58,
            name: 'Retablo',
            idTypeProduct: 3
        },
        {
            id: 59,
            name: 'Roll up',
            idTypeProduct: 3
        },
        {
            id: 60,
            name: 'Araña',
            idTypeProduct: 3
        },
        {
            id: 61,
            name: 'Tripode',
            idTypeProduct: 3
        },
        {
            id: 62,
            name: 'Pop Man',
            idTypeProduct: 3
        },
        {
            id: 63,
            name: 'Counter',
            idTypeProduct: 3
        },
        {
            id: 64,
            name: 'Expositor',
            idTypeProduct: 3
        },
        {
            id: 65,
            name: 'Shlyine',
            idTypeProduct: 3
        },
        {
            id: 66,
            name: 'Marco Abatible',
            idTypeProduct: 3
        },
        {
            id: 67,
            name: 'Revistero',
            idTypeProduct: 3
        },
        {
            id: 68,
            name: 'Gota',
            idTypeProduct: 3
        },
        {
            id: 69,
            name: 'Vela',
            idTypeProduct: 3
        },
        {
            id: 70,
            name: 'Habladores',
            idTypeProduct: 3
        },
        {
            id: 71,
            name: 'Trofeos',
            idTypeProduct: 3
        },
        {
            id: 72,
            name: 'Lienzo',
            idTypeProduct: 3
        },
        {
            id: 73,
            name: 'Carton',
            idTypeProduct: 3
        },
        {
            id: 74,
            name: 'Menú',
            idTypeProduct: 3
        },
        {
            id: 75,
            name: 'Sellos',
            idTypeProduct: 3
        },
        {
            id: 76,
            name: 'Señalizaciones',
            idTypeProduct: 3
        },
        {
            id: 77,
            name: 'Colgapuertas',
            idTypeProduct: 3
        },
        {
            id: 78,
            name: 'Manillas',
            idTypeProduct: 4
        },
        {
            id: 79,
            name: 'Pad Mouse',
            idTypeProduct: 4
        },
        {
            id: 80,
            name: 'Carnet',
            idTypeProduct: 4
        },
        {
            id: 81,
            name: 'Portacarnet',
            idTypeProduct: 4
        },
        {
            id: 82,
            name: 'Yoyo',
            idTypeProduct: 4
        },
        {
            id: 83,
            name: 'Camiseta',
            idTypeProduct: 4
        },
        {
            id: 84,
            name: 'Gorra',
            idTypeProduct: 4
        },
        {
            id: 85,
            name: 'Mugs',
            idTypeProduct: 4
        },
        {
            id: 86,
            name: 'Esferos',
            idTypeProduct: 4
        },
        {
            id: 87,
            name: 'Agendas',
            idTypeProduct: 4
        },
        {
            id: 88,
            name: 'Botones',
            idTypeProduct: 4
        },
        {
            id: 89,
            name: 'Bolsas Kambrel',
            idTypeProduct: 4
        },
        {
            id: 90,
            name: 'Termos',
            idTypeProduct: 4
        },
        {
            id: 91,
            name: 'Botilitos',
            idTypeProduct: 4
        },
        {
            id: 92,
            name: 'USB',
            idTypeProduct: 4
        },
        {
            id: 93,
            name: 'Sombrillas',
            idTypeProduct: 4
        },
        {
            id: 94,
            name: 'Llaveros',
            idTypeProduct: 4
        },
        {
            id: 95,
            name: 'Linternas',
            idTypeProduct: 4
        },
        {
            id: 96,
            name: 'Bolsos',
            idTypeProduct: 4
        }
    ];

    getProduct() {
        return this.product;
    }

    getTypeProduct(id: number) {
        return this.product.find(function (e) { return e.idTypeProduct === id; });
    }

}

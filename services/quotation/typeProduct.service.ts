import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TypeProductService {

    constructor() { }

    private typeProduct: any[] = [
        {
            id: 1,
            name: 'Digital'
        },
        {
            id: 2,
            name: 'Litografía'
        },
        {
            id: 3,
            name: 'Gran Formato'
        },
        {
            id: 4,
            name: 'Promocionales'
        }
    ];

    getTypeProduct(id: number) {

        return this.typeProduct;
    }

    getFirsTypeProduct(id: number) {
        return this.typeProduct.find(function (e) { return e.id === id; });
    }

}

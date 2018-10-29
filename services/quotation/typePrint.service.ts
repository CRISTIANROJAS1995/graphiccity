import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TypePrintService {

    constructor() { }

    private typePrint: any[] = [
        {
            id: 1,
            name: 'Gto 52'
        },
        {
            id: 2,
            name: 'Speed 525'
        },
        {
            id: 3,
            name: 'Speed 745'
        },
        {
            id: 4,
            name: 'Pliego'
        }
    ];

    getTypePrint(id: number) {

        return this.typePrint;
    }

    getFirsTypePrint(id: number) {
        return this.typePrint.find(function (e) { return e.id === id; });
    }




}

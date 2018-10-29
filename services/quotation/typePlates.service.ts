import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TypePlateService {

    constructor() { }

    private typePlate: any[] = [
        {
            id: 1,
            name: 'Octavo'
        },
        {
            id: 2,
            name: 'Gto 52'
        },
        {
            id: 3,
            name: 'Speed 525'
        },
        {
            id: 4,
            name: 'Cuarto Mayor'
        },
        {
            id: 5,
            name: 'Speed 745'
        },
        {
            id: 5,
            name: 'Pliego'
        }
    ];

    getTypePlate(id: number) {
        return this.typePlate;
    }

    getFirsTypePlate(id: number) {
        return this.typePlate.find(function (e) { return e.id === id; });
    }

}

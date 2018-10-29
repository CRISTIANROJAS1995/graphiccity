import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PrintMockDataService {

    private PrintMockData: PrintProduct[] = [
        {
            name: 'Gto 52',
            value: 1,
            polychromy: 60000,
            oneInk: 15000,
            special: 95000,
        },
        {
            name: 'Speed 525',
            value: 2,
            polychromy: 60000,
            oneInk: 15000,
            special: 95000,
        },
        {
            name: 'Speed 745',
            value: 3,
            polychromy: 80000,
            oneInk: 30000,
            special: 130000,
        },
        {
            name: 'Pliego',
            value: 4,
            polychromy: 570000,
            oneInk: 200000,
            special: 350000,
        }
    ];

    constructor() { }

    getPrintMockData() {
        return this.PrintMockData;
    }

    getFirsPrintMockData(id: number) {
        debugger
        return this.PrintMockData.find(function (e) { return e.value == id });
    }
}

export interface PrintProduct {
    name: string;
    value: number;
    polychromy: number;
    oneInk: number;
    special: number;
}

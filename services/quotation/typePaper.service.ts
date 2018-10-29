import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TypePaperService {

    constructor() { }

    private typePaper: any[] = [
        {
            id: 1,
            name: 'Propalcote'
        },
        {
            id: 2,
            name: 'Periodico Corriente'
        },
        {
            id: 3,
            name: 'Periodico de Colores'
        },
        {
            id: 4,
            name: 'Bond'
        },
        {
            id: 5,
            name: 'Bond de Colores'
        },
        {
            id: 6,
            name: 'Bristol'
        },
        {
            id: 7,
            name: 'Manifol'
        },
        {
            id: 8,
            name: 'Kraft'
        },
        {
            id: 9,
            name: 'Carton Prensado'
        },
        {
            id: 10,
            name: 'Quimico Original'
        },
        {
            id: 11,
            name: 'Quimico Intermedio'
        },
        {
            id: 12,
            name: 'Quimico Final'
        },
        {
            id: 13,
            name: 'Adhesivo Fasson'
        },
        {
            id: 14,
            name: 'Adhesivo Arclad SH '
        },
        {
            id: 15,
            name: 'Adhesivo Bond'
        },
        {
            id: 16,
            name: 'Adhesivo Freezer'
        },
        {
            id: 17,
            name: 'Adhesivo radiante rosado'
        },
        {
            id: 17,
            name: 'Adhesivo base Caucho'
        },
        {
            id: 17,
            name: 'Adhesivo cascara de Huevo'
        },
        {
            id: 17,
            name: 'Adhesivo Vinilo Transparente'
        },
        {
            id: 17,
            name: 'Adhesivo Vinilo Blanco'
        },
        {
            id: 17,
            name: 'Opalina'
        },
        {
            id: 17,
            name: 'Pergamino'
        },
        {
            id: 17,
            name: 'Prisma'
        },
        {
            id: 17,
            name: 'Sobre ecologico carta'
        },
        {
            id: 17,
            name: 'Sobre ecologico 1/2 carta'
        },
        {
            id: 17,
            name: 'Sobre ecologico carta especial'
        },
        {
            id: 17,
            name: 'Sobre ecologico oficio'
        },
        {
            id: 17,
            name: 'Sobre radiografia'
        },
        {
            id: 17,
            name: 'Sobre Manila carta'
        },
        {
            id: 17,
            name: 'Sobre Manila oficio'
        },
        {
            id: 17,
            name: 'Sobre bond carta'
        },
        {
            id: 17,
            name: 'Sobre bond oficio'
        },
        {
            id: 17,
            name: 'Sobre ventanilla 20A'
        },
        {
            id: 17,
            name: 'Sobre SIN ventanilla 20A'
        },
        {
            id: 17,
            name: 'Sobre diezmo bond'
        },
        {
            id: 17,
            name: 'Earth pact'
        },
        {
            id: 17,
            name: 'Maule  R Blanco'
        }
       
    ];

    getTypePaper(id: number) {
        return this.typePaper;
    }

    getFirsTypePaper(id: number) {
        return this.typePaper.find(function (e) { return e.id === id; });
    }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
    providedIn: 'root'
})

export class CallingRestServices {
    private serverDomain = 'http://localhost:';

    constructor(private http: HttpClient) { }

    private concatenateURL(port: string, method: string): string {
        return this.serverDomain + port + method;
    }

    private log(message: string) {
        console.log('UserService: ' + message);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    GetService(port: string, method: string): Observable<any> {
        return this.http.get<any[]>(this.concatenateURL(port, method))
            .pipe(
                tap(objREsponse => this.log(`fetched GetService`)),
                catchError(this.handleError('GetService', []))
            );
    }

    PostService(port: string, method: string, jsonObject: any): Observable<any> {
        return this.http.post<any>(this.concatenateURL(port, method), jsonObject, httpOptions)
        .pipe(
            tap((user: any) => this.log(`calling PostService`)),
            catchError(this.handleError<any>('PostService'))
        );
    }


}


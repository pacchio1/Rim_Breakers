import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

// import { SunsetResults } from '../model/sunset.model';

@Injectable({
	 providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    /**
     * API RICERCA MATCH
     * 
     *  
     * @returns richiesta Api 
     */
    searchPlayer() {
        return this.http.get('http://localhost:8080/player/all').pipe(map((response: any) => {
            return response 
        }))
    }


}
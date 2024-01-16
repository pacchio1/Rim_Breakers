import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	 providedIn: 'root',
})

export class BasketService {

    constructor(private apiService: ApiService) {}

    getPlayer() {
        return this.apiService.searchPlayer()
    }

}
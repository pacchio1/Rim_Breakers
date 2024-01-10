import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {

    // iconClass: string = 'white-bg';

    constructor(private router: Router) {}

    ngOnInit(): void {
        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         // Cambia la classe dell'icona in base alla pagina corrente
        //         if (event.url.includes('/home')) {
        //             this.iconClass = 'blue-bg'; // Cambia la classe per la pagina Home
        //         }
        //     }
        // });
    }

}
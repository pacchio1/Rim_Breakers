import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";

@Component ({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit {

    constructor(private basketService: BasketService) {}

    ngOnInit(): void {}

}
import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";

@Component ({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html'
})

export class BlogDetailComponent implements OnInit {

    constructor(private basketService: BasketService) {}

    ngOnInit(): void {}

}
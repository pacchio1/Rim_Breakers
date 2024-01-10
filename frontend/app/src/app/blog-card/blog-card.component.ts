import { Component, Input } from "@angular/core";

@Component ({
    selector: 'blog-card',
    templateUrl: './blog-card.component.html'
})

export class BlogCardComponent {

    @Input() imageUrl: string = '';
    @Input() topic: string = '';
    @Input() date: string = '';
  
    
}
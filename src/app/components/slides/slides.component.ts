import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.component.html',
    styleUrls: ['./slides.component.scss']
})

export class SlidesComponent {

    slideOpts = {
        InitialSlide: 0,
        speed: 400
    };

    constructor(private router: Router) { }

    Login(){
        this.router.navigate(['/login']);
    }
}

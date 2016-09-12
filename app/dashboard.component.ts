import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }              from './hero';
import { HeroService}        from './hero.service';
 
@Component({
    selector : 'my-dashboard',
    templateUrl : 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes : Hero[] = [];
    constructor(private router: Router,private heroService : HeroService){}

    ngOnInit() : void {
        this.heroService.getHeroes().then(heroes => {
            if (heroes.length > 0) {
                this.heroes = heroes.slice(1,5)
            }
        });
    }

    gotoDetail(hero : Hero) : void {
        this.router.navigate(['/detail',hero.id]);
    }
}
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero }       from './hero';


@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    constructor(private http : Http){}
        private handleError(error : any) : Promise<any>{
        console.log('An error occurred',error);
        return Promise.reject(error.message || error);
    }
    private post(hero : Hero) : Promise<Hero>{
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http
                   .post(this.heroesUrl, JSON.stringify(hero), {headers : headers})
                   .toPromise()
                   .then(res => res.json().data)
                   .catch(this.handleError);
    }
    private put(hero : Hero) : Promise<Hero> {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http
                   .put(url, JSON.stringify(hero), {headers : headers})
                   .toPromise()
                   .then(() => hero)
                   .catch(this.handleError);
    }
    getHeroes() : Promise<Hero[]> {
        return this.http.get(this.heroesUrl).toPromise()
        .then(response => response.json().data as Hero[]).catch(this.handleError);
    }
    getHero(id : number) : Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
    save(hero : Hero) : Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }
    create(name : string) : Promise<Hero> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
                   .post(this.heroesUrl, JSON.stringify({name : name}), {headers : headers})
                   .toPromise()
                   .then(res => res.json().data)
                   .catch(this.handleError)
    }
    delete(hero : Hero) : Promise<Response> {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          let url = `${this.heroesUrl}/${hero.id}`;
          return this.http
                     .delete(url, {headers : headers})
                     .toPromise()
                     .then(() => null)
                     .catch(this.handleError)
    }
}
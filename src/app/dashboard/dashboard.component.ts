import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  //heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }

  randomArrCell(): string {
    return this.heroes[Math.floor(Math.random() * this.heroes.length)]
  }

  heroes: any = [
    "Currently engaged",
    "Visited Dubai",
    "Currently is a student",
    "Had a baby during the COVID period",
    "Has a dog",
    "Has a cat",
    "Has more than 3 children",
    "Is at NICE less than a year",
    "is at NICE more than 5 years",
    "Loves FE",
    "Integrated MSTR to CXone",
    "Below the age of 30",
    "Above the age of 35",
    "Knows how to create a SWING application",
    "Knows whats SOLID  'L' stands for",
    "Loves Pizza",
    "Visited Italy at least twice",
    "Knows whats Samosa is",
    "Drank Chai Masala at least once",
    "Visited Goa",
    "Visited Las Vegas and lost/won more than 500$",
    "Has an iPhone",
    "Is Vegan/Vegeterian",
    "Has a middle name",
    "Prefers VS code as his IDE",
    "Wears glasses",
    "You think that Messi will win the champion league this year",
    "You think that Ronaldo will win the champion league this year",
    "Has more than 2 tatoos",
    "Has done scubadiving at least once",
    "Has done skydiving at least once",
    "Was at the movies during the last year",
    "Can drink 0.5 liter of Beer in one go",
    "Started a new sport/hobby during the COVID period",
    "Prefers spaces instead of TABS",
    "Prefers to work at night",
    "Doesn’t afraid to merge right before the weekend",
    "Adopted a new pet during the COVID period",
    "Doesn’t like Dark Mode",
    "Knows whats G1 stands for in JAVA",
    "'Enjoyed' at least once writing a Protracor test",
    "invested in crypto",
    "came up with an app idea & did nothing"
  ];
}

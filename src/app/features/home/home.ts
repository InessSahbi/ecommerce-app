import { Component } from '@angular/core';
import { NumberToArrayPipe } from "../../number-to-array-pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [NumberToArrayPipe],
})
export class Home {
  products = [
    {
      name: "Fancy Product",
      price: "40.00 - 80.00",
      image: "andrey-matveev-PBhuaGzJkxk-unsplash.jpg",
      sale: false,
      rating: 0
    },
    {
      name: "Special Item",
      price: "18.00",
      oldPrice: "20.00",
      image: "erick-cerritos-i5UV2HpITYA-unsplash.jpg",
      sale: true,
      rating: 5
    },
    {
      name: "Sale Item",
      price: "25.00",
      oldPrice: "50.00",
      image: "pritimohan-shit-gue7uqX-WKY-unsplash.jpg",
      sale: true,
      rating: 0
    },
    {
      name: "Popular Item",
      price: "40.00",
      image: "dillon-shook-xbFX7qCoAqI-unsplash.jpg",
      sale: false,
      rating: 5
    },
    {
      name: "Popular Item",
      price: "40.00",
      image: "joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg",
      sale: false,
      rating: 5
    },
    {
      name: "Popular Item",
      price: "40.00",
      image: "maxim-hopman-Hin-rzhOdWs-unsplash.jpg",
      sale: false,
      rating: 5
    },
    {
      name: "Popular Item",
      price: "60.00",
      image: "erick-cerritos-i5UV2HpITYA-unsplash.jpg",
      sale: false,
      rating: 5
    },
    {
      name: "Popular Item",
      price: "60.00",
      image: "maxim-hopman-Hin-rzhOdWs-unsplash.jpg",
      sale: false,
      rating: 5
    },
    {
      name: "Popular Item",
      price: "40.00",
      image: "andrey-matveev-PBhuaGzJkxk-unsplash.jpg",
      sale: false,
      rating: 5
    },
    {
      name: "Popular Item",
      price: "40.00",
      image: "dillon-shook-xbFX7qCoAqI-unsplash.jpg",
      sale: false,
      rating: 5
    },
    {
      name: "Popular Item",
      price: "40.00",
      image: "erick-cerritos-i5UV2HpITYA-unsplash.jpg",
      sale: false,
      rating: 5
    }
  ];
}

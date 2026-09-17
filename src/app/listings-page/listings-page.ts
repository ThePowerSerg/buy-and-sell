import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-listings-page',
  styleUrl: './listings-page.css',
  templateUrl: './listings-page.html',
})
export class ListingsPage {
  listings: Listing[] = [];

  ngOnInit() {
    this.listings = fakeListings;
  }
}

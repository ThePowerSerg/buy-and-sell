import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {fakeListings} from '../fake-data';
import {Listing} from '../types';

@Component({
  imports: [RouterLink, CurrencyPipe],
  selector: 'app-listing-detail-page',
  styleUrl: './listing-detail-page.css',
  templateUrl: './listing-detail-page.html',
})
export class ListingDetailPage {
  listing: Listing | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const listingId = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((l) => l.id === listingId);
  }
}

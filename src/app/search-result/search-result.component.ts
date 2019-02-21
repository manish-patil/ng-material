import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

import { PeriodicElement } from '../periodic-element';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  columnDef: string[] = [];

  @Input()
  data: PeriodicElement[];

  @Input()
  displayColumns: string[];

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.columnDef = ['position', 'name', 'weight', 'symbol'];
  }

  onPageChange(e: PageEvent) {
    console.log(e);
  }
}

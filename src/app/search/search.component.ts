import { Component, OnInit } from '@angular/core';

import { DataService } from '../data-service';
import { PeriodicElement } from '../periodic-element';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})
export class SearchComponent implements OnInit {
  dataSource: PeriodicElement[] = [];

  constructor(private dataService: DataService) { }

  onSearch(event: any) {
    this.dataSource = this.dataService.getElements(event.target.value);
  }

  ngOnInit() {
    this.dataSource = this.dataService.getElements('');
  }
}

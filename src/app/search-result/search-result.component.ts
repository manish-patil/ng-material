import { Component, Input, OnInit, ViewChild, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { PageEvent, MatPaginator, MatSort } from '@angular/material';

import { PeriodicElement } from '../periodic-element';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  columnDef: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input()
  data: PeriodicElement[];

  @Input()
  displayColumns: string[];

  @Input()
  totalRecords: number;

  @Output()
  searchChange = new EventEmitter()

  constructor() {
    this.columnDef = ['position', 'name', 'weight', 'symbol'];
  }

  ngOnInit() {
    this.paginator.pageIndex = 0;
  }

  onPageChange(e: PageEvent) {
    this.searchChange.emit({ sortColumn: this.sort.active, sortDirection: this.sort.direction, page: this.paginator.pageIndex });
  }

  onSortChange(e: PageEvent) {
    this.paginator.pageIndex = 0;
    this.searchChange.emit({ sortColumn: this.sort.active, sortDirection: this.sort.direction, page: this.paginator.pageIndex });
  }
}

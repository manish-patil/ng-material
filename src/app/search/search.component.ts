import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DataService } from '../data-service';
import { PeriodicElement } from '../periodic-element';
import { SearchConfigDialogComponent } from '../search-config-dialog/search-config-dialog.component';
import { SearchConfig, SearchColumn } from '../search-config';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})
export class SearchComponent implements OnInit {
  dataSource: PeriodicElement[] = []; // Filterd, Sorterd and Paged resultset.
  totalRecords: number; // Total no. of records after filtering.
  
  displayColumns: string[] = [];
  selection = new SelectionModel<PeriodicElement>(true, []);
  searchConfig: SearchConfig = { columns: [] };

  enableTableFormat: boolean = true;
  sortColumn: string;
  sortDirection: string;
  page: number;


  @ViewChild('element') inputElement: ElementRef;
  @ViewChild('symbol') inputSymbol: ElementRef;


  constructor(private dataService: DataService, public dialog: MatDialog) { }

  onReset() {
    this.inputElement.nativeElement.value = "";
    this.inputSymbol.nativeElement.value = "";

    // this.dataSource = this.dataService.getElements('', '', this.sortColumn, this.sortDirection, 0);
    this.getElements(this.dataService.getElements('', '', this.sortColumn, this.sortDirection, 0));
  }

  getElements(elements) {
    this.dataSource = elements.data;
    this.totalRecords = elements.totalRecords;

    console.log("Total Records", this.totalRecords);
  }

  onSearch() {
    this.getElements(this.dataService.getElements(this.inputElement.nativeElement.value, this.inputSymbol.nativeElement.value, this.sortColumn, this.sortDirection, 0));
  }

  openSearchConfigDialog() {
    console.log("openSearchConfigDialog");

    const dialogRef = this.dialog.open(SearchConfigDialogComponent, {
      width: '300px',
      data: this.searchConfig.columns
    });

    dialogRef.afterClosed().subscribe(() => {
      this.displayColumns = [];

      this.searchConfig.columns.map(column => {
        if (column.displayColumn) {
          this.displayColumns.push(column.displayColumnName)
        }
      })
    });
  }

  onSearchChange(event) {
    console.log("onSearchChange", event);

    this.sortColumn = event.sortColumn;
    this.sortDirection = event.sortDirection;
    this.page = event.page;

    this.getElements(this.dataService.getElements(this.inputElement.nativeElement.value, this.inputSymbol.nativeElement.value, this.sortColumn, this.sortDirection, this.page));
  }

  ngOnInit() {
    this.getElements(this.dataService.getElements('', '', "position", "asc", 0));
    this.displayColumns = ['position', 'name', 'weight', 'symbol'];

    this.searchConfig.columns.push({ displayColumnName: "position", displayColumnTitle: "Position", displayColumn: true })
    this.searchConfig.columns.push({ displayColumnName: "name", displayColumnTitle: "Name", displayColumn: true })
    this.searchConfig.columns.push({ displayColumnName: "weight", displayColumnTitle: "Weight", displayColumn: true })
    this.searchConfig.columns.push({ displayColumnName: "symbol", displayColumnTitle: "Symbol", displayColumn: true })
  }
}
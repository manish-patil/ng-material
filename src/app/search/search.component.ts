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
  dataSource: PeriodicElement[] = [];
  displayColumns: string[] = [];
  selection = new SelectionModel<PeriodicElement>(true, []);
  searchConfig: SearchConfig = { columns: [] };
  enableTableFormat: boolean = true;
  @ViewChild('element') inputElement: ElementRef;
  @ViewChild('symbol') inputSymbol: ElementRef;

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  onReset() {
    this.inputElement.nativeElement.value = "";
    this.inputSymbol.nativeElement.value = "";

    this.dataSource = this.dataService.getElements('', '');
  }

  onSearch() {
    this.dataSource = this.dataService.getElements(this.inputElement.nativeElement.value, this.inputSymbol.nativeElement.value);
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

  ngOnInit() {
    this.dataSource = this.dataService.getElements('', '');
    this.displayColumns = ['name', 'position', 'weight', 'symbol'];

    this.searchConfig.columns.push({ displayColumnName: "name", displayColumnTitle: "Name", displayColumn: true })
    this.searchConfig.columns.push({ displayColumnName: "position", displayColumnTitle: "Position", displayColumn: true })
    this.searchConfig.columns.push({ displayColumnName: "weight", displayColumnTitle: "Weight", displayColumn: true })
    this.searchConfig.columns.push({ displayColumnName: "symbol", displayColumnTitle: "Symbol", displayColumn: true })
  }
}
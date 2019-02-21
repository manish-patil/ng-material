import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

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
  displayColumns: string[] = [];
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

  onpenTableFormatDialog() {
    console.log("ontTableFormat");
    // this.dialog.open(DialogDataExampleDialog, {
    //   data: {
    //     displayCols: this.displayColumns
    //   }
    // });

    this.dialog.open(DialogDataExampleDialog);
  }

  ngOnInit() {
    this.dataSource = this.dataService.getElements('', '');
    this.displayColumns = ['name', 'position', 'weight', 'symbol'];
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {}) { }
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
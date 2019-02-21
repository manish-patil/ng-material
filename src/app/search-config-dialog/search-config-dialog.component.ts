import { Component, Inject } from '@angular/core';

import { SearchConfig, SearchColumn } from '../search-config';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-search-config-dialog',
  templateUrl: './search-config-dialog.component.html',
  styleUrls: ['./search-config-dialog.component.css']
})
export class SearchConfigDialogComponent {
  displayColumns: string[] = [];
  selection = new SelectionModel<SearchColumn>(true, []);

  constructor(public dialogRef: MatDialogRef<SearchConfigDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: SearchColumn[]) {
    this.displayColumns = ['displayColumn', 'displayColumnTitle'];
  }

  onOk() {
    this.dialogRef.close();
  }

  onChange(e) {
    console.log(e.source.id, e.checked);

    this.data.map((searchColumn) => {
      if (searchColumn.displayColumnName === e.source.id) {
        searchColumn.displayColumn = e.checked
      }
    })

    console.log('The dialog was closed', JSON.stringify(this.data));
  }
}
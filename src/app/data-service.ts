import { PeriodicElement } from './periodic-element';

export class DataService {
  getElements(filterElement: string, filterSymbol: string, sortColumn: string, sortDirection: string, page: number) {
    let filteredResult: PeriodicElement[];
    let sortedResult: PeriodicElement[];

    console.log("Data Service", sortColumn, sortDirection, page);

    if ((filterElement.length + filterSymbol.length) > 0) {
      filteredResult = ELEMENT_DATA.filter((element) => {
        return element.name.toLowerCase().indexOf(filterElement.toLowerCase()) > -1
          && element.symbol.toLowerCase().indexOf(filterSymbol.toLowerCase()) > -1
      })
    } else {
      filteredResult = ELEMENT_DATA.filter((element) => {
        return element
      });
    }

    sortedResult = filteredResult.sort((a, b) => {
      if (sortColumn === "position") {
        if (sortDirection === "desc") {
          return b.position - a.position;
        } else if (sortDirection === "asc") {
          return a.position - b.position;
        }
      }
    })

    return {
      data: sortedResult.slice(page * 5, (page + 1) * 5),
      totalRecords: sortedResult.length
    };
  }

  constructor() { }
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


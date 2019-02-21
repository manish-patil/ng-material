import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConfigDialogComponent } from './search-config-dialog.component';

describe('SearchConfigDialogComponent', () => {
  let component: SearchConfigDialogComponent;
  let fixture: ComponentFixture<SearchConfigDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

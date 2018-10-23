import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { TalksComponent } from './talks.component';

describe('TalksComponent', () => {
  let component: TalksComponent;
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatCardModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

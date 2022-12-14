import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateIncidentsComponent } from './private-incidents.component';

describe('PrivateIncidentsComponent', () => {
  let component: PrivateIncidentsComponent;
  let fixture: ComponentFixture<PrivateIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateIncidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

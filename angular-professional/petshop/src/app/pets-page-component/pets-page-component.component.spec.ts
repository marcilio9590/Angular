import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsPageComponentComponent } from './pets-page-component.component';

describe('PetsPageComponentComponent', () => {
  let component: PetsPageComponentComponent;
  let fixture: ComponentFixture<PetsPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

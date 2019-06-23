import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonprofileComponent } from './personprofile.component';

describe('PersonprofileComponent', () => {
  let component: PersonprofileComponent;
  let fixture: ComponentFixture<PersonprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

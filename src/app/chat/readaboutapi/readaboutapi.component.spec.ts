import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadaboutapiComponent } from './readaboutapi.component';

describe('ReadaboutapiComponent', () => {
  let component: ReadaboutapiComponent;
  let fixture: ComponentFixture<ReadaboutapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadaboutapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadaboutapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

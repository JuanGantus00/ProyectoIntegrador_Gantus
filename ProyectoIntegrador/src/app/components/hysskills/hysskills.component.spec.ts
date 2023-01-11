import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HYSskillsComponent } from './hysskills.component';

describe('HYSskillsComponent', () => {
  let component: HYSskillsComponent;
  let fixture: ComponentFixture<HYSskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HYSskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HYSskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

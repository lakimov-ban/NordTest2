import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAppealComponent } from './write-appeal.component';

describe('WriteAppealComponent', () => {
  let component: WriteAppealComponent;
  let fixture: ComponentFixture<WriteAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteAppealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

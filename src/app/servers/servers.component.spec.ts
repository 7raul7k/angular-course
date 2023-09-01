import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent } from './servers.component';

describe('ServerComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServersComponent]
    });
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

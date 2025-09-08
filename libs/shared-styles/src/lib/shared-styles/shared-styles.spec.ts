import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedStyles } from './shared-styles';

describe('SharedStyles', () => {
  let component: SharedStyles;
  let fixture: ComponentFixture<SharedStyles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedStyles],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedStyles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

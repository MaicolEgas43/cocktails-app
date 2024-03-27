import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCocktailsAppComponent } from './view-cocktails-app.component';

describe('ViewCocktailsAppComponent', () => {
  let component: ViewCocktailsAppComponent;
  let fixture: ComponentFixture<ViewCocktailsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCocktailsAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCocktailsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

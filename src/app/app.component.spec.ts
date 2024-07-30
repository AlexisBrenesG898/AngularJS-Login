import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
<<<<<<< HEAD
        RouterModule.forRoot([])
=======
        RouterTestingModule
>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'WebApp-PrimeNg'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('WebApp-PrimeNg');
=======
  it(`should have as title 'login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login');
>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, WebApp-PrimeNg');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, login');
>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxeComponent } from './syntaxe.component';

describe('SyntaxeComponent', () => {
  let component: SyntaxeComponent;
  let fixture: ComponentFixture<SyntaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyntaxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

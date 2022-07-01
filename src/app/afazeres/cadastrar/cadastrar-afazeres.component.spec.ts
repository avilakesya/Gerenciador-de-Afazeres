import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAfazeresComponent } from './cadastrar-afazeres.component';

describe('CadastrarAfazeresComponent', () => {
  let component: CadastrarAfazeresComponent;
  let fixture: ComponentFixture<CadastrarAfazeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAfazeresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAfazeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

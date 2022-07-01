import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAfazeresComponent } from './lista-afazeres.component';

describe('ListaAfazeresComponent', () => {
  let component: ListaAfazeresComponent;
  let fixture: ComponentFixture<ListaAfazeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAfazeresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAfazeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAfazeresComponent } from './editar-afazeres.component';

describe('EditarAfazeresComponent', () => {
  let component: EditarAfazeresComponent;
  let fixture: ComponentFixture<EditarAfazeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAfazeresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAfazeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

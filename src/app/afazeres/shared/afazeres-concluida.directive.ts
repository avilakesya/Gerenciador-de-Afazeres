import {
  Directive, ElementRef, Input, OnInit
} from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})

export class AfazeresConcluidaDirective implements OnInit {

  @Input() tarefaConcluida!: boolean;
  @Input() tarefaUrgente!: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }

    if (this.tarefaUrgente) {
      this.el.nativeElement.style.color = "red";
    }

  }
}

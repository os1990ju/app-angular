import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  listaCurso:string[] = ['JavaScript', 'Java', 'TypeScript', 'php'];
  habilitar:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  setHabilitar():void{
    this.habilitar? this.habilitar=false:this.habilitar=true
  }
}

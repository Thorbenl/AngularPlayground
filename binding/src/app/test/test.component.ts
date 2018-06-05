import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
    <h2>{{ "Whalecum " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Bubschi";
  constructor() { }

  ngOnInit() {
  }

}

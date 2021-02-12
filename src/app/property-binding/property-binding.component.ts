import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color = 'accent';
  btnDisable = true;
  colors = ['accent', 'primary', 'warn'];
  idx = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.idx = (this.idx + 1) % this.colors.length;
    },500);
  }

}

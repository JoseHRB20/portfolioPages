import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 
  show: boolean = true;


  constructor() { 
    
  }

  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;

  openMenu(){
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;


  }

  ngOnInit(): void {
  }



}

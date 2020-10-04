import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian-container',
  templateUrl: './accordian-container.component.html',
  styleUrls: ['./accordian-container.component.css']
})
export class AccordianContainerComponent implements OnInit {
  @Input() title;
  @Input() isToggle= false;
  @Input() isCollapse= false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isCollapse = !this.isCollapse;
  }
}

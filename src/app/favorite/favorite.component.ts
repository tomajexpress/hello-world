import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  @Input()
  message: string = "Like it";
  
  @Input()
  isFavor: boolean = false;
  
  @Output()
  change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClick()
  {
    this.isFavor = !this.isFavor;
    this.change.emit();
    console.log(this.isFavor);
  }

}

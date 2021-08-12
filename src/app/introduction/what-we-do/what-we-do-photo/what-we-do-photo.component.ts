import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do-photo',
  templateUrl: './what-we-do-photo.component.html',
  styleUrls: ['./what-we-do-photo.component.scss']
})
export class WhatWeDoPhotoComponent implements OnInit {
  @Input() imgPath: String = "../assets/OkDoge.gif";
  @Input() imgTitle: String = "TOPPOM TEXT";
  @Input() imgDescription: String = "ANTITOPPOM TEXT";

  direction: String = "";
  
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
  }

  infoEnterOnMouseEnter(event: MouseEvent) {
    let componentCenter = this.el.nativeElement.getBoundingClientRect()
    //works only for squares?
    let offSetX =  event.clientX - (componentCenter.x + componentCenter.width/2);
    let offSetY = -(event.clientY - (componentCenter.y + componentCenter.height/2)); // *-1 because y is reversed (from top to bottom)

    if(Math.abs(offSetX) > Math.abs(offSetY)) {
      if(offSetX > 0) this.direction="from-righttom-to-lefttom"
      else this.direction="from-lefttom-to-righttom"
    }

    else {
      if(offSetY > 0) this.direction="from-toppom-to-bottom"
      else this.direction="from-bottom-to-toppom"
    }
  }

  infoLeaveOnMouseLeave(event: MouseEvent) {
    let componentCenter = this.el.nativeElement.getBoundingClientRect()
    //works only for squares?
    let offSetX =  event.clientX - (componentCenter.x + componentCenter.width/2);
    let offSetY = -(event.clientY - (componentCenter.y + componentCenter.height/2)); // *-1 because y is reversed (from top to bottom)

    if(Math.abs(offSetX) > Math.abs(offSetY)) {
      if(offSetX > 0) this.direction="out-righttom"
      else this.direction="out-lefttom"
    }

    else {
      if(offSetY > 0) this.direction="out-toppom"
      else this.direction="out-bottom"
    }
  }
}
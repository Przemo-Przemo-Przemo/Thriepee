import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  public title: String = "ThriePee";
  public selectedWhatWeDoSummary: String = "Games";

  public whatWeDoPhotos: WhatWeDoPhoto[] = [
    { title: "Games", path: "../assets/what-we-do/photos/games.png", description:"Mexican stand off, strategies out of this world and best graphics"},
    { title: "Web development", path: "../assets/what-we-do/photos/webdev.png", description:"No, thats not what inception is called you schmuck"},
    { title: "Art", path: "../assets/what-we-do/photos/art.jpg", description:"Art comes in many ways. Accept our art or be known as an uncultured lolipop"},
    { title: "Comedy", path: "../assets/what-we-do/photos/comedy.png", description:"Dank memes 24/7 non stop (no please son dont leave i am a millenial!)"}
  ]
  
  selectSummaryAndScroll(photoTitle: String, selectedWhatWeDo: HTMLElement) {
    this.selectedWhatWeDoSummary=photoTitle
    selectedWhatWeDo.scrollIntoView({behavior: "smooth"});
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface WhatWeDoPhoto {
  title: String,
  path: String,
  description: String
}

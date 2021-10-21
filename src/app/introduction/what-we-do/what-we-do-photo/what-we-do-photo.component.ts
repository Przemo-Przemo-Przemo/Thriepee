import { animate, AnimationBuilder, AnimationPlayer, state, style } from '@angular/animations';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-what-we-do-photo',
  templateUrl: './what-we-do-photo.component.html',
  styleUrls: ['./what-we-do-photo.component.scss']
})
export class WhatWeDoPhotoComponent implements OnInit {
  @ViewChild('info') infoElement?: ElementRef
  animationPlayer?: AnimationPlayer

  @Input() imgPath: String = "../assets/OkDoge.gif"
  @Input() imgTitle: String = "TOPPOM TEXT"
  @Input() imgDescription: String = "ANTITOPPOM TEXT"
  @Input() shape: Array<Vector> = [{x:0, y:0}, {x:1, y:0}, {x:1, y:1}, {x:0, y:1}] //position in <0,1>

  clipPath = ""

  direction: String = ""
  vector: Array<Vector> = []


  constructor(private el:ElementRef, private animationBuilder: AnimationBuilder) { }

  ngOnInit(): void {
    this.createBoundingSquare()
  }

  // infoEnterOnMouseEnter(event: MouseEvent) {
  //   let componentCenter = this.el.nativeElement.getBoundingClientRect()
  //   //works only for squares
  //   let offSetX =  event.clientX - (componentCenter.x + componentCenter.width/2);
  //   let offSetY = -(event.clientY - (componentCenter.y + componentCenter.height/2)); // *-1 because y is reversed (from top to bottom)

  //   if(Math.abs(offSetX) > Math.abs(offSetY)) {
  //     if(offSetX > 0) this.direction="from-righttom-to-lefttom"
  //     else this.direction="from-lefttom-to-righttom"
  //   }

  //   else {
  //     if(offSetY > 0) this.direction="from-toppom-to-bottom"
  //     else this.direction="from-bottom-to-toppom"
  //   }
  // }

  // infoLeaveOnMouseLeave(event: MouseEvent) {
  //   let componentCenter = this.el.nativeElement.getBoundingClientRect()
  //   //works only for squares?
  //   let offSetX =  event.clientX - (componentCenter.x + componentCenter.width/2);
  //   let offSetY = -(event.clientY - (componentCenter.y + componentCenter.height/2)); // *-1 because y is reversed (from top to bottom)

  //   if(Math.abs(offSetX) > Math.abs(offSetY)) {
  //     if(offSetX > 0) this.direction="out-righttom"
  //     else this.direction="out-lefttom"
  //   }

  //   else {
  //     if(offSetY > 0) this.direction="out-toppom"
  //     else this.direction="out-bottom"
  //   }
  // }



  // infoSideLength: number = 0
  infoWidth = this.el.nativeElement.width*3;
  infoHeight = this.el.nativeElement.height*3;

  //XD
  // clipPath = "polygon(0% 0%, 0% 100%, calc(100%/3) 100%, calc(100%/3) calc(100%/3), calc(200%/3) calc(100%/3), calc(200%/3) calc(200%/3), calc(100%/3) calc(200%/3), calc(100%/3) 100%, 100% 100%, 100% 0%)"
  //         frame(outer1, outer2,    outer3,           )

  createBoundingSquare() { //todo: consider container width and height
    //this.infoSideLength = 3*this.getLongestDistanceBetweenVertices()
    let boundingClientRect = this.el.nativeElement.getBoundingClientRect()

    this.infoWidth = 3 * this.getLongestDistanceBetweenVerticesByDimension(Coordinate.x) * boundingClientRect.width
    this.infoHeight = 3 * this.getLongestDistanceBetweenVerticesByDimension(Coordinate.y) * boundingClientRect.height

    this.setBoundingSquareClipPath()
  }

  setBoundingSquareClipPath() {
    let shapeToString = ""
    for(let point of this.shape) {
      shapeToString += `${100 * (point.x * 1/3 + 1/3)}% ${100 * (point.y * 1/3 + 1/3)}%, `
    }

    //shapeToString must start and end on the same point in order for clipPath to work
    let startingPoint = `${100 * (this.shape[0].x * 1/3 + 1/3)}% ${100 * (this.shape[0].y * 1/3 + 1/3)}%` 
    shapeToString += startingPoint
    
    this.clipPath = `polygon(0% 0%, 0% 100%, calc(100%/3) 100%, ${shapeToString}, calc(100%/3) 100%, 100% 100%, 100% 0%)`
  }

  //TODO: refactor :>
  getLongestDistanceBetweenVerticesByDimension(longestDistanceDimension: Coordinate): number {
    let minCoordinate = this.shape[0][longestDistanceDimension]
    let maxCoordinate = this.shape[0][longestDistanceDimension]

    for(let point of this.shape) {
      minCoordinate = Math.min(minCoordinate, point[longestDistanceDimension])
      maxCoordinate = Math.max(maxCoordinate, point[longestDistanceDimension])
    }

    return maxCoordinate-minCoordinate
  }

  /*
   gets longest distance depending on x and y coordinates
  */
  getLongestDistanceBetweenVertices(): number {
    let maxDistance: number = 0

    for(let startPoint of this.shape) {
      for(let endPoint of this.shape) {
        maxDistance = Math.max(maxDistance, this.getDistance(startPoint, endPoint))
      }
    }

    return maxDistance
  }

  getDistance(point1: Vector, point2: Vector): number {
    return ((point2.x - point1.x) ** 2  + (point2.y - point1.y) ** 2) ** 0.5
  }

  infoMouseMove(event: MouseEvent) {
    console.log(this.clipPath)
    if(this.vector.length > 2) {
      return
    }

    if(this.vector.length == 2) {
     this.infoAddAnimation()
    }

    this.vector.push({x: event.clientX, y: event.clientY})
  }


  infoAddAnimation() {
    //move bounding square
    let direction: Vector = { 
      x: this.vector[1].x - this.vector[0].x, 
      y: this.vector[1].y - this.vector[0].y
    }

    // let directionNormalizedX = (direction.x ** 2 / (direction.x ** 2 + direction.y ** 2)) ** 0.5 
    // let directionNormalized: Vector = {
    //   x: directionNormalizedX,
    //   y: directionNormalizedX*direction.y/direction.x 
    // }
    const infoMoveAnimation = this.animationBuilder.build([
      animate('1s ease', style({
        'left': `${direction.x >= direction.y ? this.infoWidth/3 : direction.x/direction.y * this.infoWidth/3 }px`,
        'top':  `${direction.y >= direction.x ? this.infoHeight/3 : direction.y/direction.x * this.infoHeight/3 }px`
      }))
    ])
    console.log(infoMoveAnimation)
    this.animationPlayer = infoMoveAnimation.create(this.infoElement)
   // this.animationPlayer.play()
   
    // let a = 
    // `@keyframes from {
    //   left: ${-this.infoWidth/3}
    //   top: ${-this.infoHeight/3}
    // }
    // to {
    //   left: ${direction.x >= direction.y ? this.infoWidth/3 : direction.x/direction.y * this.infoWidth/3 }
    //   top:  ${direction.y >= direction.x ? this.infoHeight/3 : direction.y/direction.x * this.infoHeight/3 }
    // }`
  }
}

//TODO: refactor :>
enum Coordinate {
  x = 'x',
  y = 'y'
}

type Vector = Record<Coordinate, number>
// interface Vector {
//   x: number,
//   y: number
// }
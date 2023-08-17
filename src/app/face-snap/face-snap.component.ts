import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapBoutonLabel!: string;

  ngOnInit() {
    this.snapBoutonLabel = "On snap!";
  }

  onSnap() {
    if (this.snapBoutonLabel === "On snap!") {
      this.faceSnap.snaps++;
      this.snapBoutonLabel = "Oops unSnap!";
    } else {
      this.faceSnap.snaps--;
      this.snapBoutonLabel = "On snap!";
    }
  }
}


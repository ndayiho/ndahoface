import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face',
  templateUrl: './single-face.component.html',
  styleUrls: ['./single-face.component.scss']
})
export class SingleFaceComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.buttonText = "On snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap() {
    if (this.buttonText === "On snap!") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.buttonText = "Oops, unSnap!";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.buttonText = "On snap!";
    }
  }

}

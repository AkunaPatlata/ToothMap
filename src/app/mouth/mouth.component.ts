import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '.././services/save-comment.service';

@Component({
  selector: 'app-mouth',
  templateUrl: './mouth.component.html',
  styleUrls: ['./mouth.component.scss'],
})
export class MouthComponent implements OnInit {
  public showKaries: boolean = false;
  public removeTooth: boolean = false;
  public restoreTooth: boolean = false;
  public plomba: boolean = false;
  public showCheckboxes: boolean = false;
  public actionMode: string = 'removeTooth';
  public newComment: string = '';
  public comments: string[] = [];
  public activeParts: { [key: string]: { [key: string]: boolean } } = {};

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const patientId = params['id'];
      for (let i = 1; i <= 32; i++) {
        this.activeParts[`tooth${i}`] = {
          left: false,
          right: false,
          center: false,
          top: false,
          bottom: false,
          removed: false,
          karies: false,
          plomba: false,
        };
      }
      const savedData = localStorage.getItem(`patient_${patientId}_mouth_data`);
      if (savedData) {
        this.activeParts = JSON.parse(savedData);
      }

      const savedComments = localStorage.getItem(
        `patient_${patientId}_comments`
      );
      if (savedComments) {
        this.comments = JSON.parse(savedComments);
      }
    });

    this.onActionModeChange();
  }

  onActionModeChange() {
    this.showKaries = this.actionMode === 'showKaries';
    this.removeTooth = this.actionMode === 'removeTooth';
    this.restoreTooth = this.actionMode === 'restoreTooth';
    this.plomba = this.actionMode === 'plomba';
  }

  togglePart(toothNumber: string, part: string) {
    if (this.removeTooth) {
      this.activeParts[toothNumber]['removed'] = true;
      
    } else if (this.restoreTooth) {
      if (this.activeParts[toothNumber]['removed']) {
        this.activeParts[toothNumber]['removed'] = false;
        this.activeParts[toothNumber]['plomba'] = false; 
        this.activeParts[toothNumber]['bottom'] = false;
        this.activeParts[toothNumber]['left'] = false;
        this.activeParts[toothNumber]['right'] = false;
        this.activeParts[toothNumber]['top'] = false;
        this.activeParts[toothNumber]['center'] = false;
      }
    } else if (this.showKaries) {
      this.activeParts[toothNumber][part] = !this.activeParts[toothNumber][part];
    } else if (this.plomba) {
      if (!this.activeParts[toothNumber]['removed']) {
        this.activeParts[toothNumber]['plomba'] = !this.activeParts[toothNumber]['plomba'];
      }
    }
    this.saveData();
  }

  toggleCheckboxes() {
    this.showCheckboxes = !this.showCheckboxes;
  }

  saveData() {
    const patientId = this.route.snapshot.params['id'];
    localStorage.setItem(
      `patient_${patientId}_mouth_data`,
      JSON.stringify(this.activeParts)
    );
  }

  addComment(comment: string) {
    this.comments.push(comment);
    this.saveComments();
  }

  saveComments() {
    const patientId = this.route.snapshot.params['id'];
    this.commentsService.saveComments(patientId, this.comments);
  }

  saveComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.newComment = '';
      const patientId = this.route.snapshot.params['id'];
      localStorage.setItem(
        `patient_${patientId}_comments`,
        JSON.stringify(this.comments)
      );
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor() {}

  saveComments(patientId: string, comments: string[]) {
    localStorage.setItem(
      `patient_${patientId}_comments`,
      JSON.stringify(comments)
    );
  }

  loadComments(patientId: string): string[] {
    const savedComments = localStorage.getItem(`patient_${patientId}_comments`);
    return savedComments ? JSON.parse(savedComments) : [];
  }
}

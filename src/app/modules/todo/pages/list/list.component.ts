import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteModel } from '../../../../-models/note.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [ FormsModule,NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
notesList:NoteModel [] = [
  new NoteModel( 1 ,'Test Note' , 'Test Description Note' , new Date()),
  new NoteModel( 1 ,'Test Note' , 'Test Description Note' , new Date()),
  new NoteModel( 1 ,'Test Note' , 'Test Description Note' , new Date()),
]

deleteNote(id: number) {
  var index = this.notesList.findIndex(x => x.id === id)
  this.notesList.splice(index,1)
};

}

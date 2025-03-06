import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/components/header/header.component";
import { FooterComponent } from './pages/components/footer/footer.component';

@Component({
  selector: 'app-todo',
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

}

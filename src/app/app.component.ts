import {Component, OnInit} from '@angular/core';
import {DialogService} from './dialog/dialog.service';
import {ExampleComponent} from './example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-perfect-dialog';

  constructor(public dialog: DialogService) {
  }

  ngOnInit(): void {
    this.dialog.open(ExampleComponent)
  }
}

import { Component } from '@angular/core';
import {faVideo, faDownload, faGamepad} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pixys';
  faVideo = faVideo;
  faDownload = faDownload;
  faGamepad = faGamepad;
}

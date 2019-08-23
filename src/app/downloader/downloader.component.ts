import { Component } from '@angular/core';
import { DownloaderService } from '../services/downloader.service';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  providers: [ DownloaderService ]
})
export class DownloaderComponent {
  contents: string;
  constructor(private downloaderService: DownloaderService) {}

  clear() {
    this.contents = undefined;
  }

  download() {
    this.downloaderService.getTextFile('http://smashtournamentproject2.azurewebsites.net/api/users')
      .subscribe(results => this.contents = results);
  }
}

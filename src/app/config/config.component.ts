import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Config } from '../Models/Config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  error: any;
  headers: string[];
  config: Config;

  ngOnInit(): void {
  }
  constructor(private configService: ConfigService) { }

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {...data},  // success path
      error => {
        this.error = error;
        console.log(error);
      });                         // error path
  }

  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile
      });
  }



  makeError() {
    // tslint:disable-next-line: deprecation
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error );
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
        console.log(resp.body);
      });
  }
}

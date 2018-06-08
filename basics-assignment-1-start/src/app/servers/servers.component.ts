import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  allServers= ['Server1', 'Server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

  onCreateServer() {
     this.serverCreated = true;
     this.allServers.push(this.serverName);
     this.serverCreationStatus = 'Server was created The Name is: ' + this.serverName;
  }
}

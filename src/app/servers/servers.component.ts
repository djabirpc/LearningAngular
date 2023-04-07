import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = "No sercer was created!";
  serverName = 'Test Server';
  servers = ['TestSece','Test 32']
  serverCreated = false;

  username:string = ''

  showSecret = false;
  log = [];

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true
    },2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created Name is ' + this.serverName;
  }

  // onUpdateServer(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
  }

}

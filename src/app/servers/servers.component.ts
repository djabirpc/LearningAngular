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

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true
    },2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server Was Created'
  }

  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-server-test',
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.css']
})
export class ServerTestComponent {
  serverElements = [
    {type:'server', name:'TestServer1', content:'Just a Content1'},
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Chznged';
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }

}


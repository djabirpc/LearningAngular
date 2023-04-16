import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe( didActivated => {
      this.userActivated = didActivated;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}



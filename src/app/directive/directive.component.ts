import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4]
  onlyOdd = false;
  value=5;
}

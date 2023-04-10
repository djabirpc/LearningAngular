import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrendient.model';
import { ShoppingListService } from '../shooping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef
  @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef

  constructor(private slService: ShoppingListService){}

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.slService.addIngredient(newIngredient);
  }

}

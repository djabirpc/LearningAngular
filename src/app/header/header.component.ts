import {Component} from '@angular/core';
import { DataStorageservice } from '../shared/data-storage.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{

    constructor(private dataStorageService: DataStorageservice){}

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
}

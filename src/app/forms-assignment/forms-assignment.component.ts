import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-forms-assignment',
  templateUrl: './forms-assignment.component.html',
  styleUrls: ['./forms-assignment.component.css']
})
export class FormsAssignmentComponent implements OnInit {
  projectForm: FormGroup
  projectStatus = ['Stable','Critical','Finished']

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvzlideProjectName
      ),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical'),
    })
  }

  onSaveProject(){
    console.log(this.projectForm.value)
  }
}

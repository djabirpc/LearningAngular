import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
    static invalidProjectName(control: FormControl): {[s: string]: boolean}{
        if(control.value === 'Test'){
            return {'invalidProjectName': true};
        }
        return null;
    }

    static asyncInvzlideProjectName(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(control.value === 'TestProject'){
                    resolve({'invalideProjectName': true});
                }else{
                    resolve(null);
                }
            }, 2000)
        })

        return promise;
    }
}
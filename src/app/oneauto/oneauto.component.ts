import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { AutocompleteComponent } from 'angular-ng-autocomplete';

@Component({
  selector: 'app-oneauto',
  templateUrl: './oneauto.component.html',
  styleUrls: ['./oneauto.component.scss']
})
export class OneautoComponent implements OnInit {

  title = 'trynew';
  @ViewChild('auto') auto:any;

  autocomef : FormGroup;
  keyword = 'name';
  placeholderCountry = "placeholderCountry"
  countries:any = [
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    },
    {
      id: 3,
      name: 'Russia'
    },
    {
      id: 4,
      name: 'Australia'
    },
    {
      id: 5,
      name: 'Japan'
    },
    {
      id: 6,
      name: 'Ivory Coast'
    },
    {
      id: 7,
      name: 'China'
    },
    {
      id: 8,
      name: 'Singapore'
    },
    {
      id: 9,
      name: 'Malaysia'
    },
    {
      id: 10,
      name: 'Chile'
    }
  ];

  constructor(private _fb: FormBuilder){
    this.autocomef = _fb.group({
      country: [{value: '', disabled: false}],
    });
  }
  ngOnInit(): void {

  }

  selectEventCountry(item:any) {
    // do something with selected item
    console.log("selectEventCountry item ",item)
    
  }

  onChangeSearchCountry(val: string) {
    console.log("onChangeSearchCountry val ",val)

  }
  
  onFocusedCountry(e:any){
    console.log("onFocusedCountry e ",e)
    
  }

  searchClearedCountry() {
   console.log("searchClearedCountry item ")
    //this.onclear()
    this.auto.close();
  }

  openedCountry(){
    console.log("openedCountry ")
  }

  closedCountry(){
    console.log("closedCountry ")
  }
  



  onclear(){
    this.autocomef.patchValue({
      country : "",
    })

  }

  submitReactiveForm() {
    console.log("submitReactiveForm this.autocomef ",this.autocomef);
    console.log("submitReactiveForm this.autocomef.value ",this.autocomef.value);
    
  }
}

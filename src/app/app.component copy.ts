import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutocompleteComponent } from 'angular-ng-autocomplete';

const initialValueCountryinit = {
    
};

const initialValueCityinit = {
    
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'trynew';
  @ViewChild('countryref', { static: true }) countryref!: AutocompleteComponent;
  @ViewChild('cityref', { static: true }) cityref!: AutocompleteComponent;

  // countryrf : FormGroup;
  // cityrf:FormGroup;
  autocomef : FormGroup;
  

  keyword = 'name';

  placeholderCountry = "placeholderCountry"
  placeholderCity = "placeholderCity"
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

  cities:any = [
    {
      id: 100,
      name: 'Madurai',
      countryid : 1
    },
    {
      id: 101,
      name: 'Chennai',
      countryid: 1
    },
    {
      id: 102,
      name: 'trichy',
      countryid : 2
    },
    {
      id: 103,
      name: 'Kolkata',
      countryid : 2
    },
    {
      id: 104,
      name: 'Kanpur',
      countryid : 3
    },
    {
      id: 105,
      name: 'Nagpur',
      countryid : 3
    },
    {
      id: 106,
      name: 'Jaipur',
      countryid : 4
    },
    {
      id: 107,
      name: 'Deradun',
      countryid : 4
    },
    {
      id: 108,
      name: 'Andra',
      countryid : 5
    },
    {
      id: 109,
      name: 'Karna',
      countryid : 5
    },
    {
      id: 110,
      name: 'Moscow',
      countryid : 6
    },
    {
      id: 111,
      name: 'Philip',
      countryid : 6
    },
    {
      id: 112,
      name: 'Soccer',
      countryid : 7
    },
    {
      id: 113,
      name: 'Hockey',
      countryid : 8
    },
    {
      id: 114,
      name: 'Tendulkar',
      countryid : 9
    },
    {
      id: 115,
      name: 'Dravid',
      countryid : 10
    },
    {
      id: 116,
      name: 'Germany',
      countryid : 9
    },
    {
      id: 117,
      name: 'Tirupura',
      countryid : 9
    },
    {
      id: 118,
      name: 'Minneos',
      countryid : 8
    },
    {
      id: 119,
      name: 'Mexico',
      countryid : 7
    }
  ];
  constructor(){
    this.autocomef = new FormGroup({
      "country" : new FormControl(null),
      "city" : new FormControl(null),
    });

    // this.cityrf = new FormGroup({
    //   "city" : new FormControl(null),
    // });

  }
  ngOnInit(): void {

  }

  citiesSelected:any =[];
  selectEventCountry(item:any) {
    // do something with selected item
    console.log("selectEventCountry item ",item)
    this.citiesSelected = this.cities.filter((ele:any)=>{
      return ele.countryid == item.id;
    })
    console.log("this.citiesSelected ",this.citiesSelected)
  }

  onChangeSearchCountry(val: string) {
    console.log("onChangeSearchCountry val ",val)

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocusedCountry(e:any){
    console.log("onFocusedCountry e ",e)
    console.log("onFocusedCountry this.countryref ",this.countryref)

    if(this.countryref.filteredList && this.countryref.filteredList.length >0){

    }
    else{
      this.countryref.filteredList = this.countries;

    }
    // do something when input is focused
  }

  searchClearedCountry() {
   console.log("searchClearedCountry item ")
  }

  openedCountry(){
    console.log("openedCountry ")
  }

  closedCountry(){
    console.log("closedCountry ")
  }
  


  selectEventCity(item:any) {
    // do something with selected item
    console.log("selectEventCity item ",item)

  }

  onChangeSearchCity(val: string) {
    console.log("onChangeSearchCity val ",val)

    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocusedCity(e:any){
    console.log("onFocusedCity e ",e)

    // do something when input is focused
  }

  searchClearedCity() {  
    console.log("searchClearedCity ")

  }
  openedCity(){
    console.log("openedCity ")
  }

  closedCity(){
    console.log("closedCity ")
  }
  

  onclear(){
    console.log("onclear this.countryref ",this.countryref)
    this.countryref.clear();
    this.countryref.close()

    //console.log("onclear1 this.countryref.filteredList ",this.countryref.filteredList)
    this.cityref.clear();
    this.cityref.close()

    /*
    this.initialValueCountry :any = {
      id: 2,
      name: 'England'
    };
    
    this.initialValueCity :any = {
      id: 106,
      name: 'Jaipur'
    };
    */

  }
}


import { Component, OnInit } from '@angular/core';
import{dataFake} from '../../data/dataFake'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  photoCover: string=""
  cardTitle: string=""
  cardDescription: string=""
  private Id: string = ""

  constructor(){
      const view = this.setValuesToComponent();
      console.log(view)
  }

  setValuesToComponent() {
    const result = dataFake.map(item => {
        this.Id = item.Id
        this.photoCover = item.photoCover
        this.cardDescription = item.description
        this.cardTitle = item.title

    }

      )
  }

    }




import { Component, OnInit } from '@angular/core';
import {IncidentsService } from '../../services/incidents.service'

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  incidents = [];

  constructor(private incidentsService: IncidentsService) { }

  ngOnInit(){
    this.incidentsService.getIncidents()
    .subscribe(
      res=>{
        this.incidents = res;
        (err: any) => console.log(err)
      }
    )
  }

}

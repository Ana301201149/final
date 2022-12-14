import { Component, OnInit } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-private-incidents',
  templateUrl: './private-incidents.component.html',
  styleUrls: ['./private-incidents.component.css']
})
export class PrivateIncidentsComponent  implements OnInit {
  incidents: any;

  constructor(private incidentsService: IncidentsService) {
    this.incidents = [];
  }



  ngOnInit() {
    this.incidentsService.getPrivateIncidents()
    .subscribe(
      res =>{ 
        console.log(res);
        this.incidents = res ;
        ( err: any) => console.log(err)
      }
    )
  }

}

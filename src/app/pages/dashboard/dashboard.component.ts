import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  banners:[];
  constructor(private http: ApiService) {

  }

  ngOnInit(): void {
    this.http.getBanner().subscribe(data =>{
      this.banners = data.accordian;
    });
  }

}

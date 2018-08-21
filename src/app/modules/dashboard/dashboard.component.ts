import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  models: any[];
  profileViews: any[];
  featuredModels: any[];
  profilePic: string;

  constructor() { }

  ngOnInit() {
    this.profilePic = 'assets/images/dashboard/profile_pic.jpg';

    this.models = [
      {
        url: 'assets/images/dashboard/pic1.jpeg',
        name: 'Josie Fox',
        description: 'Russian Model'
      },
      {
        url: 'assets/images/dashboard/pic2.jpg',
        name: 'Ella Ramos',
        description: 'Spanish Model'
      },
      {
        url: 'assets/images/dashboard/pic3.jpg',
        name: 'Bernice Butler',
        description: 'Italian Model'
      },
      {
        url: 'assets/images/dashboard/pic4.jpg',
        name: 'Millie Tyler',
        description: 'Brazilian Model'
      },
      {
        url: 'assets/images/dashboard/pic5.jpeg',
        name: 'Vera Jefferson',
        description: 'Canadian Model'
      }
    ];

    this.profileViews = [
      {
        url: 'assets/images/dashboard/prof_pic1.jpg',
        name: 'Stella Martin',
        time: '34 min ago',
        date: '25 Sep 2018'
      },
      {
        url: 'assets/images/dashboard/prof_pic2.jpg',
        name: 'Mamie Klein',
        time: '29 min ago',
        date: '25 Aug 2018'
      },
      {
        url: 'assets/images/dashboard/prof_pic3.jpg',
        name: 'Nellie Carroll',
        time: '2 hours ago',
        date: '13 Oct 2018'
      },
      {
        url: 'assets/images/dashboard/prof_pic4.jpeg',
        name: 'Polly Watson',
        time: '4 hours ago',
        date: '26 Feb 2018'
      },
      {
        url: 'assets/images/dashboard/prof_pic5.jpg',
        name: 'Mamie Klein',
        time: '7 hours ago',
        date: '31 Dic 2017'
      }
    ];

    this.featuredModels = [
      {
        url: 'assets/images/dashboard/featured1.jpg',
        name: 'Josie Fox',
        description: 'Russian Models'
      },
      {
        url: 'assets/images/dashboard/featured2.jpg',
        name: 'Ella Ramos',
        description: 'Spanish Models'
      },
      {
        url: 'assets/images/dashboard/featured3.jpg',
        name: 'Bernice Butler',
        description: 'Italian Models'
      },
      {
        url: 'assets/images/dashboard/featured4.jpg',
        name: 'Millie Tyler',
        description: 'Brazilian Models'
      }
    ];
  }
}

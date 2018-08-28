import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lux-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() title: string = 'Título página';
  @Input() links = [
    {
      name: 'Inicio',
      href: '/'
    },
    {
      name: 'Catalogo',
      href: '/catalog'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

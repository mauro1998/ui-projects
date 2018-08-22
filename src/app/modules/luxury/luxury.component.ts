import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.scss']
})
export class LuxuryComponent implements OnInit {
  menu: any[][];
  alerts: any[];
  callouts: any[];
  thumbnails: any[];
  previews: any[];
  footerInfo: any[];
  carouselItems: any[];
  menuHidden$ = new BehaviorSubject<boolean>(true);
  modalHidden$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  ngOnInit() {
    this.menu = [
      [
        {
          href: '/',
          text: 'Sobre Nosotros'
        },
        {
          href: '/',
          text: 'Información de Contacto'
        },
        {
          href: '/',
          text: 'Suscribirse al newsletter'
        }
      ],
      [
        {
          href: '/',
          text: 'Mapa del sitio'
        },
        {
          href: '/',
          text: 'Síganos en redes sociales'
        }
      ]
    ];

    this.alerts = [
      {
        boldText: 'Error:',
        text: 'Lo sentimos, algo ha salido mal.',
        type: 'error'
      },
      {
        boldText: 'Alerta:',
        text: 'Estas configuraciones no se pueden revertir, ten cuidado.',
        type: 'warning'
      },
      {
        boldText: 'Muy bien!:',
        text: 'Lo lograste, sigue así.',
        type: 'success'
      },
      {
        boldText: '¿Sabías que...',
        text: 'el 1% de las personas en todo el mundo es dueño de la mitad de las riquezas?',
        type: 'info'
      },
    ]

    const callout = {
      src: 'assets/images/luxury/fpo-icon.png',
      title: 'Título del Callout',
      text: 'Llama la atención del usuario'
    };

    const thumbnail: any[] = [
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
      { src: 'assets/images/luxury/fpo-500x300.jpg' },
    ];

    this.callouts = [];
    this.thumbnails = [];
    this.previews = [];

    for (let i = 0; i < thumbnail.length; i++) {
      this.callouts.push(callout);
      this.thumbnails.push(thumbnail[i]);
      if (i < length / 2) this.previews.push(i);
    }

    this.footerInfo = [
      {
        title: 'Catálogo',
        links: [
          { href: '/', text: 'Todas las marcas' },
          { href: '/', text: 'Para hombre' },
          { href: '/', text: 'Para mujer' },
          { href: '/', text: 'Explorar todo' },
        ]
      },
      {
        title: 'Nosotros',
        links: [
          { href: '/', text: 'Quienes somos' },
          { href: '/', text: 'Política de privacidad' },
          { href: '/', text: 'Términos de servicio' },
          { href: '/', text: 'Trabaje con nosotros' },
          { href: '/', text: 'Contáctenos' },
        ]
      },
      {
        title: 'Comunidad',
        links: [
          { href: '/', text: 'Vende tu reloj' },
          { href: '/', text: 'Política de devolución' },
          { href: '/', text: 'Ayuda y soporte técnico' },
          { href: '/', text: 'Reclamos y sugerencias' },
        ]
      },
      {
        title: 'Redes Sociales',
        links: [
          { href: '/', text: 'Instagram' },
          { href: '/', text: 'Facebook' },
          { href: '/', text: 'Twitter' },
          { href: '/', text: 'Youtube' },
        ]
      },
    ]

    this.carouselItems = [
      {
        src: 'assets/images/luxury/hero.jpg',
        leadin: 'Cientos de diseños',
        opacity: 0.4,
        text: [
          'Explora nuestro gran catálogo de relojes.',
          'Cientos de diseños de las marcas más populares.',
          'Descubre el reloj perfecto para ti.',
        ],
        action: 'Explorar'
      },
    ];

    for (let i = 0; i < 5; i++) {
      this.carouselItems.push(this.carouselItems[0]);
    }
  }

  log(...args) {
    console.log(...args);
  }

  getDate() {
    const date = new Date();
    const months = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }
}

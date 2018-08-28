import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  fetch() {
    return [
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
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

  constructor() { }

  fetch() {
    return [
      {
        title: 'Catálogo',
        links: [
          { href: '/', text: 'Todas las marcas' },
          { href: '/', text: 'Para hombre' },
          { href: '/', text: 'Para mujer' },
          { href: '/catalog', text: 'Explorar todo' },
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
    ];
  }

}

import { Injectable } from '@angular/core';
import { shuffle } from './utils';

@Injectable()
export class TestimonialsService {

  constructor() { }

  fetch() {
    const headers = [
      'Excelente servicio',
      'Definitivamente recomendado',
      'De primera clase',
      'Excelentes tratos',
      'Fácil y sencillo',
    ];

    const names = [
      'Isabela Zapata',
      'Daniel Bedoya',
      'Santiago Quintero',
      'Jose David Quiroz',
      'Manuela Muñoz',
    ];

    const array = [];

    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      array.push({
        header,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, assumenda magnam suscipit dolore at rerum consequuntur ipsam provident. Minima dignissimos excepturi reiciendis unde, aut quia laboriosam deserunt deleniti reprehenderit ducimus.',
        name: names[i],
      });
    }

    return shuffle(array);
  }

}

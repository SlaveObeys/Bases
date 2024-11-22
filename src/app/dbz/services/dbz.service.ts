import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 750
  }
  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = { ...character, id: uuid() };

    console.log(newCharacter);

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string){
    console.log('Caracter eliminado id: ', id)
    this.characters = this.characters.filter(character => character.id !== id);
  }

}

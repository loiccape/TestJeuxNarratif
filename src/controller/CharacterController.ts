import { characters } from "../data/characters";
import { Character } from "../class/Character";

export class CharacterController {

    getCharacter(name: string): Character | undefined {
       return Object.values(characters).find(character => character.prenom.toLowerCase() === name.toLowerCase());
    }

    setRelation(name: string, valeur: number): void {
        const character = this.getCharacter(name);
        if (character) {
            character.relation += valeur;
            console.log(character);
            
        }
    }


}
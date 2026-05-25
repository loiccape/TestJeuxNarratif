export class Character {
  prenom: string;
  relation: number;
  vivant : boolean;
  avatar : string;
  
  constructor(prenom: string, relation: number, vivant: boolean, avatar: string) {
    this.prenom = prenom;
    this.relation = relation; // 0 = ennemi, 50 = neutre, 100 = ami proche
    this.vivant = vivant;
    this.avatar = avatar;
  }
}
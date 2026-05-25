export interface GameState {
  sceneId: string
  nourriture: boolean  // nombre de jours de nourriture restants
  relations: {
    Tom: number
    Lucas: number
    Elise: number
    josie: number
  },
  flags: {
    //Flags acte 1
    chercherDuBois: boolean, // true = le joueur a cherché du bois ACTE 1
    TomSolo: boolean, // true = Tom est allé seul chercher du bois ACTE 1
    TomCourses: boolean, // true = le joueur a suivi Tom pour faire les courses ACTE 1
    josieCourses: boolean, // true = le joueur a suivi Josie pour faire les courses ACTE 1
    EliseCourses: boolean, // true = le joueur a suivi Elise pour faire les courses ACTE 1

    //flags acte 2
    TomChercherDuBoisEnCachette: boolean, // true = Tom est allé chercher du bois en cachette ACTE 2
    TomChercherDuBoisAvecAccordDeToutLeMonde: boolean, // true = Tom est allé chercher du bois avec tout le monde ACTE 2
    josieTomCanape: boolean, // true = Josie a dormi avec Tom dans le canapé ACTE 2
  }
}

export const initialState: GameState = {
  sceneId: "intro",
  nourriture: true,
  relations: {
    Tom: 0,
    Lucas: 0,
    Elise: 0,
    josie: 0,
  },
  flags: {
    TomCourses: false, // true = le joueur a suivi Tom pour faire les courses ACTE 1
    josieCourses: false, // true = le joueur a suivi Josie pour faire les courses ACTE 1
    EliseCourses: false, // true = le joueur a suivi Elise pour faire les courses ACTE 1
    chercherDuBois: false, // true = le joueur a cherché du bois ACTE 1
    TomSolo: false, // true = Tom est allé seul chercher du bois ACTE 1

    josieTomCanape: false, // true = Josie a dormi avec Tom dans le canapé ACTE 2
    TomChercherDuBoisEnCachette: false, // true = Tom est allé chercher du bois en cachette ACTE 2
    TomChercherDuBoisAvecAccordDeToutLeMonde: false, // true = Tom est allé chercher du bois avec tout le monde ACTE 2
  }
}
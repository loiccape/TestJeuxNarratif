// src/data/recaps.ts

import type { GameState } from "../class/GameState"

export interface RecapLine {
  texte: string
  condition: (state: GameState) => boolean
}

export interface Recap {
  id: string
  lines: RecapLine[]
  next: string
}
export const recaps: Recap[] = [
  {
    id: "recapActe1",
    next: "acte2Matin",
    lines: [
      {
        texte: "Vous avez peut-être bien fait d'écouter Tom pour les courses. Vous avez de quoi tenir un moment. Vous ne savez pas combien de jours cette tempête va durer, mais au moins vous n'aurez pas faim tout de suite.",
        condition: (state) => state.nourriture == true && state.flags.TomCourses
      },
      {
        texte: "Les courses étaient légères. Ce qui semblait raisonnable hier soir l'est peut-être moins ce matin, avec cette neige qui ne s'arrête pas.",
        condition: (state) => state.nourriture == true && state.flags.josieCourses
      },
      {
        texte: "Vous avez fait un compromis pour les courses. C'était pas mal comme idée, mais avec cette neige qui ne s'arrête pas, vous espérez que ça va suffire.",
        condition: (state) => state.nourriture == true && state.flags.EliseCourses
      },
      {
        texte: "Bonne idée d'être allé récupérer du bois avec Tom. Le froid dehors donne raison à cette décision.",
        condition: (state) => state.flags.chercherDuBois && state.flags.TomSolo == false
      },
      {
        texte: "Tom est allé chercher le bois seul. Il a géré, comme toujours. Tu te demandes si c'est rassurant ou inquiétant.",
        condition: (state) => state.flags.TomSolo
      },
      {texte: "tu as décidé de ne pas aller chercher du bois. C'était pas une mauvaise idée, mais ...", condition: (state) => state.flags.chercherDuBois == false && state.flags.TomSolo == false},
      {
        texte: "Et puis il y a Tom. Tu ne sais pas exactement ce que c'est, ce qu'il reste entre vous deux. Mais cette nuit au coin du feu, quelque chose s'est dit sans se dire.",
        condition: (state) => state.relations.Tom >= 40
      },
    ]
  },
  {
    id: "recapActe2",
    next: "acte3Faim",
    lines: [
      {
        texte: "Vous avez du bois pour quelques jours. Tom y est allé avec l'accord de tout le monde. C'était pas simple mais vous avez géré ensemble.",
        condition: (state) => state.flags.TomChercherDuBoisAvecAccordDeToutLeMonde == true && state.flags.TomChercherDuBoisEnCachette == false
      },
      {
        texte: "Tom est sorti seul dans la nuit sans prévenir personne. Vous avez du bois. Elise lui en a voulu. Tout le monde lui en a voulu. Et personne ne sait quoi faire de quelqu'un qui prend soin des autres malgré eux.",
        condition: (state) => state.flags.TomChercherDuBoisEnCachette == true && state.flags.TomChercherDuBoisAvecAccordDeToutLeMonde == false
      },
      {
        texte: "Cette nuit-là Josie est restée dans le salon. Le matin vous les avez trouvés tous les deux dans le canapé. Personne n'en a parlé. Certaines choses n'ont pas besoin d'être dites pour exister.",
        condition: (state) => state.flags.josieTomCanape == true
      },
      {
        texte: "La nourriture c'est deux jours si on rationne. Vous ne savez pas encore ce que ça fait vraiment, la faim qui dure. Vous allez apprendre.",
        condition: (state) => state.nourriture == true && (state.flags.josieCourses || state.flags.EliseCourses)
      },
      {
        texte: "Vous avez un peu de marge sur la nourriture. Pas beaucoup. Mais assez pour ne pas paniquer tout de suite.",
        condition: (state) => state.nourriture == true && state.flags.TomCourses == true
      },
      {
        texte: "Tom te fait confiance. Dans un endroit comme celui-là, avec des gens comme ceux-là, ça compte.",
        condition: (state) => state.relations.Tom >= 60
      },
      {
        texte: "Josie commence à s'ouvrir. Pas beaucoup. Juste assez pour que tu sentes qu'il y a quelque chose derrière les piques.",
        condition: (state) => state.relations.josie >= 50
      },
    ]
  }
]
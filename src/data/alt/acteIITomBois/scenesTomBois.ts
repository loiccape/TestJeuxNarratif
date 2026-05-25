import { GameState } from "../../../class/GameState"
import type { Scene } from "../../../class/Scene"

export const scenesTomBois: Scene[] = [
 {
  id: "acte2BoisTomSeul",
  lines: [
    { type: "narration", texte: "Tom se lève sans attendre la réponse de personne." },
    { type: "narration", texte: "Il ouvre le placard de l'entrée. La tenue est là, comme le proprio l'avait dit. Une combinaison épaisse, des gants, une cagoule, des bottes doublées. Il commence à s'équiper méthodiquement, sans théâtraliser." },
    { type: "dialogue", texte: "Attends.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Tom" },
    { type: "dialogue", texte: "Non sérieusement attends. C'est quoi le plan exactement ? Tu sors seul dans un blizzard pour aller à cinq cents mètres d'ici et on fait quoi nous si t'arrives pas ?", personnage: "Josie" },
    { type: "dialogue", texte: "J'arrive.", personnage: "Tom" },
    { type: "dialogue", texte: "T'en sais rien.", personnage: "Josie" },
    { type: "dialogue", texte: "Elle a raison. On a aucun moyen de te contacter, aucun moyen d'aller te chercher si quelque chose se passe. C'est pas un plan c'est une improvisation.", personnage: "Lucas" },
    { type: "dialogue", texte: "On a pas le choix. Il fait froid, ça va continuer à faire froid.", personnage: "Tom" },
    { type: "dialogue", texte: "On peut s'habiller en couches, utiliser les couvertures, rationner la chaleur. Y'a sûrement d'autres solutions avant d'envoyer quelqu'un dehors seul.", personnage: "Lucas" },
    { type: "dialogue", texte: "Lucas a raison. On réfléchit d'abord.", personnage: "Josie" },
    { type: "narration", texte: "Tom s'arrête. Il les regarde tous les deux. Puis il regarde Elise." },
    { type: "dialogue", texte: "Il faut du bois.", personnage: "Elise" },
    { type: "dialogue", texte: "Merci.", personnage: "Tom" },
    { type: "dialogue", texte: "Mais sois prudent.", personnage: "Elise" },
    { type: "dialogue", texte: "Tom t'as entendu ce qu'on a dit.", personnage: "Josie" },
    { type: "dialogue", texte: "J'ai entendu. Et je comprends. Mais on peut pas rester sans chauffage, c'est pas une option. Je connais la direction, j'ai la tenue, je suis la ligne d'arbres. C'est calculé.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas calculé c'est de l'entêtement.", personnage: "Josie" },
    { type: "dialogue", texte: "Peut-être les deux.", personnage: "Tom" },
    { type: "narration", texte: "Il enfile la cagoule. Josie croise les bras. Lucas regarde la fenêtre. Personne ne dit plus rien parce que tout a été dit et que ça n'a rien changé." },
    { type: "dialogue", texte: "Trente minutes. Si je suis pas rentré.", personnage: "Tom" },
    { type: "dialogue", texte: "Dans trente minutes on peut rien faire de toute façon.", personnage: "Josie" },
    { type: "narration", texte: "Il ouvre la porte. Le froid entre d'un coup, brutal, et puis la porte se referme et il n'est plus là." },
    { type: "narration", texte: "Josie reste debout sans bouger pendant dix secondes. Puis elle s'assoit." },
  ],
  choices: [
    { label: "Attendre", next: "acte2PaniqueChalet" }
  ]
},
{
  id: "acte2PaniqueChalet",
  lines: [
    { type: "narration", texte: "Vingt minutes passent. Puis trente. Puis quarante." },
    { type: "narration", texte: "Personne ne dit rien pendant les vingt premières. Vous faites du café comme il a dit, vous vous asseyez, vous regardez la fenêtre. La tempête ne faiblit pas." },
    { type: "narration", texte: "C'est Josie qui parle la première." },
    { type: "dialogue", texte: "Il est parti depuis quarante minutes.", personnage: "Josie" },
    { type: "dialogue", texte: "Il a dit trente.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je sais ce qu'il a dit Lucas.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est Tom. Il va s'en sortir.", personnage: "Elise" },
    { type: "narration", texte: "Elle dit ça posément. Mais tu la regardes. Ses mains sont à plat sur la table, les doigts légèrement crispés. Elle fixe la fenêtre depuis vingt minutes sans vraiment bouger." },
    { type: "dialogue", texte: "Elise dehors c'est un blizzard.", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais.", personnage: "Elise" },
    { type: "dialogue", texte: "Alors arrête de faire comme si tout allait bien.", personnage: "Josie" },
    { type: "dialogue", texte: "Je fais pas comme si tout allait bien. Je dis qu'on peut pas faire autre chose qu'attendre. C'est pas pareil.", personnage: "Elise" },
    { type: "narration", texte: "Sa voix est restée calme mais quelque chose dedans a changé. Josie se tait." },
    { type: "dialogue", texte: "On devrait y aller le chercher.", personnage: "Josie" },
    { type: "dialogue", texte: "Avec quoi ? Y'a qu'une tenue.", personnage: "Lucas" },
    { type: "dialogue", texte: "Alors on fait quoi on attend juste ?", personnage: "Josie" },
    { type: "dialogue", texte: "Oui. On attend et on reste calmes. Parce que si on panique ça aide personne, ni nous ni lui.", personnage: "Elise" },
    { type: "dialogue", texte: "Je suis calme.", personnage: "Josie" },
    { type: "narration", texte: "Personne ne répond à ça." },
    { type: "dialogue", texte: "Il est peut-être tombé, il peut être blessé.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie s'il te plaît.", personnage: "Elise" },
    { type: "narration", texte: "Cette fois sa voix a craqué, juste un peu, juste une seconde. Elle pose les yeux sur ses mains et les desserre lentement." },
    { type: "narration", texte: "Josie s'arrête. Elle regarde Elise. Elle s'assoit sans rien dire." },
    { type: "narration", texte: "Tu ne sais pas où te mettre. Tu regardes la porte, la fenêtre, le café qui refroidit. Lucas compte les minutes sur son téléphone éteint sans s'en rendre compte." },
    { type: "narration", texte: "Cinquante minutes." },
    { type: "dialogue", texte: "Si dans dix minutes il est pas là on.", personnage: "Josie" },
    { type: "narration", texte: "La porte s'ouvre." },
  ],
  choices: [
    { label: "Continuer", next: "acte2RetourTom" }
  ]
},

    {
    id: "acte2RetourTom",
    lines: [
      { type: "narration", texte: "Il entre avec trois grosses brassées de bûches et de la neige plein les épaules. Il pose tout près de la cheminée, retire sa cagoule." },
      { type: "dialogue", texte: "Ohohoh je ramène vos cadeaux les petits enfants. J'espère que vous avez été sages.", personnage: "Tom" },
      { type: "dialogue", texte: "T'es un idiot.", personnage: "Josie" },
      { type: "dialogue", texte: "Joyeux Noël quand même.", personnage: "Tom" },
      { type: "dialogue", texte: "T'as mis cinquante minutes.", personnage: "Josie" },
      { type: "dialogue", texte: "Le cabanon était plus loin que prévu. La neige change les distances.", personnage: "Tom" },
      { type: "dialogue", texte: "T'aurais pu faire signe.", personnage: "Josie" },
      { type: "dialogue", texte: "J'avais pas de réseau.", personnage: "Tom" },
      { type: "dialogue", texte: "T'aurais pu.", personnage: "Josie" },
      { type: "narration", texte: "Elle finit pas sa phrase. Tom la regarde une seconde. Il ne sourit plus tout à fait." },
      { type: "dialogue", texte: "Je suis là.", personnage: "Tom" },
      { type: "narration", texte: "Un silence. Josie détourne les yeux. Elise se lève pour aider à ranger le bois. Lucas souffle lentement comme si il retenait son souffle depuis cinquante minutes, ce qui est probablement le cas." },
      { type: "narration", texte: "Tom commence à faire du feu. La pièce reprend de la chaleur progressivement. Tout le monde s'installe autour sans le décider." },
      { type: "dialogue", texte: "Le café est froid.", personnage: "Tom" },
      { type: "dialogue", texte: "On l'a bu pendant qu'on t'attendait.", personnage: "Toi" },
      { type: "dialogue", texte: "Je m'en refais un alors.", personnage: "Tom" },
      { type: "narration", texte: "Il se lève. Comme si de rien n'était. Comme toujours." },
    ],
    choices: [
      { label: "Continuer", next: "acte2ApresRetourTom" }
    ]
  },
  {
  id: "acte2ApresRetourTom",
  lines: [
    { type: "narration", texte: "C'est Elise qui te regarde la première. Un regard bref, dans ta direction, puis vers Tom qui fait du feu, puis vers toi à nouveau. Un message sans mots." },
    { type: "narration", texte: "Tu comprends." },
    { type: "narration", texte: "Tu attends que les autres soient occupés. Josie qui scrole sur son téléphone sans réseau par habitude, Lucas qui compte les bûches. Tu t'approches de Tom." },
    { type: "dialogue", texte: "Ça s'est bien passé vraiment ?", personnage: "Toi" },
    { type: "dialogue", texte: "Une petite balade sous la neige.", personnage: "Tom" },
    { type: "dialogue", texte: "Tom.", personnage: "Toi" },
    { type: "dialogue", texte: "J'ai suivi la ligne d'arbres. C'était bien.", personnage: "Tom" },
    { type: "dialogue", texte: "T'as mis cinquante minutes pour cinq cents mètres.", personnage: "Toi" },
    { type: "dialogue", texte: "La neige ralentit.", personnage: "Tom" },
    { type: "dialogue", texte: "Tu vas plus faire ça.", personnage: "Toi" },
    { type: "dialogue", texte: "On a du bois maintenant.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas ce que j'ai dit.", personnage: "Toi" },
    { type: "narration", texte: "Il s'arrête. Il te regarde. La blague facile ne vient pas cette fois." },
  ],
  choices: [
    {
      label: "Continuer",
      next: "acte2ApresRetourTomFroid",
      condition: (state: GameState) => state.relations.Tom < 30
    },
    {
      label: "Continuer",
      next: "acte2ApresRetourTomChaud",
      condition: (state: GameState) => state.relations.Tom >= 40
    }
  ]
},

{
  id: "acte2ApresRetourTomFroid",
  lines: [
    { type: "dialogue", texte: "T'as failli te perdre là-dedans.", personnage: "Toi" },
    { type: "dialogue", texte: "Mais non.", personnage: "Tom" },
    { type: "dialogue", texte: "Tom on t'a attendu vingt minutes de plus que prévu.", personnage: "Toi" },
    { type: "dialogue", texte: "Le cabanon était décalé. Je l'ai trouvé.", personnage: "Tom" },
    { type: "dialogue", texte: "La prochaine fois on trouve une autre solution.", personnage: "Toi" },
    { type: "narration", texte: "Il acquiesce. Pas convaincu, juste fatigué de discuter. Il retourne à son feu." },
    { type: "dialogue", texte: "T'inquiète pas pour moi.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça doucement. Sans ironie. Tu ne sais pas si c'est une réponse ou une façon de clore le sujet." },
  ],
  choices: [
    { label: "Continuer", next: "acte2NuitAxeBois" }
  ]
},

{
  id: "acte2ApresRetourTomChaud",
  lines: [
    { type: "dialogue", texte: "T'as failli te perdre là-dedans.", personnage: "Toi" },
    { type: "narration", texte: "Il ne répond pas tout de suite. Il regarde le feu qui commence à prendre." },
    { type: "dialogue", texte: "À un moment j'ai plus vu la ligne d'arbres.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça très bas. Pas pour les autres." },
    { type: "dialogue", texte: "Combien de temps ?", personnage: "Toi" },
    { type: "dialogue", texte: "Quelques minutes. J'ai attendu que le vent tombe un peu et je l'ai retrouvée.", personnage: "Tom" },
    { type: "dialogue", texte: "Tu vas plus faire ça.", personnage: "Toi" },
    { type: "dialogue", texte: "Si on a besoin de bois.", personnage: "Tom" },
    { type: "dialogue", texte: "On trouvera une autre solution.", personnage: "Toi" },
    { type: "narration", texte: "Il te regarde. Quelque chose dans son visage est différent de tout à l'heure, de la blague du père Noël et du café. Quelque chose de plus vrai." },
    { type: "dialogue", texte: "J'avais pas envie que vous ayez froid.", personnage: "Tom" },
    { type: "dialogue", texte: "On préfère avoir froid que te perdre dans une tempête.", personnage: "Toi" },
    { type: "narration", texte: "Il hoche la tête lentement. Il reporte les yeux sur le feu." },
    { type: "dialogue", texte: "Ok.", personnage: "Tom" },
    { type: "narration", texte: "Un seul mot. Mais tu le connais assez pour savoir que cette fois il le pense." },
  ],
  choices: [
    { label: "Continuer", next: "acte2NuitAxeBois"}
  ]
},
{
  id: "acte2NuitAxeBois",
  lines: [
    { type: "narration", texte: "La soirée se termine doucement autour du feu. Personne ne parle beaucoup. La chaleur revenue rend les corps lourds." },
    { type: "narration", texte: "Elise se lève la première, pose une main sur l'épaule de Tom en passant, sans un mot. Lucas se lève derrière elle." },
    { type: "dialogue", texte: "T'as géré.", personnage: "Lucas" },
    { type: "dialogue", texte: "On a tous géré.", personnage: "Tom" },
    { type: "dialogue", texte: "Non. Toi t'as géré.", personnage: "Lucas" },
    { type: "narration", texte: "Il monte sans attendre de réponse. Josie se lève à son tour, s'étire." },
    { type: "dialogue", texte: "La prochaine fois tu prends un GPS et un chien de traîneau.", personnage: "Josie" },
    { type: "dialogue", texte: "Je note.", personnage: "Tom" },
    { type: "dialogue", texte: "Bonne nuit.", personnage: "Josie" },
    { type: "narration", texte: "Elle monte. Il reste toi et Tom." },
    { type: "narration", texte: "Il regarde le feu. Il a l'air bien. Il a toujours l'air bien. C'est exactement le problème." },
    { type: "dialogue", texte: "Ça va vraiment ?", personnage: "Toi" },
    { type: "dialogue", texte: "Ouais.", personnage: "Tom" },
    { type: "dialogue", texte: "Tom.", personnage: "Toi" },
    { type: "dialogue", texte: "Je suis fatigué. Mais ça va.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça en regardant les flammes. C'est probablement la réponse la plus honnête qu'il va donner ce soir." },
    { type: "dialogue", texte: "Dors.", personnage: "Toi" },
    { type: "dialogue", texte: "Toi aussi.", personnage: "Tom" },
    { type: "narration", texte: "Tu montes." },
  ],
  choices: [
    { label: "Rejoindre Josie", next: "acte2NuitJosieAxeBois" }
  ]
},

{
  id: "acte2NuitJosieAxeBois",
  lines: [
    { type: "narration", texte: "Dans la chambre Josie est allongée, les yeux au plafond. Elle tourne la tête quand tu entres." },
    { type: "dialogue", texte: "Il dort pas encore ?", personnage: "Josie" },
    { type: "dialogue", texte: "Il regarde le feu.", personnage: "Toi" },
    { type: "dialogue", texte: "Évidemment.", personnage: "Josie" },
    { type: "narration", texte: "Elle dit ça doucement. Pas une pique. Juste un constat." },
    { type: "dialogue", texte: "T'as eu peur aujourd'hui.", personnage: "Toi" },
    { type: "dialogue", texte: "On a tous eu peur.", personnage: "Josie" },
    { type: "dialogue", texte: "Toi plus que les autres.", personnage: "Toi" },
    { type: "narration", texte: "Elle ne répond pas tout de suite." },
    { type: "dialogue", texte: "C'est con d'avoir peur pour quelqu'un qui fait exprès de pas avoir peur.", personnage: "Josie" },
    { type: "narration", texte: "Un silence." },
    { type: "dialogue", texte: "Plus jamais on laisse quelqu'un partir comme ça. Seul, sans moyen de le contacter, sans plan B. C'est plus une option.", personnage: "Josie" },
    { type: "dialogue", texte: "T'as raison.", personnage: "Toi" },
    { type: "dialogue", texte: "Je sais que j'ai raison.", personnage: "Josie" },
    { type: "narration", texte: "Elle dit ça sans arrogance. Juste quelqu'un qui a eu peur et qui a besoin que ça serve à quelque chose." },
  ],
  choices: [
    {
      label: "Ouais. Bonne nuit Josie.",
      next: "acte2Rations",
    },
    {
      label: "Si t'as besoin de parler t'as qu'à le dire.",
      next: "acte2NuitJosieSoutien",
      effect: (state: GameState) => ({
        ...state,
        relations: {
          ...state.relations,
          josie: state.relations.josie + 10
        }
      })
    },
    {
      label: "Si t'as quelque chose avec quelqu'un faut en parler directement. Pas laisser trainer.",
      next: "acte2NuitJosieVerite",
      condition: (state: GameState) => state.relations.josie >= 20,
      effect: (state: GameState) => ({
        ...state,
        relations: {
            ...state.relations,
            josie: state.relations.josie + 10
        }
      })
    }
  ]
},

{
  id: "acte2NuitJosieSoutien",
  lines: [
    { type: "narration", texte: "Elle te regarde. Quelque chose se détend dans son visage." },
    { type: "dialogue", texte: "Ouais. Merci.", personnage: "Josie" },
    { type: "dialogue", texte: "Bonne nuit.", personnage: "Toi" },
    { type: "dialogue", texte: "Bonne nuit Alice.", personnage: "Josie" },
  ],
  choices: [
    { label: "Dormir", next: "acte2Rations" }
  ]
},

{
  id: "acte2NuitJosieVerite",
  lines: [
    { type: "narration", texte: "Elle reste silencieuse un moment. Elle regarde le plafond." },
    { type: "dialogue", texte: "C'est-à-dire ?", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais pas exactement. Mais si y'a quelque chose qui te pèse, avec quelqu'un dans ce chalet, ça vaut mieux régler ça maintenant. On va pas se quitter de sitôt.", personnage: "Toi" },
    { type: "narration", texte: "Un long silence. Elle tourne la tête vers toi." },
    { type: "dialogue", texte: "T'es chiante des fois tu sais.", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais.", personnage: "Toi" },
    { type: "narration", texte: "Elle sourit malgré elle. Elle reporte les yeux au plafond." },
    { type: "dialogue", texte: "Bonne nuit Alice.", personnage: "Josie" },
    { type: "dialogue", texte: "Bonne nuit.", personnage: "Toi" },
    { type: "narration", texte: "Elle n'a rien dit de concret. Mais quelque chose a été posé là, entre vous, dans le noir. Tu ne sais pas ce qu'elle va en faire." },
  ],
  choices: [
    { label: "Dormir", next: "acte2Rations", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        josie: state.relations.josie + 10
      }
    })}
  ]
},
{
  id: "acte2Rations",
  lines: [
    { type: "narration", texte: "Le lendemain matin Lucas descend avec une feuille." },
    { type: "narration", texte: "Pas son téléphone. Une feuille. Il a dû faire les calculs à la main dans sa chambre avant de descendre. Tu le regardes la poser sur la table et tu sais que ce qui va suivre ne va pas être agréable." },
    { type: "dialogue", texte: "J'ai fait un inventaire cette nuit. Nourriture, eau, tout.", personnage: "Lucas" },
    { type: "dialogue", texte: "Et ?", personnage: "Tom" },
    { type: "dialogue", texte: "Si on mange normalement on en a pour aujourd'hui. Si on rationne sérieusement, deux jours maximum.", personnage: "Lucas" },
    { type: "narration", texte: "Silence." },
    { type: "dialogue", texte: "Deux jours.", personnage: "Josie" },
    { type: "dialogue", texte: "Maximum.", personnage: "Lucas" },
    { type: "dialogue", texte: "Et la tempête elle s'arrête dans combien de temps ?", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais pas. J'ai pas de réseau.", personnage: "Lucas" },
    { type: "dialogue", texte: "Donc on sait pas combien de temps on va rester bloqués et on a de la nourriture pour deux jours.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est ça.", personnage: "Lucas" },
    { type: "narration", texte: "Josie pose ses deux mains à plat sur la table. Elle regarde la feuille d'Lucas sans vraiment la lire." },
    { type: "dialogue", texte: "Ok. Ok non c'est pas ok. C'est quoi le plan ?", personnage: "Josie" },
    { type: "dialogue", texte: "Y'a l'épicerie du village.", personnage: "Tom" },
    { type: "dialogue", texte: "A combien de kilomètres ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Trois. Trois et demi peut-être.", personnage: "Tom" },
    { type: "dialogue", texte: "Dans cette neige.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je dis pas que c'est simple.", personnage: "Tom" },
    { type: "dialogue", texte: "T'as failli te perdre hier pour aller à cinq cents mètres.", personnage: "Josie" },
    { type: "narration", texte: "Tom ne répond pas. Elise regarde la fenêtre. Dehors la tempête est toujours là, impassible, comme si elle n'avait pas entendu." },
    { type: "dialogue", texte: "Y'a peut-être des provisions qu'on a pas vues dans le chalet. Le grenier, les placards du bas.", personnage: "Elise" },
    { type: "dialogue", texte: "J'ai tout vérifié cette nuit.", personnage: "Lucas" },
    { type: "dialogue", texte: "Tout ?", personnage: "Elise" },
    { type: "dialogue", texte: "Tout ce que j'ai trouvé.", personnage: "Lucas" },
    { type: "narration", texte: "Un silence qui dure. Chacun dans sa tête, chacun avec le même chiffre. Deux jours." },
    { type: "dialogue", texte: "On commence à rationner aujourd'hui.", personnage: "Tom" },
    { type: "dialogue", texte: "Et après deux jours ?", personnage: "Josie" },
    { type: "narration", texte: "Personne ne répond. Parce que personne ne sait." },
  ],
  choices: [
    { label: "Fin de l'acte II", next: "recapActe2" }
  ]
}

]
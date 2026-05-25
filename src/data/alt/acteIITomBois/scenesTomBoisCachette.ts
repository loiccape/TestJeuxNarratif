import { GameState } from "../../../class/GameState"
import type { Scene } from "../../../class/Scene"
export const scenesTomBoisCachette: Scene[] = [
{
  id: "acte2AutreSolution",
  lines: [
    { type: "narration", texte: "Personne ne bouge pendant dix secondes après que la porte s'est refermée sur le froid." },
    { type: "dialogue", texte: "Bon. Quelqu'un a une autre idée ?", personnage: "Josie" },
    { type: "dialogue", texte: "On peut s'habiller en couches. Pulls, manteaux, couvertures. Rationner la chaleur du corps.", personnage: "Lucas" },
    { type: "dialogue", texte: "Ça va tenir combien de temps ?", personnage: "Josie" },
    { type: "dialogue", texte: "Plus longtemps que si quelqu'un se perd dans une tempête.", personnage: "Lucas" },
    { type: "dialogue", texte: "La tempête va bien finir par s'arrêter. Quand elle s'arrête on a accès au cabanon sans risque.", personnage: "Elise" },
    { type: "dialogue", texte: "Et si elle s'arrête pas avant deux jours ?", personnage: "Tom" },
    { type: "dialogue", texte: "On gère deux jours sans feu si on s'organise.", personnage: "Elise" },
    { type: "dialogue", texte: "Vous avez tous vu la météo avant de partir. C'est pas deux jours que ça peut durer.", personnage: "Tom" },
    { type: "dialogue", texte: "On a pas de météo là maintenant. On sait pas combien de temps ça va durer.", personnage: "Josie" },
    { type: "dialogue", texte: "Exactement. Donc on fait quoi, on attend indéfiniment en espérant qu'il fait pas trop froid ?", personnage: "Tom" },
    { type: "dialogue", texte: "On attend que ce soit raisonnable d'y aller.", personnage: "Elise" },
    { type: "dialogue", texte: "C'est quoi raisonnable pour toi ?", personnage: "Tom" },
    { type: "dialogue", texte: "Qu'on puisse voir à plus de dix mètres dehors.", personnage: "Elise" },
    { type: "dialogue", texte: "Et si on arrive jamais à voir à plus de dix mètres ?", personnage: "Tom" },
    { type: "dialogue", texte: "Tom.", personnage: "Elise" },
    { type: "dialogue", texte: "Je pose la question.", personnage: "Tom" },
    { type: "dialogue", texte: "Y'a les couvertures du grenier. J'en ai vu trois grosses en montant les bagages. Si on les rajoute aux nôtres on tient la nuit sans problème.", personnage: "Toi" },
    { type: "dialogue", texte: "Et demain matin ?", personnage: "Tom" },
    { type: "dialogue", texte: "Demain matin on réévalue. Mais ce soir personne sort.", personnage: "Toi" },
    { type: "narration", texte: "Tom vous regarde tous les quatre. Un par un. Il soupire lentement." },
    { type: "dialogue", texte: "OK.", personnage: "Tom" },
    { type: "dialogue", texte: "OK ?", personnage: "Josie" },
    { type: "dialogue", texte: "OK. On fait comme vous dites. Ce soir.", personnage: "Tom" },
    { type: "narration", texte: "Il insiste sur ce soir. Personne ne relève. Tout le monde fait semblant de ne pas avoir entendu." },
  ],
  choices: [
    { label: "La soirée", next: "acte2SoireeFroid", effect: (state: GameState) => ({
      ...state,
      flags: {
        ...state.flags,
        TomChercherDuBoisAvecAccordDeToutLeMonde: false,
        TomChercherDuBoisEnCachette: true, // Tom est allé chercher du bois en cachette ACTE 2
      },
    })
    }]
  
},
{
  id: "acte2SoireeFroid",
  lines: [
    { type: "narration", texte: "Vous récupérez les couvertures du grenier. Trois grandes, épaisses, qui sentent le renfermé. Ça ne dérange personne ce soir." },
    { type: "narration", texte: "Il n'y a pas de repas vraiment. Tom fait chauffer quelque chose de simple, personne ne fait de commentaire. Vous mangez vite, debout presque, et puis chacun monte dans sa chambre avec sa couverture supplémentaire sous le bras." },
    { type: "narration", texte: "Le chalet refroidit progressivement. Pas dangereusement, juste cette façon qu'a le froid de s'installer partout, dans les murs, sous les portes, dans les draps." },
    { type: "narration", texte: "Tu te lèves pour aller te brosser les dents. En passant devant la chambre d'Elise et Lucas la porte est entrouverte. Tu t'arrêtes sans le décider." },
    { type: "dialogue", texte: "T'arrives à dormir ?", personnage: "Elise" },
    { type: "dialogue", texte: "Non. Je pense à Tom.", personnage: "Josie" },
    { type: "dialogue", texte: "Qu'est-ce qu'il a Tom ?", personnage: "Elise" },
    { type: "dialogue", texte: "Il est chiant c'est tout. Ce truc qu'il a de vouloir tout porter. On gèle, c'est lui qui va chercher du bois. On a plus de nourriture, c'est lui qui va trouver une solution. Comme si le groupe pouvait pas fonctionner sans qu'il se sacrifie.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est sa façon d'aimer les gens.", personnage: "Elise" },
    { type: "dialogue", texte: "C'est épuisant comme façon d'aimer les gens.", personnage: "Josie" },
    { type: "narration", texte: "Un silence. Tu restes immobile dans le couloir." },
    { type: "dialogue", texte: "T'as du mal avec ça.", personnage: "Elise" },
    { type: "dialogue", texte: "J'ai du mal avec quelqu'un qui sait pas recevoir autant qu'il donne oui.", personnage: "Josie" },
    { type: "narration", texte: "Elise ne répond pas tout de suite. Quand elle parle sa voix est plus douce, plus précise, comme quelqu'un qui choisit ses mots parce qu'il sait exactement où il met les pieds." },
    { type: "dialogue", texte: "Josie. Tu sais que Tom est quelqu'un qui a du mal à dire ce qu'il ressent. Ça veut pas dire qu'il ressent rien.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais ce que ça veut dire.", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais que tu sais.", personnage: "Elise" },
    { type: "narration", texte: "Un long silence. Le genre de silence entre deux personnes qui parlent de quelque chose sans le nommer parce qu'elles savent toutes les deux de quoi il s'agit." },
    { type: "dialogue", texte: "C'est compliqué.", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais.", personnage: "Elise" },
    { type: "dialogue", texte: "T'as toujours su ?", personnage: "Josie" },
    { type: "dialogue", texte: "J'ai vu des choses.", personnage: "Elise" },
    { type: "dialogue", texte: "Et tu dis rien.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pas à moi de dire.", personnage: "Elise" },
    { type: "narration", texte: "Tu entends Josie bouger, les draps qui froissent." },
    { type: "dialogue", texte: "Dors Josie.", personnage: "Elise" },
    { type: "dialogue", texte: "Ouais.", personnage: "Josie" },
    { type: "narration", texte: "Tu continues vers la salle de bain. Tu te brosses les dents en regardant ton reflet dans le miroir sans vraiment te voir." },
    { type: "narration", texte: "Elise sait. Pas peut-être. Elle sait. Et elle a choisi de pas en parler. Tu te demandes depuis combien de temps elle fait ça, tenir les secrets des gens sans qu'on lui demande." },
  ],
  choices: [
    { label: "Aller dormir", next: "acte2ReveilSansBois"}
  ]
},
{
  id: "acte2ReveilSansBois",
  lines: [
    { type: "narration", texte: "Tu te réveilles parce que tu as chaud." },
    { type: "narration", texte: "C'est la première chose que tu remarques. La nuit avait été froide, tu t'étais endormie avec deux couvertures et ton pull, et là il fait chaud. Pas inconfortablement, juste cette chaleur douce qui n'était pas là avant." },
    { type: "narration", texte: "Tu descends. Josie descend derrière toi, à moitié endormie. Puis Lucas, puis Elise." },
    { type: "narration", texte: "Vous vous arrêtez tous au bas de l'escalier." },
    { type: "narration", texte: "La cheminée brûle. Du bois frais, bien empilé. Sur le sol de l'entrée une flaque d'eau, de la neige fondue. La tenue du placard est là, encore humide. Tom est allongé sur le canapé, dos tourné, qui dort." },
    { type: "narration", texte: "Personne ne dit rien pendant quelques secondes." },
    { type: "dialogue", texte: "Il y est allé cette nuit.", personnage: "Lucas" },
    { type: "narration", texte: "Ce n'est pas une question." },
    { type: "narration", texte: "Elise regarde Tom. Quelque chose traverse son visage, pas de la surprise, plutôt la confirmation de quelque chose qu'elle savait déjà. Et de la colère. Une vraie, froide, contenue." },
    { type: "dialogue", texte: "Je vais le réveiller.", personnage: "Elise" },
  ],
  choices: [
    {
      label: "La laisser faire.",
      next: "acte2JosieStoppe",
    },
    {
      label: "L'arrêter. Il a besoin de dormir.",
      next: "acte2AliceStoppe",
      condition: (state: GameState) => state.relations.Tom >= 40
    }
  ]
},
{
  id: "acte2JosieStoppe",
  lines: [
    { type: "narration", texte: "Elise fait un pas vers le canapé. C'est Josie qui apparaît en haut de l'escalier." },
    { type: "dialogue", texte: "Elise.", personnage: "Josie" },
    { type: "narration", texte: "Sa voix est basse mais ferme. Elise s'arrête." },
    { type: "dialogue", texte: "Il a besoin de dormir.", personnage: "Josie" },
    { type: "dialogue", texte: "Il avait dit qu'il y irait pas.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais.", personnage: "Josie" },
    { type: "dialogue", texte: "Il a fait n'importe quoi.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais Elise. Mais là il dort. On lui dit demain.", personnage: "Josie" },
    { type: "narration", texte: "Elise regarde Tom. Elle regarde Josie. Elle hoche la tête lentement et remonte sans rien dire." },
    { type: "narration", texte: "Josie descend, s'assoit dans le fauteuil en face du feu. Elle te regarde." },
    { type: "dialogue", texte: "Retourne te coucher.", personnage: "Josie" },
    { type: "dialogue", texte: "Et toi ?", personnage: "Toi" },
    { type: "dialogue", texte: "Je reste encore un peu.", personnage: "Josie" },
    { type: "narration", texte: "Tu remontes. Par la fenêtre du couloir tu vois la neige qui tombe toujours, régulière, indifférente. Dans le salon en bas Josie reste assise devant le feu, à regarder Tom dormir sans bouger." },
  ],
  choices: [
    { label: "Le matin", next: "acte2MatinCanape", effect: (state: GameState) => ({
      ...state,
      flags: {
        ...state.flags,
        josieTomCanape: true   // Josie a dormi avec Tom dans le canapé
        },
    })  
}]
},

{
  id: "acte2AliceStoppe",
  lines: [
    { type: "dialogue", texte: "Elise.", personnage: "Toi" },
    { type: "narration", texte: "Elle s'arrête. Elle te regarde." },
    { type: "dialogue", texte: "Il a besoin de dormir. Tu lui diras demain.", personnage: "Toi" },
    { type: "narration", texte: "Elle regarde Tom. Ses épaules se baissent d'un centimètre." },
    { type: "dialogue", texte: "Il avait promis.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais. Mais c'est Tom.", personnage: "Toi" },
    { type: "narration", texte: "Elle te regarde une seconde. Quelque chose dans son expression change, comme si elle reconnaissait quelque chose dans ce que tu viens de dire." },
    { type: "dialogue", texte: "Ouais.", personnage: "Elise" },
    { type: "narration", texte: "Elle remonte. Tu restes seule en bas une minute. Le feu crépite doucement. Tom ne bouge pas." },
    { type: "narration", texte: "Tu aurais voulu être en colère contre lui. Ça aurait été plus simple." },
  ],
  choices: [
    { label: "Le matin", next: "acteMatinSansCanape", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        Tom: state.relations.Tom + 10,
        Elise: state.relations.Elise + 5
      }
    })}
  ]
},
{
  id: "acte2MatinCanape",
  lines: [
    { type: "narration", texte: "Tu descends avant les autres." },
    { type: "narration", texte: "Tu t'arrêtes au bas de l'escalier." },
    { type: "narration", texte: "Josie et Tom sont dans le canapé. Elle s'est endormie là, la tête contre son épaule, la couverture tirée sur eux deux. Lui dort, la tête légèrement inclinée vers elle." },
    { type: "narration", texte: "Tu ne bouges pas." },
    { type: "narration", texte: "Il y a quelque chose dans ta poitrine qui se serre, quelque chose que tu n'arrives pas tout à fait à nommer. Pas de la jalousie. Ou pas seulement. Plutôt la sensation désagréable de comprendre quelque chose que tu aurais préféré ne pas comprendre, quelque chose qui était là depuis longtemps et que tu avais choisi de ne pas regarder." },
    { type: "narration", texte: "Tu n'as rien à dire là-dessus. Tu sais que tu n'as rien à dire là-dessus. Ça fait cinq ans. C'est toi qui as décidé." },
    { type: "narration", texte: "Tu remontes sans faire de bruit. Tu t'assois sur ton lit et tu attends que les autres bougent." },
  ],
  choices: [
    { label: "Descendre avec les autres", next: "acte2ReveilTomCanape" }
  ]
},

{
  id: "acte2MatinSansCanape",
  lines: [
    { type: "narration", texte: "Vous descendez tous ensemble." },
    { type: "narration", texte: "Tom est sur le canapé, seul, dos tourné, qui dort encore. Elise le regarde une seconde puis s'assoit à table sans rien dire. Lucas fait pareil." },
    { type: "dialogue", texte: "On le laisse.", personnage: "Josie" },
    { type: "narration", texte: "Personne ne conteste. Vous attendez qu'il se réveille." },
  ],
  choices: [
    { label: "Attendre", next: "acte2ReveilTom" }
  ]
},
// La version si Tom a dormi seul dans le canapé
{
  id: "acte2ReveilTom",
  lines: [
    { type: "narration", texte: "Tom se réveille une demi-heure plus tard. Il s'assoit, voit vos visages, comprend." },
    { type: "dialogue", texte: "Je savais que vous seriez pas contents.", personnage: "Tom" },
    { type: "dialogue", texte: "T'avais dit que t'irais pas.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais.", personnage: "Tom" },
    { type: "dialogue", texte: "T'avais dit Tom. On s'était mis d'accord.", personnage: "Elise" },
    { type: "dialogue", texte: "Il faisait froid.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas une réponse.", personnage: "Elise" },
    { type: "dialogue", texte: "T'es parti seul dans un blizzard en pleine nuit sans prévenir personne. Si quelque chose s'était passé on aurait rien su jusqu'au matin.", personnage: "Lucas" },
    { type: "dialogue", texte: "Mais rien s'est passé.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas le point.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je comprends que vous soyez en colère.", personnage: "Tom" },
    { type: "dialogue", texte: "T'as l'air de pas vraiment comprendre non.", personnage: "Elise" },
    { type: "narration", texte: "C'est la deuxième fois qu'Elise hausse la voix depuis le début. Tom la regarde. Il ne sourit pas, il ne dédramatise pas. Il attend." },
    { type: "dialogue", texte: "T'aurais pu te perdre. T'aurais pu tomber. T'aurais pu.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais.", personnage: "Tom" },
    { type: "dialogue", texte: "Alors arrête de faire comme si c'était une petite balade.", personnage: "Elise" },
    { type: "narration", texte: "Un silence. Josie regarde ses mains sur la table. Alice ne dit rien. Tom regarde le feu qu'il a lui-même allumé cette nuit." },
    { type: "dialogue", texte: "C'est bon. Il est rentré, il a du bois. On avance.", personnage: "Josie" },
    { type: "narration", texte: "Elise la regarde. Elle n'a pas l'air d'accord mais elle ne répond pas. Elle pose ses mains à plat sur la table et souffle lentement." },
    { type: "narration", texte: "C'est Lucas qui sort sa feuille." },
    { type: "dialogue", texte: "J'ai fait les calculs cette nuit. Nourriture, eau, tout. Si on mange normalement on en a pour aujourd'hui. Si on rationne sérieusement, deux jours maximum.", personnage: "Lucas" },
    { type: "narration", texte: "Silence." },
    { type: "dialogue", texte: "Deux jours.", personnage: "Josie" },
    { type: "dialogue", texte: "Maximum. Donc voilà ce que je propose.", personnage: "Lucas" },
    { type: "narration", texte: "Il retourne la feuille. Il a tout planifié. Les repas, les quantités, qui mange quoi et quand. C'est précis, c'est organisé, c'est très Lucas." },
    { type: "dialogue", texte: "Un repas chaud le soir. Le matin et le midi on grignote, des trucs qui tiennent. On évite de gaspiller quoi que ce soit.", personnage: "Lucas" },
    { type: "dialogue", texte: "Et si la tempête s'arrête pas dans deux jours ?", personnage: "Josie" },
    { type: "dialogue", texte: "On réévalue.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'est tout le plan ?", personnage: "Josie" },
    { type: "dialogue", texte: "C'est tout ce qu'on peut faire pour l'instant.", personnage: "Lucas" },
    { type: "narration", texte: "Personne ne conteste. Parce que personne n'a mieux à proposer." },
    { type: "dialogue", texte: "OK. On fait comme ça.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça simplement, sans chercher à reprendre la main. Il a compris que ce matin ce n'était pas à lui de mener." },
  ],
  choices: [
    { label: "Fin de l'acte II", next: "recapActe2" }
  ]
},
// La version si Josie a dormi avec Tom dans le canapé
{
  id: "acte2ReveilTomCanape",
  lines: [
    { type: "narration", texte: "Tom se réveille parce qu'Elise a fait du bruit en posant une tasse sur la table. Il ouvre les yeux." },
    { type: "narration", texte: "Et là tout le monde comprend en même temps." },
    { type: "narration", texte: "Josie qui se réveille contre lui, qui réalise, qui s'écarte d'un geste pas assez naturel pour être naturel. Tom qui regarde le groupe. Le groupe qui regarde Tom et Josie." },
    { type: "narration", texte: "Un silence de quatre secondes qui dure beaucoup plus longtemps que quatre secondes." },
    { type: "dialogue", texte: "Je savais que vous seriez pas contents.", personnage: "Tom" },
    { type: "narration", texte: "Il parle du bois. Tout le monde le sait. Tout le monde fait comme si." },
    { type: "dialogue", texte: "T'avais dit que t'irais pas.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais.", personnage: "Tom" },
    { type: "dialogue", texte: "T'avais dit Tom. On s'était mis d'accord.", personnage: "Elise" },
    { type: "dialogue", texte: "Il faisait froid.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas une réponse.", personnage: "Elise" },
    { type: "dialogue", texte: "T'es parti seul dans un blizzard en pleine nuit sans prévenir personne. Si quelque chose s'était passé on aurait rien su jusqu'au matin.", personnage: "Lucas" },
    { type: "dialogue", texte: "Mais rien s'est passé.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas le point.", personnage: "Lucas" },
    { type: "narration", texte: "Josie s'est levée du canapé. Elle s'est mise à côté de la fenêtre, dos à tout le monde, les bras croisés. Elle ne dit rien." },
    { type: "narration", texte: "Tu ne dis rien non plus. Tu regardes le feu." },
    { type: "dialogue", texte: "T'aurais pu te perdre. T'aurais pu tomber.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais.", personnage: "Tom" },
    { type: "dialogue", texte: "Alors arrête de faire comme si c'était une petite balade.", personnage: "Elise" },
    { type: "narration", texte: "Un silence. Tom regarde le feu. Il ne dédramatise pas cette fois. Il laisse." },
    { type: "narration", texte: "C'est Lucas qui sort sa feuille." },
    { type: "dialogue", texte: "J'ai fait les calculs cette nuit. Nourriture, eau, tout. Si on mange normalement on en a pour aujourd'hui. Si on rationne sérieusement, deux jours maximum.", personnage: "Lucas" },
    { type: "narration", texte: "Silence." },
    { type: "dialogue", texte: "Deux jours.", personnage: "Josie" },
    { type: "dialogue", texte: "Maximum. Donc voilà ce que je propose.", personnage: "Lucas" },
    { type: "narration", texte: "Il retourne la feuille. Il a tout planifié. Les repas, les quantités, qui mange quoi et quand." },
    { type: "dialogue", texte: "Un repas chaud le soir. Le matin et le midi on grignote, des trucs qui tiennent. On évite de gaspiller quoi que ce soit.", personnage: "Lucas" },
    { type: "dialogue", texte: "Et si la tempête s'arrête pas dans deux jours ?", personnage: "Josie" },
    { type: "dialogue", texte: "On réévalue.", personnage: "Lucas" },
    { type: "narration", texte: "Personne ne conteste. Parce que personne n'a mieux à proposer." },
    { type: "dialogue", texte: "OK. On fait comme ça.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça simplement. Ce matin ce n'était pas à lui de mener et il le sait." },
  ],
  
    choices: [
  {
    label: "Fin Acte II",
    next: "recapActe2",
   
  }
]
  
}
]
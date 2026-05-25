import { GameState } from "../../../class/GameState"
import type { Scene } from "../../../class/Scene"

export const acte3TomTvSeul    : Scene[] =
[
{
  id: "acte3DepartTomSeul",
  lines: [
    { type: "narration", texte: "Tom regarde Lucas. Il regarde la tenue dans le placard. Il regarde les affaires étalées sur le sol." },
    { type: "narration", texte: "Il n'y a pas assez. Tout le monde le sait. Personne ne le dit." },
    { type: "dialogue", texte: "J'y vais seul.", personnage: "Tom" },
    { type: "dialogue", texte: "Tom.", personnage: "Lucas" },
    { type: "dialogue", texte: "T'as vu ce qu'on a comme équipement. T'as vu ce qu'il fait dehors. Si tu viens dans cet état on rentre pas tous les deux.", personnage: "Tom" },
    { type: "dialogue", texte: "Et si toi tu rentres pas.", personnage: "Lucas" },
    { type: "dialogue", texte: "Toi tu peux réparer la radio avec ce qu'on a. Moi je peux pas. Donc toi tu restes et tu répares. Et moi j'y vais.", personnage: "Tom" },
    { type: "narration", texte: "Lucas le regarde. Il cherche quelque chose à répondre. Il ne trouve pas parce que c'est logique et que c'est exactement ça qui est insupportable." },
    { type: "dialogue", texte: "C'est quoi le plan si tu trouves rien là-bas.", personnage: "Josie" },
    { type: "dialogue", texte: "Je trouverai.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas un plan.", personnage: "Josie" },
    { type: "dialogue", texte: "Non. Mais c'est tout ce qu'on a.", personnage: "Tom" },
    { type: "narration", texte: "Personne ne répond. Parce que c'est vrai." },
    { type: "narration", texte: "Tom se lève sans rien dire d'autre. Il va chercher la tenue dans le placard de l'entrée." },
    { type: "narration", texte: "Tout le monde le regarde s'habiller. Personne ne parle. C'est pire que si quelqu'un parlait." },
    { type: "dialogue", texte: "T'as besoin de rien ?", personnage: "Toi" },
    { type: "dialogue", texte: "Non.", personnage: "Tom" },
    { type: "narration", texte: "Il enfile les bottes, vérifie les gants, remonte la fermeture de la combinaison. Les mêmes gestes que la dernière fois. Méthodiques, calmes, comme si c'était normal." },
    { type: "dialogue", texte: "Tom.", personnage: "Josie" },
    { type: "dialogue", texte: "Je reviens.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est pas ce que j'allais dire.", personnage: "Josie" },
    { type: "narration", texte: "Il la regarde. Elle soutient son regard une seconde puis détourne les yeux." },
    { type: "dialogue", texte: "Fais attention.", personnage: "Josie" },
    { type: "narration", texte: "Il hoche la tête. Il prend la lampe frontale sur l'étagère. Il ouvre la porte." },
    { type: "narration", texte: "Le froid entre d'un coup, la neige avec lui, et puis la porte se referme et il n'est plus là." },
    { type: "narration", texte: "Vous restez dans le silence du chalet. Lucas pose la radio sur la table et commence à la démonter, pas parce qu'il peut faire quelque chose sans les pièces, juste pour avoir les mains occupées. Elise s'assoit près du feu. Josie reste debout face à la porte fermée." },
    { type: "narration", texte: "Tu ne sais pas où te mettre." },
  ],
  choices: [
    {
      label: "Aller vers Josie.",
      next: "acte3AttenteJosie",
      condition: (state: GameState) => state.flags.josieTomCanape == true
    },
    {
      label: "Aller vers Josie.",
      next: "acte3AttenteJosieFroid",
      condition: (state: GameState) => state.flags.josieTomCanape == false
    },
    {
      label: "Aider Lucas avec la radio.",
      next: "acte3AttenteLucas"
    },
    {
      label: "Rejoindre Elise près du feu.",
      next: "acte3AttenteElise"
    }
  ]
},
{
  id: "acte3AttenteJosie",
  lines: [
    { type: "narration", texte: "Tu t'approches d'elle. Elle n'a pas bougé de la porte." },
    { type: "dialogue", texte: "Josie.", personnage: "Toi" },
    { type: "dialogue", texte: "Je suis ok.", personnage: "Josie" },
    { type: "dialogue", texte: "T'es pas ok.", personnage: "Toi" },
    { type: "narration", texte: "Elle ne répond pas. Elle regarde toujours la porte." },
    { type: "dialogue", texte: "Il va revenir.", personnage: "Toi" },
    { type: "dialogue", texte: "T'en sais rien.", personnage: "Josie" },
    { type: "dialogue", texte: "Si. C'est Tom.", personnage: "Toi" },
    { type: "narration", texte: "Elle tourne la tête vers toi. Ses yeux sont brillants. Elle fait quelque chose avec sa mâchoire, une tension, comme si elle retenait quelque chose depuis trop longtemps." },
    { type: "dialogue", texte: "J'arrive pas à respirer correctement depuis qu'il est sorti.", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais.", personnage: "Toi" },
    { type: "dialogue", texte: "C'est nul.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est humain.", personnage: "Toi" },
    { type: "narration", texte: "Elle souffle lentement. Elle s'assoit par terre contre le mur, dos à la porte. Tu t'assois à côté d'elle." },
    { type: "dialogue", texte: "Parle-moi de n'importe quoi.", personnage: "Josie" },
    { type: "dialogue", texte: "De quoi ?", personnage: "Toi" },
    { type: "dialogue", texte: "N'importe quoi. Juste pour que ce soit pas le silence.", personnage: "Josie" },
    { type: "narration", texte: "Tu parles. De rien, de tout, d'un souvenir qui remonte sans raison. Elle écoute sans vraiment écouter mais sa respiration ralentit." },
  ],
  choices: [
    { label: "Attendre avec elle", next: "acte3RetourTomSeul", effect: (state: GameState) => ({
      ...state,
      relations: { ...state.relations, josie: state.relations.josie + 10 }
    })}
  ]
},

{
  id: "acte3AttenteJosieFroid",
  lines: [
    { type: "narration", texte: "Tu t'approches d'elle. Elle n'a pas bougé de la porte." },
    { type: "dialogue", texte: "Il va revenir. Il connaît le chemin.", personnage: "Toi" },
    { type: "dialogue", texte: "Ouais.", personnage: "Josie" },
    { type: "dialogue", texte: "On aurait dû prévoir plus de nourriture c'est tout. Si on avait été mieux organisés.", personnage: "Toi" },
    { type: "narration", texte: "Elle se retourne vers toi. Son regard n'est pas doux." },
    { type: "dialogue", texte: "On aurait dû prévoir. Ouais. On aurait dû prévoir qu'une tempête allait nous bloquer dix jours. On aurait dû prévoir qu'on aurait plus de réseau, plus d'électricité, plus rien. C'est ça que t'es en train de me dire ?", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pas ce que je voulais.", personnage: "Toi" },
    { type: "dialogue", texte: "Tes idées à la con de vacances à la montagne entre amis. Sympa. Super sympa comme vacances.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Toi" },
    { type: "dialogue", texte: "Laisse-moi.", personnage: "Josie" },
    { type: "narration", texte: "Elle se détourne. Tu restes là une seconde, sans savoir quoi dire. Puis tu t'éloignes." },
    { type: "narration", texte: "Elle a tort. Elle a aussi raison. Tu ne sais pas dans quelle proportion." },
  ],
  choices: [
    { label: "Attendre ailleurs", next: "acte3RetourTomSeul", effect: (state: GameState) => ({
      ...state,
      relations: { ...state.relations, josie: state.relations.josie - 5 }
    })}
  ]
},

{
  id: "acte3AttenteLucas",
  lines: [
    { type: "narration", texte: "Tu t'assois en face d'Lucas. La radio est en pièces sur la table. Il travaille avec des gestes précis, méticuleux, comme s'il était dans son bureau et non dans un chalet gelé sans nourriture." },
    { type: "dialogue", texte: "Je peux faire quelque chose ?", personnage: "Toi" },
    { type: "dialogue", texte: "T'as un condensateur de soixante-dix microfarads ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Non.", personnage: "Toi" },
    { type: "dialogue", texte: "Du fil de cuivre dix-huit gauge ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Non.", personnage: "Toi" },
    { type: "dialogue", texte: "Alors non.", personnage: "Lucas" },
    { type: "narration", texte: "Il dit ça sans méchanceté. Il continue de démonter." },
    { type: "dialogue", texte: "C'est quoi exactement le problème ?", personnage: "Toi" },
    { type: "dialogue", texte: "Le circuit d'émission est mort. Le récepteur fonctionne encore à peu près. Si Tom trouve ce qu'il faut je peux reconstruire le circuit d'émission à partir de rien. En théorie.", personnage: "Lucas" },
    { type: "dialogue", texte: "En théorie.", personnage: "Toi" },
    { type: "dialogue", texte: "Je l'ai jamais fait. Mais j'ai lu comment faire.", personnage: "Lucas" },
    { type: "narration", texte: "Tu regardes les pièces éparpillées sur la table. C'est un puzzle dont tu ne comprends pas la moitié. Lucas, lui, voit quelque chose." },
    { type: "dialogue", texte: "Il va trouver ce qu'il faut.", personnage: "Toi" },
    { type: "dialogue", texte: "Oui.", personnage: "Lucas" },
    { type: "narration", texte: "Il dit ça les yeux sur ses mains. Pas convaincu. Concentré." },
  ],
  choices: [
    { label: "Attendre", next: "acte3RetourTomSeul" }
  ]
},

{
  id: "acte3AttenteElise",
  lines: [
    { type: "narration", texte: "Tu t'assois à côté d'Elise près du feu. Elle regarde les flammes. Elle ne lève pas les yeux quand tu arrives." },
    { type: "dialogue", texte: "Ça va ?", personnage: "Toi" },
    { type: "narration", texte: "Un silence long." },
    { type: "dialogue", texte: "Non.", personnage: "Elise" },
    { type: "narration", texte: "C'est la première fois que tu l'entends répondre ça à cette question." },
    { type: "dialogue", texte: "Qu'est-ce qui.", personnage: "Toi" },
    { type: "dialogue", texte: "J'ai plus de force. Je sais pas comment l'expliquer autrement. Je me lève le matin et j'ai l'impression d'avoir déjà tout dépensé.", personnage: "Elise" },
    { type: "dialogue", texte: "C'est la faim.", personnage: "Toi" },
    { type: "dialogue", texte: "C'est la faim. C'est le froid. C'est tout ça depuis des jours.", personnage: "Elise" },
    { type: "narration", texte: "Elle pose la tête en arrière contre le mur. Pour la première fois depuis le début elle ressemble à quelqu'un qui n'a plus l'énergie de tenir." },
    { type: "dialogue", texte: "T'as pas à tenir pour tout le monde.", personnage: "Toi" },
    { type: "dialogue", texte: "Je tiens pour Lucas.", personnage: "Elise" },
    { type: "dialogue", texte: "Lucas va bien.", personnage: "Toi" },
    { type: "dialogue", texte: "Pour l'instant.", personnage: "Elise" },
    { type: "narration", texte: "Tu ne réponds pas. Vous regardez le feu ensemble. C'est tout ce que vous pouvez faire." },
  ],
  choices: [
    { label: "Attendre", next: "acte3RetourTomSeul", effect: (state: GameState) => ({
      ...state,
      relations: { ...state.relations, Elise: state.relations.Elise + 10 }
    })}
  ]
},
{
  id: "acte3RetourTomSeul",
  lines: [
    { type: "narration", texte: "Une heure passe." },
    { type: "narration", texte: "Puis deux." },
    { type: "narration", texte: "Le cabanon c'est cinq cents mètres. Même dans la neige, même épuisé, même en cherchant dans les tiroirs, ça ne devrait pas prendre deux heures." },
    { type: "narration", texte: "Personne ne le dit à voix haute. Vous faites tous semblant de ne pas compter. Lucas remonte les pièces de la radio, les redémonte, les remonte encore. Elise a fermé les yeux près du feu mais tu sais qu'elle dort pas. Josie a arrêté de marcher. Elle est assise par terre dos au mur, les genoux contre la poitrine, les yeux sur la porte." },
    { type: "narration", texte: "Trois heures." },
    { type: "narration", texte: "La lumière dehors change. Pas beaucoup, le ciel est toujours blanc et uniforme, mais quelque chose dans l'angle de la lumière dit que l'après-midi est bien entamé." },
    { type: "dialogue", texte: "C'est trop long.", personnage: "Josie" },
    { type: "narration", texte: "Personne ne répond parce que c'est vrai." },
    { type: "dialogue", texte: "Si dans une heure il est pas rentré on fait quoi.", personnage: "Josie" },
    { type: "dialogue", texte: "Y'a qu'une tenue.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je sais qu'il y a qu'une tenue Lucas.", personnage: "Josie" },
    { type: "narration", texte: "Elise ouvre les yeux. Elle regarde la porte. Elle ne dit rien." },
    { type: "narration", texte: "Quatre heures." },
    { type: "narration", texte: "Le feu commence à baisser. Personne ne se lève pour le relancer." },
  ],
  choices: [
    { label: "Continuer", next: "acte3RetourTomArrive" }
  ]
},
{
  id: "acte3RetourTomArrive",
  lines: [
    { type: "narration", texte: "La nuit tombe." },
    { type: "narration", texte: "Pas d'un coup. Progressivement, la lumière blanche du dehors devient grise, puis presque noire, et à un moment tu réalises que tu ne vois plus rien par la fenêtre. Juste ton reflet et celui du feu derrière toi." },
    { type: "narration", texte: "Tom n'est pas rentré." },
    { type: "narration", texte: "Cinq heures. Six heures peut-être. Le temps a arrêté d'avoir du sens à un moment dans l'après-midi et personne n'a regardé sa montre depuis." },
    { type: "narration", texte: "Lucas a posé les pièces de la radio. Pas rangées, juste posées là, comme si ses mains avaient décidé toutes seules d'arrêter. Il est assis, les coudes sur les genoux, la tête basse." },
    { type: "narration", texte: "Elise est allongée sur le canapé, les yeux ouverts au plafond. Elle ne parle pas. Elle ne bouge pas. Tu la regardes et tu te demandes si c'est de l'épuisement ou autre chose." },
    { type: "narration", texte: "Josie est là où elle était il y a quatre heures. Par terre, dos au mur. Mais quelque chose a changé dans sa posture. Elle ne regarde plus la porte. Elle regarde ses mains." },
    { type: "dialogue", texte: "Si quelque chose lui est arrivé.", personnage: "Josie" },
    { type: "narration", texte: "Elle ne finit pas la phrase. Personne ne lui demande de la finir." },
    { type: "narration", texte: "Tu t'assois. Tu ne sais pas où, tu t'assois juste quelque part et tu restes là avec eux dans le silence et la faim et le froid qui reprend ses droits maintenant que le feu est presque éteint." },
    { type: "narration", texte: "Personne n'a la force de le rallumer." },
    { type: "narration", texte: "Personne n'a la force de grand chose." },
    { type: "narration", texte: "Et puis." },
  ],
  choices: [
    { label: "Continuer", next: "acte3RetourTomPorte" }
  ]
},
{
  id: "acte3RetourTomPorte",
  lines: [
    { type: "narration", texte: "Un bruit." },
    { type: "narration", texte: "Non. Pas un bruit. Une lumière." },
    { type: "narration", texte: "Tu la vois par la fenêtre. Un point, deux points, qui bougent dans le noir à travers la neige. Des lampes frontales. Plusieurs. Loin, très loin, de l'autre côté de la pente." },
    { type: "dialogue", texte: "Regardez.", personnage: "Toi" },
    { type: "narration", texte: "Tout le monde se lève. Josie arrive à la fenêtre en premier." },
    { type: "dialogue", texte: "C'est quoi.", personnage: "Josie" },
    { type: "dialogue", texte: "Des gens. Des lampes frontales.", personnage: "Lucas" },
    { type: "dialogue", texte: "Ils sont loin.", personnage: "Elise" },
    { type: "dialogue", texte: "Trop loin pour voir le chalet.", personnage: "Lucas" },
    { type: "narration", texte: "Les lumières bougent lentement. Elles vont disparaître. Dans deux minutes, trois peut-être, elles vont passer derrière la ligne d'arbres et il n'y aura plus rien." },
    { type: "narration", texte: "Tu regardes la porte." },
    { type: "narration", texte: "Tu la regardes et tu n'attends pas que quelqu'un dise quoi que ce soit." },
    { type: "narration", texte: "Tu l'ouvres." },
    { type: "narration", texte: "Le froid te prend d'un coup, brutal, comme une gifle sur tout le corps en même temps. Tu fais deux pas dehors dans la neige jusqu'aux genoux et tu cries." },
    { type: "narration", texte: "Pas un mot. Juste un cri. Tout ce que tu as dans les poumons, tout ce qui s'est accumulé depuis des jours, la faim et la peur et le froid et Tom qui n'est pas rentré et les barres de céréales et les visages des autres ce soir." },
    { type: "narration", texte: "Tu cries." },
    { type: "narration", texte: "Derrière toi tu entends Josie, puis Lucas, qui sortent et crient aussi. Elise dans l'encadrement de la porte." },
    { type: "narration", texte: "Les lumières s'arrêtent." },
    { type: "narration", texte: "Elles s'arrêtent et elles se tournent vers vous." },
    { type: "dialogue", texte: "Ils nous ont vus.", personnage: "Lucas" },
    { type: "narration", texte: "Sa voix est à peine audible." },
    { type: "narration", texte: "Les lumières commencent à bouger dans votre direction." },
  ],
  choices: [
    { label: "Continuer", next: "acte3Secours" }
  ]
},
{
  id: "acte3Secours",
  lines: [
    { type: "narration", texte: "Ils mettent vingt minutes à arriver. Vingt minutes qui durent plus longtemps que les six dernières heures." },
    { type: "narration", texte: "Vous restez dehors tant que vous pouvez, à agiter les bras, à crier encore, à alimenter le signal. Elise est sortie avec une couverture qu'elle vous a mise sur les épaules sans rien dire." },
    { type: "narration", texte: "Quand ils arrivent ils sont quatre. Des combinaisons orange, des lampes puissantes, du matériel. Un des secouristes parle en premier." },
    { type: "dialogue", texte: "Vous êtes combien ?", personnage: "Secouriste" },
    { type: "dialogue", texte: "Cinq. Enfin quatre là. Le cinquième est parti ce matin chercher des affaires au cabanon derrière le chalet. Il est pas rentré.", personnage: "Toi" },
    { type: "narration", texte: "Deux secouristes échangent un regard. Le troisième prend sa radio." },
    { type: "dialogue", texte: "On a une équipe dans le secteur. On les contacte.", personnage: "Secouriste" },
    { type: "narration", texte: "Josie s'avance. Pas doucement." },
    { type: "dialogue", texte: "Vous avez pas croisé quelqu'un en venant ? Grand, combinaison bleue, lampe frontale. Il est parti ce matin. Ça fait SIX HEURES.", personnage: "Josie" },
    { type: "dialogue", texte: "Madame.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Six heures pour aller à cinq cents mètres. Six heures. Vous comprenez ce que ça veut dire ?", personnage: "Josie" },
    { type: "dialogue", texte: "On va.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Vous allez quoi ? Vous allez le chercher maintenant ? Pourquoi vous étiez pas là ce matin ? Pourquoi personne est venu ce matin ?", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Elise" },
    { type: "dialogue", texte: "Non. Non. Ça fait des jours qu'on est là. Des jours sans nourriture, sans réseau, sans rien. Et il a fallu attendre ce soir pour que quelqu'un se pointe ?", personnage: "Josie" },
    { type: "dialogue", texte: "Le propriétaire nous a contactés hier soir. La visibilité.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Je m'en fous de la visibilité. Trouvez-le.", personnage: "Josie" },
    { type: "narration", texte: "Sa voix s'est cassée sur le dernier mot. Elle s'en rend compte. Elle serre les mâchoires, elle détourne les yeux, elle fait quelque chose avec ses mains comme si elle cherchait où les mettre." },
    { type: "narration", texte: "Le secouriste la regarde une seconde. Il prend sa radio." },
    { type: "dialogue", texte: "Équipe deux vous êtes où. On a un homme isolé secteur nord, combinaison bleue, parti ce matin.", personnage: "Secouriste" },
    { type: "narration", texte: "Les autres secouristes sortent des barres énergétiques, de l'eau chaude. Un d'entre eux vérifie l'état de chacun. Josie refuse d'un geste de la main." },
    { type: "dialogue", texte: "Comment vous avez su qu'on était là ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Le propriétaire du chalet. Il essayait de vous contacter depuis le début de la tempête. Sans réponse il a appelé les secours.", personnage: "Secouriste" },
    { type: "narration", texte: "Josie est revenue à la fenêtre. Les mains à plat sur le rebord, les yeux dans le noir dehors. Elle cherche une lumière qui n'est pas là. Elle tremble légèrement, pas de froid." },
    { type: "narration", texte: "Tu t'approches d'elle." },
    { type: "dialogue", texte: "Ils vont le trouver.", personnage: "Toi" },
    { type: "dialogue", texte: "Il aurait pas dû y aller.", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais.", personnage: "Toi" },
    { type: "dialogue", texte: "Il aurait pas dû y aller seul.", personnage: "Josie" },
    { type: "narration", texte: "Elle dit ça très bas. Pas pour toi. Pour elle-même peut-être. Ou pour lui, à travers la vitre et la neige et le noir." },
    { type: "narration", texte: "La radio d'un secouriste grésille." },
  ],
  choices: [
    { label: "Continuer", next: "acte3RetourTom" }
  ]
},
{
  id: "acte3RetourTom",
  lines: [
    { type: "narration", texte: "La radio grésille." },
    { type: "dialogue", texte: "Équipe deux pour équipe un. On est au cabanon.", personnage: "Radio" },
    { type: "narration", texte: "Tout le monde se tait. Josie lâche le rebord de la fenêtre." },
    { type: "dialogue", texte: "Équipe un j'écoute.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Le cabanon a été forcé. Quelqu'un est entré. Mais y'a personne à l'intérieur. On trouve des traces qui repartent vers le sud mais la neige les recouvre. On peut pas dire depuis combien de temps.", personnage: "Radio" },
    { type: "narration", texte: "Un silence." },
    { type: "dialogue", texte: "Vers le sud c'est quoi.", personnage: "Josie" },
    { type: "narration", texte: "Le secouriste la regarde." },
    { type: "dialogue", texte: "C'est quoi au sud.", personnage: "Josie" },
    { type: "dialogue", texte: "La vallée. Il y a un petit village à environ trois kilomètres.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Trois kilomètres.", personnage: "Lucas" },
    { type: "dialogue", texte: "Dans cet état.", personnage: "Elise" },
    { type: "narration", texte: "Sa voix n'a pas de couleur. Juste les mots." },
    { type: "dialogue", texte: "Il a pas pu faire trois kilomètres.", personnage: "Josie" },
    { type: "dialogue", texte: "On sait pas ce qu'il a fait.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Il a pas pu.", personnage: "Josie" },
    { type: "dialogue", texte: "Équipe deux continuez vers le sud. On envoie l'équipe trois par la route du bas.", personnage: "Secouriste" },
    { type: "narration", texte: "Josie s'assoit. D'un coup, comme si ses jambes avaient décidé toutes seules. Elle s'assoit sur le sol, le dos contre le mur, et elle fixe un point devant elle." },
    { type: "narration", texte: "Elise s'accroupit à côté d'elle. Elle pose une main sur son bras. Josie ne réagit pas." },
    { type: "narration", texte: "Lucas a les yeux fermés. Tu ne sais pas s'il prie ou s'il calcule ou s'il fait juste semblant de ne pas être là." },
    { type: "narration", texte: "Tu regardes la porte." },
    { type: "narration", texte: "La même porte par laquelle il est sorti ce matin." },
  ],
  choices: [
    { label: "Continuer", next: "acte3RetourTomFinal" }
  ]
},
{
  id: "acte3RetourTomFinal",
  lines: [
    { type: "narration", texte: "Une semaine." },
    { type: "narration", texte: "Ça fait une semaine." },
    { type: "narration", texte: "Tu t'habilles en noir ce matin. Tu ne sais pas pourquoi tu as choisi le noir. Tu ne t'en es rendu compte qu'en regardant ton reflet dans le miroir." },
    { type: "narration", texte: "Le taxi est en bas. Josie est déjà dedans. Elle regarde par la vitre, elle ne t'a pas vue arriver. Elle a les yeux secs mais elle ne dort plus depuis une semaine, ça se voit." },
    { type: "narration", texte: "Lucas et Elise montent derrière toi. Elise a mis sa main dans la tienne sans rien dire." },
    { type: "narration", texte: "Le trajet dure vingt minutes. Personne ne parle. La ville défile, normale, indifférente, les gens sur les trottoirs qui ont des choses à faire, des courses, des rendez-vous, des vies qui continuent comme si rien ne s'était passé." },
    { type: "narration", texte: "Tu regardes tes mains sur tes genoux." },
    { type: "narration", texte: "Tu penses à la façon dont il s'est levé ce matin-là. Sans attendre. Sans hésiter. Comme si c'était évident." },
    { type: "narration", texte: "Tu penses à la porte qui s'est refermée." },
    { type: "narration", texte: "Le taxi s'arrête." },
    { type: "narration", texte: "Tu regardes par la vitre. La façade, les gens qui entrent et sortent, les visages fermés de ceux qui ont appris à faire avec." },
    { type: "narration", texte: "Tu pensais que ça ressemblerait à quelque chose quand tu arriverais. Que tu saurais quoi ressentir exactement." },
    { type: "narration", texte: "Tu ne sais rien du tout." },
    { type: "narration", texte: "Vous descendez. Vous marchez. Josie devant, les autres derrière. Personne ne dit rien parce qu'il n'y a rien à dire qui ne soit pas déjà su." },
    { type: "narration", texte: "Un couloir. Une porte." },
    { type: "narration", texte: "Josie s'arrête devant. Elle pose la main sur la poignée. Elle ne bouge pas pendant quelques secondes." },
    { type: "narration", texte: "Puis elle ouvre." },
    { type: "narration", texte: "Il est là." },
    { type: "narration", texte: "Pâle, amaigri, le bras dans une attelle. Il tourne la tête quand vous entrez." },
    { type: "narration", texte: "Il vous regarde tous les quatre." },
    { type: "narration", texte: "Et il sourit." },
    { type: "dialogue", texte: "Ohohoh. J'espère que vous avez été sages.", personnage: "Tom" },
    { type: "narration", texte: "Josie éclate en sanglots." },
    { type: "narration", texte: "Elise aussi." },
    { type: "narration", texte: "Lucas dit quelque chose mais sa voix se casse à mi-chemin et personne n'entend ce que c'était." },
    { type: "narration", texte: "Toi tu restes dans l'encadrement de la porte. Tu le regardes. Il te regarde." },
    { type: "narration", texte: "Il a l'air épuisé. Il a l'air d'avoir encore froid, même là. Il a l'air de quelqu'un qui a traversé quelque chose qu'il ne racontera peut-être jamais vraiment." },
    { type: "narration", texte: "Mais il est là." },
  ],
  choices: [
    { label: "Fin", next: "fin" }
  ]
},
{
  id: "fin",
  lines: [
    { type: "narration", texte: "FIN" },
    { type: "narration", texte: "Merci d'avoir joué. Ce jeu est encore en développement, certaines routes ne sont pas encore écrites, certains choix n'ont pas encore toutes leurs conséquences. Mais vous êtes allés au bout de ce qui existe pour l'instant." },
    { type: "narration", texte: "Merci les ptit gars." },
  ],
  choices: []
}
]
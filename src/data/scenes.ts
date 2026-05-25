import { Scene } from "../class/Scene";
import type { GameState } from "../class/GameState";

export const scenes: Scene[] = [
  new Scene(
    "intro",
    [
      {
        type: "narration",
        texte: "Vendredi. 9h47. Quelque part sur l'A43, direction les Alpes.",
      },
      { type: "narration", texte: "Chaque année c'est pareil." },
      {
        type: "narration",
        texte:
          "Tom appelle en septembre toujours Tom, même si c'est toi qui trouves le chalet, qui réserves, qui envoies les dates à tout le monde. Il appelle, il dit « alors, on y va cette année ? », et la question n'en est pas vraiment une. Ça fait cinq ans que vous faites ça. Une semaine en montagne, le même groupe, des années différentes. C'est devenu quelque chose d'immuable, le genre de rituel dont personne ne parle vraiment mais que tout le monde protège.",
      },
      {
        type: "narration",
        texte:
          "Tu regardes par la vitre. Les collines ont laissé place aux premiers sommets, la neige sur les crêtes encore loin mais déjà présente, blanche et nette contre le gris du ciel.",
      },
      { type: "narration", texte: "À côté de toi, Tom conduit." },
      {
        type: "narration",
        texte:
          "Il conduit comme il fait tout sans y penser, les deux mains sur le volant mais légèrement, le corps détendu. Il a mis de la musique au départ puis quelqu'un a commencé à parler et la musique est devenue du fond sonore puis plus rien. Ça ne le dérange pas. Tom est le genre de personne qui s'adapte à ce que la pièce demande sans jamais avoir l'air de s'adapter.",
      },
      {
        type: "narration",
        texte:
          "Derrière vous : Elise côté fenêtre, Josie au milieu, Lucas de l'autre côté. Cinq personnes dans un SUV chargé à bloc, trois heures de route, une semaine devant vous.",
      },
      {
        type: "narration",
        texte:
          "Tu connais cette configuration par cœur. Tu sais ce que chacun va faire des cinquante prochaines minutes.",
      },
    ],
    [{ label: "Regarder à l'arrière", next: "voitureLucas" }],
  ),
  new Scene(
    "voitureLucas",
    [
      {
        type: "narration",
        texte:
          "Lucas a sorti son téléphone dès que vous avez quitté l'autoroute. Il fait défiler quelque chose des articles, des listes, tu ne distingues pas bien avec ce regard légèrement absent de quelqu'un qui traite de l'information sans vraiment la lire. Il a le dos droit, les jambes croisées dans l'espace trop petit, le coude contre la portière.",
      },
      { type: "narration", texte: "À un moment il dit, sans lever les yeux :" },
      {
        type: "dialogue",
        texte: "Le chalet a pas l'air grand sur les photos.",
        personnage: "Lucas",
      },
      { type: "dialogue", texte: "Le chalet est bien.", personnage: "Toi" },
      {
        type: "dialogue",
        texte: "Je dis pas qu'il est pas bien. Je dis qu'il a pas l'air grand.",
        personnage: "Lucas",
      },
      {
        type: "narration",
        texte:
          "Il dit ça à son téléphone, pas à toi. Elise, à côté de lui, continue de regarder par la fenêtre. Elle n'a pas relevé — soit parce qu'elle est d'accord, soit parce qu'elle sait que répondre n'est pas nécessaire. Avec Elise c'est parfois difficile à distinguer.",
      },
      {
        type: "dialogue",
        texte:
          "Le chalet fait quatre-vingt mètres carrés. C'est marqué dans la description.",
        personnage: "Toi",
      },
      {
        type: "dialogue",
        texte: "Oui mais les mètres carrés ça inclut les murs.",
        personnage: "Lucas",
      },
      {
        type: "narration",
        texte:
          "Tom lâche un petit rire depuis le siège conducteur — pas un rire de politesse, un vrai, bref, celui de quelqu'un qui trouve ça réellement drôle.",
      },
      {
        type: "dialogue",
        texte: "Lucas. Les murs font pas dix mètres d'épaisseur.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "Je dis juste que c'est une métrique trompeuse.",
        personnage: "Lucas",
      },
      {
        type: "dialogue",
        texte:
          "T'inquiète pas pour les mètres carrés. Si c'est trop petit on dormira dehors. Y'aura de la neige pour faire un igloo.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "Il neige même pas encore à cette altitude en novembre.",
        personnage: "Lucas",
      },
    ],
    [{ label: "Continuer", next: "descriptionLucas" }],
  ),
  new Scene(
    "descriptionLucas",
    [
      {
        type: "narration",
        texte:
          "Lucas, tu le connais depuis le lycée. Onze ans maintenant ce qui veut dire que tu l'as connu avant qu'il sache qui il était, et que tu as vu la version finale arriver progressivement, sans qu'il s'en rende compte lui-même.",
      },
      {
        type: "narration",
        texte:
          "Il est ingénieur dans quelque chose de précis que tu serais incapable de réexpliquer correctement. Ce que tu sais c'est qu'il est bon dans ce qu'il fait, qu'il le sait, et que ça ne le rend pas arrogant juste économe. Il ne dépense pas d'énergie à prouver quoi que ce soit parce qu'il n'en a pas besoin.",
      },
      {
        type: "narration",
        texte:
          "Elise et lui sont ensemble depuis trois ans. Trois ans et demi peut-être tu as raté l'anniversaire exact parce que personne n'a jamais vraiment su quand ça avait commencé. Ils ne l'ont pas annoncé. Un jour ils étaient deux personnes qui se connaissaient, et puis ils étaient ensemble, et la transition avait été si fluide que tout le monde avait fait semblant de l'avoir vu venir.",
      },
      { type: "narration", texte: "Ce qui est probablement vrai." },
      {
        type: "narration",
        texte:
          "Ils fonctionnent bien. Pas de la façon démonstrative qui rend les autres mal à l'aise lors des dîners plutôt une espèce d'efficacité tranquille, deux personnes qui ont appris la géographie de l'autre et s'y déplacent sans heurts. Tu ne les as jamais vus se disputer. Tu ne sais pas si c'est bon signe.",
      },
    ],
    [{ label: "Continuer", next: "descriptionElise" }],
  ),
  new Scene(
    "descriptionElise",
    [
      { type: "narration", texte: "Elise regarde toujours par la fenêtre." },
      {
        type: "narration",
        texte:
          "Pas par désintérêt. Tu as mis du temps à comprendre la différence, au début. C'est plutôt qu'elle n'a pas besoin d'être au centre pour être présente. Elle écoute. Elle enregistre. Et quand elle parle, c'est parce qu'elle a quelque chose à dire.",
      },
      {
        type: "narration",
        texte:
          "Tu la connais depuis quatre ans, via Lucas. Au début tu la trouvais distante. Puis un soir, une soirée qui avait mal tourné, une conversation dans un couloir, elle t'avait dit exactement ce que tu avais besoin d'entendre, sans fioritures, sans te ménager inutilement. Juste la vérité, posée là, avec une douceur qui n'en était pas moins franche.",
      },
      {
        type: "narration",
        texte: "Depuis tu sais : quand Elise parle, tu écoutes.",
      },
      {
        type: "narration",
        texte:
          "Elle tourne la tête une seconde vers Lucas, qui dit encore quelque chose sur les mètres carrés. Un sourire très léger, presque imperceptible. Elle ne dit rien.",
      },
      { type: "narration", texte: "Elle n'a pas besoin." },
    ],
    [{ label: "Continuer", next: "descriptionJosie" }],
  ),
  new Scene(
    "descriptionJosie",
    [
      {
        type: "dialogue",
        texte:
          "Attends je regarde les avis sur le chalet. Quatre étoiles sur vingt-trois avis c'est pas ouf.",
        personnage: "Lucas",
      },
      {
        type: "dialogue",
        texte: "Vingt-trois avis c'est bien. Et quatre étoiles c'est bien.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte:
          "Ouais mais les gens mettent cinq étoiles pour tout. Quatre étoiles ça veut dire qu'il y a un problème.",
        personnage: "Lucas",
      },
      {
        type: "dialogue",
        texte: "Ou ça veut dire que les gens sont honnêtes.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte:
          "T'es vraiment incapable de t'inquiéter pour quoi que ce soit toi.",
        personnage: "Josie",
      },
      {
        type: "narration",
        texte:
          "Tom ne répond pas. Il sourit légèrement, les yeux sur la route.",
      },
      {
        type: "narration",
        texte:
          "Josie retourne à son téléphone. C'est son état naturel en voiture, en fait dans la plupart des situations qui impliquent d'attendre. Elle scrolle, elle commente, elle envoie des liens à des gens qui n'ont rien demandé. Des activités à faire, des restaurants à tester, des avis à lire absolument. Le filtre entre ce qu'elle pense et ce qu'elle dit est, chez elle, purement décoratif.",
      },
      {
        type: "narration",
        texte:
          "Tu la connais depuis presque aussi longtemps qu'Elise. Elles sont arrivées ensemble dans le groupe, inséparables sans être fusionnelles. Josie parle pour deux, Elise écoute pour deux. Quelque part ça s'équilibre.",
      },
      {
        type: "narration",
        texte:
          "Elle envoie ses piques comme on respire, sans vraiment y penser. Et Tom encaisse sans bouger, comme toujours. Ça a toujours été comme ça entre eux. Tu ne sais pas exactement pourquoi. Tu as appris à ne pas poser la question.",
      },
    ],
    [{ label: "Continuer", next: "descriptionTom" }],
  ),
  new Scene(
    "descriptionTom",
    [
      { type: "narration", texte: "À côté de toi, Tom conduit." },
      {
        type: "narration",
        texte:
          "Il conduit comme il fait tout. Sans y penser, les deux mains sur le volant mais légèrement, le corps détendu. Il a mis de la musique au départ puis quelqu'un a commencé à parler et la musique est devenue du fond sonore puis plus rien. Ça ne le dérange pas. Tom est le genre de personne qui s'adapte à ce que la pièce demande sans jamais avoir l'air de s'adapter.",
      },
      {
        type: "narration",
        texte:
          "Tu le connais depuis le lycée. Ce qui veut dire que tu l'as connu avant, et après. Vous avez été ensemble deux ans. C'est toi qui avais décidé que ça s'arrêtait. Il avait accepté ça comme il accepte tout, sans s'effondrer, sans disparaître, sans rendre les choses impossibles pour les autres.",
      },
      {
        type: "narration",
        texte:
          "Tu ne sais pas si c'est parce que ça ne l'avait pas vraiment atteint, ou parce qu'il est très bon pour ne pas montrer ce qui l'atteint. Cinq ans après tu ne sais toujours pas. Tu as cessé de chercher à le savoir, la plupart du temps.",
      },
      {
        type: "narration",
        texte:
          "Il dit quelque chose à Lucas, sourit, ramène les yeux sur la route. Il y a des moments où tu regardes Tom et tu te demandes ... Tu ne t'attardes pas sur cette pensée.",
      },
    ],
    [{ label: "Continuer", next: "arrivee" }],
  ),
  new Scene(
    "arrivee",
    [
      {
        type: "narration",
        texte:
          "Ce qui se passe dans les dix minutes qui suivent se passe sans que personne le décide.",
      },
      {
        type: "narration",
        texte:
          "Tom pose son sac, fait le tour de la cuisine, ouvre les placards, vérifie les plaques. Pas parce qu'on lui a demandé. Parce que c'est ce qu'il fait. Il cuisine, ça a toujours été comme ça, et dans un endroit inconnu la première chose qu'il fait c'est comprendre avec quoi il va travailler.",
      },
      {
        type: "dialogue",
        texte:
          "Y'a une bonne poêle. Et un four qui a l'air de fonctionner. C'est bien.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "Évidemment c'est la première chose que tu vérifies.",
        personnage: "Josie",
      },
      {
        type: "dialogue",
        texte: "Y'a pire comme priorité.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "J'ai pas dit que c'était une mauvaise priorité.",
        personnage: "Josie",
      },
      {
        type: "narration",
        texte:
          "Elise monte les sacs à l'étage. Les deux, pas juste le sien. Elle revient, prend ceux de Josie et d'Lucas sans demander, les monte aussi. Josie la regarde faire depuis le salon avec une expression entre la gratitude et la légère gêne de quelqu'un qui aurait dû le faire elle-même.",
      },
      {
        type: "narration",
        texte:
          "Lucas a sorti son téléphone et cherche le code wifi. Il le trouve dans les instructions laissées par le propriétaire, se connecte, puis vérifie quelque chose qui l'intéresse depuis la voiture. L'article météo, probablement. Son visage ne change pas mais ses épaules montent d'un demi-centimètre.",
      },
      {
        type: "dialogue",
        texte: "La météo de la semaine prochaine a l'air chargée.",
        personnage: "Lucas",
      },
      {
        type: "dialogue",
        texte: "C'est la montagne. La météo est toujours chargée.",
        personnage: "Tom",
      },
      { type: "dialogue", texte: "Je dis juste.", personnage: "Lucas" },
      { type: "dialogue", texte: "T'as faim ?", personnage: "Tom" },
      { type: "dialogue", texte: "Un peu.", personnage: "Lucas" },
      {
        type: "dialogue",
        texte: "On fait les courses. Y'a un supermarché pas loin ?",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte:
          "La ville la plus proche est à vingt-cinq minutes. Y'a une épicerie dans le village mais elle a l'air minuscule.",
        personnage: "Lucas",
      },
      {
        type: "dialogue",
        texte: "On va en ville alors. On prend pour la semaine.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "Vingt-cinq minutes sur cette route c'est pas rien.",
        personnage: "Lucas",
      },
      {
        type: "dialogue",
        texte: "On y va maintenant, avant qu'il fasse nuit.",
        personnage: "Tom",
      },
      {
        type: "narration",
        texte:
          "Josie s'est laissée tomber sur le canapé avec le naturel de quelqu'un qui teste une surface. Elle rebondit deux fois.",
      },
      {
        type: "dialogue",
        texte: "Le canapé est bien. Qui dort dessus ?",
        personnage: "Josie",
      },
      {
        type: "narration",
        texte:
          "Personne ne répond tout de suite. Tom sort la tête de la cuisine.",
      },
      {
        type: "dialogue",
        texte: "Moi si personne en veut.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "T'as pas besoin d'une chambre ?",
        personnage: "Josie",
      },
      {
        type: "dialogue",
        texte: "Le canapé c'est bien. J'ai une chambre chez moi.",
        personnage: "Tom",
      },
      {
        type: "narration",
        texte:
          "Josie le regarde une seconde. Tu ne vois pas exactement ce qu'il y a dans son regard. Quelque chose de rapide, de peu lisible.",
      },
      {
        type: "dialogue",
        texte: "OK. Alors Elise et Lucas une chambre, moi et Alice l'autre.",
        personnage: "Josie",
      },
      {
        type: "narration",
        texte:
          "C'est dit simplement, sans enjeu apparent. Mais tu notes, comme tu notes toujours ces choses-là, que Josie a décidé ça avant que quelqu'un propose autre chose.",
      },
    ],
    [{ label: "Aller aux courses", next: "debutCourses" }],
  ),
  new Scene(
    "debutCourses",
    [
      {
        type: "narration",
        texte:
          "Le trajet jusqu'à la ville prend vingt-cinq minutes. La route descend en lacets serrés, une voie par endroits, des arbres de chaque côté qui réduisent ce qui reste de lumière. Personne ne parle beaucoup. Tom conduit, Josie regarde son téléphone, Lucas surveille la météo sans le dire.",
      },
      {
        type: "narration",
        texte:
          "Au supermarché, vous prenez un chariot. Tom le saisit naturellement, comme il avait saisi les clés du chalet, comme il avait vérifié les plaques. Il commence à avancer vers les légumes.",
      },
      {
        type: "dialogue",
        texte:
          "On prend large. J'ai des idées pour toute la semaine, un bon repas par soir au moins. Autant en profiter.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "Toute la semaine ? On va pas manger au restaurant un peu ?",
        personnage: "Josie",
      },
      {
        type: "dialogue",
        texte: "Si tu veux aller au restaurant t'as qu'à y aller.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte:
          "C'est pas ce que je dis. Je dis qu'on pourrait prévoir moins ici et sortir deux trois fois. C'est les vacances.",
        personnage: "Josie",
      },
      {
        type: "dialogue",
        texte:
          "Les restos en montagne c'est cher et c'est loin. Et la route le soir c'est pas top.",
        personnage: "Tom",
      },
      {
        type: "dialogue",
        texte: "T'as une réponse pour tout.",
        personnage: "Josie",
      },
      { type: "dialogue", texte: "J'essaie.", personnage: "Tom" },
      {
        type: "narration",
        texte:
          "Il dit ça sans ironie. Josie lève les yeux au ciel mais ne répond pas. Vous êtes au milieu du rayon pâtes et personne n'a encore décidé quoi que ce soit.",
      },
      { type: "narration", texte: "Tout le monde te regarde." },
    ],
    [
      {
        label: "Prendre large, Tom a raison",
        next: "coursesAbondantes",
        effect: (state: GameState) => ({ ...state, nourriture: true, TomCourses: true }),
      },
      {
        label: "Prendre léger, on fera des restaurants",
        next: "coursesLegeres",
        effect: (state: GameState) => ({ ...state, nourriture: true, josieCourses: true }),
      },
      {
        label: "Un compromis, quelques courses et un ou deux restos",
        next: "coursesMoyennes",
        effect: (state: GameState) => ({ ...state, nourriture: true, EliseCourses: true }),
      },
    ],
  ),


  // Scène pour le choix "Prendre large, Tom a raison"
new Scene(
  "coursesAbondantes",
  [
    { type: "narration", texte: "Tom acquiesce sans faire de commentaire. Il prend le chariot et avance." },
    { type: "narration", texte: "Vous passez une heure dans le supermarché. Tom a une liste dans la tête, pas sur papier, et il s'en souvient mieux que si elle avait été écrite. Pâtes, riz, légumes, viande, fromage, œufs, pain, conserves. Il prend méthodiquement, il compare les prix sans que ça ralentisse le rythme. Elise l'aide sans qu'il ait besoin de demander. Lucas pousse le chariot." },
    { type: "narration", texte: "Josie suit, les mains dans les poches, le téléphone rangé pour une fois. Elle ne dit rien mais tu la vois regarder le chariot se remplir avec une expression que tu connais bien. Pas de la colère. Juste le visage de quelqu'un qui avait prévu autre chose." },
    { type: "dialogue", texte: "On pourra quand même aller au restaurant un soir.", personnage: "Josie" },
    { type: "dialogue", texte: "Bien sûr. C'est pour les soirs où on a la flemme de cuisiner ou on rentre tard d'une rando. Pas de prise de tête.", personnage: "Tom" },
    { type: "dialogue", texte: "Ah OK. Je pensais que tu voulais cuisiner tous les soirs.", personnage: "Josie" },
    { type: "dialogue", texte: "J'aime cuisiner mais je suis en vacances aussi.", personnage: "Tom" },
    { type: "narration", texte: "Josie hoche la tête. Elle reprend son téléphone, mais cette fois elle cherche des restaurants dans le coin." },
    { type: "narration", texte: "Sur le chemin du retour personne ne parle beaucoup. Par la vitre tu regardes le ciel. Il a changé depuis tout à l'heure. Les nuages se sont resserrés, plus bas, plus lourds. La lumière a une teinte grise et plate qui n'était pas là ce matin." },
    { type: "dialogue", texte: "Il fait plus froid non ?", personnage: "Josie" },
    { type: "dialogue", texte: "On est montés en altitude.", personnage: "Lucas" },
    { type: "narration", texte: "Personne ne répond. Tom regarde la route." },
  ],
  [
    { label: "Rentrer au chalet", next: "retourChalet", effect: (state: GameState) => ({
        ...state,
        nouyriture: 4,
        relations: {
          ...state.relations,
          Tom: state.relations.Tom + 10
        }
      })
    },
  ]
),

  // Scène pour le choix "Prendre léger, on fera des restaurants"
new Scene(
  "coursesLegeres",
  [
    { type: "narration", texte: "Josie sourit. Pas un grand sourire, juste celui de quelqu'un dont l'idée vient d'être validée." },
    { type: "narration", texte: "Vous prenez l'essentiel. De quoi tenir deux jours confortablement, un peu plus si on fait attention. Tom ne dit rien. Il prend ce qu'on lui demande de prendre, il ne commente pas, mais tu le connais assez pour savoir qu'il a fait le calcul dans sa tête et qu'il n'est pas tout à fait convaincu." },
    { type: "dialogue", texte: "J'ai trouvé un endroit qui a l'air bien. À vingt minutes du chalet, vue sur les sommets.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est noté comment ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Quatre virgule deux sur cinq. Quatre-vingt-sept avis.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est correct.", personnage: "Lucas" },
    { type: "dialogue", texte: "Merci pour ta validation.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est quoi comme cuisine ?", personnage: "Elise" },
    { type: "dialogue", texte: "Savoyarde. Tartiflette, fondue, tout ça.", personnage: "Josie" },
    { type: "dialogue", texte: "Ce soir alors.", personnage: "Elise" },
    { type: "dialogue", texte: "On verra comment tout le monde se sent en rentrant.", personnage: "Tom" },
    { type: "dialogue", texte: "T'as une objection ?", personnage: "Josie" },
    { type: "dialogue", texte: "Non. Je dis juste qu'on verra.", personnage: "Tom" },
    { type: "narration", texte: "Sur le chemin du retour personne ne parle beaucoup. Par la vitre tu regardes le ciel. Il a changé depuis tout à l'heure. Les nuages se sont resserrés, plus bas, plus lourds. La lumière a une teinte grise et plate qui n'était pas là ce matin." },
    { type: "dialogue", texte: "Il fait plus froid non ?", personnage: "Josie" },
    { type: "dialogue", texte: "On est montés en altitude.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'est pas que ça.", personnage: "Elise" },
    { type: "narration", texte: "Personne ne répond. Tom regarde la route." },
  ],
  [
    { label: "Rentrer au chalet", next: "retourChalet", effect: (state: GameState) => ({
        ...state,
        nourriture: true,
        relations: {
          ...state.relations,
          josie: state.relations.josie + 10
        },
        flags: {
          ...state.flags,
          josieCourses: true
        }
      })
    },
  ]
),

  // Scène pour le choix "Un compromis, quelques courses et un ou deux restos"
  new Scene(
  "coursesMoyennes",
  [
    { type: "narration", texte: "Tout le monde acquiesce. C'est la solution qui ne froisse personne et ça se sent, il y a quelque chose de légèrement soulagé dans l'air." },
    { type: "narration", texte: "Vous prenez pour plusieurs jours, raisonnablement. Tom gère les bases, les choses qui se cuisinent facilement et tiennent longtemps. Josie prend son téléphone et commence à chercher des restaurants pour les soirs restants." },
    { type: "dialogue", texte: "Y'a un endroit savoyard à vingt minutes qui a l'air bien.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est noté comment ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Quatre virgule deux.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est correct.", personnage: "Lucas" },
    { type: "dialogue", texte: "Et l'autre soir on fait quoi ?", personnage: "Elise" },
    { type: "dialogue", texte: "Je cherche.", personnage: "Josie" },
    { type: "dialogue", texte: "Y'a un italien pas loin aussi.", personnage: "Lucas" },
    { type: "dialogue", texte: "T'as cherché de ton côté ?", personnage: "Josie" },
    { type: "dialogue", texte: "J'ai regardé en passant.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'est noté comment ?", personnage: "Josie" },
    { type: "dialogue", texte: "Trois virgule huit.", personnage: "Lucas" },
    { type: "dialogue", texte: "On oublie.", personnage: "Josie" },
    { type: "dialogue", texte: "Trois virgule huit c'est pas si mal.", personnage: "Lucas" },
    { type: "dialogue", texte: "Pour moi si.", personnage: "Josie" },
    { type: "narration", texte: "Elise sourit sans lever les yeux de son téléphone. Tom pose les dernières choses dans le chariot." },
    { type: "narration", texte: "Sur le chemin du retour personne ne parle beaucoup. Par la vitre tu regardes le ciel. Il a changé depuis tout à l'heure. Les nuages se sont resserrés, plus bas, plus lourds. La lumière a une teinte grise et plate qui n'était pas là ce matin." },
    { type: "dialogue", texte: "Il fait plus froid non ?", personnage: "Josie" },
    { type: "dialogue", texte: "On est montés en altitude.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'est pas que ça.", personnage: "Elise" }
  ],
  [
    { label: "Rentrer au chalet", next: "retourChalet", effect: (state: GameState) => ({
        ...state,
        nourriture: true,
        relations: {
          ...state.relations,
          Elise: state.relations.Elise + 10,
        },
        flags: {
          ...state.flags,
          EliseCourses: true
        }
      })
    },
  ]
),

// Scène de retour au chalet après les courses
{
  id: "retourChalet",
  lines: [
    { type: "narration", texte: "En rentrant, la question du restaurant ne se pose même pas. La route du retour a répondu pour tout le monde." },
    { type: "dialogue", texte: "Bon. T'as gagné.", personnage: "Josie" },
    { type: "narration", texte: "Tom lui rend un petit sourire sans rien dire. Il prend sa veste et commence à déballer les courses." },
    { type: "narration", texte: "Elise sort les verres, ouvre une bouteille de vin, remplit sans demander. Elle pose les verres sur le plan de travail pour ceux qui cuisinent, en porte deux dans le salon, revient chercher le sien. Tout ça sans un mot, avec cette façon qu'elle a de rendre les choses fluides." },
    { type: "narration", texte: "Lucas s'est installé dans le canapé avec son téléphone. Il ne regarde pas les restaurants." },
    { type: "dialogue", texte: "Les prévisions ont changé depuis ce matin.", personnage: "Lucas" },
    { type: "dialogue", texte: "Dans quel sens ?", personnage: "Elise" },
    { type: "dialogue", texte: "Chutes de neige annoncées à partir de demain soir. Assez importantes.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'est la montagne en novembre, Lucas.", personnage: "Josie" },
    { type: "dialogue", texte: "Je dis juste ce que disent les prévisions.", personnage: "Lucas" },
    { type: "narration", texte: "Un silence. Elise regarde son verre. Josie regarde son téléphone. Personne ne répond vraiment." },
    { type: "narration", texte: "Tu t'approches de la cuisine. Tom a déjà tout sorti, tout organisé, les ingrédients alignés dans un ordre qui n'appartient qu'à lui. Il fait ça naturellement, sans y penser. C'est ce qu'il a toujours fait. Être là où il faut, faire ce qu'il faut, sans que personne ait besoin de le demander." },
    { type: "dialogue", texte: "T'as besoin d'aide ?", personnage: "Toi" },
    { type: "narration", texte: "Il lève les yeux une seconde. Juste une seconde." },
    { type: "dialogue", texte: "Comme tu veux.", personnage: "Tom" },
    { type: "narration", texte: "Deux mots. Pas un de plus. Mais il y a quelque chose dans la façon dont il te regarde avant de les dire, quelque chose de bref et de peu lisible, comme la vitre de la voiture tout à l'heure." },
    { type: "narration", texte: "Tu ne sais pas quoi faire de ça." },
  ],
  choices: [
    { label: "Rester en cuisine avec Tom", next: "soireeCuisine", effect: (state: GameState) => ({
        ...state,
        relations: {
          ...state.relations,
          Tom: state.relations.Tom + 10,
        }
      })
    },
    { label: "Rejoindre le groupe dans le salon", next: "soireeSalon" },
  ]
},

// Choix aider a faire la cuisine avec Tom
{
  id: "soireeCuisine",
  lines: [
    { type: "dialogue", texte: "J'ai deux mains.", personnage: "Toi" },
    { type: "narration", texte: "Il te regarde. Il sourit. Pas de surprise, juste de la satisfaction simple." },
    { type: "dialogue", texte: "Oignons. Il y en a trois dans le filet.", personnage: "Tom" },
    { type: "narration", texte: "Tu prends une planche, un couteau, les oignons. Vous cuisinez côte à côte dans la petite cuisine, les épaules qui se frôlent parfois dans l'espace étroit. C'est facile. Ça a toujours été facile avec Tom dans une cuisine. Vous avez le même rythme, la même façon de se déplacer sans se gêner, le même silence qui n'a pas besoin d'être rempli." },
    { type: "dialogue", texte: "Ça fait combien de temps qu'on fait pas ça ?", personnage: "Tom" },
    { type: "dialogue", texte: "Cuisiner ensemble ?", personnage: "Toi" },
    { type: "dialogue", texte: "Ouais.", personnage: "Tom" },
    { type: "narration", texte: "Tu réfléchis." },
    { type: "dialogue", texte: "L'année dernière. Au chalet de Savoie.", personnage: "Toi" },
    { type: "dialogue", texte: "Ah oui. La raclette.", personnage: "Tom" },
    { type: "dialogue", texte: "C'était une bonne raclette.", personnage: "Toi" },
    { type: "dialogue", texte: "C'était une raclette correcte. Le fromage était industriel.", personnage: "Tom" },
    { type: "dialogue", texte: "Le fromage était bien.", personnage: "Toi" },
    { type: "dialogue", texte: "Ali.", personnage: "Tom" },
    { type: "dialogue", texte: "Quoi ?", personnage: "Toi" },
    { type: "dialogue", texte: "Le fromage était industriel.", personnage: "Tom" },
    { type: "dialogue", texte: "Il était bien quand même.", personnage: "Toi" },
    { type: "narration", texte: "Il secoue la tête avec le sourire de quelqu'un qui abandonne une bataille perdue d'avance. Depuis le salon, tu entends Josie qui discute avec Lucas de quelque chose. Leurs voix qui montent et descendent, le rire de Josie à un moment, la voix d'Lucas plus plate qui finit la phrase." },
  ],
  choices: [
    { label: "La soirée", next: "soireeDebut" }
  ]
},

//choix rejoindre le groupe dans le salon
{
  id: "soireeSalon",
  lines: [
    { type: "dialogue", texte: "Fais comme tu veux. T'as toujours cuisiné mieux que nous tous réunis.", personnage: "Toi" },
    { type: "dialogue", texte: "C'est vrai.", personnage: "Tom" },
    { type: "narration", texte: "Il le dit sans arrogance. Comme un fait établi." },
    { type: "narration", texte: "Tu vas rejoindre les autres dans le salon. Josie et Lucas ont un débat sur quelque chose. Tu arrives au milieu, tu ne saisis pas le début." },
    { type: "dialogue", texte: "Non mais c'est pas du tout ce que j'ai dit.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est exactement ce que t'as dit.", personnage: "Lucas" },
    { type: "narration", texte: "Elise, depuis le canapé avec un livre qu'elle a déjà sorti de son sac, dit sans lever les yeux :" },
    { type: "dialogue", texte: "Vous aviez tous les deux raison.", personnage: "Elise" },
    { type: "narration", texte: "Ce qui met fin au débat d'une façon qui satisfait apparemment personne et tout le monde à la fois." },
    { type: "narration", texte: "Depuis la cuisine, l'odeur de l'ail dans l'huile chaude commence à se répandre." },
  ],
  choices: [
    { label: "La soirée", next: "soireeDebut" }
  ]
},

{
  id: "soireeDebut",
  lines: [
    { type: "narration", texte: "Vous vous installez tous autour de la table. Tom pose le plat au centre sans cérémonie, il s'assoit, et personne n'attend pour se servir." },
    { type: "dialogue", texte: "C'est vraiment bon.", personnage: "Elise" },
    { type: "dialogue", texte: "Sérieusement Tom c'est excellent.", personnage: "Lucas" },
    { type: "narration", texte: "Tom acquiesce, modeste, la tête baissée vers son assiette." },
    { type: "dialogue", texte: "C'est pas mal. Mais bon, on est loin du niveau d'un restaurant.", personnage: "Josie" },
    { type: "narration", texte: "Tom lève les yeux vers elle. Il ne dit rien. Josie soutient son regard une seconde puis laisse échapper un petit sourire, à peine visible, avant de baisser les yeux sur son assiette." },
    { type: "narration", texte: "Le repas continue. Les conversations se croisent, se superposent, personne ne parle vraiment de rien d'important et c'est exactement ce qu'il faut." },
    { type: "dialogue", texte: "Y'a des jeux de société dans la chambre du fond. J'en ai vu une pile en posant les sacs.", personnage: "Lucas" },
    { type: "dialogue", texte: "Quel genre ?", personnage: "Josie" },
    { type: "dialogue", texte: "Catan, Mysterium, deux trois autres.", personnage: "Lucas" },
    { type: "dialogue", texte: "Pictionary.", personnage: "Josie" },
    { type: "dialogue", texte: "T'as même pas vérifié s'il y en avait un.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je vais vérifier.", personnage: "Josie" },
    { type: "narration", texte: "Elle repousse sa chaise et disparaît dans le couloir. Elle revient trente secondes plus tard avec la boite sous le bras." },
    { type: "dialogue", texte: "Pictionary.", personnage: "Josie" },
    { type: "dialogue", texte: "Evidemment.", personnage: "Tom" },
  ],
  choices: [
    { label: "Jouer", next: "soireeJeux" }
  ]
},

{
  id: "soireeJeux",
  lines: [
    { type: "dialogue", texte: "Deux équipes. Moi et Elise contre vous trois.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pas équilibré.", personnage: "Lucas" },
    { type: "dialogue", texte: "Elise compense.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est un compliment ?", personnage: "Elise" },
    { type: "dialogue", texte: "Totalement.", personnage: "Josie" },
    { type: "narration", texte: "Tom prend le stylo, réfléchit une seconde, et commence à dessiner." },
    { type: "dialogue", texte: "Fourmi.", personnage: "Josie" },
    { type: "narration", texte: "Tom continue de dessiner sans réagir." },
    { type: "dialogue", texte: "Cafard.", personnage: "Josie" },
    { type: "dialogue", texte: "Limace motorisée.", personnage: "Josie" },
    { type: "narration", texte: "Lucas observe le dessin pendant cinq secondes." },
    { type: "dialogue", texte: "Voiture.", personnage: "Lucas" },
    { type: "narration", texte: "D'une voix parfaitement plate, comme s'il lisait un code-barres." },
    { type: "narration", texte: "Tom rit. Un vrai rire, sonore, qui remplit la pièce entière. Il pose son stylo et rit et ça fait du bien d'une façon difficile à quantifier. Cette façon qu'il a de rire qui donne envie de rire aussi, sans même savoir pourquoi." },
    { type: "narration", texte: "Josie rit aussi. Une fraction de seconde, le vrai rire, pas le rire qu'elle contrôle. Celui qui vient d'ailleurs. Et puis elle pose la main dessus, l'étouffe, ramène ses genoux contre sa poitrine. Elle regarde ses ongles." },
    { type: "narration", texte: "Tom ne tourne pas la tête vers elle. Mais son sourire change. Quelque chose de très petit, un réajustement imperceptible, comme si un mot qu'il allait dire s'était arrêté avant de partir." },
    { type: "narration", texte: "Tu le vois. Tu n'es pas sûre que quelqu'un d'autre ait vu." },
    { type: "narration", texte: "La soirée continue. Vers vingt-trois heures Lucas bâille, Elise commence à débarrasser. Josie monte la première. Elle dit bonne nuit, normalement, sans sous-texte apparent." },
  ],
  choices: [
    { label: "La répartition des chambres", next: "repartitionChambres" }
  ]
},

{
  id: "repartitionChambres",
  lines: [
    { type: "narration", texte: "La répartition des chambres s'est décidée en début de soirée mais elle existe maintenant physiquement. Elise et Lucas dans la chambre qui donne sur la forêt, toi et Josie dans l'autre." },
    { type: "narration", texte: "Elise et Lucas montent les premiers. Josie les suit peu après. Elle dit bonne nuit en passant, normalement, sans sous-texte." },
    { type: "narration", texte: "Il reste toi et Tom en bas." },
    { type: "narration", texte: "Il commence à déplier le canapé convertible, puis s'arrête." },
    { type: "dialogue", texte: "Je vais aller chercher du bois dans la réserve avant d'aller dormir. Celle du proprio, à cinq cents mètres derrière le chalet. On en a assez pour cette nuit mais si demain c'est compliqué de sortir, autant en avoir d'avance.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça simplement. Pas pour être héroïque. Juste parce qu'il a pensé à quelque chose et qu'il le dit." },
  ],
  choices: [
    { label: "Y aller avec lui", next: "boisAvecTom" },
    { label: "Lui dire ok, il peut y aller seul", next: "boisTomSeul" },
    { label: "Lui dire qu'il y a assez pour cette nuit, demain suffira", next: "boisDemain" },
  ]
},

// Scène pour le choix "Y aller avec lui"
{
  id: "boisAvecTom",
  lines: [
    { type: "dialogue", texte: "J'y vais avec toi.", personnage: "Toi" },
    { type: "narration", texte: "Il te regarde. Pas surpris. Plutôt la façon qu'il a de te regarder quand quelque chose lui convient sans qu'il ait besoin de le dire." },
    { type: "dialogue", texte: "T'as des bottes ?", personnage: "Tom" },
    { type: "dialogue", texte: "Dans mon sac.", personnage: "Toi" },
    { type: "dialogue", texte: "Je t'attends.", personnage: "Tom" },
    { type: "narration", texte: "Vous sortez deux minutes plus tard. La nuit est froide et claire. Pas encore de neige, juste ce froid sec de montagne qui saisit les poumons à la première inspiration. La réserve de bois est derrière le chalet, sous un auvent, bien empilée. Vous faites deux voyages en silence, les bras chargés de bûches." },
    { type: "narration", texte: "En rentrant, Tom pose sa pile près de la cheminée et souffle dans ses mains." },
    { type: "dialogue", texte: "Voilà. On est tranquilles pour trois jours.", personnage: "Tom" },
    { type: "narration", texte: "Tu ranges de ton côté. Le chalet est silencieux, les autres dormant déjà ou faisant semblant." },
    { type: "dialogue", texte: "Bonne nuit Tom.", personnage: "Toi" },
    { type: "dialogue", texte: "Bonne nuit Annie.", personnage: "Tom" },
    { type: "narration", texte: "Tu montes. Dans la chambre, Josie se démaquille devant le miroir. Elle te voit entrer dans le reflet." },
    { type: "dialogue", texte: "T'étais où ?", personnage: "Josie" },
    { type: "dialogue", texte: "On est allés chercher du bois.", personnage: "Toi" },
    { type: "narration", texte: "Elle pose son démaquillant. Elle ne dit rien pendant une seconde." },
    { type: "dialogue", texte: "OK. C'est bien.", personnage: "Josie" },
    { type: "narration", texte: "Elle dit ça à son reflet, pas à toi. Elle reprend son démaquillage." },
    { type: "narration", texte: "Tu te glisses dans ton lit. Un silence." },
    { type: "narration", texte: "Puis, sans se retourner :" },
    { type: "dialogue", texte: "Il est con ce jeu.", personnage: "Josie" },
    { type: "narration", texte: "Tu ne demandes pas lequel. Vous savez toutes les deux de quoi elle parle." },
  ],
  choices: [
    { label: "Dormir", next: "nuitChalet", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        Tom: state.relations.Tom + 10
      },
      flags: {
        ...state.flags,
        chercherDuBois: true,
      }
    })}
  ]
},

// Scène pour le choix "Lui dire ok, il peut y aller seul"
{
  id: "boisTomSeul",
  lines: [
    { type: "dialogue", texte: "Vas-y. Je vais ranger ici.", personnage: "Toi" },
    { type: "narration", texte: "Il hoche la tête, prend son manteau, sort sans faire de bruit pour ne pas réveiller les autres." },
    { type: "narration", texte: "Tu ranges les derniers verres, essuies la table. Le chalet est silencieux. Par la fenêtre tu distingues le faisceau de sa lampe frontale derrière le chalet. Il se déplace vite, méthodiquement." },
    { type: "narration", texte: "Dix minutes plus tard il rentre, les bras chargés de bûches, les joues rouges de froid." },
    { type: "dialogue", texte: "Trois jours de tranquillité.", personnage: "Tom" },
    { type: "dialogue", texte: "T'aurais pu attendre demain.", personnage: "Toi" },
    { type: "dialogue", texte: "Je sais. Mais j'y pensais.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça simplement. Comme si penser à quelque chose et le faire allaient naturellement ensemble. Ce qui, avec Tom, est souvent le cas." },
    { type: "dialogue", texte: "Bonne nuit.", personnage: "Tom" },
    { type: "dialogue", texte: "Bonne nuit.", personnage: "Toi" },
    { type: "narration", texte: "Tu montes. Dans la chambre Josie est déjà allongée, dos tourné, la respiration trop régulière pour être du vrai sommeil." },
    { type: "narration", texte: "Un silence." },
    { type: "narration", texte: "Puis, sans se retourner :" },
    { type: "dialogue", texte: "Il est con ce jeu.", personnage: "Josie" },
    { type: "narration", texte: "Tu ne demandes pas lequel. Vous savez toutes les deux de quoi elle parle." },
  ],
  choices: [
    { label: "Dormir", next: "nuitChalet", effect: (state: GameState) => ({
      ...state,
      flags: {
        ...state.flags,
        TomSolo: true
      }
    })}
  ]
},
// Scène pour le choix "Lui dire qu'il y a assez pour cette nuit, demain suffira"
{
  id: "boisDemain",
  lines: [
    { type: "dialogue", texte: "Y'a assez pour cette nuit. Demain on verra, s'il fait beau on en profite pour aller chercher.", personnage: "Toi" },
    { type: "narration", texte: "Tom regarde la pile de bûches une seconde." },
    { type: "dialogue", texte: "Ouais. T'as raison.", personnage: "Tom" },
    { type: "narration", texte: "Il finit de déplier le canapé. Tu montes." },
    { type: "narration", texte: "Dans la chambre, Josie se démaquille, range ses affaires avec cette précision qu'elle a parfois et qui contraste avec son énergie habituelle. Comme si elle mettait quelque chose en veille pour la nuit." },
    { type: "narration", texte: "Elle est déjà allongée, dos tourné, quand tu te glisses dans ton lit." },
    { type: "narration", texte: "Un silence." },
    { type: "narration", texte: "Puis, sans se retourner :" },
    { type: "dialogue", texte: "Il est con ce jeu.", personnage: "Josie" },
    { type: "narration", texte: "Tu ne demandes pas lequel. Vous savez toutes les deux de quoi elle parle." },
  ],
  choices: [
    { label: "Dormir", next: "nuitChalet", effect: (state: GameState) => ({
      ...state,
      flags: {
        ...state.flags,
        chercherDuBois: false,
        TomSolo: false,
      }
    })}
  ]
},

{
  id: "nuitChalet",
  lines: [
    { type: "narration", texte: "Tu n'arrives pas à dormir. Tu descends chercher un verre d'eau." },
    { type: "narration", texte: "La lumière de la cuisine est encore allumée. Tom est là, debout, il range ses affaires, plie sa couverture avec cette méthodologie tranquille qui lui appartient. Il lève les yeux quand tu arrives." },
    { type: "dialogue", texte: "Tu dors pas ?", personnage: "Tom" },
    { type: "dialogue", texte: "Verre d'eau.", personnage: "Toi" },
    { type: "narration", texte: "Il acquiesce. Tu te sers. Un silence confortable s'installe, le genre qui n'a pas besoin d'être rempli." },
  ],
  choices: [
     {
      label: "Lui parler.",
      next: "nuitConversation",
      condition: (state: GameState) => state.relations.Tom >= 30
    },
    { 
      label: "La voiture c'était mieux que le cheval quand même.",
      next: "nuitBlague",
      condition: (state: GameState) => state.relations.Tom >= 20
    },
    {
      label: "Bonne nuit.",
      next: "matin",
    }
  ]
},

// Scène pour la blague sur la voiture et le cheval
{
  id: "nuitBlague",
  lines: [
    { type: "dialogue", texte: "La voiture c'était mieux que le cheval quand même.", personnage: "Toi" },
    { type: "narration", texte: "Il lève les yeux. Il sait exactement de quoi tu parles." },
    { type: "dialogue", texte: "Le cheval était très bien.", personnage: "Tom" },
    { type: "dialogue", texte: "C'était une chaise.", personnage: "Toi" },
    { type: "dialogue", texte: "C'était un cheval qui avait vécu.", personnage: "Tom" },
    { type: "dialogue", texte: "Bonne nuit Tom.", personnage: "Toi" },
    { type: "dialogue", texte: "Bonne nuit Annie.", personnage: "Tom" },
    { type: "narration", texte: "Tu remontes. Dans la chambre Josie dort, ou fait semblant. Tu te glisses dans ton lit sans faire de bruit." },
  ],
  choices: [
    { label: "Dormir", next: "matin", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        Tom: state.relations.Tom + 5
      }
    })}
  ]
},

// Scène pour parler avec Tom
{
  id: "nuitConversation",
  lines: [
    { type: "narration", texte: "Tes pieds s'arrêtent tout seuls." },
    { type: "dialogue", texte: "C'était une bonne soirée, Ali.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça sans te regarder, les yeux sur les braises. Sa voix a ce ton qu'elle a parfois tard le soir, plus posée, débarrassée du quotidien." },
    { type: "dialogue", texte: "Ouais. C'était bien.", personnage: "Toi" },
    { type: "narration", texte: "Tu t'assois à côté de lui. Pas loin. La cheminée craque doucement, il reste assez de braises pour que la pièce soit tiède." },
    { type: "dialogue", texte: "Ça fait du bien de revenir en montagne.", personnage: "Tom" },
    { type: "dialogue", texte: "Tu dis ça chaque année.", personnage: "Toi" },
    { type: "dialogue", texte: "C'est vrai chaque année.", personnage: "Tom" },
    { type: "narration", texte: "Un silence. Pas inconfortable. Le genre de silence qu'on n'a qu'avec les gens qu'on connaît depuis longtemps." },
    { type: "dialogue", texte: "Tu te souviens du chalet de Chartreuse. La première année.", personnage: "Tom" },
    { type: "dialogue", texte: "Le chauffage qui tombait en panne.", personnage: "Toi" },
    { type: "dialogue", texte: "On avait dormi en doudoune.", personnage: "Tom" },
    { type: "dialogue", texte: "T'avais dit que c'était du camping de luxe.", personnage: "Toi" },
    { type: "dialogue", texte: "C'était vrai. On avait un toit.", personnage: "Tom" },
    { type: "narration", texte: "Tu ris. Un vrai rire, petit, qui sort naturellement. Il sourit sans te regarder." },
    { type: "narration", texte: "C'est ça avec Tom. Il a cette façon de rendre les choses simples sans les rendre insignifiantes. De prendre soin sans que ça ressemble à de la pitié. D'être là, vraiment là, sans que ça pèse. Tu n'as pas rencontré beaucoup de gens comme ça." },
    { type: "narration", texte: "Tu regardes ses mains posées sur ses genoux. Tu regardes le feu." },
    { type: "dialogue", texte: "T'es quelqu'un de bien, Tom.", personnage: "Toi" },
    { type: "narration", texte: "Il ne répond pas tout de suite. Les braises craquent." },
    { type: "dialogue", texte: "T'as sommeil.", personnage: "Tom" },
    { type: "narration", texte: "C'est pas une question. C'est sa façon de ne pas répondre à quelque chose qui méritait une réponse. Tu le connais assez pour savoir la différence." },
    { type: "dialogue", texte: "Bonne nuit Tom.", personnage: "Toi" },
    { type: "dialogue", texte: "Bonne nuit Ali.", personnage: "Tom" },
    { type: "narration", texte: "Tu montes. Dans la chambre la lumière de chevet de Josie est encore allumée. Elle te regarde entrer." },
    { type: "dialogue", texte: "T'étais où ?", personnage: "Josie" },
    { type: "narration", texte: "Sa voix est neutre. Trop neutre peut-être." },
    { type: "dialogue", texte: "Je suis allée chercher un verre d'eau.", personnage: "Toi" },
    { type: "narration", texte: "Elle acquiesce. Elle reprend son téléphone, éteint la lumière." },
    { type: "dialogue", texte: "OK.", personnage: "Josie" },
    { type: "narration", texte: "Tu te glisses dans ton lit. Tu regardes le plafond un moment. Josie ne pose jamais ce genre de question. Elle s'en fiche en général de savoir où sont les gens. Tu te demandes ce que ça veut dire. Tu décides de ne pas trop y penser." },
    { type: "narration", texte: "Tu fermes les yeux." },
  ],
  choices: [
    { label: "Dormir", next: "matin", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        Tom: state.relations.Tom + 10
      }
    })}
  ]
},

{
  id: "matin",
  lines: [
    { type: "narration", texte: "Tu es la première en bas. Tu mets de l'eau à chauffer. Tu regardes par la fenêtre." },
    { type: "narration", texte: "La neige tombe toujours. Pas en tempête violente, mais avec une régularité méthodique qui dit qu'elle n'est pas pressée. Les flocons sont gros. Le ciel est d'un blanc uniforme sans bords ni ombres." },
    { type: "narration", texte: "Tom descend cinq minutes après toi. Il voit la fenêtre avant de te voir." },
    { type: "dialogue", texte: "Ah.", personnage: "Tom" },
    { type: "narration", texte: "Il s'approche. Regarde. Longuement." },
    { type: "dialogue", texte: "La voiture est sous la neige.", personnage: "Tom" },
    { type: "dialogue", texte: "Oui.", personnage: "Toi" },
    { type: "narration", texte: "Un temps. Il se verse un café." },
    { type: "dialogue", texte: "On va rester calmes. Pour les autres.", personnage: "Tom" },
    { type: "narration", texte: "C'est la chose la plus Tom qui soit. Décider en avance de comment il va se comporter, pour que les autres aillent mieux. Tu hoches la tête." },
    { type: "narration", texte: "Ils descendent par ordre de résistance au changement." },
    { type: "narration", texte: "Elise d'abord. Elle voit la fenêtre, s'assoit, pose ses mains à plat sur la table et ne dit rien pendant trente secondes." },
    { type: "dialogue", texte: "D'accord. Qu'est-ce qu'on sait ?", personnage: "Elise" },
    { type: "narration", texte: "Lucas ensuite. Il voit la fenêtre, sort son téléphone, n'a pas de réseau, le repose, s'assoit à côté d'Elise. Il regarde la neige avec l'expression de quelqu'un qui calcule plusieurs choses en même temps." },
    { type: "narration", texte: "Josie en dernier. Elle descend à moitié endormie, s'arrête net en voyant vos visages, suit vos regards jusqu'à la fenêtre." },
    { type: "dialogue", texte: "Non.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Tom" },
    { type: "dialogue", texte: "Non, non, non. C'est quoi ça ?", personnage: "Josie" },
    { type: "dialogue", texte: "De la neige.", personnage: "Tom" },
    { type: "dialogue", texte: "Je VOIS que c'est de la neige. Depuis quand ?", personnage: "Josie" },
    { type: "dialogue", texte: "La nuit. On peut pas sortir pour l'instant.", personnage: "Tom" },
    { type: "dialogue", texte: "Pour l'instant. C'est-à-dire ?", personnage: "Josie" },
    { type: "narration", texte: "Personne ne répond. Parce que personne ne sait." },
  ],
  choices: [
    { label: "Le premier bilan", next: "premierBilan" }
  ]
},

{
  id: "premierBilan",
  lines: [
    { type: "narration", texte: "Vous ne savez pas encore combien de temps vous allez rester bloqués." },
    { type: "narration", texte: "Vous ne savez pas encore ce que ça fait aux gens, un espace fermé qui dure. À leurs silences. À leurs peurs. À ce qu'ils se doivent ou se cachent les uns aux autres." },
    { type: "narration", texte: "Pour l'instant il y a la neige. Le bois qui crépite. Le café qui refroidit." },
    { type: "narration", texte: "Et cinq personnes qui font semblant que ça va aller." },
  ],
  choices: [
    { label: "Fin Acte I", next: "recapActe1" }
  ]
},

// Acte II - Le lendemain matin

{
  id: "acte2Matin",
  lines: [
    { type: "narration", texte: "Le lendemain matin la neige est toujours là. Plus haute. Plus tranquille. Comme si elle s'était installée pour de bon." },
    { type: "narration", texte: "Vous vous retrouvez tous autour du café sans que personne l'ait vraiment décidé. Josie a déjà son téléphone en main." },
    { type: "dialogue", texte: "Bon. Quand ça se calme on peut aller faire une rando jusqu'au lac. Y'a aussi un marché artisanal samedi dans le village.", personnage: "Josie" },
    { type: "dialogue", texte: "On est samedi.", personnage: "Lucas" },
    { type: "dialogue", texte: "Le samedi d'après.", personnage: "Josie" },
    { type: "dialogue", texte: "On sera plus là le samedi d'après.", personnage: "Lucas" },
    { type: "dialogue", texte: "On sait pas combien de temps ça va durer.", personnage: "Josie" },
    { type: "narration", texte: "Un silence. Personne ne relève." },
    { type: "dialogue", texte: "De toute façon on est bien ici. Et puis j'ai mon igloo à construire.", personnage: "Tom" },
    { type: "dialogue", texte: "Ton igloo.", personnage: "Josie" },
    { type: "dialogue", texte: "J'ai dit que j'en ferais un. Une promesse c'est une promesse.", personnage: "Tom" },
    { type: "dialogue", texte: "T'as même pas de pelle.", personnage: "Josie" },
    { type: "dialogue", texte: "Je creuserai avec mes mains.", personnage: "Tom" },
    { type: "dialogue", texte: "T'es complètement.", personnage: "Josie" },
    { type: "narration", texte: "Elle finit pas sa phrase mais elle sourit. Tout le monde sourit. C'est fragile mais c'est là." },
    { type: "narration", texte: "Elise pose sa tasse." },
    { type: "dialogue", texte: "Y'a des placards qu'on a pas ouverts. Des jeux, peut-être des livres. On pourrait voir ce qu'il y a.", personnage: "Elise" },
    { type: "dialogue", texte: "Et le grenier ? Le proprio a dit qu'il y avait des affaires.", personnage: "Lucas" },
    { type: "dialogue", texte: "On peut regarder.", personnage: "Elise" },
    { type: "narration", texte: "C'est dit simplement, sans forcer l'enthousiasme. Elise ne force jamais rien. Elle propose, les gens suivent ou pas." },
    { type: "narration", texte: "Tu te retrouves à fouiller le placard du couloir avec elle. Les autres s'éparpillent dans le chalet." },
    { type: "dialogue", texte: "T'as bien dormi ?", personnage: "Elise" },
    { type: "dialogue", texte: "Pas trop mal. Toi ?", personnage: "Toi" },
    { type: "dialogue", texte: "Oui. J'aime dormir quand il neige. Le silence est différent.", personnage: "Elise" },
    { type: "narration", texte: "Tu la regardes. Elle dit ça en inspectant le contenu d'une étagère, naturellement, comme une évidence." },
    { type: "dialogue", texte: "T'as pas l'air inquiète.", personnage: "Toi" },
    { type: "dialogue", texte: "Je le suis peut-être. Mais s'inquiéter là maintenant change rien à la neige.", personnage: "Elise" },
    { type: "narration", texte: "Elle sort un vieux Scrabble d'une boite, le pose sur le sol, continue de chercher." },
    { type: "dialogue", texte: "T'as toujours été comme ça ?", personnage: "Toi" },
    { type: "dialogue", texte: "Comme quoi ?", personnage: "Elise" },
    { type: "dialogue", texte: "Aussi... posée.", personnage: "Toi" },
    { type: "narration", texte: "Elle réfléchit une seconde. Vraiment réfléchit, pas juste une politesse." },
    { type: "dialogue", texte: "Non. J'ai appris.", personnage: "Elise" },
    { type: "narration", texte: "Elle ne dit pas quand ni pourquoi. Tu ne demandes pas. Avec Elise tu sais qu'il y a toujours plus sous la surface, et qu'elle te le dira si elle en a envie." },
  ],
  choices: [
    { label: "L'après-midi", next: "acte2AprèsMidi" }
  ]
},

{
  id: "acte2AprèsMidi",
  lines: [
    { type: "narration", texte: "Le carton du grenier a tout changé. Une vieille console, des jeux poussiéreux, des manettes dont une avec un bouton coincé. Josie a déclaré tournoi officiel avant même que quelqu'un ait vérifié si ça marchait encore." },
    { type: "narration", texte: "Mais d'abord le déjeuner. Tom est en cuisine, Lucas l'a suivi naturellement." },
    { type: "narration", texte: "Tu les entends parler depuis le salon. Leurs voix qui se croisent, le bruit des casseroles. Tom et Lucas se sont trouvés comme ça, sans cérémonie, sans moment fondateur apparent. Un jour ils se parlaient juste poliment et puis un autre jour ils s'appelaient pour des trucs qui n'avaient rien à voir avec le groupe." },
    { type: "dialogue", texte: "Ça fait combien de temps toi et Elise ?", personnage: "Tom" },
    { type: "dialogue", texte: "Trois ans et demi. Presque quatre.", personnage: "Lucas" },
    { type: "dialogue", texte: "Ça se passe bien.", personnage: "Tom" },
    { type: "narration", texte: "C'est pas une question." },
    { type: "dialogue", texte: "Ouais. C'est bien. C'est stable.", personnage: "Lucas" },
    { type: "dialogue", texte: "Stable c'est bien.", personnage: "Tom" },
    { type: "dialogue", texte: "Toi et Alice.", personnage: "Lucas" },
    { type: "narration", texte: "Tom ne répond pas tout de suite. Le bruit d'une spatule contre la poêle." },
    { type: "dialogue", texte: "C'est compliqué à résumer.", personnage: "Tom" },
    { type: "dialogue", texte: "T'as pas besoin de résumer.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'était bien. C'est toujours bien d'une certaine façon. Juste pas de la même façon.", personnage: "Tom" },
    { type: "dialogue", texte: "Et ça te va ?", personnage: "Lucas" },
    { type: "narration", texte: "Un silence." },
    { type: "dialogue", texte: "Je gère.", personnage: "Tom" },
    { type: "narration", texte: "Lucas ne pousse pas. C'est ce qui fait qu'ils s'entendent bien, ces deux-là. Lucas sait quand s'arrêter." },
    { type: "narration", texte: "De ton côté Josie s'est laissée tomber à côté de toi sur le canapé." },
    { type: "dialogue", texte: "Regarde-les. Un qui stresse pour tout, l'autre qui stresse pour rien. Comment ils font pour s'entendre aussi bien ces deux-là.", personnage: "Josie" },
    { type: "dialogue", texte: "Les contraires s'attirent.", personnage: "Toi" },
    { type: "dialogue", texte: "Les contraires se supportent surtout. Les pareils s'attirent.", personnage: "Josie" },
    { type: "dialogue", texte: "Philosophe.", personnage: "Toi" },
    { type: "dialogue", texte: "J'ai mes moments.", personnage: "Josie" },
    { type: "narration", texte: "Elle regarde la cuisine une seconde." },
  ],
  choices: [
    {
      label: "Continuer",
      next: "acte2ApresMidiSuite",
      condition: (state: GameState) => state.relations.josie < 10
    },
    {
      label: "Continuer",
      next: "acte2ApresMidiJosie",
      condition: (state: GameState) => state.relations.josie >= 10
    }
  ]
},

// Scène pour la suite de l'après-midi si tu as une "mauvaise" relation avec Josie
{
  id: "acte2ApresMidiSuite",
  lines: [
    { type: "dialogue", texte: "Les garçons c'est vraiment un autre espèce.", personnage: "Josie" },
    { type: "dialogue", texte: "Développe.", personnage: "Toi" },
    { type: "dialogue", texte: "Regarde Lucas. Il a vérifié la météo quarante fois ce matin. Quarante. J'ai compté.", personnage: "Josie" },
    { type: "dialogue", texte: "Il est analytique.", personnage: "Toi" },
    { type: "dialogue", texte: "Il est stressé et il appelle ça être analytique.", personnage: "Josie" },
    { type: "dialogue", texte: "Et Tom c'est l'inverse.", personnage: "Toi" },
    { type: "dialogue", texte: "Tom il pourrait être bloqué sur une île déserte il te ferait un barbecue et il rigolerait.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pas forcément une mauvaise qualité.", personnage: "Toi" },
    { type: "dialogue", texte: "Non c'est même une très bonne qualité. Mais comment ces deux-là passent une soirée ensemble sans que l'un finisse par rendre l'autre fou je comprends pas.", personnage: "Josie" },
    { type: "dialogue", texte: "Peut-être qu'ils s'équilibrent.", personnage: "Toi" },
    { type: "dialogue", texte: "Ou peut-être que les garçons sont juste cons d'une façon différente selon les individus.", personnage: "Josie" },
    { type: "narration", texte: "Tu ris. Elle rit. C'est leger, facile, le genre de moment qui n'a pas besoin d'être plus que ce qu'il est." },
  ],
  choices: [
    { label: "Le tournoi", next: "acte2Tournoi", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        josie: state.relations.josie + 10
      }
    })}
  ]
},

// Scène pour la suite de l'après-midi si tu as une "bonne" relation avec Josie
{
  id: "acte2ApresMidiJosie",
  lines: [
    { type: "dialogue", texte: "Les garçons c'est vraiment une autre espèce.", personnage: "Josie" },
    { type: "dialogue", texte: "Développe.", personnage: "Toi" },
    { type: "dialogue", texte: "Regarde Lucas. Il a vérifié la météo quarante fois ce matin. Quarante. J'ai compté.", personnage: "Josie" },
    { type: "dialogue", texte: "Il est analytique.", personnage: "Toi" },
    { type: "dialogue", texte: "Il est stressé et il appelle ça être analytique.", personnage: "Josie" },
    { type: "dialogue", texte: "Et Tom dans tout ça.", personnage: "Toi" },
    { type: "dialogue", texte: "Tom il pourrait être bloqué sur une île déserte il te ferait un barbecue et il rigolerait.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pas une critique.", personnage: "Toi" },
    { type: "dialogue", texte: "Non c'est un constat.", personnage: "Josie" },
    { type: "narration", texte: "Elle dit ça avec un petit sourire. Tu la regardes une seconde." },
    { type: "dialogue", texte: "Tu lui en envoies beaucoup des piques pour quelqu'un qui fait juste des constats.", personnage: "Toi" },
    { type: "narration", texte: "Elle tourne la tête vers toi. Une fraction de seconde quelque chose passe sur son visage, rapide, avant que le sourire revienne." },
    { type: "dialogue", texte: "C'est affectueux.", personnage: "Josie" },
    { type: "dialogue", texte: "Ah.", personnage: "Toi" },
    { type: "dialogue", texte: "Quoi ah.", personnage: "Josie" },
    { type: "dialogue", texte: "Rien. Affectueux.", personnage: "Toi" },
    { type: "dialogue", texte: "Arrête.", personnage: "Josie" },
    { type: "dialogue", texte: "J'ai rien dit.", personnage: "Toi" },
    { type: "dialogue", texte: "T'as dit ah sur un ton.", personnage: "Josie" },
    { type: "dialogue", texte: "J'ai pas de ton.", personnage: "Toi" },
    { type: "narration", texte: "Elle te lance un regard qui veut tout dire puis elle reprend son téléphone en faisant semblant de chercher quelque chose. Elle sourit malgré elle. Tu fais pareil." },
  ],
  choices: [
    { label: "Le tournoi", next: "acte2Tournoi", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        josie: state.relations.josie + 10
      }
    })}
  ]
},
{
  id: "acte2Tournoi",
  lines: [
    { type: "narration", texte: "La console démarre au troisième essai. Elise a trouvé les manettes, les a rechargées avec un câble qui traînait dans le carton, et a installé tout le monde dans le salon avec une efficacité tranquille." },
    { type: "dialogue", texte: "Wii Sport Bowling. Les filles contre les garçons. L'équipe qui perd est aux ordres de l'autre pour la soirée.", personnage: "Josie" },
    { type: "dialogue", texte: "Aux ordres c'est-à-dire ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Cuisine, vaisselle, boissons. Rien d'illégal.", personnage: "Josie" },
    { type: "dialogue", texte: "Et moi ?", personnage: "Elise" },
    { type: "dialogue", texte: "Toi tu arbitres.", personnage: "Josie" },
    { type: "narration", texte: "La partie dure une heure. Une heure de piques, de cris, de manettes brandies comme des preuves. Lucas accuse régulièrement le matériel. Tom annonce des stratégies qu'il ne suit jamais. Les filles mènent presque depuis le début sans en faire un plat, ce qui énerve les garçons bien plus que si elles s'en étaient vantées." },
    { type: "narration", texte: "Dernière manche. Josie prend la manette. Elle ne dit rien, elle ne commente pas, elle lance." },
    { type: "narration", texte: "Strike." },
    { type: "dialogue", texte: "Les filles gagnent.", personnage: "Elise" },
    { type: "narration", texte: "Elle dit ça du même ton qu'elle aurait dit il pleut. Josie pose la manette et se retourne vers Alice." },
    { type: "dialogue", texte: "Je savais.", personnage: "Josie" },
    { type: "dialogue", texte: "Tu savais pas.", personnage: "Toi" },
    { type: "dialogue", texte: "Je savais.", personnage: "Josie" },
    { type: "narration", texte: "Vous vous regardez et vous riez toutes les deux en même temps." },
    { type: "dialogue", texte: "Alors. Le pari.", personnage: "Josie" },
    { type: "dialogue", texte: "On se souvient du pari.", personnage: "Tom" },
    { type: "dialogue", texte: "Un thé. Un et demi sucre.", personnage: "Josie" },
    { type: "dialogue", texte: "Un et demi c'est pas une mesure.", personnage: "Lucas" },
    { type: "dialogue", texte: "Et pourtant.", personnage: "Josie" },
    { type: "narration", texte: "Tom et Lucas se lèvent sans se plaindre. Elise range les manettes." },
  ],
  choices: [
    { label: "Le soir", next: "acte2Soir" }
  ]
},
{
  id: "acte2Soir",
  lines: [
    { type: "narration", texte: "Pendant que les filles s'installent dans le salon, Tom et Lucas s'occupent du thé et du repas du soir. Tu les entends depuis le couloir." },
    { type: "dialogue", texte: "T'as fait exprès de perdre.", personnage: "Lucas" },
    { type: "dialogue", texte: "J'ai pas fait exprès.", personnage: "Tom" },
    { type: "dialogue", texte: "Tom.", personnage: "Lucas" },
    { type: "dialogue", texte: "J'ai pas fait exprès.", personnage: "Tom" },
    { type: "dialogue", texte: "T'as mis sept sur ton dernier lancer alors que t'avais fait strike sur les deux précédents.", personnage: "Lucas" },
    { type: "dialogue", texte: "Les manettes dévient à gauche.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est ce que je dis depuis le début.", personnage: "Lucas" },
    { type: "narration", texte: "Un silence. Puis Tom rit, discrètement, dos tourné." },
    { type: "narration", texte: "Lucas ouvre le placard pour sortir ce qu'il faut. Il s'arrête. Il regarde l'intérieur une seconde, puis se penche vers le bas, vérifie les autres étagères." },
    { type: "dialogue", texte: "Tom.", personnage: "Lucas" },
    { type: "dialogue", texte: "Mmh.", personnage: "Tom" },
    { type: "dialogue", texte: "On a pas autant de stock que je pensais.", personnage: "Lucas" },
    { type: "narration", texte: "Tom s'approche. Il regarde. Il referme le placard sans changer d'expression." },
    { type: "dialogue", texte: "On dit rien aux autres ce soir.", personnage: "Tom" },
    { type: "dialogue", texte: "On dit rien ? Tom si la neige continue on va se retrouver.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je sais.", personnage: "Tom" },
    { type: "dialogue", texte: "La route est coupée, on a pas de réseau, si ça dure encore deux jours.", personnage: "Lucas" },
    { type: "dialogue", texte: "Lucas.", personnage: "Tom" },
    { type: "dialogue", texte: "Je dis juste que.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je sais ce que tu dis. Et t'as pas tort. Mais ce soir tout le monde va bien, la journée s'est bien passée. On les laisse cette nuit et demain matin on fait le point ensemble. Tous les cinq.", personnage: "Tom" },
    { type: "narration", texte: "Lucas regarde le placard fermé. Il passe la main dans ses cheveux." },
    { type: "dialogue", texte: "Et si demain c'est pire ?", personnage: "Lucas" },
    { type: "dialogue", texte: "Alors on gère pire. Mais ce soir on gère ce soir.", personnage: "Tom" },
    { type: "narration", texte: "Un silence. Lucas hoche la tête lentement, pas vraiment convaincu mais calmé. Tom lui pose une main sur l'épaule une seconde puis se retourne vers les plaques." },
    { type: "dialogue", texte: "Un et demi sucre c'est vraiment pas une mesure.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est ce que j'ai dit.", personnage: "Lucas" },
  ],
  choices: [
    { label: "La nuit", next: "acte2Nuit1" }
  ]
},
{
  id: "acte2Nuit1",
  lines: [
    { type: "narration", texte: "La chambre est dans le noir quand tu montes. Josie est allongée, elle regarde son téléphone, la lumière blanche sur son visage." },
    { type: "dialogue", texte: "Bonne soirée.", personnage: "Josie" },
    { type: "dialogue", texte: "Ouais.", personnage: "Toi" },
    { type: "narration", texte: "Tu te prépares, tu te glisses dans ton lit. Un silence confortable. Dehors la neige continue." },
    { type: "dialogue", texte: "Tom il va bien tu crois ?", personnage: "Josie" },
    { type: "narration", texte: "Tu tournes la tête vers elle. Elle regarde toujours son téléphone. C'est une question bizarre venant de Josie. Josie qui lui envoie des piques, qui le charrie, qui l'appelle incapable de s'inquiéter pour quoi que ce soit. Ce n'est pas le genre de question qu'elle pose d'habitude." },
    { type: "dialogue", texte: "Pourquoi il irait pas bien ?", personnage: "Toi" },
    { type: "dialogue", texte: "Je sais pas. Il gère tout, il s'occupe de tout. Des fois je me demande si quelqu'un s'occupe de lui.", personnage: "Josie" },
    { type: "narration", texte: "C'est dit légèrement. Trop légèrement peut-être." },
  ],
choices: [
  {
    label: "Rien entre nous, c'est fini.",
    next: "acte2Nuit1Froide",
  },
  {
    label: "Je sais pas trop où on en est.",
    next: "acte2Nuit1Chaude",
    condition: (state: GameState) => state.relations.Tom >= 35
  }
]
},

{
  id: "acte2Nuit1Froide",
  lines: [
    { type: "dialogue", texte: "Tom gère. C'est ce qu'il fait.", personnage: "Toi" },
    { type: "dialogue", texte: "Ouais.", personnage: "Josie" },
    { type: "narration", texte: "Elle pose son téléphone. Un silence." },
    { type: "dialogue", texte: "Vous êtes vraiment finis tous les deux ou c'est juste en pause ?", personnage: "Josie" },
    { type: "dialogue", texte: "On est finis. Ça fait cinq ans.", personnage: "Toi" },
    { type: "dialogue", texte: "Cinq ans c'est long pour être finis.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Toi" },
    { type: "dialogue", texte: "Je dis juste.", personnage: "Josie" },
    { type: "narration", texte: "Elle rallume son téléphone. Tu regardes le plafond. La question de Josie tourne dans ta tête. Josie qui pique Tom sur tout, qui commente chacun de ses choix avec un sourire en coin. Et qui ce soir demande si quelqu'un s'occupe de lui." },
    { type: "dialogue", texte: "Bonne nuit.", personnage: "Josie" },
    { type: "dialogue", texte: "Bonne nuit.", personnage: "Toi" },
  ],
  choices: [
    { label: "Dormir", next: "acte2Jour2" }
  ]
},

{
  id: "acte2Nuit1Chaude",
  lines: [
    { type: "dialogue", texte: "Tom a toujours été comme ça. Il a pas besoin qu'on s'occupe de lui.", personnage: "Toi" },
    { type: "dialogue", texte: "Tout le monde a besoin qu'on s'occupe de lui.", personnage: "Josie" },
    { type: "dialogue", texte: "Même Lucas ?", personnage: "Toi" },
    { type: "dialogue", texte: "Surtout Lucas. Lucas a besoin qu'on lui dise que tout va bien toutes les vingt minutes.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pour ça qu'Elise est parfaite pour lui.", personnage: "Toi" },
    { type: "dialogue", texte: "Elise est parfaite pour tout le monde. C'est son problème.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pas un problème.", personnage: "Toi" },
    { type: "dialogue", texte: "Non c'est une qualité. Mais des fois je me dis qu'elle devrait être un peu plus parfaite pour elle-même.", personnage: "Josie" },
    { type: "narration", texte: "Tu acquiesces. C'est juste. C'est le genre de chose qu'on sait sur Elise sans jamais le formuler." },
    { type: "dialogue", texte: "Et Tom c'est l'inverse. Il se prend pas la tête pour lui mais il se prend la tête pour tout le monde.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est ce qui fait qu'il est bien.", personnage: "Toi" },
    { type: "dialogue", texte: "Ouais.", personnage: "Josie" },
    { type: "narration", texte: "Un silence. Elle regarde le plafond." },
    { type: "dialogue", texte: "Vous étiez bien ensemble vous deux.", personnage: "Josie" },
    { type: "dialogue", texte: "C'était il y a longtemps.", personnage: "Toi" },
    { type: "dialogue", texte: "Cinq ans c'est pas si longtemps. Pourquoi ça s'est arrêté ?", personnage: "Josie" },
    { type: "narration", texte: "La question est posée simplement, comme si elle était évidente. Trop simplement. Josie ne pose pas ce genre de question sans raison." },
    { type: "dialogue", texte: "C'était pas le bon moment.", personnage: "Toi" },
    { type: "dialogue", texte: "C'est ce qu'on dit quand on sait pas vraiment pourquoi.", personnage: "Josie" },
    { type: "dialogue", texte: "Ou quand c'est vrai.", personnage: "Toi" },
    { type: "dialogue", texte: "Il est passé à autre chose tu crois ?", personnage: "Josie" },
    { type: "narration", texte: "Tu la regardes. Elle fixe toujours le plafond, l'air de rien. Mais c'est la deuxième fois ce soir qu'elle revient sur Tom. Josie qui lui envoie des piques, qui le charrie depuis des années. Josie qui demande s'il est passé à autre chose." },
    { type: "dialogue", texte: "Je sais pas. Je crois.", personnage: "Toi" },
    { type: "dialogue", texte: "Tu crois ou t'espères ?", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Toi" },
    { type: "dialogue", texte: "C'est une vraie question.", personnage: "Josie" },
    { type: "narration", texte: "Tu ne réponds pas tout de suite. Tu cherches une réponse honnête et tu n'es pas sûre de l'avoir." },
   { type: "dialogue", texte: "Et toi, Tom ?", personnage: "Toi" },
    { type: "narration", texte: "Un silence. Puis Josie rit, court, dans le noir." },
    { type: "dialogue", texte: "Tom il sait même pas faire un dessin correct.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est pas une réponse.", personnage: "Toi" },
    { type: "dialogue", texte: "Non non jamais. Bonne nuit.", personnage: "Josie" },
    { type: "narration", texte: "Tu restes dans le noir avec la question sans réponse et l'impression très nette que Josie en avait une, elle." },
  ],
  choices: [
    { label: "Dormir", next: "acte2Jour2", effect: (state: GameState) => ({
      ...state,
      relations: {
        ...state.relations,
        josie: state.relations.josie + 5
      }
    })}
  ]
},

{
  id: "acte2Jour2",
  lines: [
    { type: "narration", texte: "Tu descends la première. Le chalet est froid. Pas un froid inconfortable, juste ce froid de matin qui dit que la cheminée n'a pas tourné depuis plusieurs heures." },
    { type: "narration", texte: "Tu regardes le bois. Il n'en reste plus." },
    { type: "narration", texte: "Par la fenêtre la tempête est toujours là. Plus dense que la veille. Le ciel et la neige font la même couleur, une masse blanche et uniforme sans horizon." },
    { type: "narration", texte: "Lucas descend cinq minutes après toi. Il voit le bois en premier, puis la fenêtre, puis son téléphone." },
    { type: "dialogue", texte: "J'ai plus de réseau.", personnage: "Lucas" },
    { type: "dialogue", texte: "Depuis quand ?", personnage: "Toi" },
    { type: "dialogue", texte: "Cette nuit.", personnage: "Lucas" },
    { type: "narration", texte: "Il pose son téléphone sur la table et reste debout, les bras croisés, à regarder dehors. Elise descend, voit vos visages, voit la fenêtre, s'assoit sans un mot." },
    { type: "narration", texte: "Au tour de Tom. Il fait le tour de la situation en dix secondes. Le bois. La fenêtre. Vos têtes." },
    { type: "dialogue", texte: "Café d'abord.", personnage: "Tom" },
    { type: "dialogue", texte: "Tom on a plus de bois et plus de réseau.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je sais. Café d'abord.", personnage: "Tom" },
    { type: "narration", texte: "Josie descend à moitié endormie, s'arrête sur la dernière marche." },
    { type: "dialogue", texte: "Il fait froid.", personnage: "Josie" },
    { type: "dialogue", texte: "Plus de bois.", personnage: "Lucas" },
    { type: "dialogue", texte: "Plus de réseau.", personnage: "Tom" },
    { type: "dialogue", texte: "Zuper.", personnage: "Josie" },
    { type: "narration", texte: "Elle s'assoit. Vous buvez votre café en silence. Dehors la tempête ne montre aucun signe de s'arrêter." },
    { type: "narration", texte: "C'est Tom qui parle en premier." },
    { type: "dialogue", texte: "Le cabanon est à cinq cents mètres. Y'a une tenue dans le placard de l'entrée, le proprio avait dit qu'elle était là pour ça. J'y vais chercher du bois.", personnage: "Tom" },
    { type: "dialogue", texte: "Dans cette tempête.", personnage: "Josie" },
    { type: "dialogue", texte: "C'est cinq cents mètres. Ça va aller.", personnage: "Tom" },
    { type: "dialogue", texte: "C'est cinq cents mètres dans un blizzard.", personnage: "Lucas" },
    { type: "dialogue", texte: "J'ai vu la neige hier soir avant d'aller dormir. Je savais qu'on en serait là ce matin. C'est moi qui y vais.", personnage: "Tom" },
    { type: "narration", texte: "Il dit ça simplement, sans héroïsme. Comme quelqu'un qui assume une décision qu'il a déjà prise." },
  ],
  choices: [
    { label: "OK. On t'attend ici.", next: "acte2BoisTomSeul" },
    { label: "Attends. On cherche une autre solution d'abord.", next: "acte2AutreSolution" },
  ]
},
{
  id: "acte3Faim",
  lines: [
    { type: "narration", texte: "Ça fait deux jours. Peut-être trois. Les journées se ressemblent trop pour compter avec précision." },
    { type: "narration", texte: "Le rationnement c'était un mot au début. Un plan sur une feuille d'Lucas, des portions calculées, quelque chose de raisonnable. Et puis la réalité c'est autre chose. C'est se lever le matin avec ce creux qui est là avant même d'avoir ouvert les yeux. C'est regarder les autres manger leur portion en faisant attention à pas compter leurs bouchées. C'est les conversations qui raccourcissent parce que parler demande de l'énergie qu'on n'a plus vraiment." },
    { type: "narration", texte: "Les gestes sont plus lents. Les silences plus lourds. Josie ne fait plus de piques. Lucas ne sort plus sa feuille. Elise reste assise près du feu des heures sans lire, sans parler, juste là." },
    { type: "narration", texte: "Il faut trouver quelque chose. De la nourriture ou un moyen d'appeler l'extérieur. Les deux si possible. Personne ne le dit à voix haute mais tout le monde le sait depuis ce matin." },
    { type: "narration", texte: "C'est Lucas qui se lève en premier." },
    { type: "dialogue", texte: "Y'a une vieille radio dans le grenier. Militaire je crois. Ancienne.", personnage: "Lucas" },
    { type: "dialogue", texte: "Elle marche ?", personnage: "Josie" },
    { type: "dialogue", texte: "Pas comme ça. Il manque un condensateur, du fil de cuivre, une pile de rechange. Mais si j'ai ces trois trucs je peux faire quelque chose.", personnage: "Lucas" },
    { type: "narration", texte: "Tout le monde regarde Tom." },
    { type: "dialogue", texte: "Le cabanon. Y'a une vieille télé là-bas, j'en suis presque sûr. Et des tiroirs avec des outils.", personnage: "Tom" },
    { type: "dialogue", texte: "J'y vais avec toi.", personnage: "Lucas" },
    { type: "dialogue", texte: "T'as pas de tenue Lucas.", personnage: "Tom" },
    { type: "dialogue", texte: "On peut faire quelque chose avec les draps, les manteaux superposés.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'est cinq cents mètres dans un blizzard avec des draps.", personnage: "Tom" },
    { type: "dialogue", texte: "Je sais ce que c'est.", personnage: "Lucas" },
    { type: "dialogue", texte: "Non personne d'entre vous sait ce que c'est dehors.", personnage: "Tom" },
    { type: "dialogue", texte: "Alors t'y vas pas non plus.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Tom" },
    { 
      type: "dialogue", 
      texte: "Non. T'es parti seul dans la nuit sans prévenir personne. Et là tu veux recommencer.", 
      personnage: "Josie",
      condition: (state: GameState) => state.flags.TomChercherDuBoisEnCachette
    },
    { 
      type: "dialogue", 
      texte: "Non. T'as failli te perdre là-dedans la dernière fois et t'avais la tenue. Là t'envisages de repartir dans le même état.", 
      personnage: "Josie",
      condition: (state: GameState) => state.flags.TomChercherDuBoisAvecAccordDeToutLeMonde
    },
    { type: "dialogue", texte: "La situation est différente.", personnage: "Tom" },
    { type: "dialogue", texte: "En quoi ?", personnage: "Josie" },
    { type: "dialogue", texte: "Parce que là si on fait rien on va vraiment avoir un problème.", personnage: "Tom" },
    { type: "narration", texte: "Josie ouvre la bouche. Elle la referme. Elle sait qu'il a raison et ça la rend encore plus en colère." },
    { type: "narration", texte: "Tom regarde Lucas." },
    { type: "dialogue", texte: "Si tu viens tu suis exactement ce que je dis. Dès que tu sens plus tes mains tu me le dis.", personnage: "Tom" },
    { type: "dialogue", texte: "Compris.", personnage: "Lucas" },
  ],
  choices: [
    {
      label: "Les laisser partir ensemble.",
      next: "acte3DepartTomLucas",
      condition: (state: GameState) => state.relations.Tom >= 30
    },
    {
      label: "Le laisser partir seul.",
      next: "acte3DepartTomSeul",
    }
  ]
}










];

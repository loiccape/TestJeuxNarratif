import { GameState } from "../../../class/GameState"
import type { Scene } from "../../../class/Scene"

export const TomLucasTv    : Scene[] = [
    {
  id: "acte3DepartTomLucas",
  lines: [
    { type: "narration", texte: "Vingt minutes pour équiper Lucas." },
    { type: "narration", texte: "Deux pulls superposés, un manteau par-dessus, des chaussettes en triple épaisseur, un drap noué autour des épaules et dans le dos comme une cape. Tom vérifie chaque couche avec le sérieux de quelqu'un qui sait ce qu'il y a dehors. Lucas reste immobile et le laisse faire." },
    { type: "dialogue", texte: "Les mains.", personnage: "Tom" },
    { type: "dialogue", texte: "J'ai mes gants.", personnage: "Lucas" },
    { type: "dialogue", texte: "Mets les miens par-dessus.", personnage: "Tom" },
    { type: "dialogue", texte: "Tom.", personnage: "Lucas" },
    { type: "dialogue", texte: "Mets-les.", personnage: "Tom" },
    { type: "narration", texte: "Lucas met les gants. Il ressemble à quelque chose entre un fantôme et un bonhomme de neige. Dans d'autres circonstances ce serait drôle." },
    { type: "narration", texte: "Elise lui noue l'écharpe une deuxième fois, plus serrée. Elle fait ça les yeux baissés, les lèvres serrées. Lucas pose la main sur la sienne." },
    { type: "dialogue", texte: "On fait vite.", personnage: "Lucas" },
    { type: "dialogue", texte: "Dès que tu sens plus tes mains tu me le dis.", personnage: "Tom" },
    { type: "dialogue", texte: "Tu l'as déjà dit.", personnage: "Lucas" },
    { type: "dialogue", texte: "Je le redis.", personnage: "Tom" },
    { type: "dialogue", texte: "Vous devriez pas y aller.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Tom" },
    { type: "dialogue", texte: "Ni l'un ni l'autre. Regardez-vous. Vous avez pas mangé depuis deux jours, vous avez plus de forces et vous allez sortir dans ça.", personnage: "Josie" },
    { type: "dialogue", texte: "Si on fait rien on a de toute façon un problème.", personnage: "Tom" },
    { type: "dialogue", texte: "Et si vous revenez pas on a un problème encore plus grand.", personnage: "Josie" },
    { type: "narration", texte: "Tom la regarde. Elle soutient le regard. C'est Lucas qui parle." },
    { type: "dialogue", texte: "On revient.", personnage: "Lucas" },
    { type: "dialogue", texte: "T'en sais rien.", personnage: "Josie" },
    { type: "dialogue", texte: "Non. Mais on revient quand même.", personnage: "Lucas" },
    { type: "narration", texte: "Josie ouvre la bouche. Elle la referme. Elise lui prend le bras doucement." },
    { type: "narration", texte: "Tom ouvre la porte. Le froid entre d'un coup. Lucas passe devant lui, les épaules rentrées dans les couches de tissu." },
    { type: "narration", texte: "La porte se referme." },
    { type: "narration", texte: "Vous restez là toutes les trois." },
  ],
  choices: [
    { label: "Attendre", next: "acte3AttenteTomLucas" }
  ]
},
{
  id: "acte3AttenteTomLucas",
  lines: [
    { type: "narration", texte: "Une heure." },
    { type: "narration", texte: "Vous faites semblant de ne pas compter. Elise a repris son livre, elle tourne les pages sans les lire. Josie marche, s'assoit, se relève, marche encore." },
    { type: "narration", texte: "Deux heures." },
    { type: "narration", texte: "Josie a arrêté de marcher. Elle est debout face à la fenêtre, les bras croisés, et elle fixe la neige comme si elle pouvait la forcer à s'arrêter." },
    { type: "narration", texte: "Tu ne sais pas où te mettre." },
  ],
  choices: [
    {
      label: "Aller vers Josie.",
      next: "acte3AttenteJosieLucas",
    },
    {
      label: "Rester avec Elise.",
      next: "acte3AttenteEliseLucas",
    },
    {
      label: "Rester seule avec ses pensées.",
      next: "acte3AttenteSeulle",
    }
  ]
},

{
  id: "acte3AttenteJosieLucas",
  lines: [
    { type: "narration", texte: "Tu t'approches d'elle. Elle ne se retourne pas." },
    { type: "dialogue", texte: "Ça fait combien de temps.", personnage: "Josie" },
    { type: "dialogue", texte: "Deux heures à peu près.", personnage: "Toi" },
    { type: "dialogue", texte: "Pour cinq cents mètres.", personnage: "Josie" },
    { type: "dialogue", texte: "Ils cherchent dans les tiroirs aussi. Ça prend du temps.", personnage: "Toi" },
    { type: "narration", texte: "Elle hoche la tête. Elle ne te regarde toujours pas." },
    { type: "dialogue", texte: "La dernière fois Tom a mis cinquante minutes tout seul. Là c'est deux heures avec Lucas qui peut presque pas bouger tellement il est emmitouflé.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Toi" },
    { type: "dialogue", texte: "Je calcule c'est tout. Je calcule parce que si je calcule pas je vais devenir folle.", personnage: "Josie" },
    { type: "narration", texte: "Un silence." },
    { type: "dialogue", texte: "J'aurais dû les empêcher.", personnage: "Josie" },
    { type: "dialogue", texte: "Tu pouvais pas les empêcher.", personnage: "Toi" },
    { type: "dialogue", texte: "J'aurais pu essayer plus fort.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie. Tom aurait trouvé un moyen d'y aller quoi qu'on dise. Tu le sais.", personnage: "Toi" },
    { type: "narration", texte: "Elle tourne la tête vers toi. Quelque chose dans son visage cède un peu." },
    { type: "dialogue", texte: "Ouais.", personnage: "Josie" },
    { type: "dialogue", texte: "Ouais je sais.", personnage: "Josie" },
    { type: "narration", texte: "Elle se rassoit. Pas par terre cette fois, sur le canapé. Elle ramène ses genoux contre elle." },
    { type: "dialogue", texte: "Reste là.", personnage: "Josie" },
    { type: "narration", texte: "Tu t'assois à côté d'elle. Vous regardez la fenêtre ensemble." },
    { type: "narration", texte: "Trois heures." },
  ],
  choices: [
    { label: "Continuer à attendre", next: "acte3JosieExplose", effect: (state: GameState) => ({
      ...state,
      relations: { ...state.relations, josie: state.relations.josie + 10 }
    })}
  ]
},

{
  id: "acte3AttenteEliseLucas",
  lines: [
    { type: "narration", texte: "Elise est assise à la table, le livre fermé devant elle. Elle a arrêté de faire semblant de lire." },
    { type: "dialogue", texte: "T'arrives à pas paniquer comment.", personnage: "Toi" },
    { type: "dialogue", texte: "Qui te dit que je panique pas.", personnage: "Elise" },
    { type: "dialogue", texte: "T'as l'air calme.", personnage: "Toi" },
    { type: "dialogue", texte: "J'ai l'air calme. C'est différent.", personnage: "Elise" },
    { type: "narration", texte: "Elle pose les mains à plat sur la table. Tu vois ses doigts. Ils sont légèrement crispés." },
    { type: "dialogue", texte: "T'as peur pour Lucas.", personnage: "Toi" },
    { type: "dialogue", texte: "J'ai peur pour les deux.", personnage: "Elise" },
    { type: "dialogue", texte: "Mais Lucas surtout.", personnage: "Toi" },
    { type: "narration", texte: "Elle ne répond pas. C'est une réponse." },
    { type: "dialogue", texte: "Il est plus solide qu'il en a l'air.", personnage: "Toi" },
    { type: "dialogue", texte: "Je sais. C'est pour ça que je l'aime.", personnage: "Elise" },
    { type: "narration", texte: "Elle dit ça simplement, sans sentimentalisme. Comme un fait établi." },
    { type: "dialogue", texte: "Il va revenir.", personnage: "Toi" },
    { type: "dialogue", texte: "Oui.", personnage: "Elise" },
    { type: "narration", texte: "Elle regarde ses mains. Elle les desserre lentement." },
    { type: "dialogue", texte: "Merci d'être venue t'asseoir là.", personnage: "Elise" },
    { type: "narration", texte: "Trois heures." },
  ],
  choices: [
    { label: "Continuer à attendre", next: "acte3JosieExplose", effect: (state: GameState) => ({
      ...state,
      relations: { ...state.relations, Elise: state.relations.Elise + 10 }
    })}
  ]
},

{
  id: "acte3AttenteSeulle",
  lines: [
    { type: "narration", texte: "Tu t'assois près du feu. Tu regardes les flammes." },
    { type: "narration", texte: "Tu penses à Tom qui s'habille méthodiquement chaque fois. Qui vérifie les gants d'Lucas. Qui ferme la porte sans se retourner." },
    { type: "narration", texte: "Tu penses à ce que ça fait d'être quelqu'un comme ça. Quelqu'un qui part." },
    { type: "narration", texte: "Trois heures." },
    { type: "narration", texte: "Josie a arrêté de marcher. Elise a fermé son livre. Tout le monde attend dans sa tête." },
  ],
  choices: [
    { label: "Continuer à attendre", next: "acte3JosieExplose" }
  ]
},

{
  id: "acte3JosieExplose",
  lines: [
    { type: "narration", texte: "C'est Josie qui craque la première." },
    { type: "narration", texte: "Pas progressivement. D'un coup." },
    { type: "dialogue", texte: "C'est quoi ce bordel.", personnage: "Josie" },
    { type: "narration", texte: "Sa voix remplit tout le chalet." },
    { type: "dialogue", texte: "Josie.", personnage: "Elise" },
    { type: "dialogue", texte: "Non. Non. Trois heures et demie. Trois heures et demie pour cinq cents mètres. On les a laissés partir avec des DRAPS. Des draps et des pulls et on attend là comme si c'était normal.", personnage: "Josie" },
    { type: "dialogue", texte: "On pouvait pas faire autrement.", personnage: "Toi" },
    { type: "dialogue", texte: "On aurait pu leur dire non. On aurait pu trouver autre chose. On aurait pu.", personnage: "Josie" },
    { type: "dialogue", texte: "Quoi ? On aurait pu faire quoi exactement ?", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais pas. N'importe quoi. Autre chose que les regarder partir dans le blizzard avec une tenue de fortune en se disant que ça allait aller.", personnage: "Josie" },
    { type: "narration", texte: "Elle se lève, fait les cent pas, s'arrête, repart." },
    { type: "dialogue", texte: "J'ai faim. J'ai froid. Lucas est dehors avec des draps autour des épaules et Tom il pense qu'il peut tout régler tout seul comme toujours et moi j'en peux plus.", personnage: "Josie" },
    { type: "dialogue", texte: "Josie.", personnage: "Elise" },
    { type: "dialogue", texte: "J'en peux plus Elise. Vraiment. J'en peux plus de ce chalet, de cette neige, de faire semblant que ça va aller.", personnage: "Josie" },
    { type: "narration", texte: "Sa voix se casse sur le dernier mot. Elle s'arrête au milieu de la pièce, les bras le long du corps, et elle respire fort." },
    { type: "narration", texte: "Elise se lève. Elle va vers elle. Elle la prend par les épaules." },
    { type: "dialogue", texte: "Je sais.", personnage: "Elise" },
    { type: "narration", texte: "Josie pose le front sur son épaule. Elise lui tient les bras. Elles restent comme ça." },
    { type: "narration", texte: "La porte s'ouvre." },
  ],
  choices: [
    { label: "Continuer", next: "acte3RetourLucasMalEnPoint" }
  ]
},{
  id: "acte3RetourLucasMalEnPoint",
  lines: [
    { type: "narration", texte: "Tom entre en premier. Lucas est accroché à son épaule, les jambes qui fonctionnent encore mais à peine, le corps penché vers lui comme si la gravité avait décidé de tirer plus fort sur lui que sur les autres." },
    { type: "narration", texte: "Les draps sont trempés. Le manteau aussi. Lucas a les lèvres bleues." },
    { type: "dialogue", texte: "Le feu. Maintenant.", personnage: "Tom" },
    { type: "narration", texte: "Tu prends Lucas de l'autre côté sans qu'on te le demande. Elise est déjà là, elle a repoussé le fauteuil, elle écarte les bûches pour faire de la place juste devant les flammes." },
    { type: "narration", texte: "Vous l'installez aussi près que possible. Elise commence à enlever les couches mouillées, les draps, le manteau, le pull du dessus. Ses gestes sont rapides et précis." },
    { type: "dialogue", texte: "Lucas. Regarde-moi.", personnage: "Elise" },
    { type: "narration", texte: "Il lève les yeux. Ils sont là mais pas tout à fait." },
    { type: "dialogue", texte: "T'as mal quelque part ?", personnage: "Elise" },
    { type: "dialogue", texte: "Les mains.", personnage: "Lucas" },
    { type: "dialogue", texte: "C'est bon signe. Garde-les près du feu.", personnage: "Elise" },
    { type: "narration", texte: "Tu t'accroupis de l'autre côté d'Lucas. Tu frottes doucement ses bras à travers le pull qui reste, tu surveilles sa respiration. Elise te regarde une seconde, elle hoche la tête. Vous gérez." },
    { type: "narration", texte: "Tom a posé ce qu'il portait sur la table. Le câble, les piles, quelque chose arraché d'une vieille télé. Il s'est redressé. Il regarde Lucas. Puis il regarde par la fenêtre." },
    { type: "narration", texte: "Il se tourne vers Josie." },
    { type: "dialogue", texte: "Josie. Viens là.", personnage: "Tom" },
    { type: "narration", texte: "Elle s'approche. Ils s'écartent un peu, vers l'entrée, loin du feu." },
    { type: "narration", texte: "Tu entends pas tout. Des bribes. Les mots village, lumière, trois kilomètres. La voix de Josie qui monte. Celle de Tom qui reste basse." },
    { type: "narration", texte: "Tu continues à t'occuper d'Lucas. Elise aussi. Mais vous écoutez toutes les deux." },
    { type: "dialogue", texte: "Non.", personnage: "Josie" },
    { type: "narration", texte: "Plus fort cette fois." },
    { type: "dialogue", texte: "Tom écoute-moi.", personnage: "Josie" },
    { type: "dialogue", texte: "Regarde-moi.", personnage: "Josie" },
    { type: "narration", texte: "Silence." },
    { type: "dialogue", texte: "Tom je t'en supplie regarde-moi.", personnage: "Josie" },
    { type: "narration", texte: "La porte s'ouvre." },
    { type: "narration", texte: "Le froid entre." },
    { type: "narration", texte: "La porte se referme." },
    { type: "narration", texte: "Tu lèves les yeux vers Josie. Elle est debout au milieu de la pièce, les bras le long du corps, à regarder la porte fermée. Elle ne crie pas. Elle ne pleure pas." },
    { type: "narration", texte: "Lucas pose sa main sur ta main. Il a vu." },
    { type: "dialogue", texte: "Il va revenir.", personnage: "Lucas" },
    { type: "narration", texte: "Il dit ça très bas. Pour Josie ou pour lui-même tu ne sais pas." },
    { type: "narration", texte: "Elise pose une main dans le dos de Josie sans rien dire." },
  ],
  choices: [
    { label: "Continuer", next: "acte3RadioLucas" }
  ]
},
{
  id: "acte3RadioLucas",
  lines: [
    { type: "narration", texte: "Lucas s'est endormi près du feu. Sa respiration s'est régularisée, la couleur revient lentement dans son visage. Elise est assise à côté de lui, elle le regarde dormir." },
    { type: "narration", texte: "Tu t'assois à côté de Josie. Elle n'a pas bougé de l'endroit où la porte s'est refermée." },
    { type: "dialogue", texte: "Josie.", personnage: "Toi" },
    { type: "narration", texte: "Elle se retourne. Ses yeux sont secs mais il y a quelque chose dedans qui brûle." },
    { type: "dialogue", texte: "Quel con.", personnage: "Josie" },
    { type: "dialogue", texte: "Qu'est-ce qui s'est passé.", personnage: "Toi" },
    { type: "dialogue", texte: "Il a vu un village depuis le cabanon. Trois kilomètres vers le sud. Il m'a dit que si personne venait de l'extérieur on allait crever. Exactement comme ça. On allait crever. Et donc il est parti.", personnage: "Josie" },
    { type: "narration", texte: "Tu restes sans voix." },
    { type: "dialogue", texte: "Il a porté Lucas sur deux cents mètres parce que la tenue a lâché. Deux cents mètres. Et il est quand même rentré, il a posé les affaires sur la table, et il est reparti.", personnage: "Josie" },
    { type: "dialogue", texte: "Trois kilomètres.", personnage: "Toi" },
    { type: "dialogue", texte: "Dans son état. Le ventre vide depuis deux jours. Après ce qu'il vient de faire.", personnage: "Josie" },
    { type: "narration", texte: "Tu regardes la porte. Tu penses à la lampe frontale qui s'éloigne dans le noir." },
    { type: "dialogue", texte: "J'ai essayé de le retenir. J'ai dit son prénom trois fois. Il a même pas tourné la tête.", personnage: "Josie" },
    { type: "narration", texte: "Elle regarde la porte à son tour." },
    { type: "dialogue", texte: "Et s'il revient pas.", personnage: "Josie" },
    { type: "narration", texte: "Elle dit ça tout bas. Toute la colère est tombée d'un coup." },
    { type: "narration", texte: "Tu te lèves." },
  ],
  choices: [
    {
      label: "Sortir et appeler Tom.",
      next: "acte3AppelerTom"
    },
    {
      label: "Chercher de quoi s'équiper pour le rejoindre.",
      next: "acte3ChercherEquipement"
    }
  ]
},

{
  id: "acte3AppelerTom",
  lines: [
    { type: "narration", texte: "Tu ouvres la porte." },
    { type: "narration", texte: "Le froid te prend d'un coup. La neige jusqu'aux genoux dès le premier pas. Tu lèves les yeux." },
    { type: "narration", texte: "Tu la vois. Sa lampe frontale. Un point orange dans le noir, qui bouge, qui s'éloigne vers le sud." },
    { type: "dialogue", texte: "Tom !", personnage: "Toi" },
    { type: "narration", texte: "Ta voix part dans le vent. Elle revient sur toi, étouffée, comme avalée par la neige." },
    { type: "dialogue", texte: "Tom !", personnage: "Toi" },
    { type: "narration", texte: "La lumière continue d'avancer. Elle ne s'arrête pas. Elle ne se retourne pas." },
    { type: "narration", texte: "Tu cries encore. Et encore. Ta gorge brûle, tes pieds s'enfoncent, le froid rentre partout à la fois." },
    { type: "narration", texte: "La lumière devient plus petite." },
    { type: "narration", texte: "Plus petite." },
    { type: "narration", texte: "Et puis elle disparaît derrière la ligne d'arbres." },
    { type: "narration", texte: "Josie est dans l'encadrement de la porte derrière toi. Elle a vu." },
    { type: "narration", texte: "Tu rentres. Tu fermes la porte. Tu t'appuies dessus une seconde, le dos contre le bois froid." },
  ],
  choices: [
    { label: "Attendre", next: "acte3AttenteFinale" }
  ]
},

{
  id: "acte3ChercherEquipement",
  lines: [
    { type: "narration", texte: "Tu commences à fouiller." },
    { type: "narration", texte: "Les placards de l'entrée, les étagères, le grenier. Tu cherches quelque chose, n'importe quoi, qui pourrait ressembler à une tenue suffisante pour sortir là-dedans." },
    { type: "narration", texte: "Il y a des pulls. Des manteaux normaux. Des chaussures de randonnée pas prévues pour ça. Des gants fins." },
    { type: "narration", texte: "Tu étales tout sur le sol. Tu regardes." },
    { type: "narration", texte: "Tu sais. Tu sais que c'est pas assez. Tu sais qu'Lucas avait la meilleure tenue possible avec ce qui restait et que ça n'a pas tenu deux cents mètres." },
    { type: "narration", texte: "Josie s'accroupit à côté de toi. Elle regarde les affaires étalées par terre." },
    { type: "dialogue", texte: "C'est pas assez.", personnage: "Josie" },
    { type: "dialogue", texte: "Je sais.", personnage: "Toi" },
    { type: "dialogue", texte: "T'aurais la même tenue qu'Lucas et ce serait pas assez.", personnage: "Josie" },
    { type: "narration", texte: "Tu laisses retomber un pull entre tes mains. Tu regardes les affaires étalées par terre." },
    { type: "narration", texte: "Il n'y a rien à faire." },
    { type: "narration", texte: "Rien que d'attendre." },
  ],
  choices: [
    { label: "Attendre", next: "acte3AttenteFinale" }
  ]
},
{
  id: "acte3AttenteFinale",
  lines: [
    { type: "narration", texte: "Tu regardes Lucas dormir." },
    { type: "narration", texte: "Tu regardes la radio sur la table. Les pièces qu'il a rapportées. Le câble, les piles, les composants arrachés de la télé." },
    { type: "narration", texte: "Tu te lèves." },
    { type: "dialogue", texte: "Il faut réveiller Lucas.", personnage: "Toi" },
    { type: "dialogue", texte: "Non.", personnage: "Elise" },
    { type: "dialogue", texte: "Elise.", personnage: "Toi" },
    { type: "dialogue", texte: "Il a les mains qui ont failli geler. Il est épuisé. Il a besoin de dormir.", personnage: "Elise" },
    { type: "dialogue", texte: "Tom est reparti.", personnage: "Toi" },
    { type: "narration", texte: "Elise lève les yeux." },
    { type: "dialogue", texte: "Quoi.", personnage: "Elise" },
    { type: "dialogue", texte: "Il a vu un village depuis le cabanon. Trois kilomètres. Il est reparti chercher des secours.", personnage: "Josie" },
    { type: "narration", texte: "Elise les regarde toutes les deux. Elle regarde la porte. Elle regarde Lucas." },
    { type: "dialogue", texte: "Dans quel état il était.", personnage: "Elise" },
    { type: "dialogue", texte: "Il avait encore la tenue.", personnage: "Toi" },
    { type: "dialogue", texte: "Il venait de porter Lucas sur deux cents mètres.", personnage: "Elise" },
    { type: "dialogue", texte: "Je sais.", personnage: "Toi" },
    { type: "narration", texte: "Elise ferme les yeux une seconde. Quand elle les rouvre quelque chose a changé dans son visage." },
    { type: "dialogue", texte: "La radio c'est notre seule option.", personnage: "Toi" },
    { type: "dialogue", texte: "Il peut pas réparer dans cet état.", personnage: "Elise" },
    { type: "dialogue", texte: "Il peut nous guider. Nous expliquer quoi faire. On le laisse au chaud et on fait ce qu'il dit.", personnage: "Toi" },
    { type: "narration", texte: "Elise regarde Lucas. Elle regarde ses mains toujours rouges près du feu." },
    { type: "dialogue", texte: "Si on le réveille et qu'il va pas bien.", personnage: "Elise" },
    { type: "dialogue", texte: "Elise. Tom est parti seul dans un blizzard à trois kilomètres d'ici après avoir porté ton copain sur deux cents mètres. On a plus le choix.", personnage: "Josie" },
    { type: "narration", texte: "Un long silence." },
    { type: "narration", texte: "Elise pose la main sur l'épaule d'Lucas." },
    { type: "dialogue", texte: "Lucas.", personnage: "Elise" },
    { type: "narration", texte: "Il ouvre les yeux lentement." },
    { type: "dialogue", texte: "Quoi.", personnage: "Lucas" },
    { type: "dialogue", texte: "Tom est reparti. Seul. Il essaie de rejoindre un village à pied.", personnage: "Elise" },
    { type: "narration", texte: "Lucas reste immobile une seconde." },
    { type: "dialogue", texte: "Combien de kilomètres.", personnage: "Lucas" },
    { type: "dialogue", texte: "Trois environ.", personnage: "Toi" },
    { type: "narration", texte: "Il ferme les yeux. Il les rouvre." },
    { type: "dialogue", texte: "Donnez-moi la radio.", personnage: "Lucas" },
    { type: "dialogue", texte: "Lucas t'as pas à.", personnage: "Elise" },
    { type: "dialogue", texte: "Elise. Donnez-moi la radio.", personnage: "Lucas" },
    { type: "narration", texte: "Sa voix est faible mais elle ne laisse pas de place à la discussion. Elise regarde ses mains une dernière fois. Elle se lève et va chercher la radio." },
    { type: "dialogue", texte: "Je vais pas pouvoir assembler. Mais je peux vous dire quoi faire.", personnage: "Lucas" },
    { type: "dialogue", texte: "On fait ce que tu dis.", personnage: "Toi" },
    { type: "narration", texte: "Il hoche la tête. Il regarde les pièces sur la table." },
    { type: "dialogue", texte: "Le câble rouge en premier. Vous voyez le câble rouge ?", personnage: "Lucas" },
  ],
  choices: [
    { label: "Continuer", next: "acte3RadioBrisee" }
  ]
},

{
  id: "acte3RadioBrisee",
  lines: [
    { type: "narration", texte: "Vous suivez ses instructions pendant une heure." },
    { type: "narration", texte: "Il parle, vous faites. Les mains qui tremblent, les composants trop petits pour des doigts qui ont froid, les connexions qu'Lucas doit regarder à deux fois parce que sa vue est floue." },
    { type: "narration", texte: "Josie soude un fil avec un briquet et un trombone. Elise tient les pièces en place. Toi tu fais ce qu'Lucas dit mot pour mot." },
    { type: "narration", texte: "Et puis Lucas dit essayez." },
    { type: "narration", texte: "Josie appuie sur le bouton d'émission." },
    { type: "narration", texte: "Un grésillement. Un souffle. Et puis rien." },
    { type: "dialogue", texte: "Encore.", personnage: "Lucas" },
    { type: "narration", texte: "Josie réessaie. Le grésillement. Le souffle. Rien." },
    { type: "dialogue", texte: "Le condensateur est peut-être mal soudé. Le joint à gauche.", personnage: "Lucas" },
    { type: "narration", texte: "Elise retouche. Josie réessaie." },
    { type: "narration", texte: "Cette fois il y a quelque chose. Pas grand chose. Un craquement, une fréquence qui cherche, qui glisse." },
    { type: "dialogue", texte: "Continuez sur cette fréquence.", personnage: "Lucas" },
    { type: "dialogue", texte: "Ici chalet secteur nord, est-ce que quelqu'un nous reçoit.", personnage: "Josie" },
    { type: "narration", texte: "Le silence." },
    { type: "dialogue", texte: "Ici chalet secteur nord, on est cinq, enfin quatre là, on a besoin d'aide.", personnage: "Josie" },
    { type: "narration", texte: "Le silence encore." },
    { type: "narration", texte: "Et puis." },
    { type: "dialogue", texte: "Ici équipe secours secteur nord. On vous reçoit mal mais on vous reçoit. Donnez votre position.", personnage: "Radio" },
    { type: "narration", texte: "Josie ferme les yeux une seconde." },
    { type: "narration", texte: "Elise pose la tête sur l'épaule d'Lucas." },
    { type: "narration", texte: "Toi tu regardes la porte." },
    { type: "narration", texte: "Tu penses à une lampe frontale qui disparaît dans le noir." },
  ],
  choices: [
    { label: "Continuer", next: "acte3Secours2" }
  ]
},{
  id: "acte3Secours2",
  lines: [
    { type: "narration", texte: "Ils arrivent quarante minutes plus tard." },
    { type: "narration", texte: "Quatre hommes en combinaison orange, des lampes puissantes, du matériel. Ils entrent dans le chalet et la première chose que tu remarques c'est qu'ils ont l'air de savoir où ils vont." },
    { type: "dialogue", texte: "On vous cherchait déjà.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Comment.", personnage: "Josie" },
    { type: "dialogue", texte: "Quelqu'un a signalé votre position depuis un village au sud il y a environ deux heures. Il avait plus de forces pour continuer mais il a trouvé quelqu'un avec un téléphone.", personnage: "Secouriste" },
    { type: "narration", texte: "Personne ne dit rien pendant quelques secondes." },
    { type: "dialogue", texte: "Il est où maintenant.", personnage: "Josie" },
    { type: "dialogue", texte: "On l'a récupéré au village. Il est en hypothermie légère, épuisé, mais il est conscient. L'équipe deux est avec lui.", personnage: "Secouriste" },
    { type: "narration", texte: "Josie pose la main sur le mur. Comme si ses jambes avaient besoin d'aide pour tenir." },
    { type: "dialogue", texte: "Il est conscient.", personnage: "Josie" },
    { type: "dialogue", texte: "Oui madame.", personnage: "Secouriste" },
    { type: "narration", texte: "Elle hoche la tête. Une fois. Elle ne dit plus rien." },
    { type: "narration", texte: "Les secouristes sortent des barres énergétiques, de l'eau chaude, des couvertures de survie. L'un d'eux s'accroupit devant Lucas, vérifie ses mains, sa température." },
    { type: "dialogue", texte: "Celui-là on le transporte en priorité.", personnage: "Secouriste" },
    { type: "dialogue", texte: "Je marche.", personnage: "Lucas" },
    { type: "dialogue", texte: "On vous transporte quand même.", personnage: "Secouriste" },
    { type: "narration", texte: "Elise aide Lucas à se lever. Elle ne le lâche pas." },
    { type: "narration", texte: "Tu prends ta veste. Tu regardes le chalet une dernière fois. Le feu qui brûle encore, la radio en pièces sur la table, les couvertures, les tasses vides, les cinq jours qui restent dans chaque coin de la pièce." },
    { type: "narration", texte: "Tu sors." },
    { type: "narration", texte: "La neige a arrêté de tomber." },
  ],
  choices: [
    { label: "Continuer", next: "acte3FinDeux" }
  ]
},
{
  id: "acte3FinDeux",
  lines: [
    { type: "narration", texte: "Un an." },
    { type: "narration", texte: "Lucas a mis trois semaines à récupérer. Ses mains ont gardé une sensibilité bizarre au froid pendant deux mois, il portait des gants pour aller chercher son café le matin. Il n'en parle plus mais Elise surveille encore, parfois, la façon dont il tient sa tasse." },
    { type: "narration", texte: "Elise et lui se sont fiancés en juin. C'était une petite cérémonie, juste eux et leurs familles et vous quatre. Josie a pleuré. Elle dit que c'était à cause du vin." },
    { type: "narration", texte: "Josie va mieux. C'est difficile à quantifier autrement. Elle fait moins de piques. Pas parce qu'elle a changé, plutôt parce que certaines choses ont trouvé leur place et qu'elle n'a plus besoin de tourner autour." },
    { type: "narration", texte: "Toi tu as repris ta vie. Le travail, les habitudes, les petites choses qui remplissent les journées. Parfois tu te réveilles la nuit et tu penses au froid. Pas avec peur. Juste le souvenir physique, les doigts, la gorge, le creux dans le ventre." },
    { type: "narration", texte: "Et Tom." },
    { type: "narration", texte: "Tom a passé cinq jours à l'hôpital. Il est sorti en disant que le café était mauvais et que les infirmières méritaient une augmentation. Il a repris le travail deux semaines après. Il cuisine toujours aussi bien." },
    { type: "narration", texte: "Vous vous êtes vus plusieurs fois depuis. Des dîners, des soirées, les choses normales de la vie normale. Ça ressemble à avant. Avec quelque chose en plus que vous n'arrivez pas tout à fait à nommer." },
    { type: "narration", texte: "Aujourd'hui c'est un mardi ordinaire." },
    { type: "narration", texte: "Ton téléphone sonne." },
    { type: "narration", texte: "Tom." },
    { type: "narration", texte: "Tu décroches." },
    { type: "dialogue", texte: "On n'aurait pas oublié d'organiser nos ptites vacances avec les copains ?", personnage: "Tom" },
    { type: "narration", texte: "Tu regardes le plafond." },
    { type: "narration", texte: "Tu souris." },
  ],
  choices: [
    { label: "Fin", next: "finDeux" }
  ]
},

{
  id: "finDeux",
  lines: [
    { type: "narration", texte: "FIN" },
    { type: "narration", texte: "Merci d'avoir joué. Ce jeu est encore en développement, certaines routes ne sont pas encore finalisées. Mais vous êtes allés au bout de ce qui existe pour l'instant." },
    { type: "narration", texte: "Merci les ptit gars." },
  ],
  choices: []
}
]
// src/components/RecapDisplay.tsx

import type { GameState } from "../class/GameState"
import type { Recap } from "../data/recaps"

interface Props {
  recap: Recap
  gameState: GameState
  onContinue: (next: string) => void
}

export function RecapDisplay({ recap, gameState, onContinue }: Props) {
  const lignesVisibles = recap.lines.filter(line => line.condition(gameState))

  return (
    <div className="scene">
      <div className="lines">
        {lignesVisibles.map((line, index) => (
          <p key={index} className="narration">{line.texte}</p>
        ))}
      </div>
      <div className="choices">
        <button onClick={() => onContinue(recap.next)}>Continuer</button>
      </div>
    </div>
  )
}
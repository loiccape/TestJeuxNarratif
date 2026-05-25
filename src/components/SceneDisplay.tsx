import type { GameState } from "../class/GameState"
import { Scene, Line } from "../class/Scene"

interface Props {
  scene: Scene
  gameState: GameState
  onChoice: (next: string, effect?: (state: GameState) => GameState) => void
}

function renderLine(line: Line, index: number) {
  if (line.type === "narration") {
    return (
      <p key={index} className="narration">
        {line.texte}
      </p>
    )
  }

  if (line.type === "dialogue") {
    return (
      <p key={index} className="dialogue">
        <span className="personnage">{line.personnage} : </span>
        <span className="texte">"{line.texte}"</span>
      </p>
    )
  }
}

export function SceneDisplay({ scene, gameState, onChoice }: Props) {
  const choicesVisibles = scene.choices.filter(choice => 
    choice.condition ? choice.condition(gameState) : true
  )

  return (
    <div className="scene">
      <div className="lines">
        {scene.lines.map((line, index) => renderLine(line, index))}
      </div>
      <div className="choices">
        {choicesVisibles.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoice(choice.next, choice.effect)}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  )
}
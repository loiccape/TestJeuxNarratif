// src/class/Scene.ts

import type { GameState } from "./GameState"

export type LineType = "narration" | "dialogue"

export class Line {

  type: LineType
  texte: string
  personnage?: string
  condition?: (state: GameState) => boolean

  constructor(type: LineType, texte: string, personnage?: string, condition?: (state: GameState) => boolean) {
    this.type = type
    this.texte = texte
    if (personnage) this.personnage = personnage
    if (condition) this.condition = condition

  }
}

export class Choice {
  label: string
  next: string
  effect?: (state: GameState) => GameState  // ← remplace () => void
  condition?: (state: GameState) => boolean

  constructor(label: string, next: string, effect?: (state: GameState) => GameState, condition?: (state: GameState) => boolean) {
    this.label = label
    this.next = next
    if (effect) this.effect = effect
    if (condition) this.condition = condition 
}
}

export class Scene {

  id:string
  lines: Line[]
  choices: Choice[]

  constructor(id: string, lines: Line[], choices: Choice[]  ) {
    this.id = id
    this.lines = lines
    this.choices = choices
  }
}
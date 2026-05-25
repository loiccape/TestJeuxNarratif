import { useState, useEffect } from "react"
import { SceneDisplay } from "./components/SceneDisplay"
import { RecapDisplay } from "./components/RecapDisplay"
import { scenes } from "./data/scenes"
import { recaps } from "./data/recaps"
import { GameState, initialState } from "./class/GameState"
import { TomLucasTv } from "./data/alt/acteIII/TomLucasTv"
import { scenesTomBois } from "./data/alt/acteIITomBois/scenesTombois"
import { scenesTomBoisCachette } from "./data/alt/acteIITomBois/scenesTomboiscachette"
import { acte3TomTvSeul } from "./data/alt/acteIII/TomTvSeul"

const toutesLesScenes = [...scenes, ...scenesTomBois, ...scenesTomBoisCachette, ...acte3TomTvSeul, ...TomLucasTv]

function App() {
  const [gameState, setGameState] = useState<GameState>(initialState)

  useEffect(() => {
    
    console.log("Relations :", gameState.relations)
    console.log("Accord :", gameState.flags.TomChercherDuBoisAvecAccordDeToutLeMonde)
    console.log("Cachette :", gameState.flags.TomChercherDuBoisEnCachette)
  }, [gameState])

  const handleChoice = (next: string, effect?: (state: GameState) => GameState) => {
    setGameState(prev => {
      const newState = effect ? effect(prev) : prev
      return { ...newState, sceneId: next }
    })
  }

  const handleContinue = (next: string) => {
    setGameState(prev => ({ ...prev, sceneId: next }))
  }

  const recap = recaps.find(r => r.id === gameState.sceneId)
  if (recap) return (
    <RecapDisplay recap={recap} gameState={gameState} onContinue={handleContinue} />
  )

  const scene = toutesLesScenes.find(s => s.id === gameState.sceneId)
  if (!scene) return <p>Scène introuvable : {gameState.sceneId}</p>

  return (
    <SceneDisplay scene={scene} gameState={gameState} onChoice={handleChoice} />
  )
}

export default App
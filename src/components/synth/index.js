import { useEffect } from 'react'
import { useAppContext } from '../../context'
import { DuoSynth, FMSynth } from 'tone'
import Pad from './pad'

const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridGap: 30
}

const Synth = () => {
  const { state } = useAppContext()

  const synth = state.theme === 'light'
    ? new FMSynth()
    : new DuoSynth()

  synth.toDestination()

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [state])

  const handleKeydown = e => playSound(e.key)

  const playSound = targetLetter => {
    const foundNote = state.notes.find(({letter}) => letter === targetLetter)
    if (foundNote) {
      synth.triggerAttackRelease(foundNote.note, '8n')
    }
  }

  return (
    <div style={styles}>
      {state.notes.map(note => (
        <Pad {...note} playSound={playSound} key={note.letter}>{note}</Pad>
      ))}
    </div>
  )
}

export default Synth
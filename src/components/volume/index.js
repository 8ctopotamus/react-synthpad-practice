import { Donut } from 'react-dial-knob'
import { useAppContext } from '../../context'

const Dial = () => {
  const { state: { volume, theme }, dispatch } = useAppContext()
  return (
    <Donut 
      diameter={100}
      min={-12}
      max={12}
      step={1}
      value={!!volume ? volume : 0}
      onValueChange={value => dispatch({ type: 'CHANGE_VOLUME', payload: value })}
      style={{textAlign: 'center'}}
      ariaLabelledBy="volume"
    >
      <label id="volume" style={{color: theme === 'light' ? 'black' : 'white'}}>volume</label>
    </Donut>
  )
}

export default Dial
import { useAppContext } from '../../context'
import thesaurusScales from '../../utils/thesaurusScales'

const categories = Object.entries(thesaurusScales).reduce((prev, curr) => {
  const [ key, value ] = curr
  if (prev[value.theme]) {
    prev[value.theme].push(key)
  } else {
    prev[value.theme] = [key]
  }
  return prev
}, {})


const ScaleSelector = () => {
  const { dispatch } = useAppContext()

  const handleChange = e => {
    dispatch({ type: 'CHANGE_SCALE', payload: e.target.value })
    e.target.blur()
  }

  return (
    <select onChange={handleChange}>
      {Object.entries(categories).map(cat => {
        const [ label, scales ] = cat
        return (
          <optgroup label={label} key={label}>
            {Object.values(scales)
              .map(val => <option value={val} key={val}>{val}</option>)}
          </optgroup>
        )
      })}
    </select>
  )
}

export default ScaleSelector

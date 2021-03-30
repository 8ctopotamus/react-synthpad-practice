import styled from 'styled-components'
import { useAppContext } from '../../context'
import thesaurusScales from '../../utils/thesaurusScales'

const Select = styled.select`
  display: block;
  margin: 0 auto 25px;
  width: 50%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  background: transparent;
  border: 2px solid black;
  
  ${({ theme }) => theme === 'light' ? `
    color: black;
    border-color: black;
  ` : `
    color: white;
    border-color: white;
  `}
`

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
  const { state: { theme }, dispatch } = useAppContext()

  const handleChange = e => {
    dispatch({ type: 'CHANGE_SCALE', payload: e.target.value })
    e.target.blur()
  }

  return (
    <Select theme={theme} onChange={handleChange}>
      {Object.entries(categories).map(cat => {
        const [ label, scales ] = cat
        return (
          <optgroup label={label} key={label}>
            {Object.values(scales)
              .map(val => <option value={val} key={val}>{val}</option>)}
          </optgroup>
        )
      })}
    </Select>
  )
}

export default ScaleSelector

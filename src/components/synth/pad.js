import styled from 'styled-components'

const Button = styled.button`
  height: 100px;
  width: 100%;
  background: ${({color}) => color};
`

const Pad = ({ letter, note, color, playSound}) => (
  <Button color={color} onClick={() => playSound(letter)}>
    {note} ({letter})
  </Button>
)

export default Pad
import styled from 'styled-components'
import { darken } from 'polished'
import useKeypress from "../../hooks/useKeypress";

const Button = styled.button`
  width: 100%;
  background: ${({color}) => color};
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 20px;
  position: relative;
  transition: all .1s ease;
  box-shadow: 0px 9px 0px ${({color}) => darken(.1, color)}, 0px 9px 25px rgba(0, 0, 0, .7);
  border-radius: 8px;
  &:active {
    box-shadow: 0px 3px 0px ${({color}) => darken(.1, color)}, 0px 1px 2px rgba(0, 0, 0, .9);
    position: relative;
    top: 6px;
  }
  ${({ isPressed }) => isPressed && `
    box-shadow: 0px 3px 0px ${({color}) => darken(.1, color)}, 0px 1px 2px rgba(0, 0, 0, .9);
    position: relative;
    top: 6px;
  `}
`

const Pad = ({ letter, note, color, playSound}) => {
  const isPressed = useKeypress(letter)
  return (
    <Button color={color} onClick={() => playSound(letter)} isPressed={isPressed}>
      {note} ({letter})
    </Button>
  )
}

export default Pad
import styled from 'styled-components'
import { useAppContext } from '../../context'

const Layout = styled.div`
  background: ${({ theme }) => theme === 'light' ? '#bbb' : '#000'};
  height: 100vh;
  display: grid;
  place-items: center;
`

export default ({ children }) => {
  const { state: { theme } } = useAppContext()

  return <Layout theme={theme}>{ children }</Layout>
}


import styled from 'styled-components'
import { useAppContext } from '../../context'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`

const Layout = styled.div`
  background: ${({ theme }) => theme === 'light' ? '#bbb' : '#1F2041'};
  height: 100vh;
  display: grid;
  place-items: center;
`

export default ({ children, headerComponents }) => {
  const { state: { theme } } = useAppContext()

  return <Layout theme={theme}>
    <div>
      <Header>{headerComponents}</Header>
      { children }
    </div>
  </Layout>
}


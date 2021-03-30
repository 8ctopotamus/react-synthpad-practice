import { AppContextProvider } from './context'
import Layout from './components/layout'
import ScaleSelector from './components/scale-selector'
import Synth from './components/synth'
import Volume from './components/volume'

function App() {
  return (
    <AppContextProvider>
      <Layout headerComponents={(
        <>
          <ScaleSelector />
          <Volume />
        </>
      )}>
        <Synth />
      </Layout>
    </AppContextProvider>
  );
}

export default App;

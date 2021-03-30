import { AppContextProvider } from './context'
import Layout from './components/layout'
import ScaleSelector from './components/scale-selector'
import Synth from './components/synth'

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <ScaleSelector />
        <Synth />
      </Layout>
    </AppContextProvider>
  );
}

export default App;

import './App.css'
import Header from '@/components/header'
import Button from '@/components/button'

function App() {

  return (
    <>
      <Header />
      <div className='wrapper'>
        <Button children="Voir la carte" />
        <Button children="Suivre mon parcours" />
        <Button children="Signaler des déchets sauvages" />
      </div>
    </>
  )
}

export default App
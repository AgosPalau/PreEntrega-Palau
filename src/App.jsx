import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"PROXIMAMENTE"}/>
    </div>
  )
}

export default App
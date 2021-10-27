import "./Estilos.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ItemListContainer from "./Components/ItemListContainer"
import Counter from "./Components/ItemCount.js"

function App() {
  return (
    <>
      <Header />
      <ItemListContainer />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
import {Container} from "./app-styles"
import { Button } from "./components/button"
import {Link} from "react-router-dom"

function App() {

  return (
    <Container>

      <header>
        <img src="https://github.com/tiagoamrein.png" alt="" />
        <h1>Tiago Santos</h1>
      </header>
    <div>
      <Button  title= "Instagram"/>
      <Button  title= "Linkedin"/>
      <Button  title= "Github"/>
    </div>

 </Container>
  )
}

export default App

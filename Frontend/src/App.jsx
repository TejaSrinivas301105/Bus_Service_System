import './App.css'
import Home from './Pages/Home'
import {useRoutes} from 'react-router';
import Routes from './Pages/Routes';
import Queries from './Pages/Queries';
function App() {
  function CustomRoute(){
      const elements = useRoutes([
        {
          path:"/Home",
          element:<Home/>
        },{
          path:"/Routes",
          element:<Routes/>
        },{
          path:"/queries",
          element:<Queries/>
        }
    ])
    return elements;
  }
  return (
    <>
      <CustomRoute/>
    </>
  )
}

export default App

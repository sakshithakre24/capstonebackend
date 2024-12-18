import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import NewJob from './pages/newJob'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="/register" element = {<Register />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/home" element = {<Home />} />
      <Route path="/newJob" element = {<NewJob />} />
      <Route path="/editJob/:id" element = {<NewJob />} />
      

    </Routes>
    
    </BrowserRouter>
  )
}

export default App


//  /login or /register both the above form we want to kept in seperate router for that we can use
// npm i react-router-dom
// import above  import {BrowserRouter,Routes,route} from 'react-router-dom'
// create one another folder pages and create 2 files login.jsx and register.jsx init
//
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom'

// layout and pages
import RootLayout from './layouts/RootLayout'
import Hero from './pages/Hero'
import Bookings from './pages/Bookings'
import NotFound from './pages/NotFound'
import Done from './pages/Done'

// router adn routes
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path = "/" element = { <RootLayout/> } >
      <Route index element = { <Hero/>} />
      <Route path = "bookings" element = { <Bookings/> } />
      <Route path = "notfound" element = { <NotFound/> } />
      <Route path = 'done' element = { <Done/> } />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router = {router} />
  )
}

export default App

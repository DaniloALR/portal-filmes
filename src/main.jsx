import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import Home from './pages/Home'
import MovieDetailPage from './pages/MovieDetailPage'
import MovieListPage from './pages/MovieListPage'
import MovieByGenrePage from './pages/MovieByGenrePage'
import PageNotFound from './pages/PageNotFound'
import GenreListPage from './pages/GenreListPage'
import Contato from './pages/Contato'
import Favoritos from './pages/Favoritos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path: "/movies", element: <MovieListPage/>},
      {path: "/movies/:id", element: <MovieDetailPage/>},
      {path: "/genero", element: <GenreListPage/>},
      {path: "/genero/:id", element: <MovieByGenrePage/>},
      {path: "/configuracoes", element: <h1>Configurações</h1>},
      {path: "/contato", element: <Contato/>},
      {path: "/favoritos", element: <Favoritos/>},
      {path: "*", element: <PageNotFound/>},
    ]
  },
  {
    path: ''
  }   
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)


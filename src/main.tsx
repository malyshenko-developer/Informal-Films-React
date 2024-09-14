import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './routes/HomePage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.tsx'
import { CssBaseline } from '@mui/material'
import FilmPage, { movieInfoLoader } from './routes/FilmPage.tsx'
import Root from './routes/Root.tsx'
import { AuthProvider } from './contexts/auth.tsx'
import { HomePageInfoProvider } from './contexts/home-page-info.tsx'

const router = createBrowserRouter([
  {
    path: '/Informal-Films-React/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/Informal-Films-React/',
        element: <HomePage />
      },
      {
        path: '/Informal-Films-React/film/:filmId',
        element: <FilmPage />,
        loader: movieInfoLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <AuthProvider>
      <HomePageInfoProvider>
        <RouterProvider router={router} /> 
      </HomePageInfoProvider>  
    </AuthProvider>   
  </React.StrictMode>
)

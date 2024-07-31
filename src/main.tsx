import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './routes/HomePage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.tsx'
import { CssBaseline } from '@mui/material'
import FilmPage, { loader } from './routes/FilmPage.tsx'
import Root from './routes/Root.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'film/:filmId',
        element: <FilmPage />,
        loader
      }
    ]
  },
  {
    path: 'film/:filmId',
    element: <FilmPage />,
    loader
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />      
  </React.StrictMode>,
)

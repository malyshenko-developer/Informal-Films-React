import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './routes/HomePage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.tsx'
import { CssBaseline } from '@mui/material'
import FilmPage, { movieInfoLoader } from './routes/FilmPage.tsx'
import Root from './routes/Root.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

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
]);

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

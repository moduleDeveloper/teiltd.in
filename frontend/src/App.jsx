import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import { ROUTES } from '@/lib/routes';

/** The site is a single marketing page today (all nav items scroll to a section on
 * Home); this is still wired through React Router proper so a second page is a
 * one-line addition later instead of a rewrite. */
const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

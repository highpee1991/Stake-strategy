import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './features/ui/Home';
import AppLayoout from './features/ui/AppLayout';
import BankrollUI from './features/bankroll/BankrollUI';
import UnitUI from './features/sessions/displayStakeUnitCalculation/UnitUI';

const router = createBrowserRouter([
  {
    element: <AppLayoout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/calculate/bankroll', element: <BankrollUI /> },
      { path: '/unit', element: <UnitUI /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

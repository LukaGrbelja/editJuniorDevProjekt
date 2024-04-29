import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import rootRoute from './Components/Root';

const router = createBrowserRouter([
	rootRoute
]);

function App(): JSX.Element {

	return (
		<RouterProvider router={router} />
	)
}

export default App;
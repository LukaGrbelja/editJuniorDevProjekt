import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import rootRoute from './Components/Root';
import UserContextProvider from './Contexts/UserContext';

const router = createBrowserRouter([
	rootRoute
]);

function App(): JSX.Element {

	return (
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	)
}

export default App;
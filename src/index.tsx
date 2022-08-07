import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { Home } from './pages';
import { GlobalStyle } from './components';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

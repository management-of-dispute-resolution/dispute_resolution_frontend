import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from '../../hok/AuthProvider';

import { Layout } from '../Layout/Layout';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import DisputesPage from '../Pages/DisputesPage/DisputesPage';

export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/disputes" element={<DisputesPage />} />
					<Route path="/notfound" element={<PageNotFound />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

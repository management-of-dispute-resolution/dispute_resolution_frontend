import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthProvider } from '../../hok/AuthProvider';

import { Layout } from '../Layout/Layout';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import DisputesPage from '../Pages/DisputesPage/DisputesPage';
import CreateDisputePage from '../Pages/CreateDisputePage/CreateDisputePage';

export default function App() {
	const navigate = useNavigate();

	const handleCreateDispute = () => {
		navigate('/create-dispute');
	};

	return (
		<AuthProvider>
			<Routes>
				<Route
					path="/"
					element={<Layout handleCreateDispute={handleCreateDispute} />}
				>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/disputes" element={<DisputesPage />} />
					<Route path="/disputes/:id" element={<LoginPage />} />
					<Route path="/create-dispute" element={<CreateDisputePage />} />
					<Route path="/notfound" element={<PageNotFound />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

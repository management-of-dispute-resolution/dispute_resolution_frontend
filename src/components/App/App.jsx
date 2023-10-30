import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import { RequireAuth } from '../../hok/RequireAuth';
import { DisputesPage } from '../Pages/DisputesPage/DisputesPage';
import CreateDisputePage from '../Pages/CreateDisputePage/CreateDisputePage';
import CheckLogin from '../Pages/CheckLogin/CheckLogin';
import { EditDisputePage } from '../Pages/EditDisputePage/EditDisputePage';
import DisputePage from '../Pages/DisputePage/DisputePage';
// import { useAuth } from '../../hook/useAuth';

export default function App() {
	const navigate = useNavigate();

	const handleCreateDispute = () => {
		navigate('/create-dispute');
	};

	return (
		<Routes>
			<Route
				path="/"
				element={<Layout handleCreateDispute={handleCreateDispute} />}
			>
				<Route index element={<CheckLogin />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/disputes"
					element={
						<RequireAuth>
							<DisputesPage />
						</RequireAuth>
					}
				/>
				<Route
					path="/disputes/:id"
					element={
						<RequireAuth>
							<DisputePage />
						</RequireAuth>
					}
				/>
				<Route
					path="/create-dispute"
					element={
						<RequireAuth>
							<CreateDisputePage />
						</RequireAuth>
					}
				/>
				<Route
					path="/edit-dispute"
					element={
						<RequireAuth>
							<EditDisputePage />
						</RequireAuth>
					}
				/>
				<Route path="/notfound" element={<PageNotFound />} />
			</Route>
		</Routes>
	);
}

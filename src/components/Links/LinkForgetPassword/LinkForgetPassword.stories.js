import { BrowserRouter } from 'react-router-dom';
import LinkForgetPassword from './LinkForgetPassword';

export default {
	title: 'Dispute_Resolution/Links/LinkForgetPassword',
	component: LinkForgetPassword,
};

export const Default = () => (
	<BrowserRouter>
		<LinkForgetPassword />
	</BrowserRouter>
);

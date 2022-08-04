import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Page from '@components/Page';
import AirplaneTickets from '@features/airplane-tickets/ui';
import React from 'react';

const cnMainPage = cn('MainPage');

const MainPage: React.FC = () => {
	return (
		<Page title="Idea Platform Frontend Test - bandrw">
			<Grid container className={cnMainPage()} justifyContent="center">
				<AirplaneTickets />
			</Grid>
		</Page>
	);
};

export default MainPage;

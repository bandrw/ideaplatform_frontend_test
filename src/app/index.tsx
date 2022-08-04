import './styles/index.scss';

import MainPage from '@pages/MainPage';
import QueryClientProvider from '@shared/lib/QueryClient/QueryClientProvider';
import ThemeProvider from '@shared/lib/Theme/ThemeProvider';
import React from 'react';

const App: React.FC = () => (
	<QueryClientProvider>
		<ThemeProvider>
			<MainPage />
		</ThemeProvider>
	</QueryClientProvider>
);

export default App;

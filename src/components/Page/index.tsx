import Footer from '@components/Footer';
import Grid from '@components/Grid';
import Header from '@components/Header';
import React, {useEffect} from 'react';

interface PageProps {
	children: React.ReactNode;
	title: string;
}

const Page: React.FC<PageProps> = ({children, title}) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<Grid
			container
			direction="column"
			minHeight="100vh"
			justifyContent="space-between"
		>
			<Grid item>
				<Header />
			</Grid>
			<Grid item>{children}</Grid>
			<Grid item>
				<Footer />
			</Grid>
		</Grid>
	);
};

export default Page;

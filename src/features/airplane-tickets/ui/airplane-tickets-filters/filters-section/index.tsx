import Grid from '@components/Grid';
import React from 'react';

interface FilterSectionProps extends React.PropsWithChildren {
	title: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({children, title}) => {
	return (
		<Grid container flexDirection="column" gap={1}>
			<Grid item>
				<div>{title}</div>
			</Grid>
			<Grid item>{children}</Grid>
		</Grid>
	);
};

export default FilterSection;

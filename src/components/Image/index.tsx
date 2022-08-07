import {buildBaseUrl} from '@shared/lib/utils/buildBaseUrl';
import React from 'react';

interface ImageProps {
	src: string;
	width: React.CSSProperties['width'];
	height: React.CSSProperties['height'];
	backgroundSize?: React.CSSProperties['backgroundSize'];
	className?: string;
}

const Image: React.FC<ImageProps> = ({
	src,
	width,
	height,
	className,
	backgroundSize = 'cover',
}) => {
	return (
		<div
			className={className}
			style={{
				backgroundImage: `url("${buildBaseUrl(src)}")`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize,
				width,
				height,
			}}
		/>
	);
};

export default Image;

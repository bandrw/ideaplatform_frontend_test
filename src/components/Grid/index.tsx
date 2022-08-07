import React from 'react';

interface GridProps extends React.PropsWithChildren {
	className?: string;
	container?: boolean;
	item?: boolean;
	justifyContent?: React.CSSProperties['justifyContent'];
	alignItems?: React.CSSProperties['justifyContent'];
	gap?: React.CSSProperties['gap'];
	margin?: React.CSSProperties['margin'];
	padding?: React.CSSProperties['padding'];
	width?: React.CSSProperties['width'];
	height?: React.CSSProperties['height'];
	minHeight?: React.CSSProperties['minHeight'];
	maxWidth?: React.CSSProperties['maxWidth'];
	minWidth?: React.CSSProperties['minWidth'];
	flexDirection?: React.CSSProperties['flexDirection'];
	flexWrap?: React.CSSProperties['flexWrap'];
	marginRight?: React.CSSProperties['marginRight'];
	marginLeft?: React.CSSProperties['marginLeft'];
	marginTop?: React.CSSProperties['marginTop'];
	marginBottom?: React.CSSProperties['marginBottom'];
	overflow?: React.CSSProperties['overflow'];
}

const transformToUnits = (value: string | number | undefined) => {
	return typeof value === 'number' ? value * 8 : value;
};

const Grid: React.FC<GridProps> = ({
	children,
	className,
	container,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	item,
	gap,
	margin,
	marginLeft,
	marginTop,
	marginBottom,
	marginRight,
	padding,
	...rest
}) => {
	return (
		<div
			className={className}
			style={{
				display: container ? 'flex' : 'block',
				gap: transformToUnits(gap),
				margin: transformToUnits(margin),
				marginTop: transformToUnits(marginTop),
				marginLeft: transformToUnits(marginLeft),
				marginBottom: transformToUnits(marginBottom),
				marginRight: transformToUnits(marginRight),
				padding: transformToUnits(padding),
				...rest,
			}}
		>
			{children}
		</div>
	);
};

export default Grid;

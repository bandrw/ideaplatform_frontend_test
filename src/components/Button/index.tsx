import './styles.scss';

import {cn} from '@bem-react/classname';
import React from 'react';

export type ButtonPin = 'left' | 'right' | 'center';

export interface ButtonProps extends React.PropsWithChildren {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	view?: 'action' | 'default' | 'pseudo';
	size?: 's' | 'm' | 'l';
	pin?: ButtonPin;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	width?: React.CSSProperties['width'];
	minWidth?: React.CSSProperties['minWidth'];
	textAlign?: 'left' | 'center' | 'right';
	style?: React.CSSProperties;
}

const cnButton = cn('Button');

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			className,
			disabled = false,
			view = 'default',
			size = 's',
			onClick,
			pin,
			leftIcon,
			rightIcon,
			width,
			minWidth,
			textAlign = 'center',
			style,
		},
		ref
	) => {
		return (
			<button
				style={{width, minWidth, ...style}}
				ref={ref}
				disabled={disabled}
				className={[
					cnButton({
						[`view_${view}`]: true,
						[`size_${size}`]: true,
						[`textAlign_${textAlign}`]: true,
						[`pin-${pin || ''}`]: pin !== undefined,
						withRightIcon: rightIcon !== undefined,
						withLeftIcon: leftIcon !== undefined,
					}),
					className,
				].join(' ')}
				onClick={onClick}
				type="button"
			>
				{leftIcon !== undefined && (
					<span className={cnButton('LeftIcon')}>{leftIcon}</span>
				)}
				<span className={cnButton('Text')}>{children}</span>
				{rightIcon !== undefined && (
					<span className={cnButton('RightIcon')}>{rightIcon}</span>
				)}
			</button>
		);
	}
);

export default Button;

import './styles.scss';

import {cn} from '@bem-react/classname';
import {Offset, useOffset} from '@shared/lib/hooks/useOffset';
import React, {useRef} from 'react';
import ReactDOM from 'react-dom';

export type TooltipDirection = 'right' | 'bottom' | 'top';

interface TooltipProps extends React.PropsWithChildren {
	popup: React.ReactNode;
	direction?: TooltipDirection;
	isOpened: boolean;
	gap?: number;
}

interface PopupProps extends React.PropsWithChildren {
	container: Offset;
	direction?: TooltipDirection;
	containerRef: React.RefObject<HTMLElement>;
	gap: number;
}

const cnPopup = cn('Popup');

const Popup: React.FC<PopupProps> = ({
	children,
	container,
	direction = 'bottom',
	containerRef,
	gap,
}) => {
	const popupRef = useRef<HTMLDivElement>(null);

	const popupOffset = useOffset<HTMLDivElement>(popupRef);

	const getLeft = () => {
		if (direction === 'bottom') return container.left + container.width / 2;
		if (direction === 'right') return container.left + container.width + gap;
		if (direction === 'top') return container.left + container.width / 2;
		return 0;
	};
	const getTop = () => {
		let top = containerRef.current?.offsetTop || 0;

		if (direction === 'bottom') top += container.height + gap;
		if (direction === 'right') top += container.height / 2;
		if (direction === 'top') top -= (popupOffset?.height || 0) + gap;
		return top;
	};

	const rootContainer = document.getElementById('root');
	if (rootContainer === null) throw new Error("Can't locate root");

	return ReactDOM.createPortal(
		<div
			ref={popupRef}
			hidden={popupOffset === null}
			className={cnPopup({[direction]: true})}
			style={{left: getLeft(), top: getTop()}}
		>
			{children}
		</div>,
		rootContainer
	);
};

const Tooltip: React.FC<TooltipProps> = ({
	popup,
	children,
	direction = 'bottom',
	isOpened,
	gap = 10,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	const offset = useOffset<HTMLDivElement>(ref);

	return (
		<>
			<div ref={ref}>{children}</div>
			{isOpened && offset && (
				<Popup
					container={offset}
					direction={direction}
					containerRef={ref}
					gap={gap}
				>
					{popup}
				</Popup>
			)}
		</>
	);
};

export default Tooltip;

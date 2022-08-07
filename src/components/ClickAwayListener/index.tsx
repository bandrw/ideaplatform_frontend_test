import React, {useEffect, useRef} from 'react';

interface ClickAwayListenerProps extends React.PropsWithChildren {
	onClickAway: () => void;
}

const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
	children,
	onClickAway,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				event.target instanceof HTMLElement &&
				ref.current &&
				!ref.current.contains(event.target)
			)
				onClickAway();
		};

		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [onClickAway]);

	return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;

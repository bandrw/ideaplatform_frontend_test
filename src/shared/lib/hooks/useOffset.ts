import React, {useEffect, useState} from 'react';

export interface Offset {
	top: number;
	left: number;
	bottom: number;
	right: number;
	height: number;
	width: number;
	x: number;
	y: number;
}

/**
 * @Returns Element's size by ref
 */
export const useOffset = <T extends HTMLElement = HTMLElement>(
	ref: React.RefObject<T>
) => {
	const [offset, setOffset] = useState<Offset | null>(null);

	/* eslint-disable-next-line react-hooks/exhaustive-deps */
	useEffect(() => {
		setOffset((prevState) => {
			if (ref.current === null) return prevState;

			const rect = ref.current.getBoundingClientRect();
			if (JSON.stringify(prevState) === JSON.stringify(rect)) return prevState;
			return rect;
		});
	});

	return offset;
};

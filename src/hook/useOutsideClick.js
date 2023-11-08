import  {useRef, useEffect } from 'react';

const useOutsideClick = (isMenuOpen, closeMenu) => {
    const ref = useRef();

    useEffect(() => {
        if (!isMenuOpen) {
            return () => {};
        }
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                closeMenu();
                event.stopPropagation();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    });

    return ref;
};

export default useOutsideClick;

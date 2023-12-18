import { useEffect, useRef } from 'react';

const ObserverComponent = ({ options, children }) => {
    const observable = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                handleIntersection();
            }
        }, options);

        observer.observe(observable.current);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    const handleIntersection = () => {
        console.log('Intersection observed!');
    };

    return <div ref={observable}>{children}</div>;
};

export default ObserverComponent;

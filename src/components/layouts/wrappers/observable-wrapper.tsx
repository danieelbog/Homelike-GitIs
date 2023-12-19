import { useEffect, useRef } from 'react';
import Loader from '../loader/loader';

export interface ObserverOptions {
    root: HTMLElement;
    rootMarging: string;
}

export interface ObservableWrapperProps {
    options?: ObserverOptions;
    onIntersect: () => void;
    children?: JSX.Element;
}

const ObservableWrapper: React.FC<ObservableWrapperProps> = ({ options, onIntersect, children }): JSX.Element => {
    const observable = useRef(null);

    useEffect(() => {
        startObserving();
        return () => {
            observer.disconnect();
        };
    }, []);

    if (options == null || undefined) options = new Object() as ObserverOptions;
    const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) onIntersect();
    }, options);

    const startObserving = () => {
        if (!observable.current) return;
        observer.observe(observable.current);
    };

    return (
        <div ref={observable}>
            <Loader></Loader>
            {children}
        </div>
    );
};

export default ObservableWrapper;

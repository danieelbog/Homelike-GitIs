import ObservableWrapper from './observable-wrapper';

interface ObservableInfiniteScrollWrapperProps {
    isColumnReverse?: boolean;
    showObservable?: boolean;
    onIntersect?: () => void;
    children: JSX.Element;
}

const ObservableInfiniteScrollWrapper: React.FC<ObservableInfiniteScrollWrapperProps> = ({
    isColumnReverse = false,
    showObservable = true,
    onIntersect,
    children
}): JSX.Element => {
    const intersectHandler = () => {
        if (onIntersect) onIntersect();
    };

    return (
        <div
            className={`row justify-content-center g-0 p-3 ${isColumnReverse ? 'flex-column-reverse' : 'flex-column'}`}
        >
            {children}
            {showObservable && <ObservableWrapper onIntersect={intersectHandler} />}
        </div>
    );
};

export default ObservableInfiniteScrollWrapper;

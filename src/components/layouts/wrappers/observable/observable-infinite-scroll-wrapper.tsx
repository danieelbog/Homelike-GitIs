import ObservableWrapper from './observable-wrapper';

const ObservableInfiniteScrollWrapper = ({ isColumnReverse, showObservable, children }) => {
    const loading = false; // You can replace this with the appropriate state and logic

    const handleIntersect = () => {
        // Handle intersect logic
        console.log('Intersection observed!');
    };

    return (
        <div
            className={`row justify-content-center g-0 p-3 ${isColumnReverse ? 'flex-column-reverse' : 'flex-column'}`}
        >
            {/* Content Slot */}
            {children}

            {/* Observable Wrapper */}
            {showObservable && (
                <ObservableWrapper
                    showObservable={showObservable}
                    onIntersect={handleIntersect}
                />
            )}
        </div>
    );
};

export default ObservableInfiniteScrollWrapper;

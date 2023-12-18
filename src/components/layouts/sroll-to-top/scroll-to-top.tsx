import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        setShowScrollButton(window.scrollY > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {showScrollButton && (
                <button
                    className="btn btn-primary position-fixed bottom-0 end-0 m-3 rounded-circle shadow-sm"
                    onClick={scrollToTop}
                >
                    <span className="material-icons-outlined">keyboard_double_arrow_up</span>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;

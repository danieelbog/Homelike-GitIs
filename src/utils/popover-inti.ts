import * as bootstrap from 'bootstrap';

export const setBootstrapComponents = () => {
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
        new bootstrap.Popover(popover);
    });

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
        new bootstrap.Tooltip(tooltip);
    });

    document.getElementById('external-loader')?.remove();
};

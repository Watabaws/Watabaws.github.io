document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    const subtitle = document.querySelector('.new-subtitle');

    // Initial collapse animation
    setTimeout(() => {
        h1.classList.add('collapsed');

        // Wait for the collapse animation to finish (0.6s) before showing the subtitle
        setTimeout(() => {
            subtitle.classList.add('visible');
        }, 600);
    }, 500);

    // Hover to expand
    h1.addEventListener('mouseenter', () => {
        h1.classList.remove('collapsed');
    });

    // Hover out to collapse
    h1.addEventListener('mouseleave', () => {
        h1.classList.add('collapsed');
    });
});

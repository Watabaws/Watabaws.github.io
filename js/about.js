function toggleExp(header) {
    const item = header.parentElement;
    const wasActive = item.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.timeline-item').forEach(el => {
        el.classList.remove('active');
    });
    
    // Open clicked item if it wasn't already active
    if (!wasActive) {
        item.classList.add('active');
    }
}

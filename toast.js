/**
 * Toast notification system for EduAdmin
 * A reusable toast notification system with success, error, and info types
 */

// Show toast notification
function showToast(type, message, duration = 5000) {
    // Find or create toast container
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toastId = 'toast-' + Date.now();
    
    // Create toast element
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast toast-${type}`;
    
    // Create icon based on type
    let iconSvg = '';
    switch (type) {
        case 'success':
            iconSvg = `<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>`;
            break;
        case 'error':
            iconSvg = `<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>`;
            break;
        case 'info':
            iconSvg = `<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>`;
            break;
    }
    
    // Create toast content
    toast.innerHTML = `
        ${iconSvg}
        <div class="toast-content">
            <div class="toast-title">${type === 'success' ? 'Berhasil' : type === 'error' ? 'Error' : 'Info'}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="closeToast('${toastId}')">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <div class="toast-progress" style="animation: toast-progress ${duration}ms linear forwards;"></div>
    `;
    
    // Add to container
    container.appendChild(toast);
    
    // Remove after duration
    setTimeout(() => {
        closeToast(toastId);
    }, duration);
    
    return toastId;
}

// Close toast notification
function closeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.style.animation = 'toast-leave 0.2s ease-out forwards';
        setTimeout(() => {
            toast.remove();
        }, 200);
    }
} 
// layout.js - Shared layout components for the application

// Check authentication status
function checkAuth() {
    const userData = localStorage.getItem('eduadmin_user');
    if (!userData) {
        window.location.href = 'login.html';
        return null;
    }
    
    try {
        return JSON.parse(userData);
    } catch (e) {
        localStorage.removeItem('eduadmin_user');
        window.location.href = 'login.html';
        return null;
    }
}

// Initialize layout with sidebar and header
function initLayout() {
    const user = checkAuth();
    if (!user) return;
    
    // Insert sidebar
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = createSidebar();
    }
    
    // Insert header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader(user);
    }
    
    // Add event listeners
    setupLayoutEventListeners();
}

// Create sidebar HTML
function createSidebar() {
    return `
    <div class="sidebar bg-white h-full shadow-md flex flex-col">
        <div class="p-4 border-b flex items-center">
            <svg class="w-8 h-8 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"></path>
            </svg>
            <h1 class="text-xl font-bold">EduAdmin</h1>
        </div>
        <nav class="flex-1 p-2">
            <ul>
                <li class="mb-1">
                    <a href="dashboard.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li class="mb-1">
                    <a href="classes.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10"></path>
                        </svg>
                        Kelas
                    </a>
                </li>
                <li class="mb-1">
                    <a href="students.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        Siswa
                    </a>
                </li>
                <li class="mb-1">
                    <a href="assignments.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        Tugas
                    </a>
                </li>
                <li class="mb-1">
                    <a href="grades.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        Nilai
                    </a>
                </li>
                <li class="mb-1">
                    <a href="attendance.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Presensi
                    </a>
                </li>
                <li class="mb-1">
                    <a href="events.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Event
                    </a>
                </li>
                <li class="mb-1">
                    <a href="journals.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253M16 6.253v13m0-13C14.832 5.477 13.246 5 11.5 5S8.168 5.477 7 6.253v13C8.168 18.477 9.754 18 11.5 18s3.332.477 4.5 1.253"></path>
                        </svg>
                        Jurnal Pembelajaran
                    </a>
                </li>
                <li class="mb-1">
                    <a href="question-bank.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Bank Soal
                    </a>
                </li>
            </ul>
        </nav>
        <div class="p-4 border-t">
            <button id="logout-btn" class="flex items-center text-red-500 w-full">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                Logout
            </button>
        </div>
    </div>
    `;
}

// Create header HTML
function createHeader(user) {
    return `
    <div class="header bg-white flex justify-between items-center p-4 shadow-sm">
        <div class="flex items-center">
            <button id="mobile-menu-btn" class="md:hidden p-2 mr-2 rounded-lg hover:bg-gray-100">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <h1 class="text-xl font-semibold page-title">Dashboard</h1>
        </div>
        <div class="flex items-center">
            <div class="mr-4 text-sm text-gray-600 hidden sm:block">
                Welcome, ${user ? (user.name || user.username || 'User') : 'User'}
            </div>
            <div class="relative">
                <button id="user-menu-btn" class="flex items-center">
                    <div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        ${user ? getUserInitials(user) : 'U'}
                    </div>
                </button>
                <div id="user-dropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <button id="header-logout-btn" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Get user initials for avatar
function getUserInitials(user) {
    if (user.name) {
        const nameParts = user.name.split(' ');
        if (nameParts.length > 1) {
            return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
        }
        return user.name[0].toUpperCase();
    }
    return user.username[0].toUpperCase();
}

// Set up event listeners for layout components
function setupLayoutEventListeners() {
    // Toggle mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar-container');
            if (sidebar) {
                sidebar.classList.toggle('hidden');
                
                // When sidebar is shown on mobile, make it fixed position over the content
                if (!sidebar.classList.contains('hidden')) {
                    sidebar.classList.add('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                    
                    // Add a close button to the sidebar
                    if (!document.getElementById('sidebar-close')) {
                        const closeBtn = document.createElement('button');
                        closeBtn.id = 'sidebar-close';
                        closeBtn.className = 'absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-200 md:hidden';
                        closeBtn.innerHTML = `
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        `;
                        closeBtn.addEventListener('click', function() {
                            sidebar.classList.add('hidden');
                            sidebar.classList.remove('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                            this.remove();
                            document.getElementById('sidebar-overlay')?.remove();
                        });
                        sidebar.appendChild(closeBtn);
                    }
                    
                    // Add overlay to close sidebar when clicking outside
                    if (!document.getElementById('sidebar-overlay')) {
                        const overlay = document.createElement('div');
                        overlay.id = 'sidebar-overlay';
                        overlay.className = 'fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden';
                        overlay.addEventListener('click', function() {
                            sidebar.classList.add('hidden');
                            sidebar.classList.remove('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                            this.remove();
                            document.getElementById('sidebar-close')?.remove();
                        });
                        document.body.appendChild(overlay);
                    }
                } else {
                    // Remove the fixed position when hidden
                    sidebar.classList.remove('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                    document.getElementById('sidebar-overlay')?.remove();
                    document.getElementById('sidebar-close')?.remove();
                }
            }
        });
    }
    
    // Handle window resize to reset sidebar state
    window.addEventListener('resize', function() {
        const sidebar = document.getElementById('sidebar-container');
        if (sidebar) {
            if (window.innerWidth >= 768) { // md breakpoint
                sidebar.classList.remove('fixed', 'z-50', 'left-0', 'top-0');
                document.getElementById('sidebar-overlay')?.remove();
                document.getElementById('sidebar-close')?.remove();
                
                // Make sure sidebar is visible on desktop
                sidebar.classList.remove('hidden');
                sidebar.classList.add('md:block');
            } else {
                // On small screens, sidebar should be hidden unless explicitly shown
                if (!sidebar.classList.contains('fixed')) {
                    sidebar.classList.add('hidden');
                }
            }
        }
    });
    
    // Toggle user dropdown
    const userMenuBtn = document.getElementById('user-menu-btn');
    if (userMenuBtn) {
        userMenuBtn.addEventListener('click', function() {
            document.getElementById('user-dropdown').classList.toggle('hidden');
        });
    }
    
    // Handle logout
    const logoutBtns = [
        document.getElementById('logout-btn'),
        document.getElementById('header-logout-btn')
    ];
    
    logoutBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function() {
                logout();
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        const userDropdown = document.getElementById('user-dropdown');
        const userMenuBtn = document.getElementById('user-menu-btn');
        
        if (userDropdown && userMenuBtn) {
            if (!userMenuBtn.contains(event.target) && !userDropdown.contains(event.target)) {
                userDropdown.classList.add('hidden');
            }
        }
    });
}

// Logout function
function logout() {
    localStorage.removeItem('eduadmin_user');
    window.location.href = 'login.html';
}

// Update page title in header
function updatePageTitle(title) {
    const pageTitle = document.querySelector('.page-title');
    if (pageTitle) {
        pageTitle.textContent = title;
    }
    document.title = `${title} - Teacher Administration Dashboard`;
}

// Show loading spinner
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
        <div class="flex justify-center items-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        `;
    }
}

// Show error message
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>${message}</p>
            <button class="mt-2 bg-red-200 hover:bg-red-300 text-red-800 py-1 px-3 rounded" onclick="window.location.reload()">Retry</button>
        </div>
        `;
    }
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format time for display
function formatTime(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Format date and time for display
function formatDateTime(dateString) {
    if (!dateString) return '-';
    return `${formatDate(dateString)}, ${formatTime(dateString)}`;
}

// Get the current file content and append the sidebar toggle functionality

// Initialize layout components (sidebar and header)
function initLayout() {
    // Populate sidebar
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
            <div class="flex flex-col h-full">
                <div class="p-4 border-b">
                    <h2 class="text-xl font-bold">Admin Dashboard</h2>
                </div>
                <nav class="flex-1 p-4">
                    <ul class="space-y-2">
                        <li>
                            <a href="index.html" class="flex items-center p-2 rounded-lg hover:bg-gray-100">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="classes.html" class="flex items-center p-2 rounded-lg hover:bg-gray-100">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                                Kelas
                            </a>
                        </li>
                        <li>
                            <a href="students.html" class="flex items-center p-2 rounded-lg hover:bg-gray-100">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                                Siswa
                            </a>
                        </li>
                        <li>
                            <a href="assignments.html" class="flex items-center p-2 rounded-lg hover:bg-gray-100">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                                Tugas
                            </a>
                        </li>
                        <li>
                            <a href="grades.html" class="flex items-center p-2 rounded-lg hover:bg-gray-100">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                Nilai
                            </a>
                        </li>
                        <li>
                            <a href="attendance.html" class="flex items-center p-2 rounded-lg hover:bg-gray-100">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Presensi
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
    }
    
    // Populate header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="bg-white shadow-sm">
                <div class="flex justify-between items-center p-4">
                    <div class="flex items-center">
                        <button id="sidebar-toggle" class="p-2 mr-2 rounded-lg hover:bg-gray-100 md:hidden">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <h1 id="page-title" class="text-xl font-semibold">Dashboard</h1>
                    </div>
                    <div class="flex items-center">
                        <div class="relative">
                            <button class="flex items-center text-sm p-2 rounded-lg hover:bg-gray-100">
                                <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                                    <span class="font-medium">A</span>
                                </div>
                                <span class="hidden md:block">Admin</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        `;
        
        // Add sidebar toggle functionality
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar-container');
        
        if (sidebarToggle && sidebar) {
            // Set up click handler for the toggle button
            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('hidden');
                
                // When sidebar is shown on mobile, make it fixed position over the content
                if (!sidebar.classList.contains('hidden')) {
                    sidebar.classList.add('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                    
                    // Add a close button to the sidebar
                    if (!document.getElementById('sidebar-close')) {
                        const closeBtn = document.createElement('button');
                        closeBtn.id = 'sidebar-close';
                        closeBtn.className = 'absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-200 md:hidden';
                        closeBtn.innerHTML = `
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        `;
                        closeBtn.addEventListener('click', function() {
                            sidebar.classList.add('hidden');
                            sidebar.classList.remove('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                            this.remove();
                            document.getElementById('sidebar-overlay')?.remove();
                        });
                        sidebar.appendChild(closeBtn);
                    }
                    
                    // Add overlay to close sidebar when clicking outside
                    if (!document.getElementById('sidebar-overlay')) {
                        const overlay = document.createElement('div');
                        overlay.id = 'sidebar-overlay';
                        overlay.className = 'fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden';
                        overlay.addEventListener('click', function() {
                            sidebar.classList.add('hidden');
                            sidebar.classList.remove('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                            this.remove();
                            document.getElementById('sidebar-close')?.remove();
                        });
                        document.body.appendChild(overlay);
                    }
                } else {
                    // Remove the fixed position when hidden
                    sidebar.classList.remove('fixed', 'z-50', 'h-screen', 'left-0', 'top-0');
                    document.getElementById('sidebar-overlay')?.remove();
                    document.getElementById('sidebar-close')?.remove();
                }
            });
        }
        
        // Handle window resize to reset sidebar state
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) { // md breakpoint
                sidebar?.classList.remove('fixed', 'z-50', 'left-0', 'top-0');
                document.getElementById('sidebar-overlay')?.remove();
                document.getElementById('sidebar-close')?.remove();
                
                // Make sure sidebar is visible on desktop
                if (sidebar) {
                    sidebar.classList.remove('hidden');
                    sidebar.classList.add('md:block');
                }
            } else {
                // Hide sidebar on mobile by default
                if (sidebar && !sidebar.classList.contains('hidden')) {
                    sidebar.classList.add('hidden');
                }
            }
        });
    }
}

// Update page title
function updatePageTitle(title) {
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = title;
    }
    
    // Also update document title
    document.title = title + ' - Teacher Administration Dashboard';
} 
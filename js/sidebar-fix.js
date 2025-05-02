/**
 * sidebar-fix.js - Ensures the sidebar is correctly displayed with all menu items
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('sidebar-fix.js: Checking sidebar menu items');
    
    // Give some time for the main layout scripts to run
    setTimeout(function() {
        const sidebarContainer = document.getElementById('sidebar-container');
        
        if (!sidebarContainer) {
            console.error('sidebar-fix.js: Sidebar container not found');
            return;
        }
        
        // Check if sidebar is empty or missing our journal menu item
        const journalMenuItem = sidebarContainer.querySelector('a[href="journal.html"]');
        
        // Only add the journal menu item if it doesn't already exist
        if (!journalMenuItem) {
            console.log('sidebar-fix.js: Journal menu item missing, adding it');
            
            // Try to find the navigation menu
            const navMenu = sidebarContainer.querySelector('nav ul');
            
            if (navMenu) {
                // Check again to make double sure we don't have duplicates
                const existingItems = navMenu.querySelectorAll('a');
                let journalExists = false;
                
                existingItems.forEach(item => {
                    if (item.getAttribute('href') === 'journal.html') {
                        journalExists = true;
                    }
                });
                
                if (!journalExists) {
                    // Create new menu item for journal
                    const journalItem = document.createElement('li');
                    journalItem.className = 'mb-1';
                    journalItem.innerHTML = `
                        <a href="journal.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253M16 6.253v13m0-13C14.832 5.477 13.246 5 11.5 5S8.168 5.477 7 6.253v13C8.168 18.477 9.754 18 11.5 18s3.332.477 4.5 1.253"></path>
                            </svg>
                            Jurnal Pembelajaran
                        </a>
                    `;
                    
                    // Find events menu item to insert after
                    const eventsMenuItem = Array.from(navMenu.querySelectorAll('li a'))
                        .find(a => a.getAttribute('href') === 'events.html')?.parentNode;
                    
                    if (eventsMenuItem) {
                        navMenu.insertBefore(journalItem, eventsMenuItem.nextSibling);
                        console.log('sidebar-fix.js: Journal menu item added after events menu');
                    } else {
                        // Add at the end of the menu
                        navMenu.appendChild(journalItem);
                        console.log('sidebar-fix.js: Journal menu item added at the end of the menu');
                    }
                } else {
                    console.log('sidebar-fix.js: Journal link already exists in menu items');
                }
            } else {
                console.error('sidebar-fix.js: Navigation menu not found');
            }
        } else {
            console.log('sidebar-fix.js: Journal menu item already exists');
        }
    }, 500); // Wait 500ms to make sure initLayout has run
}); 
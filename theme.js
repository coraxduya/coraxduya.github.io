// Theme toggle functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.querySelector('.theme-icon');
        this.currentTheme = this.getStoredTheme() || 'light';
        
        this.init();
    }
    
    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        this.storeTheme(newTheme);
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        
        // Update document attribute
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update icon
        this.updateIcon(theme);
        
        // Update button aria-label
        this.themeToggle.setAttribute('aria-label', 
            theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
        );
    }
    
    updateIcon(theme) {
        // Smooth transition for icon change
        this.themeIcon.style.transform = 'scale(0)';
        
        setTimeout(() => {
            this.themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
            this.themeIcon.style.transform = 'scale(1)';
        }, 150);
    }
    
    getStoredTheme() {
        return localStorage.getItem('theme');
    }
    
    storeTheme(theme) {
        localStorage.setItem('theme', theme);
    }
    
    // Get system preference
    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

// Prevent flash of unstyled content
(function() {
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = storedTheme || systemTheme;
    
    document.documentElement.setAttribute('data-theme', theme);
})();
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher Code
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            if (themeToggle) themeToggle.innerHTML = '☀️';
        } else {
            body.classList.remove('light-mode');
            if (themeToggle) themeToggle.innerHTML = '🌙';
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '☀️';
            } else {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '🌙';
            }
        });
    }

    applyTheme();
});

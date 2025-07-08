const themeSwitch = document.getElementById('themeSwitch');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    const sunIcon = document.querySelector('.bi-sun-fill');
    const moonIcon = document.querySelector('.bi-moon-stars-fill');

    if (theme === 'dark') {
        if(sunIcon) sunIcon.style.display = 'inline-block';
        if(moonIcon) moonIcon.style.display = 'none';
        if(themeSwitch) themeSwitch.checked = true;
    } else {
        if(sunIcon) sunIcon.style.display = 'none';
        if(moonIcon) moonIcon.style.display = 'inline-block';
        if(themeSwitch) themeSwitch.checked = false;
    }
};

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    setTheme(currentTheme);
} else {
    setTheme('light'); 
}

if(themeSwitch) {
    themeSwitch.addEventListener('change', () => {
        const newTheme = themeSwitch.checked ? 'dark' : 'light';
        setTheme(newTheme);
    });
}
//MODO NOCTURNO//

const toggleSwitch = document.querySelector('.modeDark[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.querySelector('.modeDarkText').innerHTML = ("Modo Diurno");
    }
}


export function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.modeDarkText').innerHTML = ("Modo Diurno");
        document.querySelector('.navigation-logo').src = "./image/Logo-mobile-modo-noct.svg"

    }

    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.querySelector('.modeDarkText').innerHTML = ("Modo Nocturno");
        document.querySelector('.navigation-logo').src = "./image/logo-mobile.svg"

    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
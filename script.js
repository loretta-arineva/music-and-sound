window.onscroll = () => {
    const nav = document.querySelector('#main-nav');
    if (this.scrollY <= 20) nav.className = ''; else nav.className = 'scroll';
};
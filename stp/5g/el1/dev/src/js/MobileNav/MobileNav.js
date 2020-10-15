class MobileNav {
    constructor(params) {
        this.navButton = params.navButton;
        this.navClose = params.navClose;
        this.navMenu = params.navMenu; 
        this.overlay = params.siteOverlay;
        this.overflowY;
    };

    init() {
        // Scroll position for enable - disable scroll
        let scrollPosition = 0;
        scrollPosition = window.pageYOffset;

        // Open Menu
        const btn = document.querySelector(this.navButton);
        btn.addEventListener('click', this.openMenu.bind(this, scrollPosition));

        // Close menu by overlay click
        const overlay = document.querySelector(this.overlay);
        overlay.addEventListener('click', this.closeMenu.bind(this));

        // Close menu by button
        const closeBtn = document.querySelector(this.navClose);
        closeBtn.addEventListener('click', this.closeMenu.bind(this));
    }

    openMenu(scrollPosition) {
        const navMenu = document.querySelector(this.navMenu);
        const overlay = document.querySelector(this.overlay);
        overlay.classList.add('active');

        navMenu.classList.add('mobile-menu--active');

        this.overflowY = scrollPosition;
        this.disableScroll(scrollPosition);
    }

    closeMenu() {
        const navMenu = document.querySelector(this.navMenu);
        const overlay = document.querySelector(this.overlay);
        overlay.classList.remove('active');
        navMenu.classList.remove('mobile-menu--active');

        this.enableScroll(this.overflowY);
    }

    disableScroll(scrollPosition) {
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
    };

    enableScroll(scrollPosition) {
        const body = document.querySelector('body');
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    };
}

export default MobileNav;
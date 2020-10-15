class Sticky {
    constructor (params) {
        this.sticky = params.sticky;
        this.styles = {};
        this.top = params.top;
        this.percent = params.percent;
        if (params.percent) {
            this.styles = {
                position: 'fixed',
                top: `${(window.innerHeight * params.top) / 100}px`,
                marginLeft: '0px',
            }
        } else {
            this.styles = {
                position: 'fixed',
                top: `${params.top}px`,
                marginLeft: '0px',
            }
        }
    };

    init() {
            const sticky = document.querySelector(this.sticky);
            const stickyOffTop = sticky.offsetTop;
            const calcHeight = (window.innerHeight * this.top) / 100;
            const styles = this.styles;
            const self = this;

        window.addEventListener('scroll', function () {
            //Percent
            if (self.percent) {
                //Enable Sticky
                if (window.pageYOffset > sticky.offsetTop - calcHeight) {
                    self.enableSticky(sticky, styles);
                }

                //Disable sticky
                if (window.pageYOffset < stickyOffTop - calcHeight) {
                    self.disableSticky(sticky);
                }
            } else {
                //Pixels
                //Enable Sticky
                if (window.pageYOffset > sticky.offsetTop - self.top) {
                    self.enableSticky(sticky, styles);
                }

                //Disable sticky
                if (window.pageYOffset < stickyOffTop - self.top) {
                    self.disableSticky(sticky);
                }
            }
        });
    };

    enableSticky(sticky, styles) {
        const stickyOffLeft = sticky.offsetLeft;
        Object.assign(sticky.style, styles);
        sticky.style.left = `${stickyOffLeft}px`;
    };

    disableSticky(sticky) {
        sticky.removeAttribute('style');
    };
};

export default Sticky;

/*
Description

1. HTML
    Firstly you need to add to your HTML modal buttons or link
    with class - js-modal--btn and data attribute - data-modal
    (EXAMPLE: <a href="#" class="js-modal--btn" data-modal="privacy">Privacy</a>)
    Secondly add your modal window with id, that must be same as a data attribute value of
    your button and classes like in example
    (EXAMPLE:
        <div id="privacy" class="js-modal--content--wrapper js-modal-close">
            <div class="js-modal--content">
                <h3>Privacy</h3>
                Some text
            </div>
        </div>
    )
2. JS
    In your main js file import Modal.
    Pass parameters to new Modal:
    modalButton: 'THERE CAN BE YOUR MODAL BUTTON CLASS BUT DONT FORGET COPY STYLES'
    modalContent: 'THERE CAN BE YOUR MODAL CONTENT CLASS BUT DONT FORGET COPY STYLES'
    modalContentWrapper: 'THERE CAN BE YOUR CONTENT WRAPPER CLASS BUT DONT FORGET COPY STYLES'

    Use function init() to start

    EXAMPLE:
    const modal = new Modal({
        modalButton: '.js-modal--btn',
        modalContent: '.js-modal--content',
        modalContentWrapper: '.js-modal--content--wrapper',
    });
    modal.init();

*/

class Modal {
    constructor(params) {
        this.modalBtn = params.modalButton;
        this.modalContent = params.modalContent;
        this.modalContentWrapper = params.modalContentWrapper;
        this.pageY;

        //Styles
        this.openStyle = {
            top: 0,
            opacity: 1,
        };

        this.fadeInStyle = {
            visibility: 'visible',
            opacity: '1',
        };

        this.bodyStyle = {
            overflow: 'hidden',
            position: 'fixed',
            width: '100%',
            top: '',
        };
    };

    init() {
        // Creating close button element
        const modalContent = document.querySelectorAll(this.modalContent);
        modalContent.forEach((modalC) => {
            const span = document.createElement('span');
            span.innerHTML = '&#x2716;';
            span.classList.add('js-modal--close-btn');
            modalC.appendChild(span);

            // const spanA = `
            //     <span class="js-modal--close-btn">&#x2716;</span>
            // `;
            // console.log(spanA);
            // modalC.innerHTML = spanA;
        });
        // End

        const body = document.body;
        body.addEventListener('click', this.start.bind(this));
    };

    start(e) {
        const target = e.target;
        let scrollPosition = 0;
        scrollPosition = window.pageYOffset;

        if (target.getAttribute('data-modal')) {
            e.preventDefault();
            this.pageY = scrollPosition;
            const id = target.getAttribute('data-modal');
            this.openModal(id, scrollPosition, this.openStyle, this.fadeInStyle);
        }

        if (target.className === 'js-modal--close-btn' || target.classList.contains('js-modal-close')) {
            this.closeModal.bind(this)();
        }
    };

    openModal(id, scrollPosition, style, fadeIn) {
        const modalById = document.getElementById(id);
        const childEl = [...modalById.children];
        Object.assign(childEl[0].style, style);
        Object.assign(modalById.style, fadeIn);

        this.disableScroll(scrollPosition);
    };

    closeModal() {
        const modals = document.querySelectorAll(this.modalContentWrapper);
        modals.forEach((modal) => {
            modal.removeAttribute('style');
            modal.children[0].removeAttribute('style');
        });

        this.enableScroll(this.pageY);
    };

    disableScroll(scrollPosition) {
        const body = document.querySelector('body');

        this.bodyStyle.top = `-${scrollPosition}px`;
        Object.assign(body.style, this.bodyStyle);
    };

    enableScroll(scrollPosition) {
        const body = document.querySelector('body');
        body.removeAttribute('style');

        window.scrollTo(0, scrollPosition);
    };
};

export default Modal;

class Accordion {
    constructor(params) {
        this.accTitle = params.accTitle;
        this.accContent = params.accContent;
    };

    init() {
        const accTitle = document.querySelectorAll(this.accTitle);

        accTitle.forEach((title, index) => {
            title.addEventListener('click', this.openAcc.bind(this, title, index));
        });
    };

    openAcc(title, index) {
        const accContent = document.querySelectorAll(this.accContent);
        title.classList.toggle(`${this.accTitle}--active`.replace('.', ''));
        accContent[index].classList.toggle(`${this.accContent}--active`.replace('.', ''));

        this.closeAcc.bind(this, index)();
    };

    closeAcc(currentIndex) {
        const accTitles = document.querySelectorAll(this.accTitle);
        const accContent = document.querySelectorAll(this.accContent);

        accTitles.forEach((title, index) => {
            if (index !== currentIndex) {
                accTitles[index].classList.remove(`${this.accTitle}--active`.replace('.', ''));
                accContent[index].classList.remove(`${this.accContent}--active`.replace('.', ''));
            }
        });
    };
}

export default Accordion;

class Tabs {
    constructor(params) {
        this.tabs = params.tabs;
        this.tabsContent = params.tabsContent;
        this.defaultOpen = params.defaultOpenId;
    };

    init() {
        const tabs = document.querySelectorAll(this.tabs);
        tabs.forEach((tab) => {
            tab.style.width = `${100 / tabs.length - 1}%`;
            tab.addEventListener('click', this.openTab.bind(this, tab));
        });

        //Default Open
        const defaultTab = document.getElementById(this.defaultOpen);
        defaultTab.click();
    };

    openTab(tab) {
        const tabs = document.querySelectorAll(this.tabs);
        const tabAttr = tab.getAttribute('data-tab-name');

        tabs.forEach((t) => {
            if (t !== tab) {
                t.classList.remove(`${this.tabs}--active`.replace('.', ''));
            }
        });

        const tabsContent = document.querySelectorAll(this.tabsContent);
        tabsContent.forEach((tabContent) => {
            tabContent.style.display = 'none';
        });

        tab.classList.add(`${this.tabs}--active`.replace('.', ''));
        document.getElementById(tabAttr).style.display = 'block';
    };
};

export default Tabs;

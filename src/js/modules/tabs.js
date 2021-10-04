const showTab = (content, index) => {
    content.children.forEach((elem, i) => {
        elem.style.display = 'none';
        if(index == i) {
            elem.style.display = 'block';
        }
    });
};

const removeTab = (tab, activeClass) => {
    tab.forEach(elem => {
        elem.classList.remove(activeClass.replace(/\./g, ''));
    });
};

const tabs = (headerSelector, tabSelector, activeClass, contentClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelector(contentClass);

    header.addEventListener('click', (e) => {
        let target = e.target.parentNode;
       
        if(target.classList.contains(tabSelector.replace(/\./g, ''))) {
                removeTab(tab, activeClass);
            target.classList.add(activeClass.replace(/\./g, ''));
        }
        tab.forEach((elem,index) => {
            if(elem.classList.contains(activeClass.replace(/\./g, ''))) {
                showTab(content, index);
            }
        });
    });
};

export default tabs;

export const closeModal = (modalSelector) => {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('hide');
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };
    
export const openModal = (modalSelector, clickOn) => {
        const modal = document.querySelector(modalSelector);
        clearTimeout(modalTimerId); 

        modal.classList.add('active');
        modal.classList.remove('hide');
        document.body.classList.add('modal-open');
};

const modalTimerId = setTimeout(() => openModal('.popup'), 60000);

const calcScroll = () => {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
};

export const modals = (triggerSelector, exitSelector, modalSelector, clickOn) => {
    
    let trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        scroll = calcScroll();


    if(clickOn != true){
        trigger.forEach(elem => elem.addEventListener('click', function listener (event)  {
            event.preventDefault();
            openModal(modalSelector, clickOn);
            document.body.style.marginRight = `${scroll}px`;
        }));
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.parentNode.classList.contains(exitSelector.replace(/\./g,''))) {
            closeModal(modalSelector);
            document.body.style.marginRight = `0px`;
        }
    });

   
};
export default modals;
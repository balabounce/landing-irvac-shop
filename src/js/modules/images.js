const images = () => {
    const images = document.querySelector('.images');

    images.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.classList.contains('preview')) {    
            let numImg = e.target.src.replace(/\D/g,'');
            let imgModal = document.createElement('div');
            let big_img = document.createElement('img');

            imgModal.classList.add('popup', 'big_img', 'active');
            big_img.src = `assets/img/our_works/big_img/${numImg}.png`;

            imgModal.appendChild(big_img);
            images.appendChild(imgModal);

            imgModal.style.justifyContent = 'center';
            imgModal.style.alignItems = 'center';
            imgModal.style.display = 'flex';
            imgModal.style.position = 'fixed';
            imgModal.style.overflow = 'hidden';
            document.body.classList.add('modal-open');
            imgModal.addEventListener('click', (event) => {
                if(event.target.classList.contains('popup')) {
                    imgModal.classList.add('hide');
                    imgModal.classList.remove('active');
                    document.body.classList.remove('modal-open');
                }
            });
        }
    });
};

export default images;
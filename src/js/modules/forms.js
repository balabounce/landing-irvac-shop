
const postDataFunction = (url, formData, statusMessage) => {

    postData(url, formData).then(res => {
        console.log(res);
        document.querySelector('.status').textContent = message.success;
    }).catch(() => {
        document.querySelector('.status').textContent = message.error;
    }).finally(() => {
        clearInputs(inputs);
        setTimeout(() => {
            statusMessage.remove();
        }, 5000);
    });
};


const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch (url, {
        method: 'POST',
        body: data
    });

    return await res.text();
};

const inputs = document.querySelectorAll('input'),
    form = document.querySelectorAll('form:not(.popup_calc_end_form)'),
    exception = document.querySelector('form.popup_calc_end_form');


const message = {
    loading: 'Загрузка',
    error: 'Что-то пошло не так',
    success: 'Отлично. Данные получены.'
};

// if(obj) console.log(obj);


const clearInputs = (inputs) => {
    inputs.forEach(input => {
        input.value = '';
    });
};

const formStatusCreate = () => {
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    return statusMessage;
};

export function formException (obj) {
    exception.addEventListener('submit', () => {
        event.preventDefault();

        let statusMessage = formStatusCreate();
        exception.appendChild(statusMessage);

        const formData = new FormData(exception);

            // console.log(obj);
        for(let key in obj) {
            formData.append(String(key), String(obj[key]));
        }
        
        if(obj.complete == false){
            postDataFunction('assets/server.php', formData, statusMessage);
            obj.complete = true;
        }
    });
    return '';
    
}


const forms = () => {
    form.forEach(elem => {
        elem.addEventListener('submit', () => {
            event.preventDefault();

            let statusMessage = formStatusCreate();
            elem.appendChild(statusMessage);

            const formData = new FormData(elem);

            postDataFunction('assets/server.php', formData, statusMessage);

        });
    }); 
};

export default forms;
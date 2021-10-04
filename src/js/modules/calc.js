import * as modal from './modals';
import * as linkToForm from './forms';

const calc = () => {
    let calcObj = {
        balcony_form: '',
        width: 0,
        height: 0,
        view_type: 'tree',
        profile: '',
        complete: false
    };

    const fwh = document.querySelector('.popup_calc_button'), 
        tp = document.querySelector('.popup_calc_profile_button');
    
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            calcObj.complete = false;
            if(input.id == 'width'){
                calcObj.width = input.value;
            } else if(input.id == 'height') {
                calcObj.height = input.value;
            } else if(input.id == 'view_type') {
                calcObj.view_type = input.value;
            }
        });
    });

    const calcCheckbox = document.querySelectorAll("input[name=checkbox-test]");
    calcCheckbox.forEach(check => {
        check.addEventListener('change', () => {
            calcObj.complete = false;
            if(check.checked) {
                calcCheckbox.forEach(item => item.checked = false);
                check.checked = true;
                calcObj.profile = check.nextElementSibling.id;
            }
            else {
                calcObj.profile = '';
            }
        });
    });

    const errorDisplay = (fatherElement, text) =>  {
        if(document.querySelectorAll('.Error').length != 0) {
            document.querySelectorAll('.Error').forEach(e => e.remove());
        }
        if(fatherElement && text)
        {
            let errorMessage = document.createElement('div');
            errorMessage.classList.add('Error');
            errorMessage.innerText = text;
            errorMessage.style.color = 'red';
            fatherElement.appendChild(errorMessage);
        }      
    };

   
    const stepOne = () => {
        fwh.addEventListener('click', () => {
            errorDisplay();    
            const bChooseIcon = document.querySelector('.do_image_more >img');
            if(bChooseIcon && calcObj.width != 0 && calcObj.height != 0) {
                calcObj.balcony_form = bChooseIcon.alt;
                modal.closeModal('.popup_calc');
                modal.openModal('.popup_calc_profile');
                modal.modals('.popup_calc_button', '.popup_calc_profile_close', '.popup_calc_profile', true);
                stepTwo();
            }
            else  {
                if(!bChooseIcon){
                    errorDisplay(fwh.parentElement, 'Не был выбран тип балкона');
                }
                else if(calcObj.width == 0 || calcObj.height == 0) {
                    errorDisplay(fwh.parentElement, 'Не был выбрана длина или ширина');
                }
            }
        });
    };

    stepOne();

    const stepTwo = () => {    
        tp.addEventListener('click', () => {
            errorDisplay();    
            if(calcObj.view_type && calcObj.profile != '') {
                modal.closeModal('.popup_calc_profile');
                modal.openModal('.popup_calc_end');
                modal.modals('.popup_calc_profile_button', '.popup_calc_end_close', '.popup_calc_end', true);
                linkToForm.formException(calcObj);
                // return (calcObj = {});
            }
            else  {
                if(!calcObj.view_type) {
                    errorDisplay(tp.parentElement, 'Не был выбран тип остекленения');
                }
                else if(!calcObj.profile) {
                    errorDisplay(tp.parentElement, 'Не был выбран профиль');
                }
            }
        });
    };
          
};

export default calc;
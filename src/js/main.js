import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calc from "./modules/calc";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener('DOMContentLoaded', function() {
    modals('.popup_engineer_btn', '.popup_close', '.popup_engineer');
    modals('.phone_link', '.popup_close', '.popup');
    modals('.glazing_price_btn ', '.popup_calc_close', '.popup_calc');
    tabs('.decoration_slider', '.no_click', '.after_click', '.decoration_content >.row');
    tabs('.glazing_slider', '.glazing_block', '.active', '.glazing_content');
    tabs('.balcon_icons', '.balcon_icons_img', '.do_image_more', '.big_img ');

    calc();
    forms();
    timer('#timer', '2021-12-18');
    images();
});
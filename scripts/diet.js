function favourite_item(element) {
    var element_class = element.getAttribute('class');
    if (element_class.indexOf('favourite') > -1) {
        element_class = element_class.replace(' favourite', '');
    }
    else {
        element_class += ' favourite';
    }
    element.setAttribute('class', element_class);

    var menu_card = element.closest(".menu_card");
    element_class = menu_card.getAttribute('class');
    if (element_class.indexOf('favourite') > -1) {
        element_class = element_class.replace(' favourite', '');
    }
    else {
        element_class += ' favourite';
    }
    menu_card.setAttribute('class', element_class);
}
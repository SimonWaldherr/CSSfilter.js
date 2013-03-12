Object.prototype.cssfilter = function (inputmode, value) {
    "use strict";
    var browser = ['-webkit-filter', '-moz-filter', '-o-filter', 'filter'],
        filter  = ['blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'saturate', 'sepia', 'invert', 'opacity'],
        filters = (JSON.parse(this.getAttribute('data-filter'))) !== null ? JSON.parse(this.getAttribute('data-filter')) : {},
        i, setfilter, mode;

    switch (inputmode) {
        case 'gray':
            mode = 'grayscale';
            break;
        case 'bright':
            mode = 'brightness';
            break;
        case 'contr':
            mode = 'contrast';
            break;
        case 'hue':
            mode = 'hue-rotate';
            break;
        case 'sat':
            mode = 'saturate';
            break;
        default:
            mode = inputmode;
            break;
    }

    switch (mode) {
        case 'reset':
            this.setAttribute('data-filter', '');
            this.removeAttribute('data-filter');
            break;
        case 'render':
            setfilter = '';
            for (i = 0; i < filter.length; i += 1) {
                if (filters[filter[i]] !== undefined) {
                    setfilter += ' ' + filter[i] + '(' + filters[filter[i]];
                    if (filter[i] === 'blur') {
                        setfilter += 'px) ';
                    } else if (filter[i] === 'hue-rotate') {
                        setfilter += 'deg) ';
                    } else {
                        setfilter += '%) ';
                    }
                }
            }

            for (i = 0; i < browser.length; i += 1) {
                this.style[browser[i]] = setfilter;
            }
            break;
        default:
            filters[mode] = value;
            this.setAttribute('data-filter', JSON.stringify(filters));
            break;

    }
    return this;
};
exports.min = function min(array) {
    if (array && array.length) {
        let mini = array[0];
        for (let i = 0; i < array.length; i++) {
            if (mini > array[i]) mini = array[i];
        }
        return mini;
    } else return 0;
};

exports.max = function max(array) {
    if (array && array.length) {
        let maxi = array[0];
        for (let i = 0; i < array.length; i++) {
            if (maxi < array[i]) maxi = array[i];
        }
        return maxi;
    } else return 0;
};

exports.avg = function avg(array) {
    if (array && array.length) {
        let average = array[0];
        let i = 1;
        for (i; i < array.length; i++) {
            average += array[i];
        }
        average /= i;
        return average;
    } else return 0;
};

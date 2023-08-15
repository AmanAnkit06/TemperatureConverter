var far = document.getElementById('fah');
var cel = document.getElementById('cel');
var kev = document.getElementById('kev');

far.addEventListener('input', function () {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    let k = (f - 32) * 5 / 9 + 273.15;

    if (!Number.isInteger(c)) {
        c = c.toFixed(4);
    }
    cel.value = c;
    if (!Number.isInteger(k)) {
        k = k.toFixed(4);
    }

    kev.value = k;
});
cel.addEventListener('input', function () {
    let c = this.value;
    let f = (c * 9 / 5) + 32;

    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
    }
    far.value = f;

    let k = (273.15+2*c-c);
    if (!Number.isInteger(k)) {
        k = k.toFixed(2);
    }
    kev.value = k;
});
kev.addEventListener('input', function () {
    let k = this.value;
    let f = (k - 273.15) * 9 / 5 + 32;
    let c = k - 273.15;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
    }
    far.value = f;
    if (!Number.isInteger(c)) {
        c = c.toFixed(4);
    }
    cel.value = c;
});
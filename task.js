window.addEventListener(
    'load',
    () => {
        eda();
    }
);

 function eda() {
    var tovar = [
        'Молоко',
        'Хлеб',
        'Колбаса',
        'Яйца',
        'Помидоры',
        'Записаться к психологу'
    ] 
    for (var i in tovar) {
        var pr = document.createElement('input');
        pr.setAttribute('type', 'checkbox');
        pr.setAttribute('id', 'b' + i);      
        pr.setAttribute('value', tovar[i]);

        pr.addEventListener(
            'change',
            (evn) => {
                if (evn.target.checked) {
                    var li = document.createElement('li');
                    li.setAttribute('id', 'q' + evn.target.id);
                    var txt = document.createTextNode(evn.target.value);
                    li.appendChild(txt);
                    zzz.appendChild(li);
                } else {
                    var elm = document.getElementById('q' + evn.target.id);
                    zzz.removeChild(elm);
                }
            }
        );
        var lb = document.createElement('label');
        lb.setAttribute('for', 'b' + i);
        var txt = document.createTextNode(tovar[i]);
        lb.appendChild(txt); 
        allfood.appendChild(pr);
        allfood.appendChild(lb);
        i ++;
    }
 }
;
(function () {
    "use strict";
    const listElementTmpl = document.getElementById('empl-tmpl').innerHTML;
    const unsortedList = document.querySelector('.bulleted');
    var xhr = new XMLHttpRequest();
    let listOfElements = '';
    xhr.onload = (function () {
        const jsonData = JSON.parse(this.response);
        jsonData.forEach(element => {
            let employeeStatus = (element.inoffice) ? "in" : "out",
                employeeName = element.name;
            console.log(element);
            listOfElements += listElementTmpl
                .replace(/{{employeeStatus}}/, employeeStatus)
                .replace(/{{employeeName}}/, employeeName);
        });
        unsortedList.innerHTML = listOfElements;
    });
    xhr.open('GET', './data/employees.json', true);
    xhr.send();

})();

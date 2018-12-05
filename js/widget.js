;
(function () {
    "use strict";
    const listElementTmpl = document.getElementById('empl-tmpl').innerHTML;
    const unsortedList = document.querySelector('.bulleted');

    const jsonData = [{
            "name": "Aimee",
            "inoffice": false
        },
        {
            "name": "Amit",
            "inoffice": false
        },
        {
            "name": "Andrew",
            "inoffice": true
        },
        {
            "name": "Ben",
            "inoffice": true
        },
        {
            "name": "Elizabeth",
            "inoffice": true
        },
        {
            "name": "Guil",
            "inoffice": false
        },
        {
            "name": "Hampton",
            "inoffice": true
        },
        {
            "name": "Jason",
            "inoffice": true
        },
        {
            "name": "Lainie",
            "inoffice": true
        },
        {
            "name": "Kenneth",
            "inoffice": false
        },
        {
            "name": "Pasan",
            "inoffice": true
        },
        {
            "name": "Shawna",
            "inoffice": true
        },
        {
            "name": "Zac",
            "inoffice": false
        }
    ]
    let listOfElements = '';
    jsonData.forEach(element => {
        let employeeStatus = (element.inoffice) ? "in" : "out",
            employeeName = element.name;
        console.log(element);
        listOfElements += listElementTmpl
            .replace(/{{employeeStatus}}/, employeeStatus)
            .replace(/{{employeeName}}/, employeeName);
    });
    unsortedList.innerHTML = listOfElements;

})();
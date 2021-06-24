(function() {

    var form = document.querySelector("#form"),
        emailField = form.querySelector("input[name='email']"),
        imieField = form.querySelector("input[name='imie']"),
        uwagiField = form.querySelector("textarea[name='uwagi']");

    form.addEventListener("submit", function(e) {



        var errors = [];

        if( emailField.value.indexOf("@") === -1 ) {
            e.preventDefault();
            errors.push("Podaj poprawny adres e-mail.");
            emailField.classList.add("invalid");
        }
        else {
            emailField.classList.remove("invalid");
        };

        if( imieField.value === "" ) {
            e.preventDefault();
            errors.push("Podaj swoje imię.");
            imieField.classList.add("invalid");
        }
        else {
            imieField.classList.remove("invalid");
        }


    }, false);




})();


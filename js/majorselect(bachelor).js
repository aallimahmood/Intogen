$(function () {
    var countries = [
        {
            "name": "Angewandte Informatik - Schwerpunkte Ingenieur- oder Medieninformatik (B.Sc.)",
            "code": "Angewandte Informatik - Schwerpunkte Ingenieur- oder Medieninformatik (B.Sc.)"
    },
        {
            "name": "Angewandte Informatik - Systems Engineering (B.Sc.)",
            "code": "Angewandte Informatik - Systems Engineering (B.Sc.)"
    },
        {
            "name": "Angewandte Kognitions- und Medienwissenschaft (B.Sc.)",
            "code": "Angewandte Kognitions- und Medienwissenschaft (B.Sc.)"
    },
        {
            "name": "Angewandte Philosophie (2-Fach-B.A.)",
            "code": "Angewandte Philosophie (2-Fach-B.A.)"
    },
        {
            "name": "Anglophone Studies (2-Fach-B.A.)",
            "code": "Anglophone Studies (2-Fach-B.A.)"
    },
        {
            "name": "Aquatische Biologie (B.Sc.)",
            "code": "Aquatische Biologie (B.Sc.)"
    },
        {
            "name": "Bauingenieurwesen (B.Sc.)",
            "code": "Bauingenieurwesen (B.Sc.)"
    },
        {
            "name": "Betriebswirtschaftslehre (B.Sc., Duisburg)",
            "code": "Betriebswirtschaftslehre (B.Sc., Duisburg)"
    },
        {
            "name": "Betriebswirtschaftslehre (B.Sc., Essen)",
            "code": "Betriebswirtschaftslehre (B.Sc., Essen)"
    },
        {
            "name": "Biologie (B.Sc.)",
            "code": "Biologie (B.Sc.)"
    },
        {
            "name": "Chemie (B.Sc.)",
            "code": "Chemie (B.Sc.)"
    },
        {
            "name": "Christliche Studien (2-Fach-B.A.)",
            "code": "Christliche Studien (2-Fach-B.A.)"
    },
        {
            "name": "Computer Engineering (ISE)(B.Sc.)",
            "code": "Computer Engineering (ISE)(B.Sc.)"
    },
        {
            "name": "Electrical and Electronic Engineering (ISE)(B.Sc.)",
            "code": "Electrical and Electronic Engineering (ISE)(B.Sc.)"
    },
        {
            "name": "Elektrotechnik und Informationstechnik (B.Sc.)",
            "code": "Elektrotechnik und Informationstechnik (B.Sc.)"
    },
        {
            "name": "Energy Science (B.Sc.)",
            "code": "Energy Science (B.Sc.)"
    },
        {
            "name": "Erziehungswissenschaft (B.A.)",
            "code": "Erziehungswissenschaft (B.A.)"
    },
        {
            "name": "Französische Sprache und Kultur (2-Fach-B.A.)",
            "code": "Französische Sprache und Kultur (2-Fach-B.A.)"
    },
        {
            "name": "Germanistik (2-Fach-B.A.)",
            "code": "Germanistik (2-Fach-B.A.)"
    },
        {
            "name": "Geschichte (2-Fach-B.A.)",
            "code": "Geschichte (2-Fach-B.A.)"
    },
        {
            "name": "Globale und Transnationale Soziologie (B.A.)",
            "code": "Globale und Transnationale Soziologie (B.A.)"
    },
        {
            "name": "Informatik (Angewandte Informatik mit den Schwerpunkten Ingenieur- oder Medieninformatik) (B.Sc.)",
            "code": "Informatik (Angewandte Informatik mit den Schwerpunkten Ingenieur- oder Medieninformatik) (B.Sc.)"
    },
        {
            "name": "Informatik (Angewandte Informatik - Systems Engineering) (B.Sc.)",
            "code": "Informatik (Angewandte Informatik - Systems Engineering) (B.Sc.)"
    },
        {
            "name": "Kommunikationswissenschaft (2-Fach-B.A.)",
            "code": "Kommunikationswissenschaft (2-Fach-B.A.)"
    },
        {
            "name": "Kulturwirt (B.A.)",
            "code": "Kulturwirt (B.A.)"
    },
        {
            "name": "BKunstwissenschaft (2-Fach-B.A.)",
            "code": "Kunstwissenschaft (2-Fach-B.A.)"
    },
        {
            "name": "Lehramt an Berufskollegs (Bachelor) (Studienbeginn ab WS 2016/17)",
            "code": "Lehramt an Berufskollegs (Bachelor) (Studienbeginn ab WS 2016/17)"
    },
        {
            "name": "Lehramt an Grundschulen (Bachelor) (Studienbeginn ab WS 2016/17)",
            "code": "Lehramt an Grundschulen (Bachelor) (Studienbeginn ab WS 2016/17)"
    },
        {
            "name": "Lehramt an Gymnasien und Gesamtschulen (Bachelor) (Studienbeginn ab WS 2016/17)",
            "code": "Lehramt an Gymnasien und Gesamtschulen (Bachelor) (Studienbeginn ab WS 2016/17)"
    },
        {
            "name": "Lehramt an Haupt-, Real-, Sekundar- und Gesamtschulen (Bachelor) (Studienbeginn ab WS 2016/17)",
            "code": "Lehramt an Haupt-, Real-, Sekundar- und Gesamtschulen (Bachelor) (Studienbeginn ab WS 2016/17)"
    },
        {
            "name": "Maschinenbau (B.Sc.)",
            "code": "Maschinenbau (B.Sc.)"
    },
        {
            "name": "Mathematik - mit einem Anwendungsfach (B.Sc)",
            "code": "Mathematik - mit einem Anwendungsfach (B.Sc)"
    },
        {
            "name": "Mechanical Engineering (ISE)(B.Sc.)",
            "code": "Mechanical Engineering (ISE)(B.Sc.)"
    },
        {
            "name": "Medizinische Biologie (B.Sc.)",
            "code": "Medizinische Biologie (B.Sc.)"
    },
        {
            "name": "Medizintechnik (B.Sc.)",
            "code": "Medizintechnik (B.Sc.)"
    },
        {
            "name": "Metallurgy and Metal Forming (dual) (B.Sc.)",
            "code": "Metallurgy and Metal Forming (dual) (B.Sc.)"
    },
        {
            "name": "Metallurgy and Metal Forming (ISE)(B.Sc.)",
            "code": "Metallurgy and Metal Forming (ISE)(B.Sc.)"
    },
        {
            "name": "Moderne Ostasienstudien (B.A.)",
            "code": "Moderne Ostasienstudien (B.A.)"
    },
        {
            "name": "Molekularbiologie (B.Sc.)",
            "code": "Molekularbiologie (B.Sc.)"
    },
        {
            "name": "NanoEngineering (B.Sc.)",
            "code": "NanoEngineering (B.Sc.)"
    },
        {
            "name": "Niederlandistik (2-Fach-B.A.)",
            "code": "Niederlandistik (2-Fach-B.A.)"
    },
        {
            "name": "Philosophie, Angewandte (2-Fach-B.A.)",
            "code": "Philosophie, Angewandte (2-Fach-B.A.)"
    },
        {
            "name": "Physik (B.Sc.)",
            "code": "Physik (B.Sc.)"
    },
        {
            "name": "Politikwissenschaft (B.A.)",
            "code": "Politikwissenschaft (B.A.)"
    },
        {
            "name": "Psychologie (B.Sc.)",
            "code": "Psychologie (B.Sc.)"
    },
        {
            "name": "Soziale Arbeit (B.A.)",
            "code": "Soziale Arbeit (B.A.)"
    },
        {
            "name": "Soziologie (B.A.)",
            "code": "Soziologie (B.A.)"
    },
        {
            "name": "Spanische Sprache und Kultur (2-Fach-B.A.)",
            "code": "Spanische Sprache und Kultur (2-Fach-B.A.)"
    },
        {
            "name": "Structural Engineering (ISE)(B.Sc)",
            "code": "Structural Engineering (ISE)(B.Sc)"
    },
        {
            "name": "Technomathematik (B.Sc.)",
            "code": "Technomathematik (B.Sc.)"
    },
        {
            "name": "Türkeistudien (2-Fach-B.A.)",
            "code": "Türkeistudien (2-Fach-B.A.)"
    },
        {
            "name": "Volkswirtschaftslehre (B.Sc.)",
            "code": "Volkswirtschaftslehre (B.Sc.)"
    },
        {
            "name": "Water Science Wasser: Chemie, Analytik, Mikrobiologie (B.Sc.)",
            "code": "Water Science Wasser: Chemie, Analytik, Mikrobiologie (B.Sc.)"
    },
        {
            "name": "Wirtschaftsinformatik (B.Sc.)",
            "code": "Wirtschaftsinformatik (B.Sc.)"
    },
        {
            "name": "Wirtschaftsingenieurwesen (B.Sc.)",
            "code": "Wirtschaftsingenieurwesen (B.Sc.)"
    },
        {
            "name": "Wirtschaftsmathematik (B.Sc.)",
            "code": "Wirtschaftsmathematik (B.Sc.)"
    },
        {
            "name": "Wirtschaftspädagogik (B.Sc.)",
            "code": "Wirtschaftspädagogik (B.Sc.)"
    }
        
]

    var countryInput = $(document).find('.countrypicker');
    var countryList = "";


    //set defaults
    for (i = 0; i < countryInput.length; i++) {

        //check if flag
        flag = countryInput.eq(i).data('flag');
        
        if (flag) {
            countryList = "";
            
            //for each build list with flag
            $.each(countries, function (index, country) {
                var flagIcon = "css2/flags/" + country.code + ".png";
                countryList += "<option data-country-code='" + country.code + "' data-tokens='" + country.code + " " + country.name + "' style='padding-left:25px; background-position: 4px 7px; background-image:url(" + flagIcon + ");background-repeat:no-repeat;' value='" + country.name + "'>" + country.name + "</option>";
            });

            //add flags to button
            countryInput.eq(i).on('loaded.bs.select', function (e) {
                var button = $(this).closest('.btn-group').children('.btn');
                button.hide();
                var def = $(this).find(':selected').data('country-code');
                var flagIcon = "css2/flags/" + def + ".png";
                button.css("background-size", '20px');
                button.css("background-position", '10px 9px');
                button.css("padding-left", '40px');
                button.css("background-repeat", 'no-repeat');
                button.css("background-image", "url('" + flagIcon + "'");
                button.show();
            });

            //change flag on select change
            countryInput.eq(i).on('change', function () {
                button = $(this).closest('.btn-group').children('.btn');
                def = $(this).find(':selected').data('country-code');
                flagIcon = "css2/flags/" + def + ".png";
                button.css("background-size", '20px');
                button.css("background-position", '10px 9px');
                button.css("padding-left", '40px');
                button.css("background-repeat", 'no-repeat');
                button.css("background-image", "url('" + flagIcon + "'");
				window.location=('http://www.baidu.com')
            });
        }else{
            countryList ="";
            
            //for each build list without flag
            $.each(countries, function (index, country) {
                countryList += "<option data-country-code='" + country.code + "' data-tokens='" + country.code + " " + country.name + "' value='" + country.name + "'>" + country.name + "</option>";
            });
            
            
        }
        
         //append country list
        countryInput.eq(i).html(countryList);


        //check if default
        def = countryInput.eq(i).data('default');
        //if there's a default, set it
        if (def) {
            countryInput.eq(i).val(def);
        }


    }









});
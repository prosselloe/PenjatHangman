/* 
Versió β: Versió amb Estructures de Dades Joc del Penjat: estructures.html i estructures.js
*/
    // Variables Globals.
    var Paraula = [];
    var Lletres = ["_", "_", "_", "_", "_", "_", "_"];
    var Vides = 7;

    // Llista de paraules per al joc i les pistes associades
    var paraules = ["cordes", "fetge", "forca", "jutges", 
        "jutjat", "mengen", "penjat", "quinta", "setze"];
    var pistes = ["A la quinta forca", 
        "A ca un penjat, no hi anomenis cordes", 
        "Setze jutges d'un jutjat mengen fetge d'un penjat"];
    var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];
    
    // Simulam una taula de base de dades amb un array d'objectes
    var taula = [
        {"paraula": "cordes", "pista": "A ca un penjat, no hi anomenis cordes"},
        {"paraula": "fetge",  "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"paraula": "forca",  "pista": "A la quinta forca"},
        {"paraula": "jutges", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"paraula": "jutjat", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"paraula": "mengen", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"paraula": "penjat", "pista": "A ca un penjat, no hi anomenis cordes"},
        {"paraula": "quinta", "pista": "A la quinta forca"},
        {"paraula": "setze",  "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}    
    ];
    
    // Escull una paraula aleatòriament
    var aleatori = Math.floor(Math.random() * paraules.length);
    var paraula = paraules[aleatori];
    var pista = pistes[paraulespistes[aleatori]];
    
    // Alternativament, fent servir l'array d'objectes
    var paraula = taula[aleatori].paraula;
    var pista = taula[aleatori].pista;
    
    // Marcam cada lletra amb un "_"
    for (var i = 0; i < paraula.length; i++) {
        Paraula[i] = "_";
    }

    // Comprovam si la lletra es troba a la Paraula.
    function Comprovar() {
        // Variables Locals.
        var lletra = document.getElementById("lletra").value;
        // Assignam el valor <input id="lletra" a lletra, 
        // i deixam <input id="lletra" en blanc.
        document.getElementById("lletra").value = "";
        // window.alert(lletra);
        
        // Convertim les majúsculues a minúscules
        lletra = lletra.toLowerCase();

        // Eliminam els accents o dièresis de les vocals
        switch (lletra) {
            case "á":
            case "à":
                lletra = "a";
                break;
            case "é":
            case "è":
                lletra = "e";
                break;
            case "í":
            case "ï":
                lletra = "i";
                break;
            case "ó":
            case "ò":
                lletra = "o";
                break;
            case "ú":
            case "ü":
                lletra = "u";
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }

        /* 
         * Comprovam que la lletra no sigui repetida, Inici
        */    
        if ((Paraula.indexOf(lletra) != -1) || (Lletres.indexOf(lletra) != -1)) {
            window.alert("Lletra repetida!");
        } else {
            
        /*
         * Cercam la posició de la lletra a la paraula, si no hi es, obtenim -1
         */
        var pos = paraula.indexOf(lletra);
        if (pos != -1) {
            if (document.getElementById('off').hidden) {            
                document.getElementById("miau").play();
            }
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = false;
            document.getElementById("disfraz1").hidden = true;
            window.alert("Has encertat!");

            // Afegim lletra a Paraula i actualitzam la pantalla.
            for (var i = pos; i < paraula.length; i++) {
              if (paraula[i] == lletra) {
                Paraula[i] = lletra;
              }
            }
            document.getElementById("Paraula").innerHTML = Paraula;
        } else if (((lletra >= "a") && (lletra <= "z")) || 
                    (lletra == "ñ") || (lletra == "-") || 
                    (lletra == "ç") || (lletra == "·")) {
            if (document.getElementById('off').hidden) {
                document.getElementById("boom_cloud").play();
            }
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = false;
            window.alert("Has fallat!");

            // Afegim lletra a Lletres i actualitzam la pantalla.
            // Lletres = Lletres + "<del>" + lletra + "<del>,";
            // Lletres.push(lletra);
            Lletres[7 - Vides] = lletra;
            document.getElementById("Lletres").innerHTML = Lletres;
            
            // Decrementam el comptador Vides.    
            // Vides = Vides - 1;
            Vides--;
            // window.alert(Vides);

            // Mostram la imatge corresponent.
            MostraImg();
        } else {
            window.alert("Caràcter incorrecte!");
        }
        
        /*
         * Comprovam que la lletra no sigui repetida. Final
        */
        }
        
        document.getElementById("lletra").focus();

        // Actualitzam Vides a la pantalla.
        document.getElementById("Vides").innerHTML = 
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        // Comprovam si has perdut! o has guanyat!.
        if (Vides <= 0) {
            window.alert("i has perdut!");
            document.body.style.backgroundImage = "url('img/Jungle.png')";
            document.getElementById("disfraz1").hidden = true;
            document.getElementById("rotar").hidden = false;
            if (document.getElementById('off').hidden) {
                document.getElementById("cat-fight").play();
                const myTimeout6 = setTimeout(BellTollX3Play, 6000);
            }            
            AturaTot();
        } else {
            if (Paraula.indexOf("_") == -1) {
                AmagaImg();
                document.getElementById("ahorcado").hidden = false;
                
                // Calculam i mostram la puntuació
                var punts = paraula.length * Vides * 10 - document.getElementById("Segons").innerHTML;
                if (punts < 0) { punts = 0; };
                document.getElementById("Punts").innerHTML = "Puntuació: " + punts;
                
                window.alert("i has guanyat!");
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("caminar").hidden = false;
                if (document.getElementById('off').hidden) {
                    document.getElementById("cheer").play();
                }
                AturaTot();
            } else {
                if (document.getElementById('off').hidden) {
                    // document.getElementById("clock_ticking").loop = true;
                    document.getElementById("clock_ticking").play();
                    const myTimeout3 = setTimeout(BellTollPlay, 3000);
                }
            }
        }
    }

    function BellTollPlay() {
        document.getElementById("bell_toll").play();
    }    

    function BellTollX3Play() {
        window.alert("En pau descansi – RIP!");
        document.getElementById("bell_toll_x3").play();
    }            

    // Deshabilitam tant <input id="lletra" com <button id="comprovar".
    function AturaTot() {
        document.getElementById("lletra").disabled = true;
        document.getElementById("comprovar").disabled = true;
        document.getElementById('teclat').disabled = true;
        document.getElementById('sons').disabled = true;
        document.getElementById("pista").disabled = true;
        document.getElementById("Segons").hidden = true;    
    }

    // Amagam totes les imatges.
    function AmagaImg() {
        document.getElementById("ahorcado_6").hidden = true;
        document.getElementById("ahorcado_5").hidden = true;
        document.getElementById("ahorcado_4").hidden = true;
        document.getElementById("ahorcado_3").hidden = true;
        document.getElementById("ahorcado_2").hidden = true;
        document.getElementById("ahorcado_1").hidden = true;
        document.getElementById("ahorcado_0").hidden = true;
        document.getElementById("ahorcado").hidden = true;

        // document.getElementById("disfraz3").hidden = true;
        document.getElementById("disfraz2").hidden = true;
        document.getElementById("disfraz1").hidden = true;
        document.getElementById("caminar").hidden = true;
        document.getElementById("rotar").hidden = true;

        document.getElementById("Audios").style.display = "none";
        document.getElementById('Teclat').hidden = true;
        
        document.getElementById("Paraula").innerHTML = Paraula;
        document.body.style.display = "block";
    }

    // Mostram la imatge corresponent.
    function MostraImg() {
        switch (Vides) {
            case 6:
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
              document.getElementById("ahorcado_6").hidden = false;
              break;
            case 5:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
                document.getElementById("ahorcado_5").hidden = false;
                document.getElementById("ahorcado_6").hidden = true;
                break;
            case 4:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor3
                document.getElementById("ahorcado_4").hidden = false;
                document.getElementById("ahorcado_5").hidden = true;
                break;
            case 3:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor4
                document.getElementById("ahorcado_3").hidden = false;
                document.getElementById("ahorcado_4").hidden = true;
                break;
            case 2:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor5
                document.getElementById("ahorcado_2").hidden = false;
                document.getElementById("ahorcado_3").hidden = true;
                break;
            case 1:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor6
                document.getElementById("ahorcado_1").hidden = false;
                document.getElementById("ahorcado_2").hidden = true;
                break;
            case 0:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor7
                document.getElementById("ahorcado_0").hidden = false;
                document.getElementById("ahorcado_1").hidden = true;
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }
    }
    
    // HTML includes are done by JavaScript
    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            elmnt.innerHTML = this.responseText;
                        }
                        if (this.status == 404) {
                            elmnt.innerHTML = "Page not found.";
                        }
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("w3-include-html");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
            }
        }
    }
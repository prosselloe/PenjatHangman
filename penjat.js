/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    // Variables Globals.
    var Paraula = ""; 
    var Lletres = "";
    var Vides = 7;

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

        // L'abecedari català + castellà es composa 
        // de les vint-i-vuit lletres següents: 
        // a, b, c, ç, d, e, f, g, h, i, j, k, l, m, (Has encertat!)
        // n, ñ, o, p, q, r, s, t, u, v, w, x, y, z. (Has fallat!)
        if (((lletra >= "a") && (lletra <= "m")) || (lletra == "ç") || 
             (lletra == "·")) {
            document.getElementById("miau").play();
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = false;
            document.getElementById("disfraz1").hidden = true;
            window.alert("Has encertat!");

            // Afegim lletra a Paraula i actualitzam la pantalla.
            Paraula = Paraula + lletra + " ";
            document.getElementById("Paraula").innerHTML = Paraula;
        } else if (((lletra >= "n") && (lletra <= "z")) || (lletra == "ñ") || 
                    (lletra == "-")) {
            document.getElementById("boom_cloud").play();
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = false;
            window.alert("Has fallat!");

            // Afegim lletra a Lletres i actualitzam la pantalla.
            Lletres = Lletres + "<del>" + lletra + "<del> ";
            document.getElementById("Lletres").innerHTML = Lletres;

            // Decrementam el comptador Vides.    
            Vides = Vides - 1;
            // window.alert(Vides);

            // Mostram la imatge corresponent.
            MostraImg();
        } else {
            window.alert("Caràcter incorrecte!");
        }
        document.getElementById("lletra").focus();

        // Actualitzam Vides a la pantalla.
        document.getElementById("Vides").innerHTML = 
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        // Comprovam si has perdut! o has guanyat!.
        if (Vides <= 0) {
            window.alert("i has perdut!");
            document.body.style.backgroundImage = "url('img/Jungle.png')";
            document.getElementById("disfraz1").hidden = true;
            document.getElementById("rotar").hidden = false;
            document.getElementById("cat-fight").play();
            const myTimeout6 = setTimeout(BellTollX3Play, 6000);
            AturaTot();
        } else {
            if (Paraula.length >= 14) {
                AmagaImg();
                document.getElementById("ahorcado").hidden = false;
                window.alert("i has guanyat!");
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("caminar").hidden = false;
                document.getElementById("cheer").play();
                AturaTot();
            } else {
                // document.getElementById("clock_ticking").loop = true;
                document.getElementById("clock_ticking").play();
                const myTimeout3 = setTimeout(BellTollPlay, 3000);
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

    // Deshabilitam tant <input id="lletra" com <button id="Comprovar".
    function AturaTot() {
        document.getElementById("lletra").disabled = true;
        document.getElementById("Comprovar").disabled = true;
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

        document.getElementById("Audios").hidden = true;
        document.getElementById('Teclat').hidden = true;
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
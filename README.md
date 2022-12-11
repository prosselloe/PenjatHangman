# Penjat (Hangman)
Joc del Penjat - Juego del Ahorcado -  Hangman Game
        <h2><a href="https://penjat-github.netlify.app">Índex</a></h2>
        <ul>
            <li><a href="https://penjat-github.netlify.app/prototip.html">Versió Pre-alfa o Prototip HTML/JavaScript</a></li>
            <li><a href="https://penjat-github.netlify.app/imatgesons.html">Versió α: Versió amb Imatges i Sons</a></li>
            <li><a href="https://penjat-github.netlify.app/estructures.html">Versió β: Versió amb Estructures de Dades</a></li>
            <li><a href="https://penjat-github.netlify.app/basedades.html">Versió γ: Versió amb Base de Dades</a></li>
        </ul>  
        <h1>Versió β Joc del Penjat</h1>
        <div><img src="img/en-construccio.jpg" alt="En construcció" width=640px; height=480px;/></div>     
        <h1>Versió α Joc del Penjat</h1>
        <table>
            <tr>
              <td>
                    <input id="lletra" type="text" 
                           placeholder="Escriu una lletra minúscula" maxlength="1"> 
                    <button id="Comprovar" onclick="Comprovar()">Comprovar</button>
                <h2>Paraula: 
                    <a href="https://prosselloe.wordpress.com/?p=5970">
                        <font size=3>Demanes sopes?</font></a></h2>
                    <div id="Paraula" style="color: white;">
                        <strong>_ _ _ _ _ _ _</strong></div>
                <h2>Vides: 
                    <a href="https://pccd.dites.cat/p/Tenir_set_vides%2C_com_els_gats">
                        <font size=3>Un moix en té set?</font></a></h2>
                    <div id="Vides" style="color: blue;">
                        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</strong></div>
                <h2>Lletres: 
                    <a href="https://pccd.dites.cat/p/De_lletres">
                        <font size=3>Ets de lletres?</font></a></h2>
                    <div id="Lletres" style="color: red;">
                        <strong><del>_ _ _ _ _ _ _</del></strong></div>
            </td>
            <td>
                <img src="img/ahorcado_6.png" id="ahorcado_6" style="width:280px;height:270px;">
                <img src="img/ahorcado_5.png" id="ahorcado_5" style="width:280px;height:270px;">
                <img src="img/ahorcado_4.png" id="ahorcado_4" style="width:280px;height:270px;">
                <img src="img/ahorcado_3.png" id="ahorcado_3" style="width:280px;height:270px;">
                <img src="img/ahorcado_2.png" id="ahorcado_2" style="width:280px;height:270px;">
                <img src="img/ahorcado_1.png" id="ahorcado_1" style="width:280px;height:270px;">
                <img src="img/ahorcado_0.png" id="ahorcado_0" style="width:280px;height:270px;">
                <a href="img/ahorcado.jpg">
                <img src="img/ahorcado.jpg" id="ahorcado" style="width:234px;height:270px;"></a>
            </td>          
          </tr>
          <tr>
            <td>
                <br>
                <strong>URLpistes: 
                    <a href="https://pccd.dites.cat/p/A_la_quinta_forca">Dita 1</a>
                    <a href="https://pccd.dites.cat/p/A_ca_un_penjat%2C_no_hi_anomenis_cordes">Dita 2</a>
                    <a href="https://pccd.dites.cat/p/Setze_jutges_d%27un_jutjat_mengen_fetge_d%27un_penjat">Dita 3</a>
                </strong>
                <p><strong>Crèdits: 
                    <a href="https://prosselloe.wordpress.com/?p=5862">
                        Joc Penjat on Scratch</a>
                </strong></p>
            </td>          
            <td>
                <br>
                <strong>YouTube: 
                    <a href="https://youtu.be/v53rEMHghJU?list=PLv1JHCp6B60w_KnMTu7jDdlDZ6Z0-WJ-j">
                        Joc Penjat on Scratch</a>
                </strong>
                <p><strong>Wikis: 
                    <a href="https://ca.wikipedia.org/wiki/Penjat">Penjat</a>
                    <a href="https://es.wikipedia.org/wiki/Ahorcado_(juego)">Ahorcado</a>
                    <a href="https://en.wikipedia.org/wiki/Hangman_(game)">Hangman</a>
                </strong></p>
            </td>          
          </tr>
        </table>  
        <div id="Guia">
            <img src="img/disfraz1.png" id="disfraz1" style="width:86px;height:90px;">
            <img src="img/disfraz2.png" id="disfraz2" style="width:86px;height:90px;">
            <img src="img/disfraz3.png" id="disfraz3" style="width:86px;height:90px;">
            <img src="img/caminar.gif" id="caminar" style="width:86px;height:90px;">
            <img src="img/rotar.gif" id="rotar" style="width:86px;height:90px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://penjat--github-netlify-app.translate.goog/imatgesons.html?_x_tr_sl=auto&_x_tr_tl=ca&_x_tr_hl=ca">
                <img src="img/ca.png" alt="ca"/></a>
            <a href="https://penjat--github-netlify-app.translate.goog/imatgesons.html?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es">
                <img src="img/es.png" alt="es"/></a>
            <a href="https://penjat--github-netlify-app.translate.goog/imatgesons.html?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en">
                <img src="img/gb.png" alt="en"/></a>
            <a href="https://penjat--github-netlify-app.translate.goog/imatgesons.html?_x_tr_sl=auto&_x_tr_tl=de&_x_tr_hl=de">
                <img src="img/de.png" alt="de"/></a>
            <a href="https://penjat--github-netlify-app.translate.goog/imatgesons.html?_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=fr">
                <img src="img/fr.png" alt="fr"/></a>
            <a href="https://penjat--github-netlify-app.translate.goog/imatgesons.html?_x_tr_sl=auto&_x_tr_tl=it&_x_tr_hl=it">
                <img src="img/it.png" alt="it"/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button id="teclat" onclick="document.getElementById('Teclat').hidden = !document.getElementById('Teclat').hidden;">
                <img src="img/keyboard.png" alt="ca"/></button>
        </div>
        <div id="Teclat">
            <table><strong>
                <tr>
                  <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button id="q" onclick="document.getElementById('lletra').value = 'q';">q</button>
                    <button id="w" onclick="document.getElementById('lletra').value = 'w';">w</button>
                    <button id="e" onclick="document.getElementById('lletra').value = 'e';">e</button>
                    <button id="r" onclick="document.getElementById('lletra').value = 'r';">r</button>
                    <button id="t" onclick="document.getElementById('lletra').value = 't';">t</button>
                    <button id="y" onclick="document.getElementById('lletra').value = 'y';">y</button>
                    <button id="u" onclick="document.getElementById('lletra').value = 'u';">u</button>
                    <button id="i" onclick="document.getElementById('lletra').value = 'i';">i</button>
                    <button id="o" onclick="document.getElementById('lletra').value = 'o';">o</button>
                    <button id="p" onclick="document.getElementById('lletra').value = 'p';">p</button>
                    <!--
                    <button id="agut" onclick="alert('Sense vocals accentuades!');" style="color:red">´</button>
                    -->
                  </td>          
                </tr>
                <tr>
                  <td>
                    &nbsp;&nbsp;
                    <button id="a" onclick="document.getElementById('lletra').value = 'a';">a</button>
                    <button id="s" onclick="document.getElementById('lletra').value = 's';">s</button>
                    <button id="d" onclick="document.getElementById('lletra').value = 'd';">d</button>
                    <button id="f" onclick="document.getElementById('lletra').value = 'f';">f</button>
                    <button id="g" onclick="document.getElementById('lletra').value = 'g';">g</button>
                    <button id="h" onclick="document.getElementById('lletra').value = 'h';">h</button>
                    <button id="j" onclick="document.getElementById('lletra').value = 'j';">j</button>
                    <button id="k" onclick="document.getElementById('lletra').value = 'k';">k</button>
                    <button id="l" onclick="document.getElementById('lletra').value = 'l';">l</button>
                    <button id="ñ" onclick="document.getElementById('lletra').value = 'ñ';" style="color:blue">ñ</button>
                    <!--
                    <button id="dieresi" onclick="alert('Sense vocals amb dièrsi!');" style="color:red">¨</button>
                    -->
                    <button id="intro" onclick="Comprovar();">┘</button>
                  </td>          
                </tr>
                <tr>
                  <td>
                    <button id="shift" onclick="alert('Sense majúscules!');" style="color:red">↑</button>
                    <button id="z" onclick="document.getElementById('lletra').value = 'z';">z</button>
                    <button id="x" onclick="document.getElementById('lletra').value = 'x';">x</button>
                    <button id="c" onclick="document.getElementById('lletra').value = 'c';">c</button>
                    <button id="v" onclick="document.getElementById('lletra').value = 'v';">v</button>
                    <button id="b" onclick="document.getElementById('lletra').value = 'b';">b</button>
                    <button id="n" onclick="document.getElementById('lletra').value = 'n';">n</button>
                    <button id="m" onclick="document.getElementById('lletra').value = 'm';">m</button>
                    <button id="ç" onclick="document.getElementById('lletra').value = 'ç';" style="color:blue">ç</button>
                    <button id="volat" onclick="document.getElementById('lletra').value = '·';" style="color:blue">·</button>
                    <button id="guio" onclick="document.getElementById('lletra').value = '-';" style="color:blue">-</button>
                    <!--
                    <button id="greu" onclick="alert('Sense vocals accentuades!');" style="color:red">`</button>
                    -->
                  </td>          
                </tr>
            </strong></table>
        </div>
        <h1>Prototip Joc del Penjat</h1>
            <input id="lletra" type="text" 
                   placeholder="Escriu una lletra minúscula" maxlength="1"> 
            <button id="Comprovar" onclick="Comprovar()">Comprovar</button>
        <h2>Paraula</h2>
            <div id="Paraula">_ _ _ _ _ _ _</div>
        <h2>Vides</h2>
            <div id="Vides"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</strong></div>
        <h2>Lletres</h2>
            <div id="Lletres">_ _ _ _ _ _ _</div>
        <br>
        <h1>Crèdits</h1>
        <p><a href="https://prosselloe.wordpress.com/?p=5862">
            El joc del penjat on Scratch</a></p>

# Penjat (Hangman)
Joc del Penjat - Juego del Ahorcado -  Hangman Game
        <h1>&nbsp;Versió amb Imatges i Sons Joc del Penjat</h1>
        <table>
            <tr>
              <td>
                    <input id="lletra" type="text" 
                           placeholder="Escriu una lletra minúscula" maxlength="1"> 
                    <button id="Comprovar" onclick="Comprovar()">Comprovar</button>
                <h2>Paraula: 
                    <a href="https://www.arabalears.cat/portada/vols-sopes-record-nostres-padrins_129_3048940.html">
                        <font size=3>Demanes sopes?</font></a></h2>
                    <div id="Paraula" style="color: white;">
                        <strong>_ _ _ _ _ _ _</strong></div>
                <h2>Vides: 
                    <a href="https://pccd.dites.cat/p/Tenir_set_vides%2C_com_els_gats">
                        <font size=3>Tens 7 vides com un moix!</font></a></h2>
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
                    <a href="https://pccd.dites.cat/p/A_la_quinta_forca">Dita 1</a> - 
                    <a href="https://pccd.dites.cat/p/A_ca_un_penjat%2C_no_hi_anomenis_cordes">Dita 2</a> - 
                    <a href="https://pccd.dites.cat/p/Setze_jutges_d%27un_jutjat_mengen_fetge_d%27un_penjat">Dita 3</a>
                </strong>
                <p> <strong>Crèdits: 
                    <a href="https://prosselloe.wordpress.com/?p=5862">El joc del penjat on Scratch</a>
                </strong></p>
            </td>          
            <td>
                <br>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YouTube: 
                    <a href="https://youtu.be/v53rEMHghJU?list=PLv1JHCp6B60w_KnMTu7jDdlDZ6Z0-WJ-j">
                        El joc del penjat on Scratch</a>
                </strong>
                <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wikis: 
                    <a href="https://ca.wikipedia.org/wiki/Penjat">Penjat</a> - 
                    <a href="https://es.wikipedia.org/wiki/Ahorcado_(juego)">Ahorcado</a> - 
                    <a href="https://en.wikipedia.org/wiki/Hangman_(game)">Hangman</a>
                </strong></p>
            </td>          
          </tr>
        </table>  
        <audio id="mystery">      <source src="aud/mystery.mp3" type="audio/mpeg"></audio>
        <audio id="clock_ticking"><source src="aud/clock_ticking.mp3" type="audio/mpeg"></audio>
        <audio id="miau">         <source src="aud/miau.mp3" type="audio/mpeg"></audio>
        <audio id="cheer">        <source src="aud/cheer.mp3" type="audio/mpeg"></audio>
        <audio id="boom_cloud">   <source src="aud/boom_cloud.mp3" type="audio/mpeg"></audio>
        <audio id="bell_toll">    <source src="aud/bell_toll_x3.mp3" type="audio/mpeg"></audio>
        <audio id="cat-fight">    <source src="aud/cat-fight.mp3" type="audio/mpeg"></audio>
        <div id="Guia">
            <img src="img/disfraz3.png" id="disfraz3" style="width:86px;height:90px;">
            <img src="img/disfraz2.png" id="disfraz2" style="width:86px;height:90px;">
            <img src="img/disfraz1.png" id="disfraz1" style="width:86px;height:90px;">
        </div>
        <div id="Caminar">
            <img src="img/caminar.gif" id="caminar" style="width:86px;height:90px;">
        </div>
        <div id="Rotar">
            <img src="img/rotar.gif" id="rotar" style="width:86px;height:90px;">
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
        <br><br><br>
        <p><a href="https://prosselloe.wordpress.com/?p=5862">
            El joc del penjat on Scratch</a></p>

# Crèdits
        <h1><a href="https://prosselloe.wordpress.com/2022/11/22/el-joc-del-penjat-on-scratch/">El joc del penjat on&nbsp;Scratch</a></h1>

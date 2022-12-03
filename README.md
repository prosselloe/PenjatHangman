# PenjatHangman
Joc del Penjat - Juego del Ahorcado -  Hangman Game
        <h1>Versió amb Imatges i Sons Joc del Penjat</h1>
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
                        <font size=3>Tens 7 vides com...</font></a></h2>
                    <div id="Vides" style="color: blue;">
                        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</strong></div>
                <h2>Lletres: 
                    <a href="https://pccd.dites.cat/p/De_lletres">
                        <font size=3>Ets de lletres o...</font></a></h2>
                    <div id="Lletres" style="color: red;">
                        <strong>_ _ _ _ _ _ _</strong></div>
                <br>
                <strong>URLpistes: 
                    <a href="https://pccd.dites.cat/p/A_la_quinta_forca">Dita 1</a> - 
                    <a href="https://pccd.dites.cat/p/A_ca_un_penjat%2C_no_hi_anomenis_cordes">Dita 2</a> - 
                    <a href="https://pccd.dites.cat/p/Setze_jutges_d%27un_jutjat_mengen_fetge_d%27un_penjat">Dita 3</a>
                </strong>
                <br>
                <p><strong>Crèdits: 
                    <a href="https://prosselloe.wordpress.com/?p=5862">El joc del penjat on Scratch</a>
                </strong></p>
            </td>
            <td>
                <img src="public_html/img/ahorcado_6.png" id="ahorcado_6" style="width:300px;height:295px;">
                <img src="public_html/img/ahorcado_5.png" id="ahorcado_5" style="width:300px;height:295px;">
                <img src="public_html/img/ahorcado_4.png" id="ahorcado_4" style="width:300px;height:295px;">
                <img src="public_html/img/ahorcado_3.png" id="ahorcado_3" style="width:300px;height:295px;">
                <img src="public_html/img/ahorcado_2.png" id="ahorcado_2" style="width:300px;height:295px;">
                <img src="public_html/img/ahorcado_1.png" id="ahorcado_1" style="width:300px;height:295px;">
                <img src="public_html/img/ahorcado_0.png" id="ahorcado_0" style="width:300px;height:295px;">
                <a href="http://localhost:8383/Penjat/img/ahorcado.jpg">
                <img src="public_html/img/ahorcado.jpg" id="ahorcado" style="width:300px;height:347px;"></a>
            </td>
          </tr>
        </table>  
        <audio id="mystery">      <source src="public_html/aud/mystery.mp3" type="audio/mpeg"></audio>
        <audio id="clock_ticking"><source src="public_html/aud/clock_ticking.mp3" type="audio/mpeg"></audio>
        <audio id="miau">         <source src="public_html/aud/miau.mp3" type="audio/mpeg"></audio>
        <audio id="cheer">        <source src="public_html/aud/cheer.mp3" type="audio/mpeg"></audio>
        <audio id="boom_cloud">   <source src="public_html/aud/boom_cloud.mp3" type="audio/mpeg"></audio>
        <audio id="bell_toll">    <source src="public_html/aud/bell_toll_x3.mp3" type="audio/mpeg"></audio>
        <audio id="cat-fight">    <source src="public_html/aud/cat-fight.mp3" type="audio/mpeg"></audio>
        <div id="Guia">
            <img src="public_html/img/disfraz3.png" id="disfraz3" style="width:100px;height:104px;">
            <img src="public_html/img/disfraz2.png" id="disfraz2" style="width:100px;height:104px;">
            <img src="public_html/img/disfraz1.png" id="disfraz1" style="width:100px;height:104px;">
        </div>
        <div id="Caminar">
            <img src="public_html/img/caminar.gif" id="caminar" style="width:100px;height:104px;">
        </div>
        <div id="Rotar">
            <img src="public_html/img/rotar.gif" id="rotar" style="width:100px;height:104px;">
        </div>

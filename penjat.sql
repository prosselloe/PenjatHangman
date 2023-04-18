DROP TABLE IF EXISTS TblParaules;
CREATE TABLE TblParaules (Paraula text, IdIdioma text, IdPista integer,
  PRIMARY KEY (Paraula),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma),
  FOREIGN KEY (IdPista) REFERENCES TblPistes (IdPista));

  INSERT INTO TblParaules VALUES ("cordes","ca",2);
  INSERT INTO TblParaules VALUES ("fetge","ca",3);
  INSERT INTO TblParaules VALUES ("forca","ca",1);
  INSERT INTO TblParaules VALUES ("jutges","ca",3);
  INSERT INTO TblParaules VALUES ("jutjat","ca",3);
  INSERT INTO TblParaules VALUES ("mengen","ca",3);
  INSERT INTO TblParaules VALUES ("penjat","ca",2);
  INSERT INTO TblParaules VALUES ("quinta","ca",1);
  INSERT INTO TblParaules VALUES ("setze","ca",3);

SELECT TblParaules.Paraula
  FROM TblParaules
WHERE (((TblParaules.IdIdioma)="ca") AND ((length([paraula]))=6));

DROP TABLE IF EXISTS TblPistes;
CREATE TABLE TblPistes (IdPista integer, Pista text, IdIdioma text,
  PRIMARY KEY (IdPista),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma));

  INSERT INTO TblPistes VALUES (1,"A la quinta forca","ca");
  INSERT INTO TblPistes VALUES (2,"A ca un penjat, no hi anomenis cordes","ca");
  INSERT INTO TblPistes VALUES (3,"Setze jutges d'un jutjat mengen fetge d'un penjat","ca");

DROP TABLE IF EXISTS TblIdiomes;
CREATE TABLE TblIdiomes (IdIdioma text, Idioma text,
  PRIMARY KEY (IdIdioma));

  INSERT INTO TblIdiomes VALUES ("an","aragon�s");
  INSERT INTO TblIdiomes VALUES ("ca","catal�n");
  INSERT INTO TblIdiomes VALUES ("en","ingl�s");
  INSERT INTO TblIdiomes VALUES ("es","espa�ol�(o castellano)");
  INSERT INTO TblIdiomes VALUES ("eu","euskera");
  INSERT INTO TblIdiomes VALUES ("gl","gallego");

SELECT TblPistes.Pista, TblParaules.Paraula, TblIdiomes.Idioma
  FROM (TblIdiomes INNER JOIN TblParaules ON TblIdiomes.IdIdioma = TblParaules.IdIdioma) 
  INNER JOIN TblPistes ON (TblPistes.IdPista = TblParaules.IdPista) AND (TblIdiomes.IdIdioma = TblPistes.IdIdioma)
ORDER BY TblPistes.Pista, TblParaules.Paraula, TblIdiomes.Idioma;

DROP TABLE IF EXISTS TblPa�sos;
CREATE TABLE TblPa�sos (IdPais2T text, NomOficial text, IdPais3T text, IdPais3N integer, Observacions text,
  PRIMARY KEY (IdPais2T));

  INSERT INTO TblPa�sos VALUES ("AD","Andorra", "AND", 20, "");
  INSERT INTO TblPa�sos VALUES ("AU","Australia", "AUS", 36, "Incluye las�Islas Ashmore y Cartier�y las�Islas del Mar del Coral.");
  INSERT INTO TblPa�sos VALUES ("CA","Canad�", "CAN", 124, "");
  INSERT INTO TblPa�sos VALUES ("ES","Espa�a", "ESP", 724, "C�digos obtenidos del idioma nativo (espa�ol):�Espa�a");
  INSERT INTO TblPa�sos VALUES ("GB","Reino Unido de Gran Breta�a e Irlanda", "GBR", 826, "Debido a que para obtener los c�digos ISO no se utilizan las palabras comunes de�Reino�y�Unido, los c�digos se han obtenido a partir del resto del nombre oficial.");
  INSERT INTO TblPa�sos VALUES ("IE","Irlanda", "IRL", 372, "");
  INSERT INTO TblPa�sos VALUES ("IN","India", "IND", 356, "");

DROP TABLE IF EXISTS TblIdiomesPa�sos;
CREATE TABLE TblIdiomesPa�sos (IdIdioma text, IdPais2T text,
  PRIMARY KEY (IdIdioma, IdPais2T),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma)
  FOREIGN KEY (IdPais2T) REFERENCES TblPa�sos (IdPais2T));

  INSERT INTO TblIdiomesPa�sos VALUES ("an", "ES");
  INSERT INTO TblIdiomesPa�sos VALUES ("ca", "AD");
  INSERT INTO TblIdiomesPa�sos VALUES ("ca", "ES");
  INSERT INTO TblIdiomesPa�sos VALUES ("en", "AU");
  INSERT INTO TblIdiomesPa�sos VALUES ("en", "CA");
  INSERT INTO TblIdiomesPa�sos VALUES ("en", "GB");
  INSERT INTO TblIdiomesPa�sos VALUES ("en", "IE");
  INSERT INTO TblIdiomesPa�sos VALUES ("en", "IN");
  INSERT INTO TblIdiomesPa�sos VALUES ("en", "US");
  INSERT INTO TblIdiomesPa�sos VALUES ("es", "ES");
  INSERT INTO TblIdiomesPa�sos VALUES ("eu", "ES");
  INSERT INTO TblIdiomesPa�sos VALUES ("gl", "ES");

SELECT TblIdiomes.IdIdioma, TblIdiomes.Idioma, TblPa�sos.IdPais2T, TblPa�sos.NomOficial
  FROM TblPa�sos 
  INNER JOIN (TblIdiomes INNER JOIN TblIdiomesPa�sos ON TblIdiomes.IdIdioma = TblIdiomesPa�sos.IdIdioma) 
    ON TblPa�sos.IdPais2T = TblIdiomesPa�sos.IdPais2T;

DROP TABLE IF EXISTS TblTextosGUI;
CREATE TABLE TblTextosGUI (IdIdioma text, Titol text, Versio text, Input text, Pregunta text, 
  Comprovar text, Paraula text, Sopes text, Pista text, Vides text, Moix text, Lletres text, Ets text, 
  URLpistes text, Dita text, Dita1 text, Dita2 text, Dita3 text, Credits text, YouTube text, Wikis text, 
  Idioma text, Diccionari text, Teclat text, Incorrecte text, Repetida text, Encertat text, Guanyat text, 
  Fallat text, Perdut text, Descansi text, Puntuacio text,
  PRIMARY KEY (IdIdioma),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma));

  INSERT INTO TblTextosGUI VALUES ("ca", "Versi� amb Estructures de Dades Joc del Penjat", "Versi� � Joc del Penjat", 
    "Escriu una lletra min�scula", "Anam a la quinta forca?", "Comprovar", "Paraula:", "Demanes sopes?", "Pista", 
    "Vides:", "Un moix en t� set?", "Lletres:", "Ets de lletres?", "URLpistes:", "Dita", "A la quinta forca,", 
    "A ca un penjat, no hi anomenis cordes,", "Setze jutges d'un jutjat mengen fetge d'un penjat, �", "Cr�dits:", 
    "Joc Penjat on Scratch", "Penjat", "en Catal�", "Diccionari", "Mostra o Amaga", "Car�cter incorrecte!", 
    "Lletra repetida!", "Has encertat!", "i has guanyat!", "Has fallat!", "i has perdut!", "En pau descansi � RIP!", 
    "Puntuaci�:");
  INSERT INTO TblTextosGUI VALUES ("es", "Versi�n con Estructuras de Datos Juego del Ahorcado", "Versi�n � Juego del Ahorcado", 
    "Escribe una letra min�scula", "Vamos al quinto pino?", "Comprobar", "Palabra:", "Te rindes?", "Pista", 
    "Vidas:", "Un gato tiene siete?", "Letras:", "Eres de letras?", "URLpistas:", "Dicho", "Al quinto pino, ", 
    "En casa de un ahorcado, no hables de cuerdas,", "Diecis�is jueces de un juzgado comen h�gado de un ahorcado, �", "Cr�ditos:", 
    "Juego Ahorcado on Scratch", "Ahorcado", "en Espa�ol", "Diccionario", "Muestra o Esconde", "Car�cter incorrecto!", 
    "Letra repetida!", "Has acertado!", "y has ganado!", "Has fallado!", "y has perdido!", "En paz descanse - RIP!", 
    "Puntuaci�n:" ); 
  INSERT INTO TblTextosGUI VALUES ("en", "Hangman Game Images and Sounds Version", "Hangman Game � Versi�n", 
    "Write a lowercase letter", "Are we going to the boondocks?", "Check it", "Word:", "You give up?", "Clue", 
    "Lives:", "A cat has seven?", "Letters:", "Are you in liberal arts?", "URLclues:", "Saying", "To the boondocks,", 
    "In a hanged man's home, don't talk about ropes,", "Sixteen judges of a court eat the liver of a hangman, �", "Credits:", 
    "Hangman Game on Scratch", "Hangman", "in English", "Dictionary", "Show or Hide", "Wrong character!", "Repeated letter!", 
    "You're right!", "and you have won!", "You have failed!", "and you have lost!", "Rest in peace - RIP!", 
    "Score:" ); 

SELECT TblTextosGUI.IdIdioma, TblTextosGUI.Input, TblTextosGUI.Pregunta, TblTextosGUI.Comprovar, TblTextosGUI.Paraula, 
    TblTextosGUI.Sopes, TblTextosGUI.Pista, TblTextosGUI.Vides, TblTextosGUI.Moix, TblTextosGUI.Lletres, TblTextosGUI.Ets
  FROM TblTextosGUI;

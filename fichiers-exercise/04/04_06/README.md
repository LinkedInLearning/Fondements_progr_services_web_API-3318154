# Services Web SOAP

Ce document décrit comment configurer votre environnement pour utiliser les services Web SOAP.

## Prérequis : Installer Java 8

### macOS:

1. **Téléchargement**:

   - Visitez le [site officiel d'Oracle](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) pour télécharger le JDK 8 pour macOS.

2. **Installation**:

   - Ouvrez le fichier `.dmg` téléchargé et suivez les instructions d'installation.

3. **Vérification**:
   - Ouvrez le Terminal et exécutez la commande :
     ```
     java -version
     ```
   - Assurez-vous que la version indiquée est `1.8.x`.

### Windows:

1. **Téléchargement**:

   - Visitez le [site officiel d'Oracle](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) pour télécharger le JDK 8 pour Windows.

2. **Installation**:

   - Exécutez le fichier `.exe` téléchargé et suivez les instructions d'installation.

3. **Ajout du JDK au PATH** (si nécessaire) :

   - Recherchez "Variables d'environnement" dans le menu Démarrer.
   - Cliquez sur "Modifier les variables d'environnement du système".
   - Dans l'onglet "Avancé", cliquez sur "Variables d'environnement".
   - Dans "Variables système", recherchez la variable "Path" et ajoutez-y le chemin vers le répertoire `bin` de votre JDK, par exemple :
     ```
     C:\Program Files\Java\jdk1.8.0_xx\bin
     ```
   - Cliquez sur OK pour fermer chaque fenêtre.

4. **Vérification**:
   - Ouvrez l'invite de commande et exécutez :
     ```
     java -version
     ```
   - Assurez-vous que la version indiquée est `1.8.x`.

## Configuration des services Web SOAP

### macOS:

1. Localisez le répertoire du JDK. Normalement, il se trouve dans `/Library/Java/JavaVirtualMachines/jdk1.8.0_xx.jdk/Contents/Home/jre/lib`.
2. Ajoutez le chemin vers `rt.jar` (qui contient les classes JAX-WS pour Java 8) dans votre fichier `.classpath` de votre projet.

### Windows:

1. Localisez le répertoire du JDK. Normalement, il se trouve dans `C:\Program Files\Java\jdk1.8.0_xx\jre\lib`.
2. Ajoutez le chemin vers `rt.jar` dans votre fichier `.classpath` de votre projet.

---

Vous pouvez sauvegarder ce contenu dans un fichier `README.md` à la racine de votre projet. Ce fichier sera affiché automatiquement sur des plateformes comme GitHub lorsqu'on visite le répertoire du projet.

## utiliser ws import

pour télécharger les fichiers artefacts des services web

`wsimport -keep [xml file]`

`wsimport -keep https://www.dataaccess.com/webservicesserver/numberconversion.wso\?WSDL`

## télécharger SOAP UI

https://www.soapui.org/downloads/soapui/

var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);
var indexAPP = angular.module('index', []);
indexAPP.controller('indexController', function ($scope) {
    if(userLang.includes("es"))
    {
        $scope.home = "Inicio";
        $scope.info ="Información";
        $scope.gallery = "Galería";
        $scope.contact ="Contacto";
        $scope.social ="Redes Sociales";
        $scope.buy="Descarga la demo!";
        
        $scope.available="Disponible pronto en Steam";
        $scope.information1="Que es Lost in the Abysm?";
        $scope.information11 ="Lost in the Abysm RPG en tercera persona enfocado en el combate a distancia";
        $scope.information2="Que son los personajes?";
        $scope.information22="Los personajes son gemoides";
        $scope.name="Nombre";
        $scope.mail="E-Mail";
        $scope.message="Mensaje";
        $scope.send="Enviar";
        $scope.message_sent="Mensaje enviado";
        $scope.enter_message="Ingrese su mensaje";
        $scope.enter_mail="Ingrese su E-Mail";
        $scope.enter_name="Ingrese su nombre";
        $scope.Copyright = "Derechos reservados"
        $scope.engine ="Captura en motor";
        $scope.lumoj ="Lumoj es la isla de hielo, cuidada por Aurur, el Baron Abismal";
        $scope.rpg ="Juego 3D rpg";
        $scope.trailer="Juego 3D rpg enfocado en el combate a distancia. Mira el trailer de juego!";
        $scope.worth ="Vale la pena jugarlo";
        $scope.About="Sobre";
        $scope.nexus= "Nexo en el Abismo";
        $scope.nexusInfo="El nexo es un lugar seguro para descansar"
    }
    else
    {
        $scope.home = "Home";
        $scope.info = "About";
        $scope.gallery="Gallery";
        $scope.contact="Contact";
        $scope.social="Social";
        $scope.buy="Download the demo!"
        
        $scope.available="Available soon on Steam";
        $scope.information1="What is Lost in the Abysm?";
        $scope.information11 ="Lost in the Abysm is a 3rd person RPG focused on range combat";
        $scope.information2="What are the characters?";
        $scope.information22="They are gemoids";
        $scope.name="Name";
        $scope.mail="E-Mail";
        $scope.message="Message";
        $scope.send="Send";
        $scope.message_sent="Message sent";
        $scope.enter_message="Enter your message";
        $scope.enter_mail="Enter your E-Mail";
        $scope.enter_name="Enter your name";
        $scope.Copyright ="Copyright";
        $scope.engine ="In Engine Screenshot";
        $scope.lumoj ="Lumoj is the ice land, guarded by Aurur, the Abysmal Baron";
        $scope.rpg ="3D rpg game";
        $scope.trailer ="3D rpg game focused on distance combat. Watch the gameplay trailer!";
        $scope.worth="WORTH PLAYING";
        $scope.About="About";
        $scope.nexus= "Nexus in the Abysm";
        $scope.nexusInfo="The nexus is a safe place to rest";
        
    }
});

var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);
var indexAPP = angular.module('index', []);
indexAPP.controller('indexController', function ($scope) {
    if(userLang.includes("es"))
    {
        $scope.home = "Inicio";
        $scope.info ="Mas Información";
        $scope.gallery = "Galería";
        $scope.contact ="Contacto";
        $scope.social ="Redes Sociales";
        $scope.buy="Comprar Ahora";
        $scope.trailer="Trailer viejo. Nuevo pronto";
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
    }
    else
    {
        $scope.home = "Home";
        $scope.info = "More Information";
        $scope.gallery="Gallery";
        $scope.contact="Contact";
        $scope.social="Social";
        $scope.buy="Buy"
        $scope.trailer="Old Trailer. New Soon";
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
    }
});
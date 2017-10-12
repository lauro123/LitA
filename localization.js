var userLang = navigator.language || navigator.userLanguage;
//alert("The language is: " + userLang);
var elements = document.getElementsByClassName('localize');

for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "foo";
}​
if (userLang == 'es')
{

} else 
{

}
var date_naissance = prompt("Donnez votre date de naissance :", "jj/mm/aaaa");
var reg = /^([0-9]{2})/([0 - 9]{ 2}) / ([0 - 9]{ 4}) $/; 

while (!(reg.test(date_naissance))) { /* tant que la syntaxe est incorrect*/
    alert("Erreur. Respectez le format : jj/mm/aaaa");

    date_naissance = prompt("Donnez votre date de naissance :", "jj/mm/aaaa");
}

var auj = new Date(); /* On récupère la date d'ajourd'hui*/
var age = auj.getFullYear() - RegExp.$3; /* On sauvegarde l'age*/
var anniversaire = new Date(auj.getFullYear(), (RegExp.$2 - 1), RegExp.$1); /* objet date représentant l'anniversaire de l'année courante*/
if (Math.floor((auj - anniversaire) / (10003600 * 24)) == 0) {
    alert("Joyeux anniversaire ! Tu as " + age + " ans !");
}
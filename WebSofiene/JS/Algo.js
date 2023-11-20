let tableauDeNom =[];
let i =0;
function ajouterChampNom() {
    // Récupérer la valeur du champ de saisie
    let nom = document.getElementById("nom").value;
    tableauDeNom.push(nom);

    // Créer un nouvel élément div pour afficher le nom ajouté
    let nouveauChampNom = document.createElement("div");
    nouveauChampNom.textContent = nom;
    

    // Ajouter le nouvel élément à la zone des noms ajoutés
    document.getElementById("nomsAjoutes").appendChild(nouveauChampNom);

    // Effacer le champ de saisie
    document.getElementById("nom").value = "";
    
    return tableauDeNom;
}
function creationGroupe(){
    let tableauNom = ajouterChampNom();
    let randomId =0;
    for(i =0;i < 4; i++){
        randomId = Math.floor(Math.random() * tableauNom.length);
        console.log(tableauNom[randomId]); 
        tableauNom.splice(randomId,1);
    }
    
}

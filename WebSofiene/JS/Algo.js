let tableauDeNom =[];
let i =0;
function ajouterChampNom() {
    // Récupérer la valeur du champ de saisie
    let nom = document.getElementById("nom").value;
    tableauDeNom.push(nom)

    // Créer un nouvel élément div pour afficher le nom ajouté
    let nouveauChampNom = document.createElement("div");
    nouveauChampNom.textContent = nom;
    

    // Ajouter le nouvel élément à la zone des noms ajoutés
    document.getElementById("nomsAjoutes").appendChild(nouveauChampNom);

    // Effacer le champ de saisie
    document.getElementById("nom").value = "";
    
    return tableauDeNom
}
function creationIDNom(){
    let tableauNom = ajouterChampNom();
    
    for(i;i < tableauNom.length; i++){
        console.log(tableauNom[i]);     
    }
}
function creationIDNom2(){
    let tableauNom = ajouterChampNom();
    
   console.log(tableauNom[i]);
   i++;
}
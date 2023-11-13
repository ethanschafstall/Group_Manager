
function ajouterChampNom() {
    // Récupérer la valeur du champ de saisie
    let nom = document.getElementById("nom").value;

    // Créer un nouvel élément div pour afficher le nom ajouté
    let nouveauChampNom = document.createElement("div");
    nouveauChampNom.textContent = nom;

    // Ajouter le nouvel élément à la zone des noms ajoutés
    document.getElementById("nomsAjoutes").appendChild(nouveauChampNom);

    // Effacer le champ de saisie
    document.getElementById("nom").value = "";
}
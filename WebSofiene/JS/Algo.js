let tableauDeNom =[];
let person =[];
let tableIDs=[];
let groupIds = [];
let id =0;
let i =0;
function ajouterChampNom(check = true) {
    console.log(check);
    if (check){
        // Récupérer la valeur du champ de saisie
        let nom = document.getElementById("nom").value;
        tableauDeNom.push(nom);
        AttributionID(nom);

        // Créer un nouvel élément div pour afficher le nom ajouté
        let nouveauChampNom = document.createElement("div");
        nouveauChampNom.textContent = nom;
        

        // Ajouter le nouvel élément à la zone des noms ajoutés
        document.getElementById("nomsAjoutes").appendChild(nouveauChampNom);

        // Effacer le champ de saisie
        document.getElementById("nom").value = "";
    }
    return tableauDeNom;
}
function creationGroupeSimple(){
    let tableauNom = ajouterChampNom(false);
    let groupe =[];
    let randomId =0;
    for(i = 0;i < 2; i++){
        randomId = Math.floor(Math.random() * tableauNom.length);
        groupe.push(tableauNom[randomId]);
        tableauNom.splice(randomId,1)
    }
    console.log(groupe);
}
function AttributionID(nomParticipant){
    person.push(nomParticipant);
    console.log(`person : ${person}`);
    id++;
    tableIDs.push(id);
}
function creationGroupe(){
    let groupe =[];
    let randomId =0;
    
    for(i = 0;i < 2; i++){
        randomId = Math.floor(Math.random() * person.length);
        groupe.push(person[randomId]);
        groupIds.push(tableIDs[randomId])
        person.splice(randomId,1)
    }
    //console.log(groupe);
    console.log(`groupe : ${groupe}`);
    console.log(`groupID : ${groupIds}`);
}

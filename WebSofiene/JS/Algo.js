let tableauDeNom =[];
// liste des personnes
let person =[];
// table contenant tout les id possible
let tableIDs=[];
// liste des ids en fonction des personne
let listIDs = [];
// numéro de l'ID
let id =0;
let i =0;
let idGroup;
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
    id++;
    tableIDs.push(id);
}
function creationGroupe(){
    let cpt =1;
    let groupe =[];
    let randomId =0;
    let testTableau =[];
    let blabla;
    console.log(`tables des ID : ${tableIDs}`);
    for(i = 0;i < 2; i++){
        randomId = Math.floor(Math.random() * person.length);
        console.log(`random ${cpt} : ${randomId}`);
        cpt +=1 ;
        groupe.push(person[randomId]);
        listIDs.push(tableIDs[randomId]);
        //Suprime les éléments utilisé
        person.splice(randomId,1);
        tableIDs.splice(randomId,1);
        if(i ==2){
            blabla += randomId;
        }
        else blabla += randomId*10;
    }
    blabla.toString();
    testTableau.push(blabla);
    console.log(`groupe : ${groupe}`);
    console.log(`liste des IDs : ${listIDs}`);
    console.log(`groupID : ${testTableau}`);
    
}

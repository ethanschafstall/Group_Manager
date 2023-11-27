let tableauDeNom =[];
// liste des personnes
let person =[];
// table contenant tout les id possible
let tableIDs=[];
// liste des ids en fonction des personne
let listIDs = [];
// numéro de l'ID
let id =0;
// nombre de personne par groupe
let nombrePerGroupe = 2;
// fusion des id des personne de chaque groupe
let grouID =[];
// id final du groupe (pouvant aller dans la db)
let finalGroupID =[];

// fonction ajoutant un nom au site
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

// création simplifier des groupes (sans toute les possibilités)
function creationGroupeSimple(){
    // tableau contenant les noms des participants
    let tableauNom = ajouterChampNom(false);
    // tableau contenant le groupe choisit au hasard
    let groupe =[];
    // index aléatoire allant être utiliser pour choisir la personne dans le tableau de nom
    let randomId =0;
    // boucle créant les groupes de personne
    for(i = 0;i < nombrePerGroupe; i++){
        // choix d'un indexe aléatoire
        randomId = Math.floor(Math.random() * tableauNom.length);
        // ajout de la personne choisie dans le groupe
        groupe.push(tableauNom[randomId]);
        // effacemment de la peronne choisie du groupe des personnes 
        tableauNom.splice(randomId,1)
    }
    console.log(groupe);
}
// attribution d'un id à chque prénom
function AttributionID(nomParticipant){
    person.push(nomParticipant);
    id++;
    tableIDs.push(id);
}
function creationGroupe(){
    let groupe =[];
    let randomId =0;
    let tableauTransition =[];
    console.log(`tables des ID : ${tableIDs}`);
    for(i = 0;i < nombrePerGroupe; i++){
        randomId = Math.floor(Math.random() * person.length);
        // ajout des personnes dans un group si ils n'y sont pas déjà
        if (groupe.indexOf(person[randomId]) === -1) {
            groupe.push(person[randomId]);
            if(groupe.length < nombrePerGroupe -1){
                groupe.length =0;
            }
        }
        // ajout des id de la table dans la list + ajout des id de la list dans blabla
        if(listIDs.indexOf(tableIDs[randomId]) === -1){
            listIDs.push(tableIDs[randomId])
        }
        if (tableauTransition.indexOf(tableIDs[randomId]) === -1) {
            tableauTransition.push(tableIDs[randomId]);
        }
        
        //Suprime les éléments utilisé
        //person.splice(randomId,1);
        //tableIDs.splice(randomId,1);
        // boucle ajoutant les elements de blabla à testTableau
        if(i == 1){
            if (tableauTransition.indexOf() === -1) {
                if(tableauTransition.length > 1){
                    grouID.push(tableauTransition.join(''));
                }   
            }
        }
    }
    finalGroupID = grouID.filter((element, index, self) =>{
        return self.indexOf(element) === index;
    });
    console.log(`groupe : ${groupe}`);
    console.log(`liste des IDs : ${listIDs}`);
    console.log(`tableauTransition : ${tableauTransition}`);
    console.log(`groupID : ${finalGroupID}`);
}


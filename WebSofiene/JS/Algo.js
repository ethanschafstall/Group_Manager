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
let numberPersonOfGroup = 3;
// fusion des id des personne de chaque groupe
let groupID =[];
// id final du groupe (pouvant aller dans la db)
let finalGroupID =[];
// tableau final contenant les groupe allant être afficher
let finalGroup =[];
// tableau de transition servant à la concaténation des membres du groupe 
let tableauTransitionPerson =[];
// nombre de semaine choisi par le user (pas encore utiliser)
let nbSemaine =2;
// bool indiquant si la boucle de création de groupe doit recommencer dans le cas ou un groupe ne respecte pas les conditions requise
let again;
// compteur du nombre de fois qu'un groupe n'est pas valide
let cptWrongGroup =0;


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
    for(i = 0;i < numberPersonOfGroup; i++){
        // choix d'un indexe aléatoire
        randomId = Math.floor(Math.random() * tableauNom.length);
        // ajout de la personne choisie dans le groupe
        groupe.push(tableauNom[randomId]);
        // effacemment de la peronne choisie du groupe des personnes 
        tableauNom.splice(randomId,1)
    }
    // affichage du groupe
    console.log(groupe);
}
// attribution d'un id à chque prénom
function AttributionID(nomParticipant){
    // ajout du nom de la personne à la liste 
    person.push(nomParticipant);
    // augmentation de 1 de l'ID pour la prière personne
    id++;
    // ajout de l'id dans le tableau des IDs
    tableIDs.push(id);
}
function creationGroupe(){
    // tableau de groupe de base (l'innitialiser dans la boucle si veut ne monter qu'un seul groupe)
    let groupe =[];
    // indexe aléatoire pour le choix d'une personne
    let randomIndex =0;
    // tableau de transition servant à la concaténation des IDs des membre du groupe
    let tableauTransitionID =[];

        for(i = 0;i < numberPersonOfGroup; i++){
            // choix aléatoire de l'indexe
            randomIndex = Math.floor(Math.random() * person.length);
            // ajout des personnes dans un group si ils n'y sont pas déjà
            if (groupe.indexOf(person[randomIndex]) === -1) {
                // ajout de la personne choisi dans le groupe
                groupe.push(person[randomIndex]);
            }
            // ajout des id de la table dans la list (si ils n'y sont pas déjà) + ajout des id de la liste dans tableauTransitionID
            if(listIDs.indexOf(tableIDs[randomIndex]) === -1){
                // ajout de l'ID dans la liste des IDs
                listIDs.push(tableIDs[randomIndex])
            }
            // ajout des id de la table dans le tableau de transition (si ils n'y sont pas déjà)
            if (tableauTransitionID.indexOf(tableIDs[randomIndex]) === -1) {
                // ajout de l'ID dans le tableau de transition 
                tableauTransitionID.push(tableIDs[randomIndex]);
            }
            // boucle s'effectuant a la dérnière itération de la boucle
            if(i == numberPersonOfGroup-1){
                // dans le cas ou le groupe est trop petit
                if(groupe.length < numberPersonOfGroup)
                {
                    // effacement de tout les membre du groupe
                    groupe.length =0;
                    // passage a vrai de la variable permettant de recommencer la boucle de création de groupe
                    again = true;
                }
                else{
                    // la variable est fausse la boucle ne recommencera pas 
                    again = false;
                }
                // concaténation du tableau de transition des ID afin de créer les ID de groupe dans le cas ou il ne sont pas déjà utiliser
                if (tableauTransitionID.indexOf() === -1) {
                    // ajout de la concaténation des IDs du tableau de transition dans le groupID dans le cas ou la condition est valide
                    if(tableauTransitionID.length > numberPersonOfGroup -1){
                        // ajout de la concaténation des IDs dans le groupID
                        groupID.push(tableauTransitionID.join(''));
                    }     
                }
                // Concaténation des membre du groupe 
                if(groupe.length > numberPersonOfGroup -1){
                    // ajout de la concaténation des membre du groupe dans le cas ou ils n'y sont pas déjà
                    if (tableauTransitionPerson.indexOf(groupe.join('+')) === -1) {
                        // ajout de la concaténation des membre du groupe 
                        tableauTransitionPerson.push(groupe.join('+'));
                        cptWrongGroup =0;
                    }
                    else{
                        cptWrongGroup ++;
                    }
                }   
            }
        }
        // filtarge des groupeID afin de ne garder que des groupId unique (prise en compte de l'ordre)
        finalGroupID = groupID.filter((element, index, self) =>{
            return self.indexOf(element) === index;
        });
        // filtarge des groupe afin de ne garder que des groupe unique (prise en compte de l'ordre)
        finalGroup = tableauTransitionPerson.filter((element, index, self) =>{
            return self.indexOf(element) === index;
        });
}
function CallcreationGroupe(){
    do{
        creationGroupe();
    }while(cptWrongGroup < 100)
}
// affichage des groupe
function Affichage(){
    console.log(`again : ${again}`);
    // lancement de la boucle tant que les groupe ne corresspende pas au condition demander 
    if(again === true){
        do{
            creationGroupe();
        }while(again !== false)
    }
    // affichage de tout les groupe et de tout les IDs si les groupe sont bon
    if(again === false){
        console.log(`finalGroupe : ${finalGroup}`);
        console.log(`finalgroupID : ${finalGroupID}`);
    }

    /*A FAIRE : FAIRE EN SORTE QUE LE GROUPE NE PRENNE PAS EN COMPTE L'ORDRE*/
}


let questions = [

        "", // 0
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""]

let reponsesQ0 = [
    "", "", "", "" ]
let reponsesQ1 = [
 "", "", "", ""]
let reponsesQ2 = [
 "", "", "", ""]
let reponsesQ3 = [
 "", "", "", ""]
let reponsesQ4 = [
 "", "", "", ""]
let reponsesQ5 = [
 "", "", "", ""]
let reponsesQ6 = [
 "", "", "", ""]
let reponsesQ7 = [
 "", "", "", ""]
let reponsesQ8 = [
 "", "", "", ""]
let reponsesQ9 = [
 "", "", "", ""]
let reponsesQ10 = [
 "", "", "", ""]
let reponsesQ11 = [
 "", "", "", ""]
let reponsesQ12 = [
 "", "", "", ""]
let reponsesQ13 = [
 "", "", "", ""]
let reponsesQ14 = [
 "", "", "", ""]
let reponsesQ15 = [
 "", "", "", ""]

let reponses = [
    reponsesQ0,reponsesQ1,reponsesQ2,reponsesQ3,reponsesQ4,reponsesQ5,reponsesQ6, reponsesQ7, reponsesQ8, reponsesQ9, reponsesQ10, reponsesQ11, reponsesQ12, reponsesQ13, reponsesQ14, reponsesQ15
]

let bonnes_reponses = [ // Remplacer le 1 par le numéro de la bonne reponse dans reponseQnuméro de la reponse
    reponsesQ0[1], reponsesQ1[1],reponsesQ2[1],reponsesQ3[1],reponsesQ4[1],reponsesQ5[1],reponsesQ6[1], reponsesQ7[1], reponsesQ8[1], reponsesQ9[1], reponsesQ10[1], reponsesQ11[1], reponsesQ12[1], reponsesQ13[1], reponsesQ14[1], reponsesQ15[1]
]

let valeurs_questions = [ // Dans l'ordre, la valeur en points de chaque question

]

// Constructeur permet de créer des élements avec des attribus définis
class Questions {
    constructor(question_number, question_contenu, question_reponses, question_bonne_reponse, question_valeur) {
        this.question_number = question_number;
        this.question_contenu = question_contenu;
        this.question_reponses = question_reponses;
        this.question_bonne_reponse = question_bonne_reponse;
        this.question_valeur = question_valeur;
    }
}

let quiz_demarre = false;

let tableau = [];

let score = 0;

let compteur = 0;

function creation_questions () {
    if (quiz_demarre == false) {
        for (let i=0; i < reponses.length; i++) {
            let c = new Questions(i, questions[i], reponses[i], bonnes_reponses[i], valeurs_questions[i]);
            tableau.push(c);
        }
        console.table(tableau);
        quiz_demarre = true;
        score = 0;

        document.getElementById("question").innerHTML = tableau[compteur].question_contenu;

        for (let i=0; i < 4 ; i++) {

            document.getElementById("reponse" + i).innerHTML = tableau[compteur].question_reponses[i];
            console.log("saucisse" + i);
        }

    }
}

function restart() {

    tableau = [];
    score = 0;
    creation_questions();

}


function next (reponse_question_quiz) {
    compteur = compteur + 1;


    console.log("Compteur = " + compteur);

    document.getElementById("question").innerHTML = tableau[compteur].question_contenu;

    for (let i=0; i < 4 ; i++) {

        document.getElementById("reponse" + i).innerHTML = tableau[compteur].question_reponses[i];

        document.getElementById("reponse" + i).style.background = "linear-gradient(to top, #468CCF, #63B8EE)";
    }



    document.getElementById("start_boutton").style.opacity = 0;
}

function submit(reponse_question_quiz) {



    let rep = document.getElementById("reponse" + reponse_question_quiz).innerHTML;
    if (rep == tableau[compteur].question_bonne_reponse) {
        
        document.getElementById("reponse" + reponse_question_quiz).style.background = "green";

        alert("CORRECT");

        console.log(tableau[compteur].question_bonne_reponse);

        score = score + 1;

    }
    else {
        alert("TES NUL");
        console.log(tableau[compteur].question_bonne_reponse);

    }

    document.getElementById('score').innerHTML = score;

    next(reponse_question_quiz);
}


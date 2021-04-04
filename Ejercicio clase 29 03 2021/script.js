

// $(document).ready(() => {
//   $("p, img, h1").fadeOut();
//   $("h2").click(() =>{$('p')});
// });


// min = 3601



// function tiempo(seconds){

//  let horas = Math.trunc(seconds/3600);

//  let minutos = Math.trunc(seconds - horas*3600)/60;

//  return `${horas} hour(s) and ${minutos} minutes`;

// }



// console.log(tiempo(min));
word = "The quick brown jumps over the lazy dog"
n = 4

function filterLongWords(sentence,n){

    const pals =sentence.split(``);

    for (i=0; i<pals.length; i++){
        if(pals[i].lenght > n){resultado.push(pals[i])}
    }
    return resultado

    //  a = [];

    //  for(i=0; i<sentence.length; i++)

    //  a.push(sentence.length);

    // return a

}


console.log(filterLongWords(word,n))
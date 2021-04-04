// $('h1').click(function(){
//     alert("cliqueaste un h1");
// })


// metodo mas moderno

$('h1').click(() => {
    // alert("cliqueaste un h1");
    // $('h1').html("hola ratita");
    var myText = $('#myParagraph').text('cambia el parrafo');
    alert(myText);

})


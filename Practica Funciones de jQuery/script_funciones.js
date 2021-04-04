$(".boton1").click(() => {
  $(".parrafo1").addClass("red");
});

$(".boton2").click(() => {
  $(".bob_esponja img").slideToggle();
});

$(".botont").click(() => {
    $(".bob_esponja img").toggle();
  });

$(".boton3").click(() => {
  $(".parrafo3").append(
    '<p > parrafo nuevo </p>'
  );
});

$(".boton4").click(function() {

    a = $(".parrafo4").text();
    $(".parrafo4").before(a);
  });

  $(".boton4aft").click(function() {

    a = $(".parrafo4").text();
    $(".parrafo4").after(a);
  });

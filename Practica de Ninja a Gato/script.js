$("img").click(function () {
  const ninjaSrc = $(this).attr("src");
  const gatoSrc = $(this).attr("volver-src");

  $(this).attr("src", gatoSrc);
  $(this).attr("volver-src", ninjaSrc);
});

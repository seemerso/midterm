var products = [
  {
    id: 0,
    name: "Horizon Zero Dawn",
    price: "$21.00",
    image:
      "https://m.media-amazon.com/images/I/71Uzb-UfIQS._SL1000_.jpg",
    color: "blue",
    system: "Playstation",
    description: "Horizon Zero Dawn is an exhilarating action role playing game developed by the award winning Guerrilla Games. As Horizon Zero Dawn’s main protagonist Aloy, a skilled hunter, explore a vibrant and lush world inhabited by mysterious mechanized creatures."
  },
  {
    id: 1,
    name: "Halo Infinite",
    price: "$39.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6414/6414163_sd.jpg",
    color: "green",
    system: "Xbox",
    description: "Master Chief returns to explore the epic expanse of a Halo ring for the first time in Halo Infinite."
  },
  {
    id: 2,
    name: "Pokémon Legends: Arceus",
    price: "$59.99",
    image:
      "https://m.media-amazon.com/images/I/71HYKF4rO9L._SY445_.jpg",
    color: "red",
    system: "Switch",
    description: "Discover a story that takes place in the Sinnoh region long before the events of Pokémon Diamond and Pokémon Pearl in the open-world adventure Pokémon Legends: Arceus."
  }
];

$.each(products, function(i, value) {
  var product = $("<div></div>");
  product.addClass("product");
  product.append("<img src='" + value.image + "'/>");
  //product.append("<div> Name: " + value.name + "</div>");
  product.append("<div>" + value.price + "</div>");

  $(product).attr("color", value.color);
  $(product).attr("name", value.name);
  $(product).attr("price", value.price);
  $(product).attr("img", value.image);
  $(product).attr("desc", value.description);
  $(product).attr("system", value.system);

  $("body").append(product);
});

$(".product").hover(
  function() {
    var color = $(this).attr("color");
    $(this).css("border-color", color);
  }
);

var popUp = $("<div></div>");
popUp.addClass("popUp");
popUp.append("<img class='imgDiv'></img>");
popUp.append("<div class='nameDiv'></div>");
popUp.append("<div class='priceDiv'></div>");
popUp.append("<div class='descDiv'></div>");
popUp.append("<div class='systemDiv'></div>");
popUp.append("<div class='colorDiv'></div>");
$("body").append(popUp);
$(".popUp").hide();

$(".product").click(products, function(i, value) {
  $(".popUp").show();
  $(".imgDiv").attr("src", $(this).attr("img"));
  $(".nameDiv").text($(this).attr("name"));
  $(".priceDiv").text($(this).attr("price"));
  $(".descDiv").text($(this).attr("desc"));
  $(".systemDiv").text($(this).attr("system"));

});

$(".popUp").click(function() {
  $(this).hide();
});
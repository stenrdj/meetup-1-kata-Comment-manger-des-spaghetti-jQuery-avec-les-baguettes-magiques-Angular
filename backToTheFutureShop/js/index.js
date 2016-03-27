$(document).ready(function () {

  // Best selling products
  var bestSeallingProductsMenu = '';
  $.each(products, function(index, product) {
    bestSeallingProductsMenu += '<div class="col-sm-4 col-lg-4 col-md-4">'
    + '<a href="productDetailPage.html?code=' + product.code + '">'
        + ' <div class="thumbnail">'
        + ' <img src="' + product.smallImage + '" alt="">'
        + '   <div class="caption">'
        + '     <h4 class="pull-right">' + product.price + '</h4>'
        + '     <h4>'
        + '         <a href="#">' + product.name + '</a>'
        + '     </h4>'
        + '     <p>' + product.description + '</p>'
        + '   </div>'
        + '   <div class="ratings">'
        + '     <p class="pull-right">15 reviews</p>'
        + '     <p>'
        + '       <span class="glyphicon glyphicon-star"></span>'
        + '       <span class="glyphicon glyphicon-star"></span>'
        + '       <span class="glyphicon glyphicon-star"></span>'
        + '       <span class="glyphicon glyphicon-star"></span>'
        + '       <span class="glyphicon glyphicon-star"></span>'
        + '     </p>'
        + '   </div>'
        + '</div>'
        + '</a>'
        + '</div>'
  });

  $('#bestSeallingProducts').html(bestSeallingProductsMenu);

  $('#searchProducts').click(function() {
    var textToSearch = $('#textToSearch').val();
    bestSeallingProductsMenu = '';

    $.each(products, function(index, product) {
      if(product.description.toLowerCase().indexOf(textToSearch) > -1 || product.name.toLowerCase().indexOf(textToSearch) > -1) {
        bestSeallingProductsMenu += '<div class="col-sm-4 col-lg-4 col-md-4">'
            + '<a href="productDetailPage.html?code=' + product.code + '">'
            + ' <div class="thumbnail">'
            + ' <img src="' + product.smallImage + '" alt="">'
            + '   <div class="caption">'
            + '     <h4 class="pull-right">' + product.price + '</h4>'
            + '     <h4>'
            + '         <a href="#">' + product.name + '</a>'
            + '     </h4>'
            + '     <p>' + product.description + '</p>'
            + '   </div>'
            + '   <div class="ratings">'
            + '     <p class="pull-right">15 reviews</p>'
            + '     <p>'
            + '       <span class="glyphicon glyphicon-star"></span>'
            + '       <span class="glyphicon glyphicon-star"></span>'
            + '       <span class="glyphicon glyphicon-star"></span>'
            + '       <span class="glyphicon glyphicon-star"></span>'
            + '       <span class="glyphicon glyphicon-star"></span>'
            + '     </p>'
            + '   </div>'
            + '</div>'
            + '</a>'
            + '</div>'
      }
    });

    $('#bestSeallingProducts').html(bestSeallingProductsMenu);

  });

});


$(document).ready(function () {

  var getUrlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
      return null;
    }else{
      return results[1] || 0;
    }
  }

  var currentProductCode = getUrlParam('code');

  if(currentProductCode) {
    $.each(products, function(index, product) {
      if(product.code === currentProductCode) {
        $('#productCode').html(product.code);
        $('#productName').html(product.name);
        $('#productAvailability').html(product.availability);
        $('#productDescription').html(product.description);
        $('#productPrice').html(product.price);
        $('#productQuantity').html(product.quantity);
        $('#productBigImage').attr('src', product.bigImage)
      }
    });
  }



});
$(function(){
  $('#shoppingCart').hide();
  totalPrice = 0;
  count = 1;
  shopCartEmpty = $('#shoppingCartBar').html ();
  $('#farCry5Button').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 54.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Far Cry 5 - 54.99€</p>');
  });
  $('#deusExButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 14.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Deus Ex - 14.99€</p>')
  });
  $('#shadowOfTheTombRaiderButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 49.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Shadow Of The Tomb Raider - 49.99€</p>')
  });
  $('#aWayOutButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 44.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>A Way Out - 44.99€</p>')
  });
  $('#friday13Button').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 24.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Friday The 13th - 24.99€</p>')
  });
  $('#godOfWarButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 54.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>God Of War - 54.99€</p>')
  });
  $('#pes2018Button').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 12.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>PES 2018 - 12.99€</p>')
  });
  $('#spiderManButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 99.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Spider-Man - 99.99€</p>')
  });
  $('#theLastOfUsButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 19.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>The Last Of Us - 19.99€</p>')
  });
  $('#dishonoredButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 11.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Dishonored - 11.99€</p>')
  });
  $('#footballManagerButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 29.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Football Manager 2018 - 29.99€</p>')
  });
  $('#finalFantasyButton').click(function(){
    $('#articleNumber').html(count++);
    totalPrice = Math.round((totalPrice + 49.99)*100)/100;
    $('#totalPrice').html(totalPrice);
    $('#total').html(totalPrice);
    $('#articleList').append('<p>Final Fantasy XV - 49.99€</p>')
  });
  $('#shoppingCartButton').click(function(){
    if (totalPrice === 0) {
      alert('Votre panier est vide');
    } else {
      $('#shoppingCart').modal('show');
    }
  });
  $('#cancelForm').click(function(){
    $('#shoppingCart').hide('modal');
    $('body').removeAttr('style');
  });
  $('#registrationForm').click(function(){
    pseudonyme = $('#pseudo').val();
    name = $('#name').val();
    firstName = $('#firstName').val();
    mail = $('#mail').val();
    confirmMail = $('#confirmMail').val();
    password = $('#password').val();
    confirmPassword = $('#confirmPassword').val();
    address = $('#address').val();
    city = $('#city').val();
    postalCode = $('#postalCode').val();
    birthDate = $('#birthDate').val();
    regexAddress = /^\d{1,5}\,{0,1}\s+[\sa-zA-Z\-]{1,}$/;
    regexName = /^[a-zA-Z\-\séèÉë]{1,}$/;
    regexMail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    regexPass = /^[a-zA-Z0-9]{8,}$/;
    regexPost = /^[0-9]{5,}$/;
    regexBd = /^[0-3][0-9]\/[0-1][0-9]\/[1-2][09][0-9]{2}$/;
    if (regexMail.test(mail) && regexName.test(name) && regexAddress.test(address) && regexName.test(firstName) && regexName.test(pseudonyme) && regexPass.test(password) && password === confirmPassword && mail === confirmMail && regexPost.test(postalCode) && regexName.test(city) && regexBd.test(birthDate)){
      alert('Merci pour votre achat');
      $('#shoppingCart').hide('modal');
      $('body').removeAttr('style');
      $('#shoppingCartBar').html(shopCartEmpty);
    } else {
      alert('Veuillez remplir correctement le formulaire.');
      if (regexMail.test(mail) == false) {
        $('#mail').addClass('RED');
      } else {
        $('#mail').removeClass('RED');
      }
      if (regexName.test(name) == false) {
        $('#name').addClass('RED');
      } else {
        $('#name').removeClass('RED');
      }
      if (regexAddress.test(address) == false) {
        $('#address').addClass('RED');
      } else {
        $('#address').removeClass('RED');
      }
      if (regexName.test(firstName) == false) {
        $('#firstName').addClass('RED');
      } else {
        $('#firstName').removeClass('RED');
      }
      if (regexName.test(pseudonyme) == false) {
        $('#pseudo').addClass('RED');
      } else {
        $('#pseudo').removeClass('RED');
      }
      if (regexPass.test(password) == false) {
        $('#password').addClass('RED');
      } else {
        $('#password').removeClass('RED');
      }
      if (password != confirmPassword) {
        $('#confirmPassword').addClass('RED');
      } else {
        $('#confirmPassword').removeClass('RED');
      }
      if (mail != confirmMail) {
        $('#confirmMail').addClass('RED');
      } else {
        $('#confirmMail').removeClass('RED');
      }
      if (regexPost.test(postalCode) == false) {
        $('#postalCode').addClass('RED');
      } else {
        $('#postalCode').removeClass('RED');
      }
      if (regexName.test(city) == false) {
        $('#city').addClass('RED');
      } else {
        $('#city').removeClass('RED');
      }
      if (regexBd.test(birthDate) == false) {
        $('#birthDate').addClass('RED');
      } else {
        $('#birthDate').removeClass('RED');
      }
    }
  });
});
$(function(){
  $('#shoppingCart').hide();

  $('#shoppingCartButton').click(function(){
    $('#shoppingCart').modal('show');
    farCry5 = ('#farCry5Price').val();
    aWayOut = ('#aWayOutPrice').val();
    deusEx = ('#deusExPrice').val();
    friday13 = ('#friday13Price').val();
    godOfWar = ('#godOfWarPrice').val();
    pes2018 = ('#pes2018Price').val();
    spiderMan = ('#spiderManPrice').val();
    theLastOfUs = ('#theLastOfUsPrice').val();
    shadowOfTheTombRaider = ('#shadowOfTheTombRaiderPrice').val();
    dishonored = ('#dishonoredPrice').val();
    footballManager = ('#footballManagerPrice').val();
    finalFantasy = ('#finalFantasyPrice').val();
  });

  $('#registrationForm').click(function(){
    pseudonyme = $('#pseudo').val();
    Name = $('#name').val();
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
    if (regexMail.test(mail) && regexName.test(Name) && regexAddress.test(address) && regexName.test(firstName) && regexName.test(pseudonyme) && regexPass.test(password) && password === confirmPassword && mail === confirmMail && regexPost.test(postalCode) && regexName.test(city) && regexBd.test(birthDate)){
      alert('Merci pour votre achat');
      $('#closeModalBtn').click(function(e) {
        e.preventDefault();
        $('#shoppingCart').modal('hide');
      });
    } else {
      alert('Veuillez remplir correctement le formulaire.');
      if (regexMail.test(mail) == false) {
        $('#mail').addClass('RED');
      } else {
        $('#mail').removeClass('RED');
      }
      if (regexName.test(Name) == false) {
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
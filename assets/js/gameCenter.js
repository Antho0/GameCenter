$('#shoppingCart').hide();

$('#shoppingCartButton').click(function(){
	$('#shoppingCart').modal('show');
	FarCry5 = ('#farCry5Price').val();
	aWayOut = ('#aWayOutPrice').val();
	DeusEx = ('#deusExPrice').val();
	friday13 = ('#friday13Price').val();
	godOfWar = ('#godOfWarPrice').val();
	pes2018 = ('#pes2018Price').val();
	spiderMan = ('#spiderManPrice').val();
	theLastOfUs = ('#theLastOfUsPrice').val();
	shadowOfTheTombRaider = ('#shadowOfTheTombRaiderPrice').val();
	dishonored = ('#dishonoredPrice').val();
	FootballManager = ('#footballManagerPrice').val();
	finalFantasy = ('#finalFantasyPrice').val();
});

$('#registrationForm').click(function(){
	Pseudonyme = $('#pseudo').val();
	Name = $('#name').val();
	FirstName = $('#firstName').val();
	mail = $('#mail').val();
	confirmMail = $('#confirmMail').val();
	password = $('#password').val();
	confirmPassword = $('#name').val();
	adresse = $('#adress').val();
	City = $('#city').val();
	PostalCode = $('#postalCode').val();
	birthDate = $('#birthDate').val();
	regexAdresse= /^\d{1,5}\s+[\sa-zA-Z\-]{1,}$/;
	regexName= /^[a-zA-Z\-\séèÉë]{1,}$/;
	regexMail= /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
	regexPass= /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
	regexPost= /^[0-9]{5,}$/;
	regexBd= /^[0-3][0-9]\/[0-1][0-9]\/[1-2][09][0-9]{2}$/;
	if (regexMail.test(mail) && regexName.test(Name) && regexAdresse.test(adresse) && regexName.test(FirstName) && regexName.test(pseudo) && regexPass.test(password) && password === confirmPassword && mail === confirmMail && regexPost.test(PostalCode) && regexName.test(City) && regexBd.test(birthDate)){
		alert('Merci pour votre achat');
		$('#closeModalBtn').click(function(e) {
			e.preventDefault();
			$('#shoppingCart').modal('hide');
		});
	}
});
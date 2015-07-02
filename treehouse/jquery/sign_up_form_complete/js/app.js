// problem : Hints are shown even when form is valid
// Solution : Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
// Hide hints
$("input + span").hide();

function isPasswordValid(){
	return $password.val().length> 8;
}

function arePasswordMatching(){
	return $password.val() === $confirmPassword.val()
}

function canSubmit(){
	return isPasswordValid() && arePasswordMatching();
}



function passwordEvent(){
// Find out if password is valid
	if (isPasswordValid()){
		// hide hint if valid
		$password.next().hide();
	}else{
		// else show hint
		$password.next().show();
	}
}

function confirmPasswordEvent(){
// When event happens on confirmation
	if (arePasswordMatching()){
		 $confirmPassword.next().hide();
	}else{
		 $confirmPassword.next().show();
	}
	// Find out if password and confirmation match
		//hide hint if match
		//show hint if does not match
}


function enableSubmitEvent(){
	$("#submit").prop("disabled",!canSubmit());
}


// When event happens on password input
$password .focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$confirmPassword .focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();



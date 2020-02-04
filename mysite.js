function openTab(evt, sub) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i=0; i<tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(".active", " ");
	}
	document.getElementById(sub).style.display = "block";
}


$(document).ready(function(){
	document.getElementById("defaultOpen").click();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});

	const scriptURL = "https://script.google.com/macros/s/AKfycbwJaynuU1W_p7G6R5FZWWxahk0EjTzmkTWryaEVIzI-AKUnuQ/exec"
	const form = document.forms['HTML-form-to-google-sheet']

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))
	});


    $('#test-form').bootstrapValidator({
        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            name: {
             	message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'The name can only accept alphabetical input'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            number: {
            	validators: {
            		notEmpty: {
            			message: 'mobile number is required and cannot be empty'
            		},
            		regexp: {
            			regexp: /^\d{10}$/,
            			message: 'Mobile number is not valid'
            		}
            	}
            },
        }
    })
});
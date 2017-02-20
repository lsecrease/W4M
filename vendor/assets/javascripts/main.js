jQuery(document).ready(function($){
 var formModal = $('.cd-user-modal'),
     formHandy = formModal.find('#cd-gam'),
     handyBtn  = $('.button-group');
 
// //Open Modal
 handyBtn.on('click', function(event){
		$(event.target).is(handyBtn) && handyBtn.children('a').toggleClass('is-visible');
  console.log("Whatever this is ran");
	});
 
 	//open handy form
	handyBtn.on('click', '.handy', handy_selected);
 
 	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
			formModal.removeClass('is-visible');
   console.log("modal closing");
		}	
	});
 
 function handy_selected(){
  handyBtn.children('a').removeClass('is-visible');
		formModal.addClass('is-visible');
  formHandy.addClass('is-selected');
  console.log("handy selected ran");
  console.log(formModal);
	}
 
});
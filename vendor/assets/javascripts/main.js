jQuery(document).ready(function($){
 var formModal = $('.cd-user-modal'),
     formHandy = formModal.find('#cd-handy'),
     formGam = formModal.find('#cd-gam'),
     handyBtn  = $('.button-group');
 
 
// //Open Modal
 handyBtn.on('click', function(event){
		$(event.target).is(handyBtn) && handyBtn.children(handyBtn).toggleClass('is-visible');
  console.log("Open Modal ran");
	});
// handyBtn.on('click', function(event){
//		$(event.target).is(handyBtn) && handyBtn.children('a').toggleClass('is-visible');
//  console.log("Whatever this is ran");
//	});
 
 	//open handy form
	handyBtn.on('click', '.handy', handy_selected);
 handyBtn.on('click', '.gam', gam_selected);
 
 	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
			formModal.removeClass('is-visible');
   console.log("modal closing");
		}	
	});
 
 //close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		formModal.removeClass('is-visible');
	    }
    });
 
 function handy_selected(){
  console.log("Handy selected ran")
  handyBtn.children(handyBtn).removeClass('is-visible');
		formModal.addClass('is-visible');
  formHandy.addClass('is-selected');
  formGam.removeClass('is-selected');
  console.log("handy selected ran");
  console.log(formModal);
	}
 
 function gam_selected(){
  handyBtn.children(handyBtn).removeClass('is-visible');
		formModal.addClass('is-visible');
  formGam.addClass('is-selected');
  formHandy.removeClass('is-selected');
  console.log("gam selected ran");
  console.log(formModal);
	}
 
});
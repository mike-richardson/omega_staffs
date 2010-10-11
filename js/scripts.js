$(document).ready(function() {

	$("a[href^='/evince/dir/atoz/']").addClass("atoz-link"); 
	$("a[href^='mailto']").addClass("mail-link");
	
	$('#main-content a').filter(function() {
         return this.hostname && this.hostname !== location.hostname;
        }).addClass('external-link');
 	
 	$("ul#stockton-cats  a").tipTip();
 	$("ul.pager  a").tipTip();
 	
 		$(" img").lazyload({ 
    		effect : "fadeIn"
});


 });
 
 
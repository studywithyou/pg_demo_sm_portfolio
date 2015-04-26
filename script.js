		var transition_time = 200;
		
		function navigation(ID){
			$("html, body").animate({scrollTop: $("#" + ID).offset().top - 50}, 600);
		}
			
		function send(){
			var email = $("#email").val();
			var message = $("#message").val();
			var error = "";
			var etaposition = email.indexOf("@");
			var dotposition = email.lastIndexOf(".")
			var lastEtaPosition = email.lastIndexOf("@");
			var etaCount = email.replace(/[^@]/gi, "").length;
				
			if(email == "Your email" || email == "")
				error = "Please fill in all of the fields";
			else if(etaposition < 1 || dotposition <= etaposition+2 || dotposition+2 >= email.length || etaCount != 1)
				error = "Wrong email adress";
			else if(message == "Your message" || message == "")	
				error = "Please fill in all of the fields";
			else{
				send_message(email, message);
				return true;
			}
				
			if(error != "")
				show_toast(error, 'bad');
		}
			
		function send_message(email_to_sent, message_to_sent){
			$.ajax({
				type: 'POST',
				url: 'ajax.php',
				data: { email: email_to_sent, message: message_to_sent },
				success:function(data){
					if(data == "sent"){
						$("#email").val('');
						$("#message").val('');
						contact('email', 'blur');
						contact('message', 'blur');
						show_toast('Your message has been sent', 'good');
					}else{
						$("#email").val('');
						$("#message").val('');
						contact('email', 'blur');
						contact('message', 'blur');
						show_toast('Your message has not been sent. Please try again', 'bad');
					}
				}
			});
		}
		
		var toast_timer;		
		function show_toast(text, status){
			clearTimeout(toast_timer);
			$("#toast").html(text);
			$("#toast_wrapper").css('height','50px');

			if(status == "good")
				$("#toast_wrapper").css('background-color','rgba(43, 190, 43, 0.95)');
			else if(status == "bad")	
				$("#toast_wrapper").css('background-color','rgba(175, 25, 25, 0.95)');
				
			toast_timer = setTimeout(function(){
				$("#toast_wrapper").css('height','0px');
			},3000);
			
		}
			
	function titles(){
		$(document)
		.on('mouseenter', '.tooltip',  function(){
			var title = $(this).attr('title');
			current_title_object = $(this);
			$(this).data('title', title);
			$(this).removeAttr('title');
			$.data(this, "timer", setTimeout($.proxy(function() {
				$('<div class="tooltip_box"></div>').html(title).appendTo('body').fadeIn(transition_time);
				var $offset = $(this).offset();
				var $containerWidth = $(this).outerWidth();

				var $tipWidth = $('.tooltip_box').width() + 19;
				var $tipHeight = $('.tooltip_box').height() + 5;

				$('.tooltip_box').css({
					'top': $offset.top - ( $tipHeight + 15 ),
					'left': $offset.left - ( $tipWidth - $containerWidth  ) / 2
				});

			}, this), transition_time));
		})
		.on('mouseleave', '.tooltip', function() {
			clearTimeout($.data(this, "timer"));
			$(this).attr('title', $(this).data('title'));
			$('.tooltip_box').remove();
			current_title_object = null;
		});
	}
						
	function refresh(){
		location.href = "";
	}			
					
	function contact(ID, action){
		var input_value = $("#" + ID).val();
		switch(action){
			case "click":
				if(ID == "email" && input_value == "Your email")
					$("#" + ID).css("color","#636262");
				else if(ID == "message" && input_value == "Your message")
				$("#"+ ID).css("color","#636262");
				else if(ID == "title" && input_value == "Title")
					$("#" + ID).css("color","#636262");
				else if(ID == "details" && input_value == "Details")
					$("#"+ ID).css("color","#636262");
				else if(ID == "content" && input_value == "Content")
					$("#"+ ID).css("color","#636262");
				else if(ID == "location" && input_value == "Location")
					$("#"+ ID).css("color","#636262");
				else if(ID == "username" && input_value == "Username")
					$("#"+ ID).css("color","#636262");	
				else if(ID == "password" && input_value == "Password")
					$("#"+ ID).css("color","#636262");		
				break;
				
			case "blur":
				if(ID == "email" && input_value == "Your email")
					$("#" + ID).css("color","#999");
				else if(ID == "message" && input_value == "Your message")
					$("#"+ ID).css("color","#999");
				else if(ID == "title" && input_value == "Title")
					$("#" + ID).css("color","#999");
				else if(ID == "details" && input_value == "Details")
					$("#"+ ID).css("color","#999");
				else if(ID == "content" && input_value == "Content")
					$("#"+ ID).css("color","#999");
				else if(ID == "location" && input_value == "Location")
					$("#"+ ID).css("color","#999");	
				else if(ID == "username" && input_value == "Username")
					$("#"+ ID).css("color","#999");
				else if(ID == "password" && input_value == "Password")
					$("#"+ ID).css("color","#999");				
					
				if(ID == "email" && input_value == ""){
					$("#" + ID).val('Your email');
					$("#" + ID).css("color","#999");
				}else if(ID == "message" && input_value == ""){
					$("#" + ID).val('Your message');
					$("#" + ID).css("color","#999");
				}else if(ID == "title" && input_value == ""){
					$("#" + ID).val('Title');
					$("#" + ID).css("color","#999");
				}else if(ID == "details" && input_value == ""){
					$("#" + ID).val('Details');
					$("#" + ID).css("color","#999");
				}else if(ID == "content" && input_value == ""){
					$("#" + ID).val('Content');
					$("#" + ID).css("color","#999");
				}else if(ID == "location" && input_value == ""){
					$("#" + ID).val('Location');
					$("#" + ID).css("color","#999");
				}else if(ID == "username" && input_value == ""){
					$("#" + ID).val('Username');
					$("#" + ID).css("color","#999");
				}else if(ID == "password" && input_value == ""){
					$("#" + ID).val('Password');
					$("#" + ID).css("color","#999");
				}
				break;	
				
			case "write":
				if(input_value == "Your email" || input_value == "Your message" || input_value == "Title" || input_value == "Details" || input_value == "Content" || input_value == "Location" || input_value == "Username" || input_value == "Password")
					$("#" + ID).val('');
				if($("#" + ID).css("color") != "#262829")	
					$("#" + ID).css("color","#262829");
				break;
			
			default:return false;
			}
		}

	function input_click(type){
		document.getElementById("input_" + type).click();
	}
		
	function load_index_show(){
		//index_show
		var width_full = screen.width;
		var height_full = window.innerHeight;;
		var show_place = "#index_show";
		$(show_place).css({'width' : '100%', 'height' : height_full});
		
		//make center
		/*
		var inside = "#index_inside";
		var inside_height = $(inside).height();
		var top_margin = (height_full - inside_height) / 2;
		$(inside).css("padding-top", top_margin);
		$(inside).css("padding-bottom", top_margin);
		*/
	}	
		
	$(document).ready(function(){
		load_index_show();
		titles();
	
		//slider
		$('.item-photo-slider').each(function(){
			$(this).slick({
				autoplay: true,
				autoplaySpeed: 4000,
				arrows: false,
				dots: true,
				infinite: true,
				pauseOnHover: true,
				slidesToShow: 1,
			});
			
			$('.item_photo_box_left_navigation').on('click', function(){
				$(this).parent().slickPrev();
			});
			$('.item_photo_box_right_navigation').on('click', function(){
				$(this).parent().slickNext();
			});
		});
	});
	
	$(document).on( "scroll", function(){
		var scrolled = $(this).scrollTop();
		var height_header = 51;
		var index_height = window.innerHeight;
		var header_ID = "#header_wrapper";
		
		if(scrolled >= index_height - height_header){
			//$(header_ID).css({"opacity" : "1", "top" : "0px"})
			$(header_ID).css("box-shadow", "0px 0px 2px rgba(32, 31, 29, 0.3)");
			$(header_ID).css("border-bottom", "1px solid rgba(32, 31, 29, 0.3)");
		}else{
			//$(header_ID).css({"opacity" : "0", "top" : "-51px"})
			$(header_ID).css("box-shadow", "none");
			$(header_ID).css("border-bottom", "none");
		}
	});
		
		
	function show(item_ID, image_index){
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var item_photos = "item_photos_" + item_ID;
		var items = window[item_photos];
		var options = {
			index: image_index,
			showHideOpacity:true,
			history: false,
			getThumbBoundsFn: function(index) {
				var thumbnail = document.getElementById("slider_for_" + item_ID),
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect(); 
				return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			},
		};
		options.mainClass = 'pswp--minimal--dark';
		options.barsSize = {top:0,bottom:0};
		options.captionEl = false;
		options.shareEl = false;
		options.bgOpacity = 0.85;
		options.tapToClose = false;
		options.tapToToggleControls = false;
		options.showAnimationDuration = 500;
		
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	}
	
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};	

function camera(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		destinationType: Camera.DestinationType.DATA_URL
	});
}

function onSuccess(imageData) {
    //var image = document.getElementById('myImage');
    //image.src = "data:image/jpeg;base64," + imageData;
	alert('Failed because: success');
}

function onFail(message) {
    alert('Failed because: ' + message);
}
	
function vibration(){
	navigator.vibrate(3000);
}	
		
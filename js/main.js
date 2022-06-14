$(function(){
			
	var window_h = $(window).height();
	$('#page01').height(window_h);
		
	$(window).resize(function(){
		var window_h = $(window).height();//윈도우객체 높이값을 window_h에 기억시킴.
		$('#page01,#page03').height(window_h); // 리사이징.
	});
		
	$('#gnb>li>a').click(function(e){
		e.preventDefault();
		$('body').scrollTo($(this).attr('href'), 1000);
		return false;
	});
	
	//menu
	
	var h_h = 400;
	$('.top_btn').css({'bottom':-40});
	
	$(window).scroll(function(){
		
		var win_h = $(window).scrollTop();
		
		
		if(win_h>h_h){
			$('#gnb_nav').css({'position':'fixed','top':0,'background':'#fff','border-bottom':'1px solid #7d7d7d'});
			$('#gnb').css({'top':0,'border-top':'none','height':'60px','width':'600px'});
			$('#gnb li').css({'width':'25%','height':'60px','line-height':'60px'});
			$('.m_hidden').css({'display':'block'});
			$('.m_gnb_btn').css({'background-color':'#fff','border':'1px solid #ddd'});
			$('.top_btn').css({'bottom':10});
			
		}else if(win_h<h_h){
			$('#gnb_nav').css({'position':'relative','background':'none','top':'none','border-bottom':'none'});
			$('#gnb').css({'top':400,'border-top':'1px solid #333','height':'50px','width':'400px'});
			$('#gnb li').css({'width':'33.3%','height':'50px','line-height':'50px'});
			$('.m_hidden').css({'display':'none'});
			$('.m_gnb_btn').css({'background-color':'transparent','border':'none'});
			$('.top_btn').css({'bottom':-40});
		}
	});
		
	
	$('.scroll_down').click(function(e){
		e.preventDefault();
		$('body').scrollTo($(this).attr('href'), 1000);
	});
	
	$('.top_btn>a').click(function(e){
		e.preventDefault();
		$('body').scrollTo($(this).attr('href'), 1000);
	});
		
		
	//works	
	
	function all_menu(){
		$('#works_list>li').hide();	
		$('#works_list>li').fadeIn();
		$('.bd').addClass('border1px');
	}
	
	all_menu();
	
	var line_box = $('.ui_2_line, .a2_2_line, .a_3_line, .p_2_line');
		
	$('.All_menu').click(function(e){
		
		
		e.preventDefault();
		all_menu();
		$('.works_gnb>li>a').removeClass('menu_on');
		$('.All_menu').addClass('menu_on');
		line_box.css({'border-bottom':'none'});
		line_box.css({'border-bottom':'1px solid #ccc'});
		return false;
	});
	
	$('.uiDesign_menu').click(function(e){
		e.preventDefault();
		$('#works_list>li').hide();
		$('.ui_2_line').css({'border-bottom':'none'});
		
		$('.works_gnb>li>a').removeClass('menu_on');
		$('.uiDesign_menu').addClass('menu_on');
		
		$('.ui_1_line').fadeTo(200,1,function(){
			$('.ui_2_line').fadeTo(200,1);
		});		
	});
	
	
	$('.AdDesign_menu').click(function(e){
		e.preventDefault();
		$('#works_list>li').hide();
		$('.a_3_line').css({'border-bottom':'none'});
		$('.works_gnb>li>a').removeClass('menu_on');
		$('.AdDesign_menu').addClass('menu_on');
		
		$('.a_1_line').fadeTo(200,1,function(){
			$('.a_2_line').fadeTo(200,1,function(){
				$('.a_3_line').fadeTo(200,1);
			});
		});	
	});
	
	$('.PackDesign_menu').click(function(e){
		e.preventDefault();
		$('#works_list>li').hide();
		$('.p_2_line').css({'border-bottom':'none'});
		
		$('.works_gnb>li>a').removeClass('menu_on');
		$('.PackDesign_menu').addClass('menu_on');
		
		$('.p_1_line').fadeTo(200,1,function(){
			$('.p_2_line').fadeTo(200,1);
		});	
	});
	
	$('.ArtworkDesign_menu').click(function(e){
		e.preventDefault();
		$('#works_list>li').hide();
		$('.a2_2_line').css({'border-bottom':'none'});
		
		$('.works_gnb>li>a').removeClass('menu_on');
		$('.ArtworkDesign_menu').addClass('menu_on');
		$('.bd').removeClass('border1px');
		
		$('.a2_1_line').fadeTo(200,1,function(){
			$('.a2_2_line').fadeTo(200,1)
		});
	});
	
	
	
	//mobile_menu
	
	$('.m_gnb_btn').click(function(e){
		e.preventDefault();
		$('.m_gnb_btn').hide(function(){
			$('#m_gnb').fadeIn(200);
		});	
	});
	
	$('.close').click(function(){
		$('.m_gnb_btn').show(function(){
			$('#m_gnb').fadeOut(200);
		});
	});
	
	$('#m_gnb>li>a').click(function(e){
		e.preventDefault();
		$('body').scrollTo($(this).attr('href'), 1000,function(){
			$('#m_gnb').fadeOut(200, function(){
				$('.m_gnb_btn').show();
			});
		});
		return false;
	});
	
	$('.m_works_gnb>li>a').click(function(e){
		e.preventDefault();
		$('body').scrollTo($(this).attr('href'), 1000,function(){
			$('#m_gnb').fadeOut(200, function(){
				$('.m_gnb_btn').show();
			});
		});
		return false;
	});
	
	$('.m_works_gnb>li:eq(0)>a').click(function(){
		$('#works_list>li').hide();
		$('.ui_2_line').css({'border-bottom':'none'});
		$('#works_list').animate({'height':'0'},200);
		var box_height = $('.ui_1_line').height();
		
		$('#works_list').animate({'height':box_height*2},500,function(){
			$('.ui_1_line').fadeTo(200,1,function(){
				$('.ui_2_line').fadeTo(200,1);
			});	
		});
	});
	
	$('.m_works_gnb>li:eq(1)>a').click(function(){
		$('#works_list>li').hide();
		$('#works_list').animate({'height':'0'},200);
		$('.a_3_line').css({'border-bottom':'none'});
		var box_height = $('.a_1_line').height();
		
		$('#works_list').animate({'height':box_height*3},500,function(){
			$('.a_1_line').fadeTo(200,1,function(){
				$('.a_2_line').fadeTo(200,1,function(){
					$('.a_3_line').fadeTo(200,1);
				});
			});
		});
	});
	
	$('.m_works_gnb>li:eq(1)>a').click(function(){
		$('#works_list>li').hide();
		$('#works_list').animate({'height':'0'},200);
		$('.a_3_line').css({'border-bottom':'none'});
		var box_height = $('.a_1_line').height();
		
		$('#works_list').animate({'height':box_height*3},500,function(){
			$('.a_1_line').fadeTo(200,1,function(){
				$('.a_2_line').fadeTo(200,1,function(){
					$('.a_3_line').fadeTo(200,1);
				});
			});
		});
	});
	
	$('.m_works_gnb>li:eq(2)>a').click(function(){
		$('#works_list>li').hide();
		$('#works_list').animate({'height':'0'},200);
		$('.p_2_line').css({'border-bottom':'none'});
		var box_height = $('.p_1_line').height();
		
		$('#works_list').animate({'height':box_height*2},500,function(){
			$('.p_1_line').fadeTo(200,1,function(){
				$('.p_2_line').fadeTo(200,1);
			});
		});	
	});
	
	$('.m_works_gnb>li:eq(3)>a').click(function(){
		$('#works_list>li').hide();
		$('#works_list').animate({'height':'0'},200);
		$('.p_2_line').css({'border-bottom':'none'});
		var box_height = $('.a2_1_line').height();
		
		$('#works_list').animate({'height':box_height*2},500,function(){
			$('.a2_1_line').fadeTo(200,1,function(){
				$('.a2_2_line').fadeTo(200,1)
			});
		});		
	});
	
	
	//sub_tab
	
	$('#img_panel li').hide();
	$('#img_panel li:first').show();
		
	$('#tab_menu li').click(function(){
			
		$('#tab_menu li').removeClass('selected');
		$(this).addClass('selected');
				
		$('#img_panel li').hide()
		var active_panel = $(this).attr('rel');
		$('#'+active_panel).show();
			
	});
	
	
	
	
		
});			
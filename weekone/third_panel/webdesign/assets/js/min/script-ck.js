function dropInLeft(){console.log("happens once when you reach 200px down the page"),$(window).off("crossing200px",dropInLeft),$(".section_two").addClass("box_bg animated slideInLeft")}function dropInRight(){console.log("happens once when you reach 400px down the page"),$(window).off("crossing400px",dropInRight),$(".section_three").addClass("box_bg animated slideInRight")}function slideInLeft(){console.log("happens once when you reach 800px down the page"),$(window).off("crossing800px",slideInLeft),$(".section_four").addClass("box_bg animated slideInLeft")}function activate(){console.log("happens once when you reach 1300px down the page"),$(window).off("crossing1300px",activate),$("#star1").addClass("animated flipInX"),$("#star2").addClass("animated rotateInDownLeft"),$("#star3").addClass("animated lightSpeedIn"),$(".box1").addClass("white_bg"),$(".box2").addClass("white_bg"),$(".box3").addClass("white_bg")}function tripleAction(){console.log("happens once when you reach 1620px down the page"),$(window).off("crossing1620px",tripleAction),$(".section_six").addClass("box_bg animated slideInRight"),$(".section_seven").addClass("box_bg animated slideInRight"),$(".section_eight").addClass("box_bg animated slideInRight")}function bam(){console.log("happens once when you reach 3200px down the page"),$(window).off("crossing3200px",bam),$(".section_nine").addClass("box_bg animated tada")}$(window).on("crossing200px",dropInLeft),$(window).on("scroll",function(){console.log("You have scrolled "+$(window).scrollTop()+"px down the page"),$(window).scrollTop()>200&&$(window).trigger("crossing200px")}),$(window).on("crossing400px",dropInRight),$(window).on("scroll",function(){console.log("You have scrolled "+$(window).scrollTop()+"px down the page"),$(window).scrollTop()>400&&$(window).trigger("crossing400px")}),$(window).on("crossing800px",slideInLeft),$(window).on("scroll",function(){console.log("You have scrolled "+$(window).scrollTop()+"px down the page"),$(window).scrollTop()>800&&$(window).trigger("crossing800px")}),$(window).on("crossing1300px",activate),$(window).on("scroll",function(){console.log("You have scrolled "+$(window).scrollTop()+"px down the page"),$(window).scrollTop()>1300&&$(window).trigger("crossing1300px")}),$(window).on("crossing1620px",tripleAction),$(window).on("scroll",function(){console.log("You have scrolled "+$(window).scrollTop()+"px down the page"),$(window).scrollTop()>1620&&$(window).trigger("crossing1620px")}),$(window).on("crossing3200px",bam),$(window).on("scroll",function(){console.log("You have scrolled "+$(window).scrollTop()+"px down the page"),$(window).scrollTop()>3200&&$(window).trigger("crossing3200px")}),$(document).ready(function(){$("#donate").sticky({topSpacing:0})});
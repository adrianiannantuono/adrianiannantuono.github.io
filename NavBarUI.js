$(document).ready(function(){
  $(".link").addClass("color");
  //   First active item
  $(".menu--item__one").click(function(){
     $(".bottom__line").addClass("bottom__active");
     $(".link").addClass("color");
     $(".link1").removeClass("color1");
     $(".link2").removeClass("color2");
     $(".bottom__line").removeClass("bottom__active1 bottom__active2");
  });

  //  Second active item
  $(".menu--item__two").click(function(){
      $(".bottom__line").addClass("bottom__active1");
      $(".link1").addClass("color1");
      $(".link").removeClass("color");
      $(".link2").removeClass("color2");
      $(".bottom__line").removeClass("bottom__active bottom__active2");
  });

  // Third active item
 $(".menu--item__three").click(function(){
      $(".bottom__line").addClass("bottom__active2");
      $(".link2").addClass("color2");
      $(".link").removeClass("color");
      $(".link1").removeClass("color1");
      $(".bottom__line").removeClass("bottom__active bottom__active1");
  });
  // Fourth active item
 $(".menu--item__four").click(function(){
      $(".bottom__line").addClass("bottom__active3");
      $(".link2").addClass("color2");
      $(".link").removeClass("color");
      $(".link1").removeClass("color1");
      $(".bottom__line").removeClass("bottom__active bottom__active1");
  });
  // Fifth active item
 $(".menu--item__five").click(function(){
      $(".bottom__line").addClass("bottom__active4");
      $(".link2").addClass("color2");
      $(".link").removeClass("color");
      $(".link1").removeClass("color1");
      $(".bottom__line").removeClass("bottom__active bottom__active1");
  });
  // Fifth active item
 $(".menu--item__five").click(function(){
      $(".bottom__line").addClass("bottom__active5");
      $(".link2").addClass("color2");
      $(".link").removeClass("color");
      $(".link1").removeClass("color1");
      $(".bottom__line").removeClass("bottom__active bottom__active1");
  });
});

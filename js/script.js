$(function () {
  
  /*** change content in html tags ***/

  // var pFirst = $("p:first")
  //
  // console.log(pFirst.text())
  // console.log(pFirst.html())
  //
  // // pFirst.text("<strong>Hi</strong> World!")
  // // pFirst.html("<strong>Hi</strong> World!")
  //
  // pFirst.append(" I am the walrus")
  // pFirst.html(pFirst.html() + " I am the walrus.")

  /***** data function *****/
/* var images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg",
]

gallery.data("availableImages", images)
console.log(gallery.data("availableImages"))

gallery.data("name", "The Awesome Gallery")

console.log(gallery.data())
gallery.removeData("name")

var pFirst = $("p:first")
console.log(pFirst.data("mydata")) */
/******
  $("a").addClass("fancy-link")
  $("p:first").addClass("large emphasize")

  $("li li").addClass(function(index){
    $(this).addClass("item-" + index)
  })

  $("div").addClass(function(index, currentClass){
    if (currentClass === "dummy") {
      return "green-box"
    }
  })

  $(".red-box").removeClass("red-box").addClass("blue-box")

  $(".gallery").hide()
  */

  // var galleryImage = $(".gallery").find("img").first();
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  //
  // var i=0
  // setInterval(function(){
  //   i = (i+1) % images.length; // 0,1,2,0,1,2,0,1...
  //   galleryImage.fadeOut(function(){
  //     $(this).attr("src", images[i]);
  //     $(this).fadeIn()
  //   })
  //   console.log(galleryImage.attr("src"))
  // }, 2000)

/******** maniupulating attributes and properties */
  // attr(), prop(), val()

  // var specialLink = $('#anchor')
  // console.log(specialLink.attr("href"))
  //
  // specialLink.attr("href", "http://www.michaelangelospitaleri.com")
  //
  // var checkBox = $("input:checkbox")
  // console.log(checkBox.prop("checked"))
  // console.log(checkBox.attr("checked"))
  //
  // var textInput = $("input:text")
  // console.log(textInput.val())
  //
  // var rangeInput = $("input[type='range']")
  // console.log(rangeInput.val())


/********remove elements and Content
*/

// var removedListItem = $("li").remove()
// $("li").remove()
// $("form").children().not("input:text, textarea, br").remove()
// var detachedListItem = $("li").detach()
// $("#content").append(detachedListItem)

// $(".red-box, .green-box, .blue-box").empty()

/**** replace elements and content

  // $("li").replaceWith("<li>replaced</li>")
  // $("li").replaceWith(function(){
  //   return "<li>I'm the best list item ever</li>"
  // })
  // var firstListItem = $("li:first")
  // $("p:first").replaceWith(firstListItem)

$(".red-box, .blue-box").replaceWith("<div class='green-box'>Green</div>")

*/

/******
  // adds a clone of each box
  $("#boxes").children().not(".clear").after(function(){
    return $(this).clone();
  });
**/
  // $("ul ul:first").append("<li>im a new sub item!</li>")
  // $("<li>I'm the last item now </li>").appendTo("ul ul:first")
  // $("ul ul:first").prepend("<li>im the newest sub item!</li>")
  //
  // $(".red-box").after("<div class='red-box'>Red 2</div>")
  // $(".blue-box").before("<div class='blue-box'>Blue Friend</div>")
  //
  // $(".blue-box").before($(".red-box"))




/***** interesting selectors

  // $("li").not(function(index){
  //   return index % 3 === 2
  // }).css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)")

/*  $("li").filter(function(index){
    return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)") */


/*********************** selectors

  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $(":header").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)")





  // $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input[type='text'], h2, p:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)")
/******************

  /****** light box delay
  $(".lightbox").delay(500).fadeIn(1000)
  */


/************* code challenge nested custom animations
$(".red-box").animate({
  marginLeft: "200px",
  width: "175px",
  height: "175px",
},1000, function(){
  $(".green-box").fadeTo(1000,0, function(){
    $(".blue-box").animate({
      width: "250px",
      height: "150px",
      borderRadius: "20%"
    }, 1000)
  })
})
*****/

  /*************** call back functions
  $(".red-box").fadeTo(1000, 0, function(){
    $(".green-box").fadeTo(1000, 0, function(){
      $(".blue-box").fadeTo(1000, 0, function(){
        alert("my ninja")
      })
    })
  })
*/
  /****** delays and chaining *****/
  /*
  $(".red-box").fadeTo(1000, 0.2)
  $(".green-box").delay(1000).fadeTo(1000, 0.5)
  $(".blue-box").delay(2000).fadeTo(1000, 0.3)
  */


  ////advanced animations
  /*
  $(".blue-box").animate({
    "margin-left": "200px",
    "opacity": 0,
    "height": "50px",
    "width": "50px",
    "margin-top": "25px",
  }, 1000);

  $("p").animate({
    fontSize: "20px"
  }, 1000)
*/



  // Hide an element
  // $(".red-box").hide(500);
  // // Show it again
  // $(".red-box").show(500);
  //
  // // Just toggle visibility depending on whether element is shown or hidden
  // // $(".red-box").toggle();  // hides
  //
  // // Up until this point, you can't even see what happens in the browser
  // // because it happens in a matter of milliseconds.
  //
  // // Use show/hide as animations (not very commonly used)
  // $(".green-box").hide(1000);
  // $(".green-box").show(1000);
  // $(".blue-box2").show();
  // $(".blue-box").slideUp(1000)
  // $(".blue-box").slideDown(1000)
  // $("p").hide()
  // $("p").slideDown(1000)

  // $(".blue-box").animate({
  //   "margin-left": "+=200px"
  // }, 1000, "linear");
});

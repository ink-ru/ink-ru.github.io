
$(() => {

	var sectionColors = [];
	sectionColors = sectionColors.concat(["MintCream", "HoneyDew", "LightGoldenrodYellow"])
	sectionColors = sectionColors.concat(['Azure', 'LightCyan', 'AliceBlue'])
	sectionColors = sectionColors.concat(['Ivory', 'LightYellow', 'LemonChiffon'])
	sectionColors = sectionColors.concat(['Snow', 'SeaShell'])
	sectionColors = sectionColors.concat(['lavenderblush', 'MistyRose', 'Lavender'])
	sectionColors = sectionColors.concat(["cornsilk", "floralwhite", "oldlace", "blanchedalmond"])
	sectionColors = sectionColors.concat(["linen", "papayawhip", "moccasin"])
	sectionColors = sectionColors.concat(["ghostwhite", 'whitesmoke', "beige"])
	sectionColors = sectionColors.concat(["antiquewhite", 'seashell', "lightblue", "lightsteelblue", 'thistle'])
	// sectionColors = sectionColors.concat(["Gainsboro", "LightGray", "Silver"])

	// === Array shuffle ===
	/*
	sectionColors = sectionColors
	    .map(value => ({ value, sort: Math.random() }))
	    .sort((a, b) => a.sort - b.sort)
	    .map(({ value }) => value)
	*/
	sectionColors = gsap.utils.shuffle(sectionColors)

	//apply sectionColors to each .fullscreen element
	gsap.set(".cards-grid .card", {backgroundColor:gsap.utils.wrap(sectionColors), filter:"saturate(70%) grayscale(10%)"})

	// === Bootstrap ScrollSpy analog based on GSAP ===
	// const sections = gsap.utils.toArray(".y_start")
	// sections.forEach(function(section, index){
	//   ScrollTrigger.create({
	//     trigger:section,
	//     start:"top center",
	//     end:"bottom center",
	//     markers:false,
	//     toggleClass:{targets:`li:nth-child(${index+1})`, className:"active"}  
	//   })
	// })


	$('body').scrollspy({ target: '#nav-list' })
	$('body').scrollspy({ target: '#nav-list1' })


	// =====================================================================
    // When the user scrolls the page, execute upd_progress
    window.onscroll = function() {upd_progress()};

    function upd_progress() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  

});

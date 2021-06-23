$(function () {
	var count = 1;
  
	// Create click event handler on the document.
  $(document).on("click", function (event) {
    // If the target is not the container or a child of the container, then process
    // the click event for outside of the container.
    if ($(event.target).closest("#dropdown_click").length === 0) {
    	document.getElementById("dropdown_content").style.display="none";
        document.getElementById("dropdown_click").style.backgroundColor="white";
    document.getElementById("dropdown_click").style.borderRadius="100%";
    }
  });
  
	// Create click event handler on the container element.
  $("#dropdown_click").on("click", function () {
    document.getElementById("dropdown_content").style.display="block";
    document.getElementById("dropdown_click").style.backgroundColor="rgb(218, 218, 218)";
    document.getElementById("dropdown_click").style.borderRadius="50%";
  });
});



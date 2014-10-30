var parcelid = location.search.match(/trackNums=(\w+)/)[1];
if (confirm("Suivre colis n°" + parcelid + " ?")){
	$('input.button.btnGroup6.arrowIconRight:submit[name="track.x"]').click();
}

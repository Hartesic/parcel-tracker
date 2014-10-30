var parcelid = location.search.match(/trackid=(\w+)/)[1];
if (confirm("Suivre colis n°" + parcelid + " ?")){
	$('textarea[name="chronoNumbers"]').val(parcelid);
	$('input.boutonValider:submit').click();
}

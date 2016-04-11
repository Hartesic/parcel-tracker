var IFRAME_TRACKER_ID = '#iframehp';
var PARCEL_NUMBER_ATTR = 'numColis';

var parcelIdMatch = location.search.match(/trackid=(\w+)/);
if (parcelIdMatch.length > 1){
	parcelId = parcelIdMatch[1];
	var currentTarget = $(IFRAME_TRACKER_ID).attr('src');
	var newTarget = currentTarget + '?' + PARCEL_NUMBER_ATTR + '=' + parcelId;
	$(IFRAME_TRACKER_ID).attr('src', newTarget);
}

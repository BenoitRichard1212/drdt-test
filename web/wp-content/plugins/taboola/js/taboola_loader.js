window._taboola = window._taboola || [];
_taboola.push({photo:'auto'});
_taboola.push({article:'auto'});
(function (e, f, u) {
	e.async = 1;
	e.src = u;
	f.parentNode.insertBefore(e, f);
})(
	document.createElement('script'),
	document.getElementsByTagName('script')[0],
	tmbi_taboola.script
);
jQuery(function($) {
	_taboola.push({flush: true});
});

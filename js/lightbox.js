// $(function() {
//   var settings = {fixedNavigation:true};
//   $('#gallery a').lightBox(settings);
// });

$(function(){
  $('a[rel=lightbox]').lightBox({
    containerResizeSpeed: 250,
    fixedNavigation: true
  });
  // $('a[rel=2ndlightbox]').lightBox({
  //   overlayBgColor: '#fff',
  //   overlayOpacity: 0.7
  // });
});

$(function() {
   $('a[@rel*=lightbox]').lightBox({
	overlayBgColor: '#fff',
	overlayOpacity: 0.6,
        fixedNavigation: false,
	imageLoading: 'images/lightbox-ico-loading.gif',
	imageBtnClose: 'images/lightbox-btn-close.gif',
	imageBtnPrev: 'images/lightbox-btn-prev.gif',
	imageBtnNext: 'images/lightbox-btn-next.gif',
	containerResizeSpeed: 350,
	txtImage: 'Imagem',
	txtOf: 'de'
   });
});

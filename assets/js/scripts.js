// target='_blank' on url that are not par of the current domain
// see http://stackoverflow.com/questions/4425198/markdown-target-blank
(function() {
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
       if (links[i].hostname != window.location.hostname) {
           links[i].target = '_blank';
           links[i].className += ' externalLink'
       }
    }
})();


// cookie agreement
$(function() {
    if ($.cookie('cookieAgreement')){
        $('.cookieAgreement').hide();
    }

    $('.agreecockies').click(
        function(){
            $.cookie('cookieAgreement', 'http://www.youtube.com/watch?v=MMb3fd7fwec', { expires: 365, path: '/' });
            $('.cookieAgreement').hide('slow');
        }
    );
});

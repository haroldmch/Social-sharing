$(function(){
    $('.social-share').on('click',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var title = $this.attr('title');
        var type = $this.attr('data-type');

        $.openSocialShare(type,title,url);

    });

    $.openSocialShare = function(type,title,url) {
        var url_fb = "http://www.facebook.com/sharer.php?";//u=URL&t=TITLE
        var url_tw = "http://twitter.com/home?";//status=TITLE – URL

        if(type == 'fb'){
            url = url_fb+'u='+url+'&t='+title;
        }else if(type == 'tw'){
            url = url_tw+'status='+title+' - '+url;
        }

        var win = window.open(url, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');
        win.focus();
    }
});
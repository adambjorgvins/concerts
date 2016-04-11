
function imgError(el){
    $(el).attr("src","http://moredisciples.com/wp-content/uploads/2016/01/concert-silhouette-200.jpg")
}

$(document).ready(function(){

    $(document).on('mouseover','li' ,function(e){
        $(e.currentTarget).find('p').show();
        $(e.currentTarget).find('.overlay').show();

    });
    $(document).on('mouseleave','li' ,function(e){
        $(e.currentTarget).find('p').hide();
        $(e.currentTarget).find('.overlay').hide();
    });

    $.ajax({
        'url': 'https://apis.is/concerts',
        'type': 'GET',
        'dataType': 'json',
        'success': function(response) {
            var ul = $('#data')
            var array = response.results
            for(var i=0;i<array.length;i++){
                var overlay = $('<div class="overlay" ></div>')
                var img = $('<img src="'+ array[i].imageSource +'" onerror="imgError(this)"/>')
                var p = $('<p>'+array[i].name +'</p>')
                var li = $('<li></li>')

                p.appendTo(li)
                img.appendTo(li)
                overlay.appendTo(li)
                li.appendTo(ul)
            }
        }
    });
})
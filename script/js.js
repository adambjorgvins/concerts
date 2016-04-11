
function imgError(el){
    $(el).attr("src","http://moredisciples.com/wp-content/uploads/2016/01/concert-silhouette-200.jpg")
}

$(document).ready(function(){

    $(document).on('mouseover','li' ,function(e){
        $(e.currentTarget).find('p','f','g').show();
        $(e.currentTarget).find('.overlay').show();

    });
    $(document).on('mouseleave','li' ,function(e){
        $(e.currentTarget).find('p','f','g').hide();
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
                var date = moment(array[i].dateOfShow).format('DD.MMMM YYYY, h:mm')
                var TimeElement = $('<p class="loctime time">'+date +'</p>')
                var Location = $('<p class="loctime location">'+array[i].eventHallName +'</p>')
                var overlay = $('<div class="overlay" ></div>')
                var img = $('<img src="'+ array[i].imageSource +'" onerror="imgError(this)"/>')
                var name = $('<p>'+array[i].name +'</p>')

                var li = $('<li></li>')

                TimeElement.appendTo(li)
                Location.appendTo(li)

                name.appendTo(li)
                img.appendTo(li)
                overlay.appendTo(li)
                li.appendTo(ul)
            }
        }
    });
})
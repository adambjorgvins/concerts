
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
            'url': 'https://apis.is/concerts',//
            'type': 'GET',
            'dataType': 'json',
            'success': function(response) {
                var ul = $('#data')
                var array = response.results


            for(var i=0;i<array.length;i++){

                //Raðaðir tónleikar eftir íslenskri dagsetningu
                var date = moment(array[i].dateOfShow).format('dddd[inn], D. MMMM YYYY [kl.] H:mm')

                //Þetta er class sem ég bjó til fyrir bæði location og time
                var TimeElement = $('<p class="loctime time">'+date +'</p>')
                var Location = $('<p class="loctime location">'+array[i].eventHallName +'</p>')

                //Overlay er svört filma sem að birtist þegar að ég mousehovera yfir (li)
                var overlay = $('<div class="overlay" ></div>')

                //Hér læt ég mynda af tónleikunum birtast í (li) og vinn með það
                var img = $('<img src="'+ array[i].imageSource +'" onerror="imgError(this)"/>')

                //Hér læt ég birta nafn á tónleikunum
                var name = $('<p>'+array[i].eventDateName +'</p>')

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
var count = 1;
        function getColor()
        {
            return Math.round(Math.random() * 9) + '' + Math.round(Math.random() * 9) + Math.round(Math.random() * 9);
        }
        function doIt(item)
        {
            item.append('<div></div><div></div><div></div><div></div>');
            count += 4;
            $('label').html('count: ' + count);
            item.css('backgroundColor',  'transparent');
            item.unbind('mouseenter');
            
            var divs = item.children('div');
            divs.each(function(){
                var div = $(this);
                var width = parseInt(div.css('width'));
                div.css('backgroundColor',  '#' + getColor());
                div.css('borderRadius',  '0px');
                div.css('borderRadius',  (width / 2) + 'px');
                
                if (width >= 4)
                {
                    setTimeout
                    (
                        jQuery.proxy(function(){div.mouseenter(function(){doIt(div)});}, div),
                        200
                    );
                }
            })
        }
        
        $(document).ready(function(){
            $('div').mouseenter(function(){doIt($(this))});
        })


$(function(){
    $(".weekly__slider-inner").slick({
         prevArrow:'<button class="slick-arrow slick-prev"><img src="images/weekly/arrow-left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/weekly/arrow-right.png" alt=""></button>'
    })
    
    $(function(){
	var mixer = mixitup('.product__items');
});
    $(".followers__box").slick({
        slidesToShow: 3,
        slidesToScroll: 1, 
            prevArrow:'<button class="slick-arrow slick-prev"><img src="images/weekly/arrow-left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/weekly/arrow-right.png" alt=""></button>'
    })
    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: true,
        prefix:'$',
    });
    
     $(".rateYo").rateYo({
    starWidth: "13px",
    readOnly: true,
    rating: 4.5
  });
    
})
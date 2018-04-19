import $ from 'jquery';
import '../../libs/slick-1.8.0/slick/slick.css';
import '../../libs/slick-1.8.0/slick/slick-theme.css';
import '../../libs/slick-1.8.0/slick/slick.js';

export default {
	autoPlay(sel,bool,qty){
		$(sel).slick({
		  autoplay:bool,
	      autoplaySpeed:2000,
	      infinite: true,
	      slidesToShow: qty,
	      slidesToScroll: 1
		});
	}
}
	
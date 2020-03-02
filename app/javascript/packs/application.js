import "bootstrap";
import "devise/sign_up";
import "../components/navbar";
import "../components/search";
import "../components/stats";
import "movies/mark_as_like";
import "movies/mark_as_dislike";
import "movies/mark_as_save";
import "movies/mark_as_blacklist";
import "components/step_two";


import 'select2/dist/css/select2.css';

import { initSelect2 } from '../components/search-friend';

initSelect2();


$('.select2').on('select2:select', function (e) {
    window.location.href = `/profiles/${e.params.data.id}`
    var data = e.params.data;
    console.log(data);
});

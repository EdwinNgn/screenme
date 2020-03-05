import "bootstrap";
import "devise/sign_up";
import "../components/navbar";
import "../components/search";
import "../components/stats";
// import "../components/roulette.js.erb";
import "movies/mark_as_like";
import "movies/mark_as_dislike";
import "movies/mark_as_save";
import "movies/mark_as_blacklist";

import "components/pieChart";
import "components/step_two";
import 'select2/dist/css/select2.css';
import 'components/search-friend';
import "../components/how_it_works";

import { handleClickOnFriend } from "../components/handleClickOnFriend"
import { roulette } from "../components/roulette"
import { readAllNotifications } from "../components/readAllNotifications"

handleClickOnFriend();
roulette();
readAllNotifications();

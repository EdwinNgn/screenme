
import $ from 'jquery';
import 'select2';

const profile = document.querySelector(".profile-content");

if (profile) {
  $('.select2').select2();

  $('.select2').on('select2:select', function (e) {
      window.location.href = `/profiles/${e.params.data.id}`
  });
};

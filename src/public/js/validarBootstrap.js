// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
    var customControlValidation1 = document.getElementById('customControlValidation1');
    var aceptarTerm = document.getElementById('aceptarTerm');
    var cancelarTerm = document.getElementById('cancelarTerm');
    var exampleModalCenter = document.getElementById('exampleModalCenter');
    aceptarTerm.addEventListener('click', function() {
      customControlValidation1.checked = true;
      $('#exampleModalCenter').modal('hide');
    }, false);
    cancelarTerm.addEventListener('click', function() {
      customControlValidation1.checked = false;
    }, false);

  }, false);
})();
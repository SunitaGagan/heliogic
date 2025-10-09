$(document).ready(function() {
    $("#menu-btn").click(function() {
        $("#nav-links").slideToggle(300);
    });

    // Reset menu visibility on resize
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $("#nav-links").show();
        } else {
            $("#nav-links").hide();
        }
    });
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $(".header").addClass("bg-white shadow-md");
        } else {
            $(".header").removeClass("bg-white shadow-md");
        }
    });
});
$(function() {
    function activateTab(tab) {
        if (tab === 'applicant') {
            $('#tab-applicant').addClass('tab-active').removeClass('tab-inactive');
            $('#tab-employer').addClass('tab-inactive').removeClass('tab-active');
            $('#panel-applicant').show();
            $('#panel-employer').hide();
        } else {
            $('#tab-employer').addClass('tab-active').removeClass('tab-inactive');
            $('#tab-applicant').addClass('tab-inactive').removeClass('tab-active');
            $('#panel-employer').show();
            $('#panel-applicant').hide();
        }
    }

    $('#tab-applicant').on('click', function() { activateTab('applicant'); });
    $('#tab-employer').on('click', function() { activateTab('employer'); });

    // Simple validation on submit
    function showError(fieldSelector, message) {
        var $el = $(fieldSelector);
        $el.addClass('input-error');
        $('.error[data-for="' + $el.attr('id') + '"]').text(message).show();
    }

    function hideErrorById(id) {
        $('#' + id).removeClass('input-error');
        $('.error[data-for="' + id + '"]').hide();
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        var digits = phone.replace(/\D/g, '');
        return digits.length >= 6 && digits.length <= 15;
    }

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var valid = true;

        // Clear previous errors
        $('.error').hide();
        $('input, textarea').removeClass('input-error');

        // Determine which panel is active
        var applicantActive = $('#panel-applicant').is(':visible');

        if (applicantActive) {
            var name = $('#name').val().trim();
            var email = $('#email').val().trim();
            var phone = $('#phone').val().trim();
            var message = $('#message').val().trim();
            var privacy = $('#privacy').is(':checked');

            if (!name) { showError('#name', 'Please enter your name.');
                valid = false; }
            if (!email || !validateEmail(email)) { showError('#email', 'Please enter a valid email.');
                valid = false; }
            if (!phone || !validatePhone(phone)) { showError('#phone', 'Please enter a valid phone number.');
                valid = false; }
            if (!message) { showError('#message', 'Message is required.');
                valid = false; }
            if (!privacy) { $('.error[data-for="privacy"]').show();
                valid = false; }

        } else {
            var company = $('#company').val().trim();
            var ename = $('#e-name').val().trim();
            var eemail = $('#e-email').val().trim();
            var emessage = $('#e-message').val().trim();

            if (!company) { showError('#company', 'Please enter company name.');
                valid = false; }
            if (!ename) { showError('#e-name', 'Please enter your name.');
                valid = false; }
            if (!eemail || !validateEmail(eemail)) { showError('#e-email', 'Please enter a valid email.');
                valid = false; }
            if (!emessage) { showError('#e-message', 'Message is required.');
                valid = false; }
        }

        if (valid) {
            // For demo we just show an alert. Replace with AJAX form submit if needed.
            alert('Form is valid! Submitting...');
            // Example: $(this).off('submit').submit(); // to actually submit
        } else {
            // scroll to first error
            var $firstErr = $('.input-error').first();
            if ($firstErr.length) {
                $('html,body').animate({ scrollTop: $firstErr.offset().top - 80 }, 300);
            }
        }
    });

});
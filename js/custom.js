$(document).ready(function() {
    let header = $('header');
    let hamburger = header.find('.hamburger');
    let menuLinks = header.find('.links ul')

    hamburger.click(function() {
        menuLinks.toggleClass('clicked')
    })
})
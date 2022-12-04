;(function ($) {
  // Remove no-js class
  $('html').removeClass('no-js')

  // Animate to section when nav is clicked
  $('header a').click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass('no-scroll')) {
      return
    }

    e.preventDefault()
    const heading = $(this).attr('href')
    const scrollDistance = $(heading).offset().top

    $('html, body').animate(
      {
        scrollTop: `${scrollDistance}px`,
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 5,
    )

    // Hide the menu once clicked if mobile
    if ($('header').hasClass('active')) {
      $('header, body').removeClass('active')
    }
  })

  // Scroll to top
  $('#to-top').click(() => {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500,
    )
  })

  // Scroll to first element
  $('#lead-down span').click(() => {
    const scrollDistance = $('#lead').next().offset().top
    $('html, body').animate(
      {
        scrollTop: `${scrollDistance}px`,
      },
      500,
    )
  })

  // Create timeline
  $('#experience-timeline').each(function () {
    $this = $(this) // Store reference to this
    $userContent = $this.children('div') // user content

    // Create each timeline block
    $userContent.each(function () {
      $(this)
        .addClass('vtimeline-content')
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>',
        )
    })

    // Add icons to each block
    $this.find('.vtimeline-point').each(function () {
      $(this).prepend(
        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>',
      )
    })

    // Add dates to the timeline if exists
    $this.find('.vtimeline-content').each(function () {
      const date = $(this).data('date')

      if (date) {
        // Prepend if exists
        $(this).parent().prepend(`<span class="vtimeline-date">${date}</span>`)
      }
    })
  })

  // Open mobile menu
  $('#mobile-menu-open').click(() => {
    $('header, body').addClass('active')
  })

  // Close mobile menu
  $('#mobile-menu-close').click(() => {
    $('header, body').removeClass('active')
  })

  // Load additional projects
  $('#view-more-projects').click(function (e) {
    e.preventDefault()
    $(this).fadeOut(300, () => {
      $('#more-projects').fadeIn(300)
    })
  })

  // Quick ugly hack to remove `Powered by embedly`
  setTimeout(() => {
    document.querySelectorAll('iframe.embedly-card').forEach((node) => {
      const style = document.createElement('style')
      style.textContent = '.card .brd, .card .hdr { display: none }'
      node.contentDocument.body.append(style)
    })
  }, 1e3)
})(jQuery)

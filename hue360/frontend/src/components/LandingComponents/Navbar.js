import React from 'react';
import $ from 'jquery';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

// window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    // var navbarShrink = function () {
    //     const navbarCollapsible = document.body.querySelector('#mainNav');
    //     if (!navbarCollapsible) {
    //         return;
    //     }
    //     if (window.scrollY === 0) {
    //         navbarCollapsible.classList.remove('navbar-shrink')
    //     } else {
    //         navbarCollapsible.classList.add('navbar-shrink')
    //     }

    // };

    // Shrink the navbar 
    // navbarShrink();

    // Shrink the navbar when page is scrolled
    // document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         rootMargin: '0px 0px -40%',
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//         return 0;
//     });

// });  

export default function Navbar() {
  useEffect(() => {

    $('a.nav-link' && 'a.nav-a').on('click', function (e) {
      e.preventDefault();

      const targetId = $(this).attr('href');

      $('html, body').animate(
        {
          scrollTop: $(targetId).offset().top,
        },
        100,
        'linear'
      );
    });

    const $mainNav = $('#mainNav');
    const shrinkClass = 'navbar-shrink';

    const toggleNavbarBackground = () => {
      if ($(window).scrollTop() > 0) {
        $mainNav.addClass(shrinkClass);
      } else {
        $mainNav.removeClass(shrinkClass);
      }
    };

    // Initially set the background based on the scroll position
    toggleNavbarBackground();

    $(window).on('scroll', toggleNavbarBackground);

  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top">Start coloring</a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link nav-a" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-a" href="#projects">
                  Featured art
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-a" href="#contactus">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="gallery">
                    Shop
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="login">
                    Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

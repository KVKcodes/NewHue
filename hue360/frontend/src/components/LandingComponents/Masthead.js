import { useEffect } from 'react'
import $ from 'jquery';

export default function Masthead() {
    useEffect(() => {

        $('a.btn').on('click', function (e) {
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
    
      }, []);
      
  return (
    <div>
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Hue360</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">Immerse yourself in art and talent</h2>
                        <a class="btn btn-primary" href="#about">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

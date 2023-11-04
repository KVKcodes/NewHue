import painting from '../../assets/img/realCanvas.png'
import { useEffect } from 'react'
import $ from 'jquery';

export default function About() {

  useEffect(() => {

    $('a.contacthere').on('click', function (e) {
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
      <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-4">About Hue360</h2>
                        <p class="text-white-50">
                            We, the team of Hue360 always believed that the human pinnacle is achieved when one immerses themselves in pure art. Thus, we've always strived to push art and love forward into this world. Find more about us&nbsp;
                            <p className='connectp'>
                            <a href="https://www.linkedin.com/in/kvk-siddartha-980595272/" >Connect with KVK Siddartha</a>&nbsp; &#8729; &nbsp;
                            <a href="https://www.linkedin.com/in/sujal-pattewar-7195a5236/">Connect with Rohit Varma</a>&nbsp; &#8729; &nbsp;
                            <a href="https://www.linkedin.com/in/rohit-varma-37a33b21a/">Connect with Sujal</a>
                            </p>
                            &nbsp;For artists eager to showcase thier art, please do <a className='contacthere' href="#contactus">contact us.</a>
                        </p>
                    </div>
                </div>
            </div>
            <img class="img-fluid" src={painting} alt="..." />
        </section>
    </div>
  )
}

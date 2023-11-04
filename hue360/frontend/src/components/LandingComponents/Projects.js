import React from 'react'
import LastSupper from '../../assets/paintings/the-last-supper.jpg'
import Persistance from '../../assets/paintings/persistance-of-memory.jpg'
import StarryNight from '../../assets/paintings/starry-night.jpg'

export default function Projects() {
  return (
    <div>
        {/* <!-- Projects--> */}
        <section class="projects-section bg-light" id="projects">
            <div class="container px-4 px-lg-5">
                {/* <!-- Featured Project Row--> */}
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={LastSupper} alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Last Supper</h4>
                            <p class="text-black-50 mb-0">One of the most iconic and revered artworks in the world, is a masterpiece painted by the Italian Renaissance genius Leonardo da Vinci. Captures the poignant moment when Jesus Christ reveals that one of his disciples will betray him during their final meal together.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Project One Row--> */}
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center"> 
                    <div class="col-lg-6 contain-this"><img class="img-fluid" src={Persistance} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Persistance of Memory</h4>
                                    <p class="mb-0 text-white-50">This is an iconic surrealist painting created by the renowned Spanish artist Salvador Dalí. Completed in 1931, this artwork is famous for its dreamlike and almost hallucinatory quality. Time itself appears to be in a state of flux, as the soft, drooping watches symbolize the fluidity and subjective nature of time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={StarryNight} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Starry Night</h4>
                                    <p class="mb-0 text-white-50">is a breathtaking masterpiece of post-impressionist art painted by the Dutch artist Vincent van Gogh. Becoming one of the most celebrated and recognizable works in the history of art.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

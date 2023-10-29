import type {Component} from 'solid-js';

import "../../assets/about_us.css";
import NavBar from "../common/navbar";

const AboutUs: Component = () => {
    return (
        <div class="about-backdrop">
            <NavBar/>

            <div class="container h-100">

                <div class="h-100 w-100 d-flex justify-content-center align-items-center">
                    <div class="row">
                        <div class="text-white col-12 my-5">
                            Ceramica is a premier ceramics studio located in the heart of Kenya, dedicated to the art of
                            crafting exquisite, tailor-made ceramics.
                            With a commitment to craftsmanship and creativity, we blend traditional techniques with
                            modern design to produce one-of-a-kind ceramic
                            pieces that reflect the unique tastes and preferences of our clients. Our team of skilled
                            artisans collaborates closely with customers
                            to bring their visions to life, whether it's custom dinnerware, decorative tiles, or
                            personalized ceramic gifts. At Kenya Crafted Ceramics,
                            we transform clay into personalized works of art that elevate any space or occasion.
                        </div>

                        <div class="col-lg-4 text-uppercase text-white">Artists</div>
                        <div class="col-lg-4 text-uppercase text-white">Partners</div>
                        <div class="col-lg-4 text-uppercase text-white">Testimonial</div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutUs;

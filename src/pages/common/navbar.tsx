import type {Component} from 'solid-js';
import {A} from "@solidjs/router";
import {createSignal} from "solid-js";
import {Button, Modal} from "solid-bootstrap";
import "../../assets/navbar.css";
import {setShowModalBackDrop} from "../../store";

const NavBar: Component = () => {

    const [cartCount, setCartCount] = createSignal(1);
    const [showCheckOut, setShowCheckOut] = createSignal(false);
    const [show, setShow] = createSignal(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const cartDetails = () => {
        return <div>
            <div onClick={(e) => {
                e.preventDefault();
                setShow(false);
            }} class="float-right mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path style="fill:white"
                          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <br/>
            <br/>
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8 bg-white preview-box rounded-lg " style="height:200px"></div>
                        <div class="col-lg-2"></div>
                        <div class="col-lg-12 my-2 text-white d-flex justify-content-center align-items-center">
                            10-inch plate
                        </div>
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4  rounded-sm bg-white  my-2 row d-flex justify-content-center align-items-center">
                            <div class="col-lg-1  border-0" onClick={(e)=>{
                                if(cartCount()>0) {
                                    setCartCount(cartCount() - 1)
                                }
                            }}>
                                -
                            </div>
                            <div class="col-lg-2  border-0 d-flex justify-content-center align-items-center">{cartCount()}</div>
                            <div class="col-lg-1 border-0 " onClick={(e)=>{
                                setCartCount(cartCount()+1)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus " viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>

                            </div>
                        </div>

                        <div class="col-lg-12  my-1 d-flex justify-content-center align-items-center ">
                            view other items
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-6 text-white">Cart Total</div>
                        <div class="col-lg-6 text-white"> %1000.00</div>
                        <div class="col-lg-12 my-1"/>

                        <div class="col-lg-6 text-white">Tax</div>
                        <div class="col-lg-6 text-white"> %16.5</div>
                        <div class="col-lg-12 my-1"/>

                        <div class="col-lg-6 text-white">Delivery</div>
                        <div class="col-lg-6 text-white"> %5</div>
                        <div class="col-lg-12 my-1"/>

                        <div class="col-lg-6 text-white">Discount</div>
                        <div class="col-lg-6 text-white"> -%10</div>

                        <div class="col-lg-2"></div>
                        <div class="col-lg-5 border-bottom  my-4"></div>
                        <div class="col-lg-2"></div>

                        <div class="col-lg-6 text-white">Cart Total</div>
                        <div class="col-lg-6 text-white"> 1000</div>
                    </div>
                </div>
            </div>
        </div>
    }
    const checkOutDetails = () => {
        return <div>
            <div onClick={(e) => {
                e.preventDefault();
                setShowCheckOut(false);
            }} class="float-right ">

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path style="fill:white"
                          d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/>
                </svg>


            </div>
            <br/>
            <br/>
            <div class="row mt-5">
                <div class="col-lg-6 text-white"><h2>Grand total</h2></div>
                <div class="col-lg-6 text-white"><h2>$111.5</h2></div>
            </div>
            <h4 class="text-white my-5">Complete payment via :</h4>
            <div class="row ml-5">
                <div class="col-lg-3 check-out-item-border text-uppercase text-white text-center justify-content-center align-content-center"><h2>mpesa</h2></div>
                <div class="col-lg-3 check-out-item-border text-uppercase text-white text-center  justify-content-center align-content-center"><h2>card</h2></div>
                <div class="col-lg-3 check-out-item-border text-uppercase text-white text-center justify-content-center align-content-center"><h2>cash</h2></div>
            </div>
            <div class="my-4"/>
        </div>
    }
    // @ts-ignore
    return (
        <div>
            <header class="site-navbar mt-3">
                <div class="container-fluid">
                    <div class="row align-items-center">

                        <div class="site-logo col-6 text-black"><A href="/"><img src="images/7.png" alt="ceramica"
                                                                                 style="width:100px; height:100px"/></A>
                        </div>

                        <nav class="mx-auto site-navigation">
                            <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                <li><A href="/" class="nav-link active">Home</A></li>
                                <li><A href="/shop">Shop</A></li>
                                <li><A href="/classes">Classes</A></li>
                                <li><A href="/about_us">About Us</A></li>
                                <li><A href="/contact_us">Contact Us</A></li>
                                <li><A href="" onClick={(e) => {
                                    e.preventDefault();
                                    handleOpen()
                                    setShowModalBackDrop(true)
                                }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         class="bi bi-cart" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                </A></li>


                            </ul>
                        </nav>

                    </div>
                </div>
            </header>

            {/*backdropClass="modal-backdrop"*/}
            <Modal size="lg" contentClass="modal-back-color modal-parent "    centered show={show()}
                   onHide={() => {
                       handleClose();
                       setShowModalBackDrop(false)
                   }}>

                <Modal.Body class="modal-back-color">
                    {
                        showCheckOut() ?

                            checkOutDetails()
                            :
                            cartDetails()
                    }

                    {
                        showCheckOut() ? <></> :
                            <div class="float-right">
                                <Button variant="secondary" class="modal-back-color" onClick={handleClose}>Change
                                    order</Button>

                                &nbsp;
                                &nbsp;
                                {showCheckOut() ? <></> :
                                    <Button style="color:#87674F" class="bg-white  border-0" onClick={(e) => {
                                        if (showCheckOut()) {
                                            handleClose()
                                        } else {
                                            setShowCheckOut(true);
                                        }
                                    }}> Checkout</Button>}
                            </div>
                    }
                </Modal.Body>
            </Modal>


        </div>
    );
};

export default NavBar;

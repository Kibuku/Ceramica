import {createSignal} from "solid-js";


const [showModalBackDrop, setShowModalBackDrop] = createSignal(false);
const [showNavbar , setShowNavbar] = createSignal<boolean>(false)

export {showModalBackDrop,setShowModalBackDrop, showNavbar , setShowNavbar}
import './main.css'

import Posts from '../Posts/Posts'
import About from '../About/About'

export default function Main(){
    return(
    <main>
        <h2 class="a11y-hidden">Post</h2>
        <div class="max-width">
        <Posts/>
        <About/>
        </div>
    </main>
    )
}
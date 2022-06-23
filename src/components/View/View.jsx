import './wrapbox.css'

import { Link } from 'react-router-dom'
import Author from '../Author/Author'
import Category from '../Category/Category'

export default function View(){
    return (
        <div class="view">
			<div class="max-width">
				<section class="wrap-box">
					<div class="inner">
						<Author/>
                        <Category/>
						<div class="title-wrap">
							<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<button class="btn-like">Like</button>
						</div>
						<hr />
						<div class="view-contents">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
							<img src="./images/post-background6.jpg" alt="" />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
						</div>
						<div class="btn-group">
							<Link to="#" class="btn-modify">
								<span class="a11y-hidden">modify</span>
							</Link>
							<button type="button" class="btn-delete">
								<span class="a11y-hidden">delete</span>
							</button>
						</div>
						<Link to="./" class="btn-back">
							<span class="a11y-hidden">Back</span>
						</Link>
					</div>
				</section>
			</div>
		</div>
    )
}
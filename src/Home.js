import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'learnnnn', author: 'mario', id: 1},
		{ title: 'My new website22', body: 'learnnnn22', author: 'mario222', id: 2},
		{ title: 'My new website333', body: 'learnnnn333', author: 'mario3333', id: 3},
	])

	return ( 
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs" />
		</div>
	);
}
 
export default Home;
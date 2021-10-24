import About from "../About/About"
import Contact from "../Contact/Contact"
import MySkills from "../MySkills/MySkills"
import NoPageFound from "../NoPageFound"
import Welcome from "../Welcome/Welcome"
import Work from "../Work/Work"
import ArtGallery from "../ArtGallery/ArtGallery"

function ListComponent (props) {
    const { component } = props

    switch(component) {
        case 'Welcome':
            return <Welcome />
        case 'About':
            return <About />
        case 'Skills':
            return <MySkills />
        case 'Work':
            return <Work />
        case 'ArtGallery':
            return <ArtGallery />
        case 'Contact':
            return <Contact />
        default:
            return <NoPageFound />
    }
}

export default ListComponent;
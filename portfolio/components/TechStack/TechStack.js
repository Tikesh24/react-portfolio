import TagCloud from 'TagCloud';
import {useRef, useState, useEffect } from 'react';

const TechStack = (props) => {

    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);

    //let calcRadius = ((width <= 500) ? 100 : (width > 500 && width < 1000) ? 150 : 150);
    let calcRadius = 180;
    const tagcloudRef = useRef(null);

    const container = '.content';
    // const texts = [
    //     'React','Next JS', 'Angular', 
    //     'BootStrap','CSS3','TailwindCSS',
    //     'Animation', 'Interactive', 'Designer',
    //     'Java', 'Spring Boot', 'Hibernet',
    //     'JPA','Spring Cloud','Hibernet',
    //     'Python','Art Work'
    // ];


    const options = {
        // radius in px
        radius: calcRadius,
          // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',

        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        // interact with cursor move on mouse out
        keep: true
    };

    const tagcloud = TagCloud(container, props.skillset, options);

    //Distroys extra clouds generating for unknown reason.
    const updateTagCloud = (ref) =>{
        if(ref !== null || ref !== 'undefined'){
            if(ref.current !== null && ref.current.childNodes !== null){
                if(ref.current.childNodes.length > 1){
                    let childNode = ref.current.childNodes;
                    tagcloud.destroy();
                }
            }
        }
    }

    const style = {
        'tagcloud--item:hover': {
            color: '#36454F;'
          }
    }

    updateTagCloud(tagcloudRef);

    // useEffect(()=>{
    //     updateTagCloud(tagcloudRef);
    // })

    return (
        <div className="content md:text-lg tagcloud--item pointer-events-none text-blue-400" style={style}  ref={tagcloudRef} />      
    )
}

export default TechStack

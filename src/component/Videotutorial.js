import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../assets/stylesheet/video.css';

class Videotutorial extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
                <section className="mb-2"><Header/></section>
                <div className="Separator">
                </div>
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/aQpJ37JLUio"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <section><Footer/></section>
            </div>
        )
    }

}
export default Videotutorial;
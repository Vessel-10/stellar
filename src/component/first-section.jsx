import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function FirstSection(){
    return(

        <div className="first-section" id="first-section">
            <div className="container">
                <h1>services provided</h1>
                <div className="content-box">
                    <div className="box">
                        <FontAwesomeIcon icon={['fas','code']} className="icons" />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quia incidunt repudiandae sed minima. Mollitia?</p>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={['fas','copy']} className="icons"/>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quia incidunt repudiandae sed minima. Mollitia?</p>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={['fas','gem']} className="icons"/>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quia incidunt repudiandae sed minima. Mollitia?</p>
                    </div>
                </div>
                <button>learn  more</button>
            </div>
        </div>
    )
}
export default FirstSection;
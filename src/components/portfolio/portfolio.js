import ProjectCard from "./projectcard";
import ja from "../../images/justask-shot.png"
import bb from "../../images/bravo-shot.png"

function Portfolio() {

    const jaContent = "A question answering app helping the working force. Ask our Ai questions about building codes, recieve straight forward answers. Now a software development firm."
    const bbContent = "Lead the work to create a fully custom website for a Tex-Mex Resturaunt. Created components or sections using Shopify's Liquid, working with the client and a small team of engineers and designers."

    return (

        <div className="portfolio__container">
            <div style={{
                width:"66%",
                display:"flex",
                flexDirection:"column",
                margin:"auto"}}>

                < ProjectCard img={ja} title="JustAsk Technologies" content={jaContent} url="https://www.justask.codes/"/>
                < ProjectCard img={bb} title="Bravo Burrito" content={bbContent} url="https://thebravoburrito.com/"/>

            </div>
        </div>
    );
}

export default Portfolio;
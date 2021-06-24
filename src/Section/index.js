import "./style.css";

const Section = ({ tittle, body, extraHeaderContent }) => (
    <section className="section section__tasks">
        <div className="section__container section__container--tittleTask ">
            <h2 className="section__tittle ">{tittle}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
)

export default Section
import React from "react";

const Education = () => {
    return(
        <section className="light padding" id="education">
            <h2 style={{ textAlign: "center" }}>Education</h2>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
            <div className="container" >
                <div className="box">
                    
                    <h3 style={{ flexBasis: "40px" }}>Bachelor of Science in Software Engineering<br/>(2018-2022)</h3>
                    <p className="small">University of Stuttgart, Germany</p>
                </div>
                <div className="box">
                    <h3 style={{ flexBasis: "40px" }}>Master of Science in Artificial Intelligence and Data Science<br/>(2022-now)</h3>
                    <p className="small">University of Stuttgart, Germany</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Education;
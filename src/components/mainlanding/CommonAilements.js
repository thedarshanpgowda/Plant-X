import React from 'react'
import { Link } from 'react-router-dom'

export default function CommonAilements() {
    return (
        <>
            <p className='header'>Most Common Plant Nutrient Deficients</p>
            <div className="commonDiseases">
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img style={{rotate : "-90deg"}} src="http://www.agritech.tnau.ac.in/horticulture/plant_nutri/images/banana/b_n1.jpg" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                    Nitrogen
                    </div>
                    <p>Nitrogen is vital for the growth and development of banana plants. It plays a key role in the synthesis of proteins, chlorophyll, and enzymes.</p>
                </div>
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://st.hzcdn.com/simgs/ea42c87904cf5056_9-2664/_.jpg" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                    Potassium
                    </div>
                    <p>Potassium is essential for the proper functioning of banana plants, influencing water uptake, enzyme activation, and photosynthesis.</p>
                </div>
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://www.researchgate.net/profile/Kimberly-Moore-12/publication/319250831/figure/fig1/AS:530588442791936@1503513550683/Iron-deficiency-chlorotic-areas-observed-on-Williams-bananas-grown-in-sugarcane.png" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                    Iron
                    </div>
                    <p> Iron is a critical component of chlorophyll, the molecule responsible for photosynthesis. </p>
                </div>
            </div>
            <Link to = {"/history"} className="viewAllButton">
                View All
            </Link>
        </>
    )
}

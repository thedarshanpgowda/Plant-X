import React from 'react'
import { Link } from 'react-router-dom'

export default function CommonAilements() {
    return (
        <>
            <p className='header'>Most Common Plant Nutrient Deficients</p>
            <div className="commonDiseases">
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://img.freepik.com/free-photo/young-green-corn-growing-field-background_169016-13021.jpg?t=st=1717491381~exp=1717494981~hmac=689fa6e1334240647dbcc32278c3de1efca6827876dd1281fa605013196e1517&w=1380" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                    Nitrogen
                    </div>
                    <p>Nitrogen is vital for the growth and development of banana plants. It plays a key role in the synthesis of proteins, chlorophyll, and enzymes.</p>
                </div>
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://img.freepik.com/premium-photo/low-angle-view-banana-tree_1048944-22549823.jpg?w=1060" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                    Potassium
                    </div>
                    <p>Potassium is essential for the proper functioning of banana plants, influencing water uptake, enzyme activation, and photosynthesis.</p>
                </div>
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://img.freepik.com/free-photo/closeup-green-exotic-plant_23-2148245098.jpg?t=st=1717490670~exp=1717494270~hmac=01f79b7ed9c7c1a0600c22ccd9ba567c6456f20523bd3513a81a8692e67897bc&w=826" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                    Magnesium
                    </div>
                    <p> Magnesium is a critical component of chlorophyll, the molecule responsible for photosynthesis. </p>
                </div>
            </div>
            <Link to = {"/history"} className="viewAllButton">
                View All
            </Link>
        </>
    )
}

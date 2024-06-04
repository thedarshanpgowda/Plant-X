import React from 'react'

export default function CommonAilements() {
    return (
        <>
            <p className='header'>Most Common Plant Ailments</p>
            <div className="commonDiseases">
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://img.freepik.com/free-photo/young-green-corn-growing-field-background_169016-13021.jpg?t=st=1717491381~exp=1717494981~hmac=689fa6e1334240647dbcc32278c3de1efca6827876dd1281fa605013196e1517&w=1380" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                        Panama Disease
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ad ut libero iste impedit aut.</p>
                </div>
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://img.freepik.com/premium-photo/low-angle-view-banana-tree_1048944-22549823.jpg?w=1060" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                        Panama Disease
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ad ut libero iste impedit aut.</p>
                </div>
                <div className="eachAilement">
                    <div className="imageContaienr">
                        <img src="https://img.freepik.com/free-photo/closeup-green-exotic-plant_23-2148245098.jpg?t=st=1717490670~exp=1717494270~hmac=01f79b7ed9c7c1a0600c22ccd9ba567c6456f20523bd3513a81a8692e67897bc&w=826" alt="" />
                    </div>
                    <div className="plantDiseaseName">
                        Panama Disease
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ad ut libero iste impedit aut.</p>
                </div>
            </div>
            <div className="viewAllButton">
                View All
            </div>
        </>
    )
}

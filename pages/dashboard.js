import Link from 'next/link';
import React, { useState } from 'react';
function QuestionCard({ question, index }) {
    return (
        <div className="question-card mt-5 mx-auto w-[50%] p-4 border border-gray-300 rounded">
            <div className="flex items-center">
            <h3 className="font-medium text-sm mb-2 text-gray-700">Asked to: Reviewee</h3>
            <img src="../assets/download.jpeg" alt="" style={{ maxWidth: '20px', maxHeight: '15px',marginTop: '-5px', marginLeft: '5px' }} />
            <h3 className="font-medium text-sm mb-2 text-gray-700" style={{ marginLeft: '330px' }}>Text Answer</h3>
            <img src="../assets/text.webp" alt="" style={{ maxWidth: '20px', maxHeight: '15px',marginTop: '-5px', marginLeft: '5px' }} />
            </div>
            <p className="question-text text-gray-700">{index}. {question}</p>
        </div>
    );
}

export default function Dashboard() {
    const questions = [
        "Do you find yourself struggling more than usual with the current COVID-19 situation?",
        "Are you having difficulties in terms of workload? Can you explain how you deal with the different projects?",
        "Based on your previous answer, would you say that you are still empowered by the company vision?"
    ];
    const [radioValue, setRadioValue] = useState(""); 
    const [selectedOption, setSelectedOption] = useState(null);
    const [previewQuestionsVisible, setPreviewQuestionsVisible] = useState(false);

    // Function to handle radio button change
    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    // Function to handle list item click
    const handleListItemClick = (option) => {
        setSelectedOption(option);
        
    };

    const togglePreviewQuestions = () => {
        setPreviewQuestionsVisible(!previewQuestionsVisible);
    };

    return (
        <div>
            <Link href="/"> 
            <span style={{ marginRight: '10px' }}>&lt;</span>
            Back to Dashboard
            </Link>
            <div className="container text-center">
            <img src="../assets/pen.jpg" alt="Image Description" style={{ width: '10.125%' }} className="mx-auto" />
            </div>
            <div className="container text-center text-3xl font-bold absolute top-[130px]">
            <h2>Question list</h2>
                <img src="../assets/5.webp" alt="" className="mx-auto absolute top-[11px] left-[735px]" style={{ maxWidth: '19px', maxHeight: '19px' }} />
                <p className="text-[16px] absolute top-[45px] left-[370px] font-small text-gray-600">
                    These are the questions corresponding to the template you have 
                </p>
                <p className="text-[16px] absolute top-[70px] left-[450px] font-small text-gray-600">
                    selected, you can modify, add or delete item.
                </p>
                <img src="../assets/eye.png" alt="" style={{ maxWidth: '25px', maxHeight: '25px' }} className="mx-auto absolute top-[120px] left-[525px]" onClick={togglePreviewQuestions} />
                <p className="text-[16px] mx-auto absolute top-[110px] left-[560px]" style={{ color: 'blue' }}>
                    Preview questions
                </p>
            </div>
            
           <div className="mt-40">
                <div className="question-card-radio" style={{ display: previewQuestionsVisible ? 'block' : 'none' }}>
                    {questions.map((q, index) => (
                        <div key={index} className="question-card-container">
                            <QuestionCard question={q} index={index + 1} />
                        </div>
                        
                    ))}
                </div>
                <div className="radio-buttons absolute top-[307px] left-[1000px]">
                    <h3 className="font-bold" style={{ display: 'flex', alignItems: 'center' }}>
                    See question list of:<img src="../assets/mark.png" alt="" style={{ maxWidth: '8px', maxHeight: '8px', marginLeft: '5px' }} /></h3>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="option1"
                                checked={radioValue === "option1"}
                                onChange={handleRadioChange}
                            /> Everyone
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="option2"
                                checked={radioValue === "option2"}
                                onChange={handleRadioChange}
                            /> Reviewee (3)
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="option3"
                                checked={radioValue === "option3"}
                                onChange={handleRadioChange}
                            /> Manager (0)
                        </label>
                    </div>
                </div>
                <div className="yellow-box  absolute top-[420px] left-[1000px]"><p className="font-bold text-[14px] absolute top-[10px] left-[17px]">Amandine, HR PayFit</p>
                <p className="text-[14px] absolute top-[28px] left-[17px]">We recommend to have no</p>
                <p className="text-[14px] absolute top-[45px] left-[17px]">more than <span className="font-bold">10 questions</span></p>
                <p className="text-[14px] absolute top-[65px] left-[17px]">mixed between opened and</p>
                <p className="text-[14px] absolute top-[85px] left-[17px]">closed question to allow the</p>
                <p className="text-[14px] absolute top-[105px] left-[17px]">participants to better reflect</p>
                <p className="text-[14px] absolute top-[125px] left-[17px]">on they achieved.</p>
                <p className="text-[14px] absolute top-[155px] left-[17px]">Currently to the <span className="font-bold">Reviewee</span></p>
                <p className="text-[14px] absolute top-[175px] left-[17px]">answer to <span className="circle">3</span> questions and</p>
                <p className="text-[14px] absolute top-[195px] left-[17px]">the <span className="font-bold">Manager</span> to <span className="circle">0</span> question</p>
                </div> 
                <img src="../assets/icon.png" alt="" style={{ width: '25px', height: '25px'}} className="absolute top-[420px] left-[1210px]" />
            </div>
            <div className="list-container absolute top-[310px] left-[50px]">
                <ul className="list">
                    <li onClick={() => handleListItemClick("Option 1")} className={selectedOption === "Option 1" ? 'selected' : ''}style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="../assets/wrench.png" alt="" style={{ maxWidth: '25px', maxHeight: '25px', marginRight: '10px' }} />
                    1. Campaign Setup</li>
                    <li onClick={() => handleListItemClick("Option 2")} className={selectedOption === "Option 2" ? 'selected' : ''}style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="../assets/mark.png" alt="" style={{ maxWidth: '25px', maxHeight: '25px', marginRight: '10px' }} />
                    2. Question list</li>
                    <li onClick={() => handleListItemClick("Option 3")} className={selectedOption === "Option 3" ? 'selected' : ''}style={{ display: 'flex', alignItems: 'center' }}>
                     <img src="../assets/timeline.png" alt="" style={{ maxWidth: '25px', maxHeight: '25px', marginRight: '10px' }} />
                     3. Timeline
                    </li>
                </ul>
            </div>
        </div>
    );
}


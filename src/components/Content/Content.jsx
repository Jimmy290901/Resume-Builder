import React, { useState } from "react";
import "./Content.css";
import ResumeSection from "../ResumeSection/ResumeSection.jsx";

function Content({data, dispatch}) {
    const [currSec, setCurrSec] = useState(1);
    return (
        <div>
            <div className="tabs">
                <div className={`education tab ${currSec === 1 && "tab-hgl"}`} onClick={() => setCurrSec(1)}>
                    <span>Education ({data.education.length})</span>
                </div>
                <div className={`work-exp tab ${currSec === 2 && "tab-hgl"}`} onClick={() => setCurrSec(2)}>
                    <span>Work Experience ({data.workExp.length})</span>
                </div>
                <div className={`achievements tab ${currSec === 3 && "tab-hgl"}`} onClick={() => setCurrSec(3)}>
                    <span>Achievements ({data.achievements.length})</span>
                </div>
            </div>
            {currSec === 1 && <ResumeSection type="education" data={data.education} dispatch={dispatch} />}
            {currSec === 2 && <ResumeSection type="work experience" data={data.workExp} dispatch={dispatch} />}
            {currSec === 3 && <ResumeSection type="achievement" data={data.achievements} dispatch={dispatch} />}
        </div>
    );
}

export default Content;
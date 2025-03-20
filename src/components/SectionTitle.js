import React from "react";

const SectionTitle = ({ title, bgColor = "#F4D06F" }) => {
    return (
        <div className="section-title" style={{ backgroundColor: bgColor }}>
            <h1>{title}</h1>
        </div>
    );
};

export default SectionTitle;

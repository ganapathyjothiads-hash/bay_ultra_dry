"use client";

import React from "react";
import FloodRestorationSection from "./FloodRestorationSection";
import CarpetCleaningSection from "./CarpetCleaningSection";
import UpholsteryCleaningSection from "./UpholsteryCleaningSection";

const HomeSectionsContainer = () => {
    return (
        <div className="flex flex-col">
            <FloodRestorationSection />
            <CarpetCleaningSection />
            <UpholsteryCleaningSection />
        </div>
    );
};

export default HomeSectionsContainer;

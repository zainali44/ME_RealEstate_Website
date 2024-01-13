import React from "react";
import "./cover.css";
import cover from "./cover.jpg";
import { Button } from "@material-tailwind/react";


function CoverPage() {
    return (
        <div className="cover-page">
            <div className="cover-image">
                <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"// Replace with the URL of your cover image
                    alt="Cover Image"
                />
            </div>
            <svg class="animate-bounce w-10 h-10 ...">
                <path
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2.5"
                    d="M2 2.5 L5.5 6 L9 2.5"
                />
            </svg>
        </div>
    );
}

export default CoverPage;

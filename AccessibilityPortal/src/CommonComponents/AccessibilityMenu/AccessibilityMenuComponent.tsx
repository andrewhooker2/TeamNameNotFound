import React, { useState, useRef, useEffect } from 'react';
import accessibilityIcon from "../../assets/universal-access-svgrepo-com.svg";
import "./AccessibilityMenu.scss";

function AccessibilityMenu() {
    const [toggle, setToggle] = useState(false);
    const [showResetButton] = useState(true);
    const [showCloseButton] = useState(true);
    const [showContrastButton] = useState(true);
    const [showLinkButton] = useState(true);
    const [showTextButton] = useState(true);
    const [showSpacingButton] = useState(true);
    const [showImageButton] = useState(true);
    const [showDyslexiaButton] = useState(true);
    const [showReadingAidButton] = useState(true);
    const [showLineHeightButton] = useState(true);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (toggle && menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setToggle(false);
            }
        };
        // Close the menu on mousedown outside the menu
        document.addEventListener("mousedown", clickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [toggle]);

    return (
        <div ref={menuRef}>
            <button className="logo-button" onClick={() => setToggle(!toggle)}>
                <img src={accessibilityIcon} className="img-bottom-right" alt="Accessibility Icon" />
            </button>
            <div className={`accessibility-menu${toggle ? ' show-menu' : ''}`}>
                {showCloseButton && (
                    <button className = "close-button">
                        Close
                    </button>
                )}
                {showResetButton && ( 
                    <button className="reset-button">
                        Reset
                    </button>
                )}
                {showContrastButton && ( 
                    <button className="contrast-button">
                        Contrast
                    </button>
                )}
                {showLinkButton && ( 
                    <button className="link-button">
                        Highlight Links
                    </button>
                )}
                {showTextButton && ( 
                    <button className="text-button">
                        Bigger Text
                    </button>
                )}
                {showSpacingButton && ( 
                    <button className="spacing-button">
                        Text Spacing
                    </button>
                )}
                {showImageButton && ( 
                    <button className="image-button">
                        Hide Images
                    </button>
                )}
                {showDyslexiaButton && ( 
                    <button className="dyslexia-button">
                        Dyslexia Friendly
                    </button>
                )}
                {showReadingAidButton && ( 
                    <button className= "readingaid-button">
                        Cursor
                    </button>
                )}
                {showLineHeightButton && ( 
                    <button className= "lineheight-button">
                        Line Height
                    </button>
                )}
            </div>
        </div>
    );
}

export default AccessibilityMenu;


import React from "react";

export const Footer = () => {
    const actualYear = new Date().getFullYear();
    return <footer className="layout-footer">
        <div className='footer-content'>
            © {actualYear} - Sergio Balaguer Carmona
        </div>
    </footer>;
}   
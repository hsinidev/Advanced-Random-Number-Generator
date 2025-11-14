import React, { useState } from 'react';
import SEOArticle from './SEOArticle';

const Star = () => {
  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 2 + 1}px`,
    height: `${Math.random() * 2 + 1}px`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    animationDelay: `${Math.random() * 2}s`,
  };
  return <div className="absolute bg-white rounded-full animate-pulse" style={style}></div>;
};

const GalaxyBackground = () => {
    const stars = Array.from({ length: 200 }).map((_, i) => <Star key={i} />);
    return (
        <>
        <style>
            {`
            @keyframes slow-pan {
                0% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(5%, -10%) scale(1.2); }
                100% { transform: translate(0, 0) scale(1); }
            }
            .animated-gradient {
                animation: slow-pan 60s ease-in-out infinite;
            }
            `}
        </style>
        <div className="fixed inset-0 -z-10 bg-gray-900 overflow-hidden">
            <div className="animated-gradient absolute inset-0 bg-gradient-to-t from-black via-indigo-900/50 to-black opacity-70"></div>
            <div className="animated-gradient absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/60 via-transparent to-transparent animation-delay-5s"></div>
            <div className="animated-gradient absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/60 via-transparent to-transparent animation-delay-10s"></div>
            {stars}
        </div>
        </>
    );
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={onClose}>
            <div className="bg-gray-800 border border-purple-500 rounded-lg shadow-2xl shadow-purple-500/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<string | null>(null);

    const handleNavClick = (content: string) => {
        if (content === 'Guide') {
            document.getElementById('seo-article-section')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setModalContent(content);
        }
    };
    
    const closeModal = () => setModalContent(null);
    
    const getModalContent = () => {
        switch(modalContent) {
            case 'About': return <p className="text-gray-300">This Advanced Random Number Generator is a powerful tool for developers, gamers, and anyone in need of random numbers. It offers both standard and cryptographically secure generation methods.</p>;
            case 'Contact': return <div className="text-gray-300">For inquiries, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:underline">hsini.web@gmail.com</a> or visit our website <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">doodax.com</a>.</div>;
            case 'Privacy Policy': return <p className="text-gray-300">Your privacy is important to us. We do not collect or store any personal information or the numbers you generate. All operations are performed client-side in your browser.</p>;
            case 'Terms of Service': return <p className="text-gray-300">By using this service, you agree to use it responsibly. The developers are not liable for any misuse of the generated numbers.</p>;
            case 'DMCA': return <p className="text-gray-300">If you believe that your copyrighted work has been infringed, please contact us at the email address provided in the contact section.</p>;
            default: return null;
        }
    };

    const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

    return (
        <>
            <GalaxyBackground />
            <div className="relative min-h-screen flex flex-col text-white font-sans">
                <header className="sticky top-0 z-40 py-4 px-4 sm:px-8 bg-black/30 backdrop-blur-sm border-b border-white/10">
                    <nav className="flex justify-between items-center max-w-7xl mx-auto">
                         <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                           Advanced RNG
                         </h1>
                        <div className="hidden md:flex space-x-4">
                            {navLinks.map(link => (
                                <button key={link} onClick={() => handleNavClick(link)} className="text-gray-300 hover:text-purple-400 transition-colors">{link}</button>
                            ))}
                        </div>
                        <div className="md:hidden">
                            <select onChange={(e) => handleNavClick(e.target.value)} className="bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500">
                                <option>Menu</option>
                                {navLinks.map(link => <option key={link} value={link}>{link}</option>)}
                            </select>
                        </div>
                    </nav>
                </header>

                <main className="flex-grow flex items-center justify-center p-4">
                    {children}
                </main>

                <footer className="py-4 px-8 text-center bg-black/30 backdrop-blur-sm border-t border-white/10 mt-auto">
                    <p className="text-gray-400 text-sm">
                        <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#FFD700'}}>Powered by HSINI MOHAMED</a>
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:text-purple-400 transition-colors">hsini.web@gmail.com</a>
                    </p>
                </footer>

                <Modal isOpen={!!modalContent} onClose={closeModal} title={modalContent || ''}>
                    {getModalContent()}
                </Modal>
            </div>
        </>
    );
};

export default Layout;
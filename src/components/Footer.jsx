const Footer = () => {
    return (
        <footer className="mt-[-1px] bg-[#0d1117] text-[#8b949e] text-center border-t border-[#30363d]">
            <div className="py-10 px-4 md:px-6 text-sm md:text-lg">
                <div className="max-w-screen-xl mx-auto">
                    <p className="pt-6">&copy; {(new Date()).getFullYear()} Rihan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

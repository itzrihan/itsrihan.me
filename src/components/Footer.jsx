const Footer = () => {
    return (
        <footer className="mt-[-1px] bg-[#00FF66] text-white text-center">
            <div className="py-10 px-4 md:px-6 text-sm md:text-lg">
                <div className="max-w-screen-xl mx-auto border-t border-[#00AA44]">
                    <p className="pt-6">&copy; {(new Date()).getFullYear()} Rihan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

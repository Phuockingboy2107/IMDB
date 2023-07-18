import AdminHeder from "../components/AdminHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultTemplate = ({ className = "", title = "", children }) => {
    return (
        <div className={className}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultTemplate;

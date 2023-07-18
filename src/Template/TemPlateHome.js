import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TemplateHome({ children }) {
    return (
        <div className="container">
            <Header />

            <div className="row content1">
                <hr />
                <div className="col-12">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

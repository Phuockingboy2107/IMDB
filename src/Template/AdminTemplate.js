import AdminHeader from "../components/AdminHeader";

const AdminTemplate = ({ className = "", title = "", children }) => {
    return (
        <div className={className}>
            <AdminHeader />
            {children}
        </div>
    );
};

export default AdminTemplate;

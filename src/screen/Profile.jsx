import { Container, Row } from "react-bootstrap";
import TemplateHome from "../Template/TemPlateHome";
import EditProfile from "../components/EditProfile";
import ChangePassword from "../components/ChangePassword";
import { User } from "../hook/User";
import { useParams } from "react-router-dom";
const Profile = () => {
    const [user] = User();
    const { profileId } = useParams();

    return (
        <TemplateHome>
            <Container>
                <EditProfile />
                {(user?.id == profileId || user?.role >= 1) && <ChangePassword />}
                {user?.role === 2}
            </Container>
        </TemplateHome>
    );
};

export default Profile;

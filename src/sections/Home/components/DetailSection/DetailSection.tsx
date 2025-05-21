import { Fragment } from "react/jsx-runtime";
import DetailModal from "../../../../components/DetailModal";
import PlayerModal from "../../../../components/PlayerModal";

const DetailSection = () => {
    return (
        <Fragment>
            <DetailModal />
            <PlayerModal />
        </Fragment>
    );
};

export default DetailSection;

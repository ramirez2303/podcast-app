import DetailModal from "@/components/modals/DetailModal";
import PlayerModal from "@/components/modals/PlayerModal";
import { Fragment } from "react/jsx-runtime";

const DetailSection = () => {
    return (
        <Fragment>
            <DetailModal />
            <PlayerModal />
        </Fragment>
    );
};

export default DetailSection;

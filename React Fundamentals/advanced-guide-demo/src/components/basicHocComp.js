import React from "react";

const BasicHocComp = (OriginalComponent) => {
    class NewComoponent extends React.Component {
        render() {
            return <OriginalComponent />;
        }
    }

    return NewComoponent;
};

export default BasicHocComp;

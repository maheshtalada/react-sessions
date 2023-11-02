import React, { forwardRef } from "react";

const FRInput = forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
});

export default FRInput;

// import React from 'react';

// function FRInput(pros,ref) {
// 	return (
// 		<div>

// 		</div>
// 	);
// }

// export default forwardRef(FRInput);

// (C) 2007-2018 GoodData Corporation
import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../ldm";

const style = { height: 300 };

export const InsightViewHeadlineByIdentifierExample = () => {
    return (
        <div style={style} className="s-insightView-headline">
            <InsightView insight={Ldm.Insights.HeadlineChart} />
        </div>
    );
};

export default InsightViewHeadlineByIdentifierExample;

// (C) 2007-2018 GoodData Corporation
import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../ldm";

const style = { height: 300 };

export const InsightViewDonutByIdentifierExample = () => {
    return (
        <div style={style} className="s-insightView-donut">
            <InsightView insight={Ldm.Insights.DonutChart} />
        </div>
    );
};

export default InsightViewDonutByIdentifierExample;

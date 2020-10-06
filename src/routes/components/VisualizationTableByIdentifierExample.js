// (C) 2007-2019 GoodData Corporation
import React from "react";

import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../ldm";

const style = { height: 500 };
export const InsightViewPivotTableByIdentifierExample = () => {
    return (
        <div style={style} className="s-insightView-pivot">
            <InsightView insight={Ldm.Insights.TableReportLaborCostsVsScheduledCosts} />
        </div>
    );
};

export default InsightViewPivotTableByIdentifierExample;

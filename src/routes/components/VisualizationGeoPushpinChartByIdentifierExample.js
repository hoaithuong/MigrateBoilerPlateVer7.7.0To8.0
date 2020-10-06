// (C) 2020 GoodData Corporation
import React from "react";

import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../ldm";
import { MAPBOX_TOKEN } from "../../constants/fixtures";

export const InsightViewGeoPushpinByIdentifierExample = () => {
    return (
        <div style={{ height: 600, position: "relative" }} className="s-insightView-geo">
            <InsightView
                insight={Ldm.Insights.GeoPushpinChart}
                config={{
                    mapboxToken: MAPBOX_TOKEN,
                }}
            />
        </div>
    );
};

export default InsightViewGeoPushpinByIdentifierExample;

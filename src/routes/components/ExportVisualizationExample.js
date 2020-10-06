import React from "react";

import { InsightView } from "@gooddata/sdk-ui-ext";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";
import { ExampleWithExport } from "./utils/ExampleWithExport";
import { Ldm, LdmExt } from "../../ldm";

const filters = [newAbsoluteDateFilter(LdmExt.dateDatasetIdentifier, "2017-01-01", "2017-12-31")];

const style = { height: 300 };

export const insightViewColumnChartExportExample = () => {
    return (
        <ExampleWithExport>
            {(onExportReady) => (
                <div style={style} className="s-insightView-chart">
                    <InsightView
                        insight={Ldm.Insights.PieChart}
                        filters={filters}
                        onExportReady={onExportReady}
                    />
                </div>
            )}
        </ExampleWithExport>
    );
};

export default insightViewColumnChartExportExample;

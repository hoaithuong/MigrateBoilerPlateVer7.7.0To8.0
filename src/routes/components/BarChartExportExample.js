import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";

import { ExampleWithExport } from "./utils/ExampleWithExport";
import { Ldm, LdmExt } from "../../ldm";

const measures = [LdmExt.TotalSales1];
const filters = [newAbsoluteDateFilter(LdmExt.dateDatasetIdentifier, "2017-01-01", "2017-12-31")];

const style = { height: 300 };

export const BarChartExportExample = () => {
    return (
        <ExampleWithExport filters={filters}>
            {(onExportReady) => (
                <div style={style} className="s-bar-chart">
                    <BarChart
                        measures={measures}
                        viewBy={Ldm.LocationResort}
                        filters={filters}
                        onExportReady={onExportReady}
                    />
                </div>
            )}
        </ExampleWithExport>
    );
};

export default BarChartExportExample;

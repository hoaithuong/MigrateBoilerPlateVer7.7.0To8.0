// (C) 2007-2019 GoodData Corporation
import React from "react";
import { ScatterPlot } from "@gooddata/sdk-ui-charts";
import { Ldm, LdmExt } from "../../ldm";

const xMeasure = LdmExt.FranchiseFees;

const yMeasure = LdmExt.FranchisedSales;

const style = { height: 300 };

export const ScatterPlotExample = () => {
    return (
        <div style={style} className="s-scatter-plot">
            <ScatterPlot xAxisMeasure={xMeasure} yAxisMeasure={yMeasure} attribute={Ldm.LocationResort} />
        </div>
    );
};

export default ScatterPlotExample;

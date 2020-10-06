// (C) 2007-2019 GoodData Corporation

import React, { Component } from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { newPreviousPeriodMeasure, newRelativeDateFilter } from "@gooddata/sdk-model";
import { LdmExt } from "../../ldm";

export class PreviousPeriodHeadlineExample extends Component {
    onLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onLoadingChanged", ...params);
    };

    onError = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onError", ...params);
    };

    render() {
        const primaryMeasure = LdmExt.TotalSales2;
        const secondaryMeasure = newPreviousPeriodMeasure(
            LdmExt.TotalSales2,
            [{ dataSet: LdmExt.dateDatasetIdentifier, periodsAgo: 1 }],
            (m) => m.alias("$ Total Sales - period ago")
        );

        return (
            <div style={{ height: 125 }} className="s-headline">
                <Headline
                    primaryMeasure={primaryMeasure}
                    secondaryMeasure={secondaryMeasure}
                    filters={[newRelativeDateFilter(LdmExt.dateDatasetIdentifier, "GDC.time.year", -2, -1)]}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default PreviousPeriodHeadlineExample;

import React, { Component } from "react";

import { Headline } from "@gooddata/sdk-ui-charts";
import { LdmExt } from "../../ldm";

export class HeadlineExample extends Component {
    onLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onLoadingChanged", ...params);
    };

    onError = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onError", ...params);
    };

    render() {
        const primaryMeasure = LdmExt.FranchiseFees;

        const secondaryMeasure = LdmExt.FranchiseFeesAdRoyalty;

        return (
            <div className="s-headline" style={{ display: "flex" }}>
                <style jsx>
                    {`
                        .column {
                            flex: "1 1 50%";
                        }
                    `}
                </style>
                <div className="column">
                    <Headline
                        primaryMeasure={primaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
                <div className="column">
                    <Headline
                        primaryMeasure={primaryMeasure}
                        secondaryMeasure={secondaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
            </div>
        );
    }
}

export default HeadlineExample;
// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { GeoPushpinChart } from "@gooddata/sdk-ui-geo";

import "@gooddata/sdk-ui-geo/styles/css/main.css";

import { MAPBOX_TOKEN } from "../../constants/fixtures";
import { locationAttribute, sizeMeasure, colorMeasure } from "../../ldm/geoModel";

export class GeoPushpinChartWithColorLegendExample extends Component {
    render() {
        return (
            <div style={{ height: "500px", position: "relative" }} className="s-geo-pushpin-chart-color">
                <GeoPushpinChart
                    location={locationAttribute}
                    size={sizeMeasure}
                    color={colorMeasure}
                    config={{
                        mapboxToken: MAPBOX_TOKEN,
                    }}
                    onZoomChanged={this.onZoomChanged}
                    onCenterPositionChanged={this.onCenterPositionChanged}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }

    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartWithColorLegendExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartWithColorLegendExample onError", ...params);
    }

    onZoomChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartWithColorLegendExample onZoomChanged", ...params);
    }

    onCenterPositionChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartWithColorLegendExample onCenterPositionChanged", ...params);
    }
}

export default GeoPushpinChartWithColorLegendExample;

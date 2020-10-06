// (C) 2020 GoodData Corporation
import React, { Component } from "react";

import "@gooddata/sdk-ui-geo/styles/css/main.css";

import { MAPBOX_TOKEN } from "../../constants/fixtures";
import { GeoPushpinChart } from "@gooddata/sdk-ui-geo";
import { locationAttribute, segmentByAttribute, sizeMeasure } from "../../ldm/geoModel";

export class GeoPushpinChartConfigurationLegendExample extends Component {
    render() {
        const geoConfig = {
            mapboxToken: MAPBOX_TOKEN,
            legend: {
                position: "right", // could be "top", "right", "bottom" or "left"
            },
        };

        return (
            <div
                style={{ height: "500px", position: "relative" }}
                className="s-geo-pushpin-chart-configuration-legend"
            >
                <GeoPushpinChart
                    location={locationAttribute}
                    segmentBy={segmentByAttribute}
                    size={sizeMeasure}
                    config={geoConfig}
                    onError={this.onError}
                />
            </div>
        );
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartConfigurationLegendExample onError", ...params);
    }
}

export default GeoPushpinChartConfigurationLegendExample;

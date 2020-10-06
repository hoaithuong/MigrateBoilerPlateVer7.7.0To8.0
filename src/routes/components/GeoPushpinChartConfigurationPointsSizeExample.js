// (C) 2020 GoodData Corporation
import React, { Component } from "react";

import "@gooddata/sdk-ui-geo/styles/css/main.css";

import { MAPBOX_TOKEN } from "../../constants/fixtures";
import { GeoPushpinChart } from "@gooddata/sdk-ui-geo";
import { locationAttribute, sizeMeasure } from "../../ldm/geoModel";

const POINT_SIZE_OPTIONS = ["default", "0.5x", "0.75x", "normal", "1.25x", "1.5x"];

export class GeoPushpinChartConfigurationPointsSizeExample extends Component {
    state = {
        minSize: "default",
        maxSize: "default",
    };

    render() {
        const { minSize, maxSize } = this.state;
        const geoConfig = {
            mapboxToken: MAPBOX_TOKEN,
            points: {
                minSize,
                maxSize,
            },
        };

        return (
            <div className="s-geo-chart">
                <div style={{ marginTop: "10px" }}>
                    {this.renderPointSizeDropDown("minSize", "Min Size")}
                    {this.renderPointSizeDropDown("maxSize", "Max Size")}
                </div>
                <div
                    style={{ height: "500px", position: "relative" }}
                    className="s-geo-pushpin-chart-configuration-points-size"
                >
                    <GeoPushpinChart
                        location={locationAttribute}
                        size={sizeMeasure}
                        config={geoConfig}
                        onZoomChanged={this.onZoomChanged}
                        onCenterPositionChanged={this.onCenterPositionChanged}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
            </div>
        );
    }

    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartConfigurationPointsSizeExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartConfigurationPointsSizeExample onError", ...params);
    }

    onZoomChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("GeoPushpinChartConfigurationPointsSizeExample onZoomChanged", ...params);
    }

    onCenterPositionChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log(
            "GeoPushpinChartConfigurationPointsSizeExample onCenterPositionChanged",
            ...params
        );
    }

    onPointSizeChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value,
        });
    };

    renderPointSizeDropDown = (id, label) => (
        <span style={{ display: "inline-block", minWidth: "10em", verticalAlign: "middle" }}>
            {`${label}: `}
            <select id={id} onChange={this.onPointSizeChange}>
                {POINT_SIZE_OPTIONS.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </span>
    );
}

export default GeoPushpinChartConfigurationPointsSizeExample;

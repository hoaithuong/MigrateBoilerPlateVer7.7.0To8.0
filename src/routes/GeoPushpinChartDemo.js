// (C) 2020 GoodData Corporation
import React from "react";

import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";

import GeoPushpinChartClusteringExample from "./components/GeoPushpinChartClusteringExample";
import GeoPushpinChartWithColorLegendExample from "./components/GeoPushpinChartWithColorLegendExample";
import GeoPushpinChartWithCategoryLegendExample from "./components/GeoPushpinChartWithCategoryLegendExample";
import GeoPushpinChartConfigurationExample from "./components/GeoPushpinChartConfigurationExample";
import GeoPushpinChartConfigurationLegendExample from "./components/GeoPushpinChartConfigurationLegendExample";
import GeoPushpinChartConfigurationViewportExample from "./components/GeoPushpinChartConfigurationViewportExample";
import GeoPushpinChartConfigurationColorMappingExample from "./components/GeoPushpinChartConfigurationColorMappingExample";
import GeoPushpinChartConfigurationPointsSizeExample from "./components/GeoPushpinChartConfigurationPointsSizeExample";
import GeoPushpinChartConfigurationPointsGroupNearbyExample from "./components/GeoPushpinChartConfigurationPointsGroupNearbyExample";

const GeoPushpinChartDemo = () => {
    const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Geo Pushpin Chart</h1>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-clustering">Example of Geo Pushpin Chart with Clustering</h2>
                <GeoPushpinChartClusteringExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-size-color">Example of Geo Pushpin Chart with Size and Color Legend</h2>
                <GeoPushpinChartWithColorLegendExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-category">Example of Geo Pushpin Chart with Size and Category Legend</h2>
                <GeoPushpinChartWithCategoryLegendExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-configuration">Example of Geo Pushpin Chart with Geo Configuration</h2>
                <GeoPushpinChartConfigurationExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-configuration-legend">
                    Example of Geo Pushpin Chart with Configuration - Legend
                </h2>
                <GeoPushpinChartConfigurationLegendExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-configuration-viewport">
                    Example of Geo Pushpin Chart with Configuration - Viewport
                </h2>
                <GeoPushpinChartConfigurationViewportExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-configuration-color-mapping">
                    Example of Geo Pushpin Chart with Configuration - Custom Palette and Color Mapping
                </h2>
                <GeoPushpinChartConfigurationColorMappingExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-configuration-points-group-nearby">
                    Example of Geo Pushpin Chart with Configuration - Group nearby points
                </h2>
                <GeoPushpinChartConfigurationPointsGroupNearbyExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart-configuration-points-size">
                    Example of Geo Pushpin Chart with Configuration - Points size
                </h2>
                <GeoPushpinChartConfigurationPointsSizeExample/>
            </div>
        </Page>
    );
};

export default GeoPushpinChartDemo;

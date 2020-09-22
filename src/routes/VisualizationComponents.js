// (C) 2007-2020 GoodData Corporation
import React from "react";

import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";

import VisualizationColumnChartExample from "./components/VisualizationColumnChartByUriExample";
import VisualizationTableExample from "./components/VisualizationTableByUriExample";
import VisualizationBarExample from "./components/VisualizationBarByUriExample";
import VisualizationLineExample from "./components/VisualizationLineByUriExample";
import VisualizationAreaExample from "./components/VisualizationAreaByUriExample";
import VisualizationHeadlineExample from "./components/VisualizationHeadlineByUriExample";
import VisualizationScatterExample from "./components/VisualizationScatterByUriExample";
import VisualizationBubbleExample from "./components/VisualizationBubbleByUriExample";
import VisualizationPieExample from "./components/VisualizationPieByUriExample";
import VisualizationDonutExample from "./components/VisualizationDonutByUriExample";
import VisualizationTreemapExample from "./components/VisualizationTreemapByUriExample";
import VisualizationHeatmapExample from "./components/VisualizationHeatmapByUriExample";
import VisualizationComboExample from "./components/VisualizationComboByUriExample";
import VisualizationBulletExample from "./components/VisualizationBulletByUriExample";
import VisualizationGeoPushpinChartByUriExample from "./components/VisualizationGeoPushpinChartByUriExample";

import VisualizationColumnChartByIdentifierExample from "./components/VisualizationColumnChartByIdentifierExample";
import VisualizationMeasureValueFilterByIdentifierExample from "./components/VisualizationMeasureValueFilterByIdentifierExample";
import VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample from "./components/VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample";
import VisualizationTableExampleIdentifier from "./components/VisualizationTableByIdentifierExample";
import VisualizationBarExampleIdentifier from "./components/VisualizationBarByIdentifierExample";
import VisualizationLineExampleIdentifier from "./components/VisualizationLineByIdentifierExample";
import VisualizationAreaExampleIdentifier from "./components/VisualizationAreaByIdentifierExample";
import VisualizationHeadlineExampleIdentifier from "./components/VisualizationHeadlineByIdentifierExample";
import VisualizationScatterExampleIdentifier from "./components/VisualizationScatterByIdentifierExample";
import VisualizationBubbleExampleIdentifier from "./components/VisualizationBubbleByIdentifierExample";
import VisualizationPieExampleIdentifier from "./components/VisualizationPieByIdentifierExample";
import VisualizationDonutExampleIdentifier from "./components/VisualizationDonutByIdentifierExample";
import VisualizationTreemapExampleIdentifier from "./components/VisualizationTreemapByIdentifierExample";
import VisualizationHeatmapExampleIdentifier from "./components/VisualizationHeatmapByIdentifierExample";
import VisualizationComboExampleIdentifier from "./components/VisualizationComboByIdentifierExample";
import VisualizationBulletExampleIdentifier from "./components/VisualizationBulletByIdentifierExample";
import VisualizationGeoPushpinChartByIdentifierExample from "./components/VisualizationGeoPushpinChartByIdentifierExample";

const VisualizationComponents = () => {
    const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Visualization by URI</h1>

                <p>
                    These are the examples of the generic Visualization component that uses URI to identify insights.
                </p>

                <hr className="separator" />

                <h2 id="column-chart">Column Chart</h2>
                <VisualizationColumnChartExample/>

                <hr className="separator" />

                <h2 id="table">Table</h2>
                <VisualizationTableExample/>

                <hr className="separator" />

                <h2 id="bar">Bar Chart</h2>
                <VisualizationBarExample/>

                <hr className="separator" />

                <h2 id="line">Line Chart</h2>
                <VisualizationLineExample/>

                <hr className="separator" />

                <h2 id="area">Stacked Area Chart</h2>
                <VisualizationAreaExample/>

                <hr className="separator" />

                <h2 id="headline">Headline</h2>
                <VisualizationHeadlineExample/>

                <hr className="separator" />

                <h2 id="scatter">Scatter Plot</h2>
                <VisualizationScatterExample/>

                <hr className="separator" />

                <h2 id="bubble">Bubble Chart</h2>
                <VisualizationBubbleExample/>

                <hr className="separator" />

                <h2 id="bullet">Bullet Chart</h2>
                <VisualizationBulletExample/>

                <hr className="separator" />

                <h2 id="pie">Pie Chart</h2>
                <VisualizationPieExample/>

                <hr className="separator" />

                <h2 id="donut">Donut Chart</h2>
                <VisualizationDonutExample/>

                <hr className="separator" />

                <h2 id="treemap">Treemap</h2>
                <VisualizationTreemapExample/>

                <hr className="separator" />

                <h2 id="heatmap">Heatmap</h2>
                <VisualizationHeatmapExample/>

                <hr className="separator" />

                <h2 id="combo">Combo Chart</h2>
                <VisualizationComboExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart">Geo Pushpin Chart</h2>
                <VisualizationGeoPushpinChartByUriExample/>

                <h1>Visualization by identifier</h1>

                <p>
                    These are the examples of the generic Visualization component that uses identifier to identify
                    insights.
                </p>

                <hr className="separator" />

                <h2 id="column-chart">Column Chart</h2>
                <VisualizationColumnChartByIdentifierExample/>

                <hr className="separator" />

                <h2 id="table">Table</h2>
                <VisualizationTableExampleIdentifier/>

                <hr className="separator" />

                <h2 id="bar">Bar Chart</h2>
                <VisualizationBarExampleIdentifier/>

                <hr className="separator" />

                <h2 id="line">Line Chart</h2>
                <VisualizationLineExampleIdentifier/>

                <hr className="separator" />

                <h2 id="area">Stacked Area Chart</h2>
                <VisualizationAreaExampleIdentifier/>

                <hr className="separator" />

                <h2 id="headline">Headline</h2>
                <VisualizationHeadlineExampleIdentifier/>

                <hr className="separator" />

                <h2 id="scatter">Scatter Plot</h2>
                <VisualizationScatterExampleIdentifier/>

                <hr className="separator" />

                <h2 id="bubble">Bubble Chart</h2>
                <VisualizationBubbleExampleIdentifier/>

                <hr className="separator" />

                <h2 id="bullet">Bullet Chart</h2>
                <VisualizationBulletExampleIdentifier/>

                <hr className="separator" />

                <h2 id="pie">Pie Chart</h2>
                <VisualizationPieExampleIdentifier/>

                <hr className="separator" />

                <h2 id="donut">Donut Chart</h2>
                <VisualizationDonutExampleIdentifier/>

                <hr className="separator" />

                <h2 id="treemap">Treemap</h2>
                <VisualizationTreemapExampleIdentifier/>

                <hr className="separator" />

                <h2 id="heatmap">Heatmap</h2>
                <VisualizationHeatmapExampleIdentifier/>

                <hr className="separator" />

                <h2 id="combo">Combo Chart</h2>
                <VisualizationComboExampleIdentifier/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart">Geo Pushpin Chart</h2>
                <VisualizationGeoPushpinChartByIdentifierExample/>

                <hr className="separator" />

                <h2 id="measure-value-filter-column-chart">Measure Value Filter Column Chart</h2>
                <VisualizationMeasureValueFilterByIdentifierExample/>

                <hr className="separator" />
                
                <h2 id="measure-value-filter-treat-null-as-zero">
                    Measure Value Filter that treats measure null values as zero
                </h2>
                <VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample></VisualizationMeasureValueFilterTreatNullAsZeroByIdentifierExample>
            </div>
        </Page>
    );
};

export default VisualizationComponents;

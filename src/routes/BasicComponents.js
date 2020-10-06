import React from "react";

import Page from "../components/Page";
// import { useProjectId } from "../contexts/ProjectId";

import AreaChartExample from "./components/AreaChartExample";
import BarChartExample from "./components/BarChartExample";
import ColumnChartExample from "./components/ColumnChartExample";
import LineChartExample from "./components/LineChartExample";
import StackedAreaChartExample from "./components/StackedAreaChartExample";
import PieChartExample from "./components/PieChartExample";
import DonutChartExample from "./components/DonutChartExample";
import ComboChartExample from "./components/ComboChartExample";
import ScatterPlotExample from "./components/ScatterPlotExample";
import BubbleChartExample from "./components/BubbleChartExample";
import BulletChartExample from "./components/BulletChartExample";
import TreemapExample from "./components/TreemapExample";
import HeatmapExample from "./components/HeatmapExample";
// import TableExample from "./components/TableExample";
import HeadlineExample from "./components/HeadlineExample";
import KpiExample from "./components/KpiExample";
import GeoPushpinChartWithCategoryLegendExample from "./components/GeoPushpinChartWithCategoryLegendExample";

const BasicComponents = () => {
    // const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Basic Components</h1>

                <p>
                    The following components accept measures and attributes, perform the execution, and render data as
                    a chart, table or KPI.
                </p>

                <hr className="separator" />

                <h2 id="bar-chart">Bar chart</h2>
                <BarChartExample/>

                <hr className="separator" />

                <h2 id="column-chart">Column chart</h2>
                <ColumnChartExample/>

                <hr className="separator" />

                <h2 id="line-chart">Line chart with custom colors</h2>
                <LineChartExample/>

                <hr className="separator" />

                <h2 id="area-chart">Area chart</h2>
                <AreaChartExample/>

                <hr className="separator" />

                <h2 id="stacked-area-chart">Stacked area chart</h2>
                <StackedAreaChartExample/>

                <hr className="separator" />

                <h2 id="pie-chart">Pie chart</h2>
                <PieChartExample/>

                <hr className="separator" />

                <h2 id="donut-chart">Donut chart</h2>
                <DonutChartExample/>

                <hr className="separator" />

                <h2 id="combo-chart">Combo chart</h2>
                <ComboChartExample/>

                <hr className="separator" />

                <h2 id="scatter-plot">Scatter plot</h2>
                <ScatterPlotExample/>

                <hr className="separator" />

                <h2 id="bubble-chart">Bubble chart</h2>
                <BubbleChartExample/>

                <hr className="separator" />

                <h2 id="bullet-chart">Bullet chart</h2>
                <BulletChartExample/>

                <hr className="separator" />

                <h2 id="treemap">Treemap</h2>
                <TreemapExample/>

                <hr className="separator" />

                <h2 id="heatmap">Heatmap</h2>
                <HeatmapExample/>

                {/* <hr className="separator" />

                <h2 id="table">Table</h2>
                <TableExample/> */}

                <hr className="separator" />

                <h2 id="table">Headline</h2>
                <HeadlineExample/>

                <hr className="separator" />

                <h2 id="kpi">KPI</h2>
                <p>
                    The interface of the KPI component is different compared to the components above. It takes only
                    one measure.
                </p>
                <KpiExample/>

                <hr className="separator" />

                <h2 id="geo-pushpin-chart">Example of Geo Pushpin Chart with Size and Category Legend</h2>
                <GeoPushpinChartWithCategoryLegendExample/>
            </div>
        </Page>
    );
};

export default BasicComponents;

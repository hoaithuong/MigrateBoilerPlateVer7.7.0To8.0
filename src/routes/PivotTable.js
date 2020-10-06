import React from "react";

import Page from "../components/Page";
// import { useProjectId } from "../contexts/ProjectId";

import PivotTableDrillExample from "./components/PivotTableDrillExample";
import PivotTableSortingExample from "./components/PivotTableSortingExample";
import PivotTableTotalsExample from "./components/PivotTableTotalsExample";
import PivotTableRowGroupingExample from "./components/PivotTableRowGroupingExample";
import PivotTableSubtotalsExample from "./components/PivotTableSubtotalsExample";
import PivotTableSortingAggregationExample from "./components/PivotTableSortingAggregationExample";
import PivotTableSizingExample from "./components/PivotTableSizingExample";
import PivotTableColumnsGrowToFitExample from "./components/PivotTableColumnsGrowToFitExample";
// import PivotTableManualResizingExample from "./components/PivotTableManualResizingExample";

const PivotTable = () => {
    // const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Pivot Table</h1>

                <hr className="separator" />

                <h2>Example of presorted pivot table</h2>
                <div id="measures-row-attributes-and-column-attributes">
                    <PivotTableSortingExample/>
                </div>
                <hr className="separator" />

                <h2>Example of pivot table with totals</h2>
                <div id="table-with-totals">
                    <PivotTableTotalsExample/>
                </div>
                <hr className="separator" />

                <h2>Example of drill event</h2>
                <div id="table-with-drill-events">
                    <PivotTableDrillExample/>
                </div>
                <hr className="separator" />

                <h2>Example of rows grouping</h2>
                <div id="table-with-row-grouping">
                    <PivotTableRowGroupingExample/>
                </div>
                <hr className="separator" />

                <h2>Example of subtotals</h2>
                <div id="table-with-subtotals">
                    <PivotTableSubtotalsExample/>
                </div>
                <hr className="separator" />

                <h2>Example of sort with aggregation</h2>
                <div id="table-with-sort-aggregation">
                    <PivotTableSortingAggregationExample/>
                </div>
                <hr className="separator" />

                <h2>Example of table column sizing</h2>
                <div id="table-with-column-sizing">
                    <PivotTableSizingExample/>
                </div>
                <hr className="separator" />

                <h2 id="table-with-column-sizing">Example of table grow to fit container</h2>
                <PivotTableColumnsGrowToFitExample/>

                <hr className="separator" />
                
                <h2 id="table-with-column-sizing">Example of pivot table with manual resizing</h2>
                {/* <PivotTableManualResizingExample/> */}
            </div>
        </Page>
    );
};

export default PivotTable;

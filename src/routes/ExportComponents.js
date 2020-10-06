import React from "react";
import Page from "../components/Page";
import BarChartExportExample from "./components/BarChartExportExample";
import ExportTableExample from "./components/ExportTableExample";
import ExportVisualizationExample from "./components/ExportVisualizationExample";
// import VisualizationPivotTableByUriExample from "./components/VisualizationPivotTableByUriExample";
import ColumnChartExportExample from "./components/ColumnChartExportExample";
// import VisualizationHeadlineByUriExample from "./components/VisualizationHeadlineByUriExample";
// import VisualizationComboByIdentifierExample from "./components/VisualizationComboByIdentifierExample";
import PivotTableExportExample from "./components/PivotTableExportExample";

const ExportComponents = () => {
    return (
        <Page>
            <h2>Export</h2>
            <p>
                These examples show how to export data for components like ColumnChart, Table/Pivot Table or
                Visualization.
            </p>
            <div>
                <h3>Export Chart Data</h3>
                {/* <BarChartExportExample /> */}
                <br />
            </div>

            <hr className="separator" />

            <div>
                <h3>Export Table</h3>
                {/* <ExportTableExample /> */}
                <br />
            </div>

            <hr className="separator" />

            <div>
                {/* <h3>Export Visualization</h3> */}
                {/* <ExportVisualizationExample /> */}
            </div>

            <hr className="separator" />

            <div>
                <h3>Export Visualization Pivot Table</h3>
                {/* <VisualizationPivotTableByUriExample /> */}
            </div>

            <hr className="separator" />

            <div>
                <h3>Export Visualization ColumnChart</h3>
                {/* <ColumnChartExportExample /> */}
            </div>

            <hr className="separator" />

            <div>
                <h3>Export Visualization Headline</h3>
                {/* <VisualizationHeadlineByUriExample /> */}
            </div>

            <hr className="separator" />

            <div>
                <h3>Export Visualization ComboChart</h3>
                {/* <VisualizationComboByIdentifierExample /> */}
            </div>

            <hr className="separator" />

            <div>
                <h3>Export Pivot table</h3>
                <PivotTableExportExample />
            </div>
        </Page>
    );
};

export default ExportComponents;

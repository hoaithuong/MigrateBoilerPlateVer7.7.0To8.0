// (C) 2007-2020 GoodData Corporation
import React from "react";

import Page from "../components/Page";
// import { useProjectId } from "../contexts/ProjectId";

import MeasureValueFilterExample from "./components/MeasureValueFilterExample";
import MeasureValueFilterShownInPercentageExample from "./components/MeasureValueFilterShownInPercentageExample";
import MeasureValueFilterStackedToHundredPercentExample from "./components/MeasureValueFilterStackedToHundredPercentExample";
import MeasureValueFilterFormattedInPercentageExample from "./components/MeasureValueFilterFormattedInPercentageExample";
import MeasureValueFilterComponentExample from "./components/MeasureValueFilterComponentExample";
import MeasureValueFilterComponentPercentageExample from "./components/MeasureValueFilterComponentPercentageExample";
import MeasureValueFilterComponentRatioExample from "./components/MeasureValueFilterComponentRatioExample";
import MeasureValueFilterDropdownComponentExample from "./components/MeasureValueFilterDropdownComponentExample";
// import MeasureValueFilterTreatNullAsZeroComponentExample from "./components/MeasureValueFilterTreatNullAsZeroComponentExample";

const MeasureValueFilter = () => {
    // const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Filter by Measure Value</h1>
                <p>
                    Here is how you can filter the entire insight by the value of a measure. The granularity is
                    defined by the attributes in the insight.
                </p>
                <hr className="separator" />
                <h2>Comparison and range filters</h2>
                <p>This is the example of filtering the visualization by either one or two measure values:</p>
                <div className="s-measure-value-filter-example-1">
                    <MeasureValueFilterExample/>
                </div>
                <h2>Filter by a measure value shown in %</h2>
                <p>
                    When the visualization is filtered by a measure that is shown in %, the filter value is in{" "}
                    <b>the original measure scale</b> and not in the percentage scale that is displayed in the
                    visualization.
                </p>
                <div className="s-measure-value-filter-example-2">
                    <MeasureValueFilterShownInPercentageExample/>
                </div>
                <h2>Filter by a measure value stacked to 100%</h2>
                <p>
                    When the visualization is filtered by a measure that is stacked to 100%, the filter value is in{" "}
                    <b>the original measure scale</b> and not in the percentage scale that is displayed in the
                    visualization.
                </p>
                <div className="s-measure-value-filter-example-3">
                    <MeasureValueFilterStackedToHundredPercentExample/>
                </div>
                <h2>Filter by a measure value formatted in %</h2>
                <p>
                    When the visualization is filtered by a measure that is formatted in %, the filter value is in{" "}
                    <b>the form of a ratio</b> (for instance, 0.5, which is 50%) and not in the percentage scale. This
                    applies to measures that have the percentage format set by the <em>format</em> measure property,
                    calculated measures with the percentage format set in metadata catalog, and arithmetic measures
                    with the <em>change</em> operator.
                </p>
                <div className="s-measure-value-filter-example-4">
                    <MeasureValueFilterFormattedInPercentageExample/>
                </div>

                <h1>Measure Value Filter Component</h1>
                <p>The example below shows general usage of the component for managing the measure value filter.</p>
                <div className="s-measure-value-filter-example-1">
                    <MeasureValueFilterComponentExample/>
                </div>
                <p>
                    This example shows the component for setting up a measure value filter with a measure formatted as
                    a percentage.
                </p>
                <div className="s-measure-value-filter-example-2">
                    <MeasureValueFilterComponentPercentageExample/>
                </div>
                <p>
                    This example shows the component for setting up a measure value filter with a measure shown as a
                    percentage.
                </p>
                <div className="s-measure-value-filter-example-3">
                    <MeasureValueFilterComponentRatioExample/>
                </div>
                <hr className="separator" />
                <h2>Dropdown with custom button</h2>
                <p>Following example shows the dropdown component to be handled on your own using a custom button.</p>
                <div className="s-measure-value-filter-example-4">
                    <MeasureValueFilterDropdownComponentExample/>
                </div>
                {/* <p>
                    This example shows the component for setting up a measure value filter with treat null value as
                    zero
                </p>
                <div className="s-measure-value-filter-example-5">
                    <MeasureValueFilterTreatNullAsZeroComponentExample/>
                </div> */}
            </div>
        </Page>
    );
};

export default MeasureValueFilter;

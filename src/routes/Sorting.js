// (C) 2007-2019 GoodData Corporation
import React from "react";

import Page from "../components/Page";
// import { useProjectId } from "../contexts/ProjectId";

import MeasureSortingExample from "./components/MeasureSortingExample";
import AttributeSortingExample from "./components/AttributeSortingExample";
import DynamicSortingExample from "./components/DynamicSortingExample";

const Sorting = () => {
    // const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Sorting</h1>
                <p>
                    These examples show how to sort bucket components like <code>ColumnChart or Table</code>.
                </p>

                <hr className="separator" />

                <h2>Sorting by Measure</h2>
                <p>
                    You can sort data by a measure value with the <code>measureSortItem</code>.
                </p>
                <MeasureSortingExample/>

                <hr className="separator" />

                <h2>Sorting by Attribute</h2>
                <p>
                    You can sort data by an attribute value with the <code>attributeSortItem</code> property.
                </p>
                <AttributeSortingExample/>

                <hr className="separator" />

                <h2>Dynamic Sorting</h2>
                <p>
                    When sorting insights with multiple attributes in different dimensions by measure, specify an{" "}
                    <code>attributeSortItem</code> with <code>aggregation: &apos;sum&apos;</code> or &nbsp;
                    <code>measureSortItem</code> with an <code>attributeLocator</code> property. Sorting by an
                    attribute value works the same way as in the previous example.
                </p>
                <DynamicSortingExample/>
            </div>
        </Page>
    );
};

export default Sorting;

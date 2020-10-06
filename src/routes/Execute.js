// (C) 2007-2019 GoodData Corporation
import React from "react";

import Page from "../components/Page";
// import { useProjectId } from "../contexts/ProjectId";

import ExecuteExample from "./components/ExecuteExample";
import ExecuteWithSlicesExample from "./components/ExecuteWithSlicesExample";
import ExecuteWithCustomVisualizationExample from "./components/ExecuteWithCustomVisualizationExample";
import ExecuteRaw from "./components/ExecuteRaw";


const Execute = () => {
    // const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Execute</h1>

                <p>
                    The Execute component allows you to execute input data and send it to the function that you have
                    chosen to use and have implemented. You can use the Execute component, for example, to create a
                    report using an arbitrary chart library.
                </p>
                <p>Pass a custom children function to this component to render AFM execution data.</p>

                <hr className="separator" />

                <ExecuteExample/>

                <hr className="separator" />

                <h2>Execute attribute values only</h2>
                <p>To get values of a single attribute, use the AttributeElements component instead.</p>

                <hr className="separator" />

                <ExecuteWithSlicesExample/>
                <hr className="separator" />

                <ExecuteWithCustomVisualizationExample/>
                <hr className="separator" />

                <ExecuteRaw/>
            </div>
        </Page>
    );
};

export default Execute;

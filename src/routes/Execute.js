// (C) 2007-2019 GoodData Corporation
import React from "react";

import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";

import ExecuteExample from "./components/ExecuteExample";
import ExecuteAttributeValuesExample from "./components/ExecuteAttributeValuesExample";

const Execute = () => {
    const { projectId } = useProjectId();
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

                <ExecuteAttributeValuesExample/>
            </div>
        </Page>
    );
};

export default Execute;

// (C) 2007-2019 GoodData Corporation
import React from "react";

import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";

import DateFilterComponentExample from "./components/DateFilterComponentExample";
import DateFilterWithColumnChartExample from "./components/DateFilterWithColumnChartExample";

const DateFilter = () => {
    const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Date Filter Component</h1>

                <p>These examples show how to use the Date Filter component.</p>

                <hr className="separator" />

                <h2>Date Filter</h2>
                <p>This example shows a full-featured date filter component.</p>
                <DateFilterComponentExample/>
                
                <hr className="separator" />

                <h2>Filtering a report</h2>
                <p>
                    This example shows how to add date filter component into a report. Presets and floating range form
                    is restricted to years.
                </p>
                <DateFilterWithColumnChartExample/>
            </div>
        </Page>
    );
};

export default DateFilter;

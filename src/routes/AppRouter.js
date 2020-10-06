import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { workspace } from "../constants/fixtures";
import { useAuth } from "../context/auth";
// import "@gooddata/react-components/styles/css/main.css";

// import { ProjectIdProvider } from "../contexts/ProjectId";
import Login from "./Login";
import Logout from "./Logout";
import BasicComponents from "./BasicComponents";
import PivotTable from "./PivotTable";
import GeoPushpinChartDemo from "./GeoPushpinChartDemo";
import VisualizationComponents from "./VisualizationComponents";
import Sorting from "./Sorting";
import TimeOverTimeComparison from "./TimeOverTimeComparison";
import AttributeFilter from "./AttributeFilter";
import DateFilter from "./DateFilter";
import MeasureValueFilter from "./MeasureValueFilter";
import ArithmeticMeasure from "./ArithmeticMeasure";
import Execute from "./Execute";
import ExportComponents from "./ExportComponents";
// import DrillingDemo from "./Drilling";
import Page from "../components/Page";

import styles from "./AppRouter.module.scss";
// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../context/auth";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const user = auth.data;
//     const isLoading = auth.isLoading;
//     const shouldRedirectToLogin = !isLoading && !user;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    const { backend } = useAuth();
    return (
        <div className={styles.AppRouter}>
            <BackendProvider backend={backend}>
    <WorkspaceProvider workspace={workspace}>
          <Router>
                {/* ProjectIdProvider depends on Router so it must be nested */}
                {/* <ProjectIdProvider> */}
                    <Route exact path="/" component={BasicComponents} />
                    <Route exact path="/pivot-table" component={PivotTable} />
                    <Route exact path="/geo-pushpin-chart" component={GeoPushpinChartDemo} />
                    <Route exact path="/visualization" component={VisualizationComponents} />
                    <Route exact path="/sorting" component={Sorting} />
                    <Route exact path="/time-over-time-comparison" component={TimeOverTimeComparison} />
                    <Route exact path="/attribute-filter-components" component={AttributeFilter} />
                    <Route exact path="/filter-by-measure-value" component={MeasureValueFilter} />
                    <Route exact path="/date-filter-component" component={DateFilter} />
                    <Route exact path="/arithmetic-measures" component={ArithmeticMeasure} />
                    <Route exact path="/execute" component={Execute} />
                    <Route exact path="/export" component={ExportComponents} />
                    {/* <Route exact path="/drill" component={DrillingDemo} /> */}
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* DELETE THIS LINE  */} <Redirect to="/" />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                {/* </ProjectIdProvider> */}
                </Router>
    </WorkspaceProvider>
</BackendProvider>
        </div>
    );
};

export default AppRouter;

import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
        <div className={styles.LinkContainer}>
            <div className={styles.LinkNav}>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Basic
            </NavLink>
            <NavLink to={"/pivot-table"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                PivotTable
            </NavLink>
            <NavLink to={"/geo-pushpin-chart"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                GeoPushpin
            </NavLink>
            <NavLink to={"/visualization"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Visualization
            </NavLink>
            <NavLink to={"/sorting"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Sorting
            </NavLink>
            <NavLink to={"/time-over-time-comparison"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                TimeOver
            </NavLink>
            <NavLink to={"/attribute-filter-components"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                AttributeFilter
            </NavLink>
            <NavLink to={"/date-filter-component"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                DateFilter
            </NavLink>
            <NavLink to={"/filter-by-measure-value"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                MeasureValueFilter
            </NavLink>
            <NavLink to={"/arithmetic-measures"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                ArithmeticMeasures
            </NavLink>
            <NavLink to={"/execute"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Execute
            </NavLink>
            <NavLink to={"/export"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Export
            </NavLink>
            <NavLink to={"/drill"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Drill
            </NavLink>
            </div>
            </div>
        </>
    );
};

export default Links;

import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
        <div className={styles.LinkContainer}>
            <div className={styles.LinkNav}>
                <div className={styles.LinkSticky}>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Basic Components
            </NavLink>
            <NavLink to={"/pivot-table"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Pivot Table
            </NavLink>
            <NavLink to={"/geo-pushpin-chart"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Geo Pushpin Chart
            </NavLink>
            <NavLink to={"/visualization"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Visualization Components
            </NavLink>
            <NavLink to={"/sorting"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Sorting
            </NavLink>
            <NavLink to={"/time-over-time-comparison"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Time Over Time Comparison
            </NavLink>
            <NavLink to={"/attribute-filter-components"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Attribute Filter Component
            </NavLink>
            <NavLink to={"/date-filter-component"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Date Filter Component
            </NavLink>
            <NavLink to={"/filter-by-measure-value"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Measure Value Filter
            </NavLink>
            <NavLink to={"/arithmetic-measures"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Arithmetic Measures
            </NavLink>
            <NavLink to={"/execute"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Execute Component
            </NavLink>
            <NavLink to={"/export"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Export
            </NavLink>
            <NavLink to={"/drill"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Drilling
            </NavLink>
            </div>
            </div>
            </div>
        </>
    );
};

export default Links;

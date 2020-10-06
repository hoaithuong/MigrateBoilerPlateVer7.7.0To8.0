import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newAttributeSort, newAbsoluteDateFilter } from "@gooddata/sdk-model";
import { ExampleWithExport } from "./utils/ExampleWithExport";
import { Ldm, LdmExt } from "../../ldm";

const measures = [
    LdmExt.FranchiseFees,
    LdmExt.FranchiseFeesAdRoyalty,
    LdmExt.FranchiseFeesInitialFranchiseFee,
    LdmExt.FranchiseFeesOngoingRoyalty,
];

const attributes = [Ldm.LocationState, Ldm.LocationName.Default, LdmExt.MenuCategory];

const columns = [Ldm.DateQuarter, Ldm.DateMonth.Short];

const sortBy = [newAttributeSort("menu", "asc")];

const filters = [newAbsoluteDateFilter(LdmExt.dateDatasetIdentifier, "2017-01-01", "2017-12-31")];

const style = { height: 300 };

export const PivotTableExportExample = () => {
    return (
        <ExampleWithExport filters={filters}>
            {(onExportReady) => (
                <div style={style} className="s-pivot-table-sorting">
                    <PivotTable
                        measures={measures}
                        rows={attributes}
                        columns={columns}
                        pageSize={20}
                        sortBy={sortBy}
                        filters={filters}
                        onExportReady={onExportReady}
                    />
                </div>
            )}
        </ExampleWithExport>
    );
};

export default PivotTableExportExample;

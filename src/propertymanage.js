import {Managementcover} from "./PropertyComponents/cover.js";
import ManagementB from "./PropertyComponents/ManagementB.js";
import Services from "./PropertyComponents/services.js";

export function PropertyManage() {
    return (
        <div>
            <Managementcover />
            <ManagementB />
            <Services />
        </div>
    );
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_dotnet_errors_1 = require("ts-dotnet-errors");
const inversify_1 = require("inversify");
const http_server_1 = require("../../server/http-server");
const ioc_types_1 = require("./ioc-types");
/**
 * Inversion of control container to work within.
 */
class IocContainer {
    /**
     * Create a new inversion of control container.
     */
    constructor() {
        if (IocContainer.instance != null) {
            throw new ts_dotnet_errors_1.InvalidOperationError('An IoC container has already been defined.');
        }
        IocContainer.instance = this;
        this.container = new inversify_1.Container();
        this.bindInjectables();
    }
    /**
     * Resolve a dependency from the IOC container.
     * @param serviceIdentifier The identifier of the dependency to resolve.
     * @returns The dependency.
     */
    get(serviceIdentifier) {
        return this.container.get(serviceIdentifier);
    }
    /**
     * Inject all of the injectables into the IOC container.
     */
    bindInjectables() {
        this.container.bind(ioc_types_1.IOC_TYPES.HTTP_SERVER).to(http_server_1.HttpServer);
    }
}
exports.IocContainer = IocContainer;
//# sourceMappingURL=ioc-container.js.map
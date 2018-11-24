import { InvalidOperationError, NotImplementedError } from "ts-dotnet-errors";
import { Container, interfaces } from "inversify";
import { HttpServer } from "../../server/http-server";
import { IOC_TYPES } from "./ioc-types";

/**
 * Inversion of control container to work within.
 */
export class IocContainer {
    /**
     * The singleton instance of the container.
     */
    public static instance: IocContainer;

    /**
     * The underlying inversify container.
     */
    private container: Container;

    /**
     * Create a new inversion of control container.
     */
    constructor() {
        if (IocContainer.instance != null) {
            throw new InvalidOperationError('An IoC container has already been defined.');
        }

        IocContainer.instance = this;
        this.container = new Container();
        this.bindInjectables();
    }

    /**
     * Resolve a dependency from the IOC container.
     * @param serviceIdentifier The identifier of the dependency to resolve.
     * @returns The dependency.
     */
    public get<T>(serviceIdentifier: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>) {
        return this.container.get<T>(serviceIdentifier);
    }

    /**
     * Inject all of the injectables into the IOC container.
     */
    private bindInjectables() {

        this.container.bind<HttpServer>(IOC_TYPES.HTTP_SERVER).to(HttpServer);
    }
}
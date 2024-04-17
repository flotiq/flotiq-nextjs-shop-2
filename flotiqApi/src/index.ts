/* tslint:disable */
/* eslint-disable */
/* Flotiq customised */
export * from './runtime';
export * from './apis/index';
export * from './models/index';

import * as runtime from './runtime';
import * as Api from './apis/index';

const hydrateMiddleware =  async ctx => {
    
    if(ctx.init.method == 'GET'){

      if(ctx.url.indexOf('?') >0){
        ctx.url = ctx.url + '&hydrate=1';
      } else{
        ctx.url = ctx.url + '?hydrate=1';
      }

    }

    return {
        ...ctx,
        init: {
            ...ctx.init,
        }
    }
};

export class FlotiqApi {
    public MediaInternal : Api.MediaInternal;
    public Product : Api.Product;
    public Project : Api.Project;
    public TagInternal : Api.TagInternal;

    constructor(key){
        const configParameters: runtime.ConfigurationParameters = {
            apiKey: key
        };
        const configuration = new runtime.Configuration(configParameters);
        this.MediaInternal = new Api.MediaInternal(configuration);
        this.MediaInternal = this.MediaInternal.withPreMiddleware( hydrateMiddleware );
        this.Product = new Api.Product(configuration);
        this.Product = this.Product.withPreMiddleware( hydrateMiddleware );
        this.Project = new Api.Project(configuration);
        this.Project = this.Project.withPreMiddleware( hydrateMiddleware );
        this.TagInternal = new Api.TagInternal(configuration);
        this.TagInternal = this.TagInternal.withPreMiddleware( hydrateMiddleware );
    }
}
"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Flotiq User API
 * ## Getting started  This API Documentation reflects the endpoints defined in your [Flotiq](https://flotiq.com) account. The documentation is generated using an OpenAPI schema describing the API, which can be obtained in several flavors:  - [OAS 3.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE)   - without hydration, will not expand relations between content types (this is the default version which provides maximum compatibility with downstream systems)   - with hydration, pass [hydrate=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1) - use this for a better type support in exported OpenAPI schemas   - without system endpoints, pass [user_only=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1&amp;user_only=1) - use this to only include your endpoints, without system ones - [OAS 2.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;version=2) - provided for compatibility with several older systems  Check Flotiq documentation for more information about [Flotiq OpenAPI capabilities](https://flotiq.com/docs/API/open-api-schema/), instructions how to generate code and other useful tips.  ### Access to data  There are several methods that you can use to access your data:  * Live API docs - available via &lt;code&gt;Try it out&lt;/code&gt; button available next to each endpoint   * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.   It&#039;s also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).   ## Object access   Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:   * create  * list  * update  * delete  * batch create  * retrieve single object.  ### Hydration   When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it&#039;s not enabled by default, but it&#039;s a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectToJSON = exports.ProjectFromJSONTyped = exports.ProjectFromJSON = exports.instanceOfProject = void 0;
var AbstractContentTypeSchemaDefinitionInternal_1 = require("./AbstractContentTypeSchemaDefinitionInternal");
var Media_1 = require("./Media");
/**
 * Check if a given object implements the Project interface.
 */
function instanceOfProject(value) {
    if (!('id' in value))
        return false;
    if (!('name' in value))
        return false;
    if (!('slug' in value))
        return false;
    return true;
}
exports.instanceOfProject = instanceOfProject;
function ProjectFromJSON(json) {
    return ProjectFromJSONTyped(json, false);
}
exports.ProjectFromJSON = ProjectFromJSON;
function ProjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'internal': json['internal'] == null ? undefined : (0, AbstractContentTypeSchemaDefinitionInternal_1.AbstractContentTypeSchemaDefinitionInternalFromJSON)(json['internal']),
        'name': json['name'],
        'slug': json['slug'],
        'gallery': json['gallery'] == null ? undefined : (json['gallery'].map(Media_1.MediaFromJSON)),
        'description': json['description'] == null ? undefined : json['description'],
        'headerImage': json['headerImage'] == null ? undefined : (json['headerImage'].map(Media_1.MediaFromJSON)),
        'gallery_name': json['gallery_name'] == null ? undefined : json['gallery_name'],
        'gallery_description': json['gallery_description'] == null ? undefined : json['gallery_description'],
    };
}
exports.ProjectFromJSONTyped = ProjectFromJSONTyped;
function ProjectToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'internal': (0, AbstractContentTypeSchemaDefinitionInternal_1.AbstractContentTypeSchemaDefinitionInternalToJSON)(value['internal']),
        'name': value['name'],
        'slug': value['slug'],
        'gallery': value['gallery'] == null ? undefined : (value['gallery'].map(Media_1.MediaToJSON)),
        'description': value['description'],
        'headerImage': value['headerImage'] == null ? undefined : (value['headerImage'].map(Media_1.MediaToJSON)),
        'gallery_name': value['gallery_name'],
        'gallery_description': value['gallery_description'],
    };
}
exports.ProjectToJSON = ProjectToJSON;

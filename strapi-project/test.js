// http://localhost:1337/content-manager/content-types/api::product.product/configuration
const labelField = {
    data: {
      contentType: {
        uid: "api::product.product",
        settings: {
          bulkable: true,
          filterable: true,
          searchable: true,
          pageSize: 10,
          mainField: "name",
          defaultSortBy: "name",
          defaultSortOrder: "ASC"
        },
        metadatas: {
          id: {
            edit: {},
            list: {
              label: "id",
              searchable: true,
              sortable: true
            }
          },
          name: {
            edit: {
              label: "name",
              description: "name desc",
              placeholder: "name placeholder",
              visible: true,
              editable: true
            },
            list: {
              label: "name",
              searchable: true,
              sortable: true
            }
          },
          price: {
            edit: {
              label: "price",
              description: "",
              placeholder: "",
              visible: true,
              editable: true
            },
            list: {
              label: "price",
              searchable: true,
              sortable: true
            }
          },
          isDeleted: {
            edit: {
              label: "isDeleted",
              description: "",
              placeholder: "",
              visible: true,
              editable: true
            },
            list: {
              label: "isDeleted",
              searchable: true,
              sortable: true
            }
          },
          createdAt: {
            edit: {
              label: "createdAt",
              description: "",
              placeholder: "",
              visible: false,
              editable: true
            },
            list: {
              label: "createdAt",
              searchable: true,
              sortable: true
            }
          },
          updatedAt: {
            edit: {
              label: "updatedAt",
              description: "",
              placeholder: "",
              visible: false,
              editable: true
            },
            list: {
              label: "updatedAt",
              searchable: true,
              sortable: true
            }
          },
          createdBy: {
            edit: {
              label: "createdBy",
              description: "",
              placeholder: "",
              visible: false,
              editable: true,
              mainField: "firstname"
            },
            list: {
              label: "createdBy",
              searchable: true,
              sortable: true,
              mainField: "firstname"
            }
          },
          updatedBy: {
            edit: {
              label: "updatedBy",
              description: "",
              placeholder: "",
              visible: false,
              editable: true,
              mainField: "firstname"
            },
            list: {
              label: "updatedBy",
              searchable: true,
              sortable: true,
              mainField: "firstname"
            }
          }
        },
        layouts: {
          edit: [
            [
              {
                name: "name",
                size: 6
              },
              {
                name: "price",
                size: 4
              }
            ],
            [
              {
                name: "isDeleted",
                size: 4
              }
            ]
          ],
          list: [
            "id",
            "name",
            "price",
            "isDeleted"
          ]
        }
      },
      components: {}
    }
  }

// http://localhost:1337/content-type-builder/content-types/api::product.product
const inputValidation = {
    data: {
      uid: "api::product.product",
      apiID: "product",
      schema: {
        draftAndPublish: true,
        displayName: "product",
        singularName: "product",
        pluralName: "products",
        description: "",
        pluginOptions: {},
        kind: "collectionType",
        collectionName: "products",
        attributes: {
          name: {
            type: "string",
            required: true,
            maxLength: 50,
            minLength: 3
          },
          price: {
            type: "integer",
            min: 0,
            default: 0
          },
          isDeleted: {
            type: "boolean",
            default: false,
            required: true
          }
        },
        visible: true,
        restrictRelationsTo: null
      }
    }
  }

var a = inputValidation?.data?.schema?.attributes;
// console.log(Object.entries(a));
labelField?.data?.contentType?.metadatas;


const labelAttributes = inputValidation.data.schema.attributes;

const transformedData = Object.keys(labelAttributes).map(key => {
    const attribute = labelAttributes[key];
    const metadata = labelField.data.contentType.metadatas[key];

    return {
        name: key,
        type: attribute.type,
        required: attribute.required || false,
        maxLength: attribute.maxLength || null,
        minLength: attribute.minLength || null,
        label: metadata.edit.label,
        description: metadata.edit.description || "",
        placeholder: metadata.edit.placeholder || "",
        visible: metadata.edit.visible || false,
        editable: metadata.edit.editable || false
    };
});

// console.log(transformedData);


// sidebar --------------------------------------
const sidebar = {
  "data": [
      {
          "uid": "admin::permission",
          "plugin": "admin",
          "apiID": "permission",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Permission",
              "singularName": "permission",
              "pluralName": "permissions",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "admin_permissions",
              "attributes": {
                  "action": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": true
                  },
                  "actionParameters": {
                      "type": "json",
                      "configurable": false,
                      "required": false,
                      "default": {}
                  },
                  "subject": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": false
                  },
                  "properties": {
                      "type": "json",
                      "configurable": false,
                      "required": false,
                      "default": {}
                  },
                  "conditions": {
                      "type": "json",
                      "configurable": false,
                      "required": false,
                      "default": []
                  },
                  "role": {
                      "configurable": false,
                      "type": "relation",
                      "relation": "manyToOne",
                      "inversedBy": "permissions",
                      "target": "admin::role",
                      "targetAttribute": "permissions",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "admin::user",
          "plugin": "admin",
          "apiID": "user",
          "schema": {
              "draftAndPublish": false,
              "displayName": "User",
              "singularName": "user",
              "pluralName": "users",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "admin_users",
              "attributes": {
                  "firstname": {
                      "type": "string",
                      "unique": false,
                      "minLength": 1,
                      "configurable": false,
                      "required": false
                  },
                  "lastname": {
                      "type": "string",
                      "unique": false,
                      "minLength": 1,
                      "configurable": false,
                      "required": false
                  },
                  "username": {
                      "type": "string",
                      "unique": false,
                      "configurable": false,
                      "required": false
                  },
                  "email": {
                      "type": "email",
                      "minLength": 6,
                      "configurable": false,
                      "required": true,
                      "unique": true,
                      "private": true
                  },
                  "password": {
                      "type": "password",
                      "minLength": 6,
                      "configurable": false,
                      "required": false,
                      "private": true,
                      "searchable": false
                  },
                  "resetPasswordToken": {
                      "type": "string",
                      "configurable": false,
                      "private": true,
                      "searchable": false
                  },
                  "registrationToken": {
                      "type": "string",
                      "configurable": false,
                      "private": true,
                      "searchable": false
                  },
                  "isActive": {
                      "type": "boolean",
                      "default": false,
                      "configurable": false,
                      "private": true
                  },
                  "roles": {
                      "configurable": false,
                      "private": true,
                      "type": "relation",
                      "relation": "manyToMany",
                      "inversedBy": "users",
                      "target": "admin::role",
                      "collectionName": "strapi_users_roles",
                      "targetAttribute": "users"
                  },
                  "blocked": {
                      "type": "boolean",
                      "default": false,
                      "configurable": false,
                      "private": true
                  },
                  "preferedLanguage": {
                      "type": "string",
                      "configurable": false,
                      "required": false,
                      "searchable": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": [
                  "oneWay",
                  "manyWay"
              ]
          }
      },
      {
          "uid": "admin::role",
          "plugin": "admin",
          "apiID": "role",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Role",
              "singularName": "role",
              "pluralName": "roles",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "admin_roles",
              "attributes": {
                  "name": {
                      "type": "string",
                      "minLength": 1,
                      "unique": true,
                      "configurable": false,
                      "required": true
                  },
                  "code": {
                      "type": "string",
                      "minLength": 1,
                      "unique": true,
                      "configurable": false,
                      "required": true
                  },
                  "description": {
                      "type": "string",
                      "configurable": false
                  },
                  "users": {
                      "configurable": false,
                      "type": "relation",
                      "relation": "manyToMany",
                      "mappedBy": "roles",
                      "target": "admin::user",
                      "targetAttribute": "roles",
                      "private": false
                  },
                  "permissions": {
                      "configurable": false,
                      "type": "relation",
                      "relation": "oneToMany",
                      "mappedBy": "role",
                      "target": "admin::permission",
                      "targetAttribute": "role",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "admin::api-token",
          "plugin": "admin",
          "apiID": "api-token",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Api Token",
              "singularName": "api-token",
              "pluralName": "api-tokens",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "strapi_api_tokens",
              "attributes": {
                  "name": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": true,
                      "unique": true
                  },
                  "description": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": false,
                      "default": ""
                  },
                  "type": {
                      "type": "enumeration",
                      "enum": [
                          "read-only",
                          "full-access",
                          "custom"
                      ],
                      "configurable": false,
                      "required": true,
                      "default": "read-only"
                  },
                  "accessKey": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": true,
                      "searchable": false
                  },
                  "lastUsedAt": {
                      "type": "datetime",
                      "configurable": false,
                      "required": false
                  },
                  "permissions": {
                      "type": "relation",
                      "target": "admin::api-token-permission",
                      "relation": "oneToMany",
                      "mappedBy": "token",
                      "configurable": false,
                      "required": false,
                      "targetAttribute": "token",
                      "private": false
                  },
                  "expiresAt": {
                      "type": "datetime",
                      "configurable": false,
                      "required": false
                  },
                  "lifespan": {
                      "type": "biginteger",
                      "configurable": false,
                      "required": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "admin::api-token-permission",
          "plugin": "admin",
          "apiID": "api-token-permission",
          "schema": {
              "draftAndPublish": false,
              "displayName": "API Token Permission",
              "singularName": "api-token-permission",
              "pluralName": "api-token-permissions",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "strapi_api_token_permissions",
              "attributes": {
                  "action": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": true
                  },
                  "token": {
                      "configurable": false,
                      "type": "relation",
                      "relation": "manyToOne",
                      "inversedBy": "permissions",
                      "target": "admin::api-token",
                      "targetAttribute": "permissions",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "admin::transfer-token",
          "plugin": "admin",
          "apiID": "transfer-token",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Transfer Token",
              "singularName": "transfer-token",
              "pluralName": "transfer-tokens",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "strapi_transfer_tokens",
              "attributes": {
                  "name": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": true,
                      "unique": true
                  },
                  "description": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": false,
                      "default": ""
                  },
                  "accessKey": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": true
                  },
                  "lastUsedAt": {
                      "type": "datetime",
                      "configurable": false,
                      "required": false
                  },
                  "permissions": {
                      "type": "relation",
                      "target": "admin::transfer-token-permission",
                      "relation": "oneToMany",
                      "mappedBy": "token",
                      "configurable": false,
                      "required": false,
                      "targetAttribute": "token",
                      "private": false
                  },
                  "expiresAt": {
                      "type": "datetime",
                      "configurable": false,
                      "required": false
                  },
                  "lifespan": {
                      "type": "biginteger",
                      "configurable": false,
                      "required": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "admin::transfer-token-permission",
          "plugin": "admin",
          "apiID": "transfer-token-permission",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Transfer Token Permission",
              "singularName": "transfer-token-permission",
              "pluralName": "transfer-token-permissions",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "strapi_transfer_token_permissions",
              "attributes": {
                  "action": {
                      "type": "string",
                      "minLength": 1,
                      "configurable": false,
                      "required": true
                  },
                  "token": {
                      "configurable": false,
                      "type": "relation",
                      "relation": "manyToOne",
                      "inversedBy": "permissions",
                      "target": "admin::transfer-token",
                      "targetAttribute": "permissions",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::upload.file",
          "plugin": "upload",
          "apiID": "file",
          "schema": {
              "draftAndPublish": false,
              "displayName": "File",
              "singularName": "file",
              "pluralName": "files",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "files",
              "attributes": {
                  "name": {
                      "type": "string",
                      "configurable": false,
                      "required": true
                  },
                  "alternativeText": {
                      "type": "string",
                      "configurable": false
                  },
                  "caption": {
                      "type": "string",
                      "configurable": false
                  },
                  "width": {
                      "type": "integer",
                      "configurable": false
                  },
                  "height": {
                      "type": "integer",
                      "configurable": false
                  },
                  "formats": {
                      "type": "json",
                      "configurable": false
                  },
                  "hash": {
                      "type": "string",
                      "configurable": false,
                      "required": true
                  },
                  "ext": {
                      "type": "string",
                      "configurable": false
                  },
                  "mime": {
                      "type": "string",
                      "configurable": false,
                      "required": true
                  },
                  "size": {
                      "type": "decimal",
                      "configurable": false,
                      "required": true
                  },
                  "url": {
                      "type": "string",
                      "configurable": false,
                      "required": true
                  },
                  "previewUrl": {
                      "type": "string",
                      "configurable": false
                  },
                  "provider": {
                      "type": "string",
                      "configurable": false,
                      "required": true
                  },
                  "provider_metadata": {
                      "type": "json",
                      "configurable": false
                  },
                  "related": {
                      "type": "relation",
                      "relation": "morphToMany",
                      "configurable": false,
                      "targetAttribute": null,
                      "private": false
                  },
                  "folder": {
                      "type": "relation",
                      "relation": "manyToOne",
                      "target": "plugin::upload.folder",
                      "inversedBy": "files",
                      "private": true,
                      "targetAttribute": "files"
                  },
                  "folderPath": {
                      "type": "string",
                      "min": 1,
                      "required": true,
                      "private": true,
                      "searchable": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::upload.folder",
          "plugin": "upload",
          "apiID": "folder",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Folder",
              "singularName": "folder",
              "pluralName": "folders",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "upload_folders",
              "attributes": {
                  "name": {
                      "type": "string",
                      "min": 1,
                      "required": true
                  },
                  "pathId": {
                      "type": "integer",
                      "unique": true,
                      "required": true
                  },
                  "parent": {
                      "type": "relation",
                      "relation": "manyToOne",
                      "target": "plugin::upload.folder",
                      "inversedBy": "children",
                      "targetAttribute": "children",
                      "private": false
                  },
                  "children": {
                      "type": "relation",
                      "relation": "oneToMany",
                      "target": "plugin::upload.folder",
                      "mappedBy": "parent",
                      "targetAttribute": "parent",
                      "private": false
                  },
                  "files": {
                      "type": "relation",
                      "relation": "oneToMany",
                      "target": "plugin::upload.file",
                      "mappedBy": "folder",
                      "targetAttribute": "folder",
                      "private": false
                  },
                  "path": {
                      "type": "string",
                      "min": 1,
                      "required": true
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::content-releases.release",
          "plugin": "content-releases",
          "apiID": "release",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Release",
              "singularName": "release",
              "pluralName": "releases",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "strapi_releases",
              "attributes": {
                  "name": {
                      "type": "string",
                      "required": true
                  },
                  "releasedAt": {
                      "type": "datetime"
                  },
                  "scheduledAt": {
                      "type": "datetime"
                  },
                  "timezone": {
                      "type": "string"
                  },
                  "status": {
                      "type": "enumeration",
                      "enum": [
                          "ready",
                          "blocked",
                          "failed",
                          "done",
                          "empty"
                      ],
                      "required": true
                  },
                  "actions": {
                      "type": "relation",
                      "relation": "oneToMany",
                      "target": "plugin::content-releases.release-action",
                      "mappedBy": "release",
                      "targetAttribute": "release",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::content-releases.release-action",
          "plugin": "content-releases",
          "apiID": "release-action",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Release Action",
              "singularName": "release-action",
              "pluralName": "release-actions",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "strapi_release_actions",
              "attributes": {
                  "type": {
                      "type": "enumeration",
                      "enum": [
                          "publish",
                          "unpublish"
                      ],
                      "required": true
                  },
                  "entry": {
                      "type": "relation",
                      "relation": "morphToOne",
                      "configurable": false,
                      "targetAttribute": null,
                      "private": false
                  },
                  "contentType": {
                      "type": "string",
                      "required": true
                  },
                  "locale": {
                      "type": "string"
                  },
                  "release": {
                      "type": "relation",
                      "relation": "manyToOne",
                      "target": "plugin::content-releases.release",
                      "inversedBy": "actions",
                      "targetAttribute": "actions",
                      "private": false
                  },
                  "isEntryValid": {
                      "type": "boolean"
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::i18n.locale",
          "plugin": "i18n",
          "apiID": "locale",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Locale",
              "singularName": "locale",
              "pluralName": "locales",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "i18n_locale",
              "attributes": {
                  "name": {
                      "type": "string",
                      "min": 1,
                      "max": 50,
                      "configurable": false
                  },
                  "code": {
                      "type": "string",
                      "unique": true,
                      "configurable": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::users-permissions.permission",
          "plugin": "users-permissions",
          "apiID": "permission",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Permission",
              "singularName": "permission",
              "pluralName": "permissions",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "up_permissions",
              "attributes": {
                  "action": {
                      "type": "string",
                      "required": true,
                      "configurable": false
                  },
                  "role": {
                      "type": "relation",
                      "relation": "manyToOne",
                      "target": "plugin::users-permissions.role",
                      "inversedBy": "permissions",
                      "configurable": false,
                      "targetAttribute": "permissions",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::users-permissions.role",
          "plugin": "users-permissions",
          "apiID": "role",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Role",
              "singularName": "role",
              "pluralName": "roles",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "up_roles",
              "attributes": {
                  "name": {
                      "type": "string",
                      "minLength": 3,
                      "required": true,
                      "configurable": false
                  },
                  "description": {
                      "type": "string",
                      "configurable": false
                  },
                  "type": {
                      "type": "string",
                      "unique": true,
                      "configurable": false
                  },
                  "permissions": {
                      "type": "relation",
                      "relation": "oneToMany",
                      "target": "plugin::users-permissions.permission",
                      "mappedBy": "role",
                      "configurable": false,
                      "targetAttribute": "role",
                      "private": false
                  },
                  "users": {
                      "type": "relation",
                      "relation": "oneToMany",
                      "target": "plugin::users-permissions.user",
                      "mappedBy": "role",
                      "configurable": false,
                      "targetAttribute": "role",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::users-permissions.user",
          "plugin": "users-permissions",
          "apiID": "user",
          "schema": {
              "draftAndPublish": false,
              "timestamps": true,
              "displayName": "User",
              "singularName": "user",
              "pluralName": "users",
              "description": "",
              "kind": "collectionType",
              "collectionName": "up_users",
              "attributes": {
                  "username": {
                      "type": "string",
                      "minLength": 3,
                      "unique": true,
                      "configurable": false,
                      "required": true
                  },
                  "email": {
                      "type": "email",
                      "minLength": 6,
                      "configurable": false,
                      "required": true
                  },
                  "provider": {
                      "type": "string",
                      "configurable": false
                  },
                  "password": {
                      "type": "password",
                      "minLength": 6,
                      "configurable": false,
                      "private": true,
                      "searchable": false
                  },
                  "resetPasswordToken": {
                      "type": "string",
                      "configurable": false,
                      "private": true,
                      "searchable": false
                  },
                  "confirmationToken": {
                      "type": "string",
                      "configurable": false,
                      "private": true,
                      "searchable": false
                  },
                  "confirmed": {
                      "type": "boolean",
                      "default": false,
                      "configurable": false
                  },
                  "blocked": {
                      "type": "boolean",
                      "default": false,
                      "configurable": false
                  },
                  "role": {
                      "type": "relation",
                      "relation": "manyToOne",
                      "target": "plugin::users-permissions.role",
                      "inversedBy": "users",
                      "configurable": false,
                      "targetAttribute": "users",
                      "private": false
                  }
              },
              "visible": true,
              "restrictRelationsTo": null
          }
      },
      {
          "uid": "plugin::menus.menu",
          "plugin": "menus",
          "apiID": "menu",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Menu",
              "singularName": "menu",
              "pluralName": "menus",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "menus",
              "attributes": {
                  "title": {
                      "type": "string",
                      "required": true
                  },
                  "slug": {
                      "type": "uid",
                      "targetField": "title",
                      "required": true
                  },
                  "items": {
                      "type": "relation",
                      "relation": "oneToMany",
                      "target": "plugin::menus.menu-item",
                      "mappedBy": "root_menu",
                      "targetAttribute": "root_menu",
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "plugin::menus.menu-item",
          "plugin": "menus",
          "apiID": "menu-item",
          "schema": {
              "draftAndPublish": false,
              "displayName": "Menu Item",
              "singularName": "menu-item",
              "pluralName": "menu-items",
              "description": "",
              "pluginOptions": {
                  "content-manager": {
                      "visible": false
                  },
                  "content-type-builder": {
                      "visible": false
                  }
              },
              "kind": "collectionType",
              "collectionName": "menu_items",
              "attributes": {
                  "order": {
                      "type": "integer"
                  },
                  "title": {
                      "type": "string",
                      "required": true
                  },
                  "url": {
                      "type": "string"
                  },
                  "target": {
                      "type": "enumeration",
                      "enum": [
                          "_blank",
                          "_parent",
                          "_self",
                          "_top"
                      ]
                  },
                  "root_menu": {
                      "type": "relation",
                      "relation": "manyToOne",
                      "target": "plugin::menus.menu",
                      "inversedBy": "items",
                      "required": true,
                      "targetAttribute": "items",
                      "private": false
                  },
                  "parent": {
                      "type": "relation",
                      "relation": "oneToOne",
                      "target": "plugin::menus.menu-item",
                      "targetAttribute": null,
                      "private": false
                  }
              },
              "visible": false,
              "restrictRelationsTo": []
          }
      },
      {
          "uid": "api::estate.estate",
          "apiID": "estate",
          "schema": {
              "draftAndPublish": true,
              "displayName": "estate",
              "singularName": "estate",
              "pluralName": "estates",
              "description": "",
              "pluginOptions": {
                  "i18n": {
                      "localized": true
                  }
              },
              "kind": "collectionType",
              "collectionName": "estates",
              "attributes": {
                  "textshorttext": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "string",
                      "required": true,
                      "maxLength": 50,
                      "unique": true,
                      "minLength": 3,
                      "regex": "^[a-zA-Z]{3,30}$"
                  },
                  "textfordesclongtext": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "string",
                      "required": true,
                      "maxLength": 500,
                      "minLength": 10
                  },
                  "boolean": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "boolean",
                      "default": false,
                      "required": true
                  },
                  "richtext": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "blocks",
                      "required": true
                  },
                  "privatetextforpsswrd": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "string",
                      "required": true,
                      "maxLength": 20,
                      "private": true,
                      "unique": false,
                      "minLength": 6
                  },
                  "json": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "json",
                      "required": true
                  },
                  "number": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "decimal",
                      "required": true,
                      "default": 0,
                      "max": 10000,
                      "unique": false,
                      "min": 0
                  },
                  "email": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "email",
                      "required": true,
                      "maxLength": 100,
                      "unique": true,
                      "minLength": 3
                  },
                  "date": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "datetime",
                      "required": true
                  },
                  "password": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "password",
                      "required": true,
                      "minLength": 8,
                      "maxLength": 30
                  },
                  "media": {
                      "type": "media",
                      "multiple": true,
                      "required": true,
                      "private": false,
                      "allowedTypes": [
                          "images",
                          "files",
                          "videos",
                          "audios"
                      ],
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      }
                  },
                  "enum": {
                      "pluginOptions": {
                          "i18n": {
                              "localized": true
                          }
                      },
                      "type": "enumeration",
                      "enum": [
                          "male",
                          "female"
                      ],
                      "default": "male",
                      "required": true
                  }
              },
              "visible": true,
              "restrictRelationsTo": null
          }
      },
      {
          "uid": "api::product.product",
          "apiID": "product",
          "schema": {
              "draftAndPublish": true,
              "displayName": "product",
              "singularName": "product",
              "pluralName": "products",
              "description": "",
              "pluginOptions": {},
              "kind": "collectionType",
              "collectionName": "products",
              "attributes": {
                  "name": {
                      "type": "string",
                      "required": true,
                      "maxLength": 50,
                      "minLength": 3
                  },
                  "price": {
                      "type": "integer",
                      "min": 0,
                      "default": 0
                  },
                  "isDeleted": {
                      "type": "boolean",
                      "default": false,
                      "required": true
                  }
              },
              "visible": true,
              "restrictRelationsTo": null
          }
      }
  ]
}

let sdbrDta = [];
sidebar.data?.map((curElem) => {
  if (curElem.uid.startsWith("api::")) {
    let abc = {
      uid: curElem.uid,
      name: curElem.schema.displayName,
      href: `/${curElem.schema.displayName}`
    }
    sdbrDta.push(abc);
  }
})
console.log(sdbrDta);
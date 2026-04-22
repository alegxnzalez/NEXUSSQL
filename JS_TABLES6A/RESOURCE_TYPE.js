// RESOURCE_TYPE.js

window.RESOURCE_TYPE = {
  "tables": {
    "RESOURCE_TYPE": {
      "columns": {
        "RESOURCE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier. "
        },
        "RESOURCE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The ID of the resource type. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The description of the resource type. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The domain of the user."
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": [
        "LOCATION_RESOURCE_TYPE"
      ]
    }
  }
};

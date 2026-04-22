// LOCATION_RESOURCE_GROUP.js

window.LOCATION_RESOURCE_GROUP = {
  "tables": {
    "LOCATION_RESOURCE_GROUP": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        },
        "LOCATION_RESOURCE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier. "
        },
        "LOCATION_RESOURCE_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The ID of the location resource group. "
        },
        "LOCATION_RESOURCE_GROUP_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The name of the resource group."
        }
      },
      "fk_tables": [
        "LOCATION_RESOURCE",
        "LRG_APPT_RULE_SET_JOIN",
        "LRG_LOCATION_JOIN"
      ]
    }
  }
};

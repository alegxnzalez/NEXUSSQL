// GTM_OBJECT_CONDITION.js

window.GTM_OBJECT_CONDITION = {
  "tables": {
    "GTM_OBJECT_CONDITION": {
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
        "GTM_OBJECT_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid. "
        },
        "GTM_OBJECT_CONDITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Unique identifier for condition. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Condition Description. "
        },
        "CONDITION_NAME": {
          "type": "VARCHAR2(250)",
          "nullable": false,
          "info": "Condition name. "
        },
        "GTM_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_OBJECT_TYPE",
          "info": "Condition to be applied on Object Type."
        }
      },
      "fk_tables": [
        "GTM_OBJECT_CONDITION_DETAIL"
      ]
    }
  }
};

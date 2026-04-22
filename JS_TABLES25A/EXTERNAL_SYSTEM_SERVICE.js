// EXTERNAL_SYSTEM_SERVICE.js

window.EXTERNAL_SYSTEM_SERVICE = {
  "tables": {
    "EXTERNAL_SYSTEM_SERVICE": {
      "columns": {
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_SYSTEM"
        },
        "WEB_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "WEB_SERVICE"
        },
        "SERVICE_OPERATION": {
          "type": "VARCHAR2(500)",
          "nullable": true
        },
        "SERVICE_ENDPOINT_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
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
        }
      },
      "fk_tables": []
    }
  }
};

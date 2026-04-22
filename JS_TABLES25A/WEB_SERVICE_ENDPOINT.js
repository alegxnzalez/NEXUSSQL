// WEB_SERVICE_ENDPOINT.js

window.WEB_SERVICE_ENDPOINT = {
  "tables": {
    "WEB_SERVICE_ENDPOINT": {
      "columns": {
        "WEB_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WEB_SERVICE"
        },
        "SERVICE_ENDPOINT_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "SERVICE_ENDPOINT": {
          "type": "VARCHAR2(500)",
          "nullable": true
        },
        "USER_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "PASSWORD": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "TIMEOUT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TIMEOUT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TIMEOUT_UOM_CODE": {
          "type": "VARCHAR2(128)",
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
        },
        "WSS_POLICY_URL": {
          "type": "VARCHAR2(500)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};

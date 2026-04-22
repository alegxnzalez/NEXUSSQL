// WEB_SERVICE_OPERATION.js

window.WEB_SERVICE_OPERATION = {
  "tables": {
    "WEB_SERVICE_OPERATION": {
      "columns": {
        "WEB_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WEB_SERVICE"
        },
        "OPERATION_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "key_value": true
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
        "IS_FOR_INTEGRATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "STYLE": {
          "type": "VARCHAR2(60)",
          "nullable": false,
          "values": [
            "REQUEST",
            "RESPONSE",
            "ONE WAY"
          ]
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
        "SOAP_ACTION": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "PAYLOAD_STYLE": {
          "type": "VARCHAR2(10)",
          "nullable": true
        }
      },
      "fk_tables": [
        "WEB_SVC_OPERATION_PARAM"
      ]
    }
  }
};

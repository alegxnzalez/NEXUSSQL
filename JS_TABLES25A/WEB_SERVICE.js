// WEB_SERVICE.js

window.WEB_SERVICE = {
  "tables": {
    "WEB_SERVICE": {
      "columns": {
        "WEB_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "WEB_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "WSDL_DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DOCUMENT"
        },
        "SERVICE_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": false
        },
        "PORT_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": false
        },
        "NAMESPACE": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        },
        "SOAP_ENCODING": {
          "type": "VARCHAR2(100)",
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
        "USE_WSS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Boolean 'Y' or 'N' Default 'N'"
        },
        "WEB_SERVICE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "WSS_CONFIG": {
          "type": "VARCHAR2(50)",
          "nullable": true
        }
      },
      "fk_tables": [
        "EXTERNAL_SYSTEM_SERVICE",
        "MIGRATION_PROJECT",
        "WEB_SERVICE_ENDPOINT",
        "WEB_SERVICE_OPERATION"
      ]
    }
  }
};

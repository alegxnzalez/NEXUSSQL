// INTEGRATION_INTERFACE_TYPE.js

window.INTEGRATION_INTERFACE_TYPE = {
  "tables": {
    "INTEGRATION_INTERFACE_TYPE": {
      "columns": {
        "INTEGRATION_INTERFACE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "INTEGRATION_INTERFACE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true
        },
        "XMLBUILDER_JAVA_CLASS": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
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

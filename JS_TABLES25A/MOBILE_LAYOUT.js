// MOBILE_LAYOUT.js

window.MOBILE_LAYOUT = {
  "tables": {
    "MOBILE_LAYOUT": {
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
        "MOBILE_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the mobile layout. "
        },
        "MOBILE_LAYOUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the mobile layout. "
        },
        "MOBILE_LAYOUT_JSON": {
          "type": "CLOB",
          "nullable": true,
          "info": "Configuration information in JSON format. "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "MOBILE_LAYOUT_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The name of the mobile layout."
        }
      },
      "fk_tables": []
    }
  }
};

// ADVANCED_LAYOUT.js

window.ADVANCED_LAYOUT = {
  "tables": {
    "ADVANCED_LAYOUT": {
      "columns": {
        "ADVANCED_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the unique identifier for the advanced layout. "
        },
        "ADVANCED_LAYOUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the unique external identifier for the advanced layout. "
        },
        "TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Layout type "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description of the layout "
        },
        "LAYOUT_XML": {
          "type": "CLOB",
          "nullable": true,
          "info": "The XML used to create the UI."
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
      "fk_tables": [
        "ADVANCED_LAYOUT_XML"
      ]
    }
  }
};

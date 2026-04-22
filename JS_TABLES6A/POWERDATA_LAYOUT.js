// POWERDATA_LAYOUT.js

window.POWERDATA_LAYOUT = {
  "tables": {
    "POWERDATA_LAYOUT": {
      "columns": {
        "POWERDATA_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "POWERDATA_LAYOUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "POWERDATA_URL": {
          "type": "VARCHAR2(4000)",
          "nullable": false
        },
        "USER_MENU_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_MENU_LAYOUT"
        },
        "POWERDATA_LAYOUT_XML": {
          "type": "CLOB",
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
      "fk_tables": [
        "POWERDATA_LAYOUT_XML"
      ]
    }
  }
};

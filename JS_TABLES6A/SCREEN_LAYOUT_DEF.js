// SCREEN_LAYOUT_DEF.js

window.SCREEN_LAYOUT_DEF = {
  "tables": {
    "SCREEN_LAYOUT_DEF": {
      "columns": {
        "SCREEN_LAYOUT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Screen Layout G Id "
        },
        "SCREEN_LAYOUT_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Screen Layout Xid "
        },
        "SCREEN_LAYOUT_DEF_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSLATION"
        },
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SCREEN_LAYOUT_DEF_XML": {
          "type": "CLOB",
          "nullable": true,
          "info": "XML to store the screen layout"
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
        "SCREEN_LAYOUT"
      ]
    }
  }
};

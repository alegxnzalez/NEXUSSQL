// SCREEN_LAYOUT.js

window.SCREEN_LAYOUT = {
  "tables": {
    "SCREEN_LAYOUT": {
      "description": "Table to hold the screen layout details",
      "columns": {
        "SCREEN_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Screen Layout Gid"
},
        "SCREEN_LAYOUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Screen Layout Xid"
},
        "SCREEN_LAYOUT_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "layout Name"
},
        "SCREEN_LAYOUT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SCREEN_LAYOUT_DEF",
          "info": "Screen layout def gid"
},
        "XSL_CONF": {
          "type": "VARCHAR2(512)",
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
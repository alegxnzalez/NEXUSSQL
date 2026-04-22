// USER_MENU_LAYOUT.js

window.USER_MENU_LAYOUT = {
  "tables": {
    "USER_MENU_LAYOUT": {
      "description": "This table stores the menu definition XML.  Menu defnitions can be created and modified by the User Menu Manager.",
      "columns": {
        "USER_MENU_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "USER_MENU_LAYOUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "USER_MENU_LAYOUT_XML": {
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
},
        "IS_MIGRATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This column indicates if the user menu is migrated to JSON format"
},
        "USER_MENU_LAYOUT_JSON": {
          "type": "CLOB",
          "nullable": true,
          "info": "This column contains the JSON format of the user menu layout"
}
      },
      "fk_tables": [
        "POWERDATA_LAYOUT",
        "USER_MENU_ACCESS",
        "USER_MENU_LAYOUT_JSON",
        "USER_MENU_LAYOUT_XML"
]
    }
  }
};
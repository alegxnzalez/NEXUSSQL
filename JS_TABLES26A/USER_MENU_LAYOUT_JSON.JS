// USER_MENU_LAYOUT_JSON.js

window.USER_MENU_LAYOUT_JSON = {
  "tables": {
    "USER_MENU_LAYOUT_JSON": {
      "description": "Versioned CLOBs for user menu layout",
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
        "USER_MENU_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "USER_MENU_LAYOUT",
          "info": "The unique identifier for user menu layout"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OTM_RELEASE",
          "info": "OTM Release ID"
},
        "USER_MENU_LAYOUT_JSON": {
          "type": "CLOB",
          "nullable": true,
          "info": "This column contains the JSON format of the user menu layout"
}
      },
      "fk_tables": []
    }
  }
};
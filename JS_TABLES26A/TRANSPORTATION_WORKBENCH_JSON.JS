// TRANSPORTATION_WORKBENCH_JSON.js

window.TRANSPORTATION_WORKBENCH_JSON = {
  "tables": {
    "TRANSPORTATION_WORKBENCH_JSON": {
      "description": "Versioned JSON CLOB for transportation workbench",
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
        "LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRANSPORTATION_WORKBENCH",
          "info": "The unique identifier for the layout"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Release ID - full release string"
},
        "LAYOUT_JSON": {
          "type": "CLOB",
          "nullable": true,
          "info": "Layout definition in JSON format"
}
      },
      "fk_tables": []
    }
  }
};
// POWERDATA_LAYOUT_JSON.js

window.POWERDATA_LAYOUT_JSON = {
  "tables": {
    "POWERDATA_LAYOUT_JSON": {
      "description": "Versioned CLOBs for PowerData Layout",
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
        "POWERDATA_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "POWERDATA_LAYOUT",
          "info": "Unique identifier for Power Data Layout"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OTM_RELEASE",
          "info": "OTM Release ID"
},
        "POWERDATA_LAYOUT_JSON": {
          "type": "CLOB",
          "nullable": true,
          "info": "Power Data Layout in JSON format"
}
      },
      "fk_tables": []
    }
  }
};
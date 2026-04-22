// POWERDATA_LAYOUT_XML.js

window.POWERDATA_LAYOUT_XML = {
  "tables": {
    "POWERDATA_LAYOUT_XML": {
      "description": "Versioned CLOBs for powerdata layout",
      "columns": {
        "POWERDATA_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "POWERDATA_LAYOUT"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OTM_RELEASE"
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
      "fk_tables": []
    }
  }
};
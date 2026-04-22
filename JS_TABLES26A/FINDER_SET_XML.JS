// FINDER_SET_XML.js

window.FINDER_SET_XML = {
  "tables": {
    "FINDER_SET_XML": {
      "description": "Versioned CLOBs for finder set",
      "columns": {
        "FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FINDER_SET"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OTM_RELEASE"
},
        "FINDER_SET_XML": {
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
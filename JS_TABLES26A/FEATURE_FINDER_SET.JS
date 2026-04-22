// FEATURE_FINDER_SET.js

window.FEATURE_FINDER_SET = {
  "tables": {
    "FEATURE_FINDER_SET": {
      "description": "An finder set associated with a feature.",
      "columns": {
        "FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FEATURE",
          "info": "The feature GID."
},
        "FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FINDER_SET",
          "info": "The finder set GID."
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "R",
                    "H"
          ]
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
// HAZARDOUS_CLASSIFICATION.js

window.HAZARDOUS_CLASSIFICATION = {
  "tables": {
    "HAZARDOUS_CLASSIFICATION": {
      "description": "Hazardous Classification",
      "columns": {
        "HAZARDOUS_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "HAZARDOUS_CLASSIFICATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "HAZARDOUS_CLASSIFICATION_DESC": {
          "type": "VARCHAR2(256)",
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
        "HAZARDOUS_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true
}
      },
      "fk_tables": [
        "HAZMAT_GENERIC",
        "HAZ_CLASS_PROFILE_D",
        "ORDER_RELEASE_LINE"
]
    }
  }
};
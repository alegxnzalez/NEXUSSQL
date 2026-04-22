// LOCATION_QUALIFIER.js

window.LOCATION_QUALIFIER = {
  "tables": {
    "LOCATION_QUALIFIER": {
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
        "LOCATION_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LOCATION_QUALIFIER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LOCATION_QUALIFIER_DESC": {
          "type": "VARCHAR2(255)",
          "nullable": true
}
      },
      "fk_tables": [
        "TENDER_COLLAB_CB_FIELD",
        "TENDER_COLLAB_INBOUND_ERROR"
]
    }
  }
};
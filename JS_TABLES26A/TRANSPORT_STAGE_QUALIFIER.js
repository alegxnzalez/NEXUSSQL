// TRANSPORT_STAGE_QUALIFIER.js

window.TRANSPORT_STAGE_QUALIFIER = {
  "tables": {
    "TRANSPORT_STAGE_QUALIFIER": {
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
        "TRANSPORT_STAGE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TRANSPORT_STAGE_QUALIFIER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "TRANSPORT_STAGE_QUALIFIER_DESC": {
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
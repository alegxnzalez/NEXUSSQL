// CONSOL_REFNUM_QUAL.js

window.CONSOL_REFNUM_QUAL = {
  "tables": {
    "CONSOL_REFNUM_QUAL": {
      "columns": {
        "CONSOL_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CONSOL_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CONSOL_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "values": [
                    "UPDATE_OK",
                    "UPDATE_NOT_OK",
                    "MANY"
          ]
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
      "fk_tables": [
        "CONSOL_REFNUM"
]
    }
  }
};
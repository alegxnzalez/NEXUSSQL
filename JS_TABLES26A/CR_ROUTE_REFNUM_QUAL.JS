// CR_ROUTE_REFNUM_QUAL.js

window.CR_ROUTE_REFNUM_QUAL = {
  "tables": {
    "CR_ROUTE_REFNUM_QUAL": {
      "description": "Reference qualifiers for CR routes.",
      "columns": {
        "CR_ROUTE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_ROUTE_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CR_ROUTE_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": false
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
        "CR_ROUTE_REFNUM"
]
    }
  }
};
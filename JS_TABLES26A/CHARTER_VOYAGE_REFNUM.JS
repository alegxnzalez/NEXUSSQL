// CHARTER_VOYAGE_REFNUM.js

window.CHARTER_VOYAGE_REFNUM = {
  "tables": {
    "CHARTER_VOYAGE_REFNUM": {
      "columns": {
        "CHARTER_VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CHARTER_VOYAGE"
},
        "CHARTER_VOYAGE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CHARTER_VOYAGE_REFNUM_QUAL"
},
        "CHARTER_VOYAGE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
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
      "fk_tables": []
    }
  }
};
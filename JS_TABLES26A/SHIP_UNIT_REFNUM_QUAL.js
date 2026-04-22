// SHIP_UNIT_REFNUM_QUAL.js

window.SHIP_UNIT_REFNUM_QUAL = {
  "tables": {
    "SHIP_UNIT_REFNUM_QUAL": {
      "columns": {
        "SHIP_UNIT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SHIP_UNIT_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "SHIP_UNIT_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "IS_VISIBLE_IF_MASTER_CARR": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
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
      "fk_tables": [
        "SHIP_UNIT_REFNUM"
]
    }
  }
};
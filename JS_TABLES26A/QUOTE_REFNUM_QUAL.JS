// QUOTE_REFNUM_QUAL.js

window.QUOTE_REFNUM_QUAL = {
  "tables": {
    "QUOTE_REFNUM_QUAL": {
      "description": "Ref num qualifier for quote",
      "columns": {
        "QUOTE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "QUOTE_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "QUOTE_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "IS_VISIBLE_IF_MASTER_CARR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE"
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
        "QUOTE_REFNUM"
]
    }
  }
};
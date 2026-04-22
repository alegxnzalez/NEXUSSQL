// PARTNER_ITEM_REFNUM_QUAL.js

window.PARTNER_ITEM_REFNUM_QUAL = {
  "tables": {
    "PARTNER_ITEM_REFNUM_QUAL": {
      "description": "Contains reference number qualifier for partner item.",
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
        "PARTNER_ITEM_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies the unique identifier for partner item reference number qualifier across all domains."
},
        "PARTNER_ITEM_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Specifies the unique identifier for partner item reference number qualifier in a particular domain."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description for partner item reference number"
},
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE"
},
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "values": [
                    "UPDATE_OK",
                    "UPDATE_NOT_OK",
                    "MANY"
          ]
}
      },
      "fk_tables": [
        "PARTNER_ITEM_REFNUM"
]
    }
  }
};
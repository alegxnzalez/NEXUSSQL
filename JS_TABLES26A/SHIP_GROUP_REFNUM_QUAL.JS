// SHIP_GROUP_REFNUM_QUAL.js

window.SHIP_GROUP_REFNUM_QUAL = {
  "tables": {
    "SHIP_GROUP_REFNUM_QUAL": {
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
        "SHIP_GROUP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SHIP_GROUP_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "SHIP_GROUP_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "values": [
                    "UPDATE_OK",
                    "UPDATE_NOT_OK",
                    "MANY"
          ],
          "info": "Specifies if the reference number qualifier can exist on the business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. If the value is MANY, then the object can have multiple values for the same qualifier. If the value is either UPDATE_OK or UPDATE_NOT_OK, then the rule is in effect, meaning only one value is allowed for a given qualifier. In the case of UPDATE_NOT_OK, the value may not be modified."
},
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "The business number type used to generate a reference number when the reference number field for a record in the corresponding reference number table is not populated."
}
      },
      "fk_tables": [
        "IE_SHIP_GROUP_REFNUM",
        "SERVPROV_TENDER_SG_REFNUM",
        "SHIP_GROUP_REFNUM",
        "SHIP_GROUP_RULE"
]
    }
  }
};
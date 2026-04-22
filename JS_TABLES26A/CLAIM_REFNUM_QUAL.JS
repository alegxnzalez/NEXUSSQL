// CLAIM_REFNUM_QUAL.js

window.CLAIM_REFNUM_QUAL = {
  "tables": {
    "CLAIM_REFNUM_QUAL": {
      "description": "Valid qualifiers for claim refnums",
      "columns": {
        "CLAIM_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "qualifier for claim refnums"
},
        "CLAIM_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "description of claim refnum qualifier"
},
        "IS_VISIBLE_IF_MASTER_CARR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Identifies whether the reference numbers with this qualifier should display on related shipments"
},
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "The BN type used to generate a refnum when the refnum field for a record in the corresponding refnum table is not populated"
},
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "values": [
                    "UPDATE_OK",
                    "UPDATE_NOT_OK",
                    "MANY"
          ],
          "info": "Specifies if the refnum qualifier can exist on the business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. If the value is MANY, then the object can have multiple values for the same qualifier. If the value is either UPDATE_OK or UPDATE_NOT_OK, then the rule is in effect, meaning only one value is allowed for a given qualifier. In the case of UPDATE_NOT_OK, the value may not be modified."
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
        "CLAIM_REFNUM"
]
    }
  }
};
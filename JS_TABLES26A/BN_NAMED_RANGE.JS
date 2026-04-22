// BN_NAMED_RANGE.js

window.BN_NAMED_RANGE = {
  "tables": {
    "BN_NAMED_RANGE": {
      "description": "Each record represents a collection of pre-assigned ranges.",
      "columns": {
        "BN_NAMED_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The global id of the named range (or range set)."
},
        "BN_NAMED_RANGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external id of the named range."
},
        "RECYCLING_POLICY": {
          "type": "VARCHAR2(200)",
          "nullable": false,
          "values": [
                    "AUDIT AND RECYCLE",
                    "AUDIT ONLY",
                    "NO AUDIT"
          ],
          "info": "Determines whether to recycle or audit the range."
},
        "USE_BN_CONTEXT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Signifies if the BN_CONTEXT is used in the business number generation."
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
        "BN_NAMED_RANGE_EVENT",
        "BN_NAMED_RANGE_INV_PARTY",
        "BN_RANGE"
]
    }
  }
};
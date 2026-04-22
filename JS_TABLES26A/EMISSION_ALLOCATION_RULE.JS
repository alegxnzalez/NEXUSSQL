// EMISSION_ALLOCATION_RULE.js

window.EMISSION_ALLOCATION_RULE = {
  "tables": {
    "EMISSION_ALLOCATION_RULE": {
      "description": "This table is used for storing the rules for allocating the emissions.",
      "columns": {
        "EMISSION_ALLOCATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The globally unique ID of an emission allocation rule."
},
        "EMISSION_ALLOCATION_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The unique ID of an emission allocation rule specific to a domain."
},
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This flag determines whether the emission allocation rule is the default one to be used when no valid emission allocation rule is found."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the emission allocation rule."
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
        "EMISSION_ALLOC_RULE_D",
        "ESG_ACTIVITY_RULE"
]
    }
  }
};
// EMISSION_ALLOC_RULE_D.js

window.EMISSION_ALLOC_RULE_D = {
  "tables": {
    "EMISSION_ALLOC_RULE_D": {
      "description": "This table is used for storing the rule details about source and target for allocating the emissions.",
      "columns": {
        "EMISSION_ALLOCATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EMISSION_ALLOCATION_RULE",
          "info": "Emission Allocation Rule Gid for which the emission allocation detail is defined."
},
        "EMISSION_ALLOC_RULE_D_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence of the detail in the emission allocation rule."
},
        "ALLOC_METRIC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Allocation metric to be used for allocating the emissions."
},
        "ALLOCATION_BASIS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ALLOC_TARGET",
          "info": "Target object on which the emission need to be allocated."
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
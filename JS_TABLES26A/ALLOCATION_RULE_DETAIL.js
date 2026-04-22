// ALLOCATION_RULE_DETAIL.js

window.ALLOCATION_RULE_DETAIL = {
  "tables": {
    "ALLOCATION_RULE_DETAIL": {
      "columns": {
        "ALLOCATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOCATION_RULE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "BASIS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "foreign_key": "ALLOC_TARGET"
},
        "ALLOC_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true
},
        "ALLOC_METRIC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
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
},
        "COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COST_TYPE",
          "info": "The cost type identifier. i.e if the cost is a BaseCost(B), Accessorial (A), Stopoff (S) etc..."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Populated only inc ase cost_type_gid is 'A'. Identifies which accessorial code."
},
        "ALLOC_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ALLOC_METHOD",
          "info": "The allocation method that the rule line is going to use."
},
        "ALLOC_RULE_DETAIL_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The seq for maintaining the primary key."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};
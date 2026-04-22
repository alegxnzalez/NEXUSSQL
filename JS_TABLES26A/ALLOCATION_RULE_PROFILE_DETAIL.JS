// ALLOCATION_RULE_PROFILE_DETAIL.js

window.ALLOCATION_RULE_PROFILE_DETAIL = {
  "tables": {
    "ALLOCATION_RULE_PROFILE_DETAIL": {
      "columns": {
        "ALLOCATION_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOCATION_RULE_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ALLOCATION_RULE_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true
},
        "ALLOCATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ALLOCATION_RULE",
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
}
      },
      "fk_tables": []
    }
  }
};
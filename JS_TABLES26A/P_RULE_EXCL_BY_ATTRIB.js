// P_RULE_EXCL_BY_ATTRIB.js

window.P_RULE_EXCL_BY_ATTRIB = {
  "tables": {
    "P_RULE_EXCL_BY_ATTRIB": {
      "description": "Sourcing Exclude by Attribute Rule",
      "columns": {
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_RULE_SET"
},
        "ATTRIBUTE": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true
},
        "ATTRIBUTE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "CRITERIA": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "DURATION": {
          "type": "NUMBER",
          "nullable": true
},
        "DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "DURATION_BASE": {
          "type": "NUMBER",
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
      "fk_tables": []
    }
  }
};
// P_RULE_FAVOR_BY_ATTRIB.js

window.P_RULE_FAVOR_BY_ATTRIB = {
  "tables": {
    "P_RULE_FAVOR_BY_ATTRIB": {
      "description": "Sourcing Favor by Atribute Rule",
      "columns": {
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "P_RULE_SET"
},
        "ATTRIBUTE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ATTRIBUTE": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CRITERIA": {
          "type": "VARCHAR2(25)",
          "nullable": false
},
        "DURATION": {
          "type": "NUMBER",
          "nullable": true
},
        "VALUE": {
          "type": "VARCHAR2(100)",
          "nullable": true
},
        "FAVOR_VALUE_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": false
},
        "FAVOR_VALUE_PERCENT": {
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
        "FAVOR_AMOUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "FAVOR_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "FAVOR_AMOUNT_BASE": {
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
},
        "P_RULE_FAV_BY_ATTRIB_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "P_RULE_FAV_BY_ATTRIB_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};
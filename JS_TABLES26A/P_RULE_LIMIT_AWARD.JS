// P_RULE_LIMIT_AWARD.js

window.P_RULE_LIMIT_AWARD = {
  "tables": {
    "P_RULE_LIMIT_AWARD": {
      "description": "Sourcing Limit Award Rule table",
      "columns": {
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_RULE_SET"
},
        "RULE_SCOPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "CRITERIA": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true
},
        "VALUE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV_PROFILE"
},
        "VALUE": {
          "type": "NUMBER",
          "nullable": true
},
        "MONETARY_SPENT": {
          "type": "NUMBER",
          "nullable": true
},
        "MONETARY_SPENT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "MONETARY_SPENT_BASE": {
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
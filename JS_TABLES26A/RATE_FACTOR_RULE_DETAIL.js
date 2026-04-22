// RATE_FACTOR_RULE_DETAIL.js

window.RATE_FACTOR_RULE_DETAIL = {
  "tables": {
    "RATE_FACTOR_RULE_DETAIL": {
      "columns": {
        "RATE_FACTOR_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_FACTOR_RULE"
},
        "RULE_EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true
},
        "RULE_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false
},
        "ACC_EFF_DATE_SOURCE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "FE",
                    "RE"
          ]
},
        "ACC_EFF_DATE_OFFSET": {
          "type": "NUMBER(3)",
          "nullable": true
},
        "ACC_EFF_DATE_FIXED": {
          "type": "NUMBER(2)",
          "nullable": true
},
        "ACC_EXP_DATE_SOURCE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "FE",
                    "FX",
                    "RE",
                    "RX",
                    "AE"
          ]
},
        "ACC_EXP_DATE_OFFSET": {
          "type": "NUMBER(3)",
          "nullable": true
},
        "ACC_EXP_DATE_FIXED": {
          "type": "NUMBER(2)",
          "nullable": true
},
        "ACC_COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "L",
                    "C",
                    "E"
          ]
},
        "EXC_FACTOR_INCREASE": {
          "type": "NUMBER",
          "nullable": true
},
        "EXC_COST_INCREASE": {
          "type": "NUMBER",
          "nullable": true
},
        "APPLY_TO": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
                    "CHARGE_MULTIPLIER_SCALAR",
                    "CHARGE_AMOUNT"
          ]
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
        "RATE_FACTOR_RULE_VALUE_BREAK"
]
    }
  }
};
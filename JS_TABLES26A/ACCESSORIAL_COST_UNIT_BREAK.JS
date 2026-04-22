// ACCESSORIAL_COST_UNIT_BREAK.js

window.ACCESSORIAL_COST_UNIT_BREAK = {
  "tables": {
    "ACCESSORIAL_COST_UNIT_BREAK": {
      "columns": {
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_COST"
},
        "RATE_UNIT_BREAK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_UNIT_BREAK"
},
        "RATE_UNIT_BREAK2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_UNIT_BREAK",
          "info": "For rates using a 2-d profile, this will specify the second profile gid (the row)."
},
        "CHARGE_AMOUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "CHARGE_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_DISCOUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "MIN_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "MAX_COST_BASE": {
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
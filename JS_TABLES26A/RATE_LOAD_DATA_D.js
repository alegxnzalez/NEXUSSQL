// RATE_LOAD_DATA_D.js

window.RATE_LOAD_DATA_D = {
  "tables": {
    "RATE_LOAD_DATA_D": {
      "columns": {
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
        "RATE_LOAD_DATA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_LOAD_DATA"
},
        "RATE_LOAD_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_LOAD_FIELD"
},
        "SCALAR_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Populates when rate attribute type is discount."
},
        "COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Cost value."
},
        "COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Cost value in base units."
},
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Currency of the cost."
},
        "UNIT_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Cost is per this number of units."
},
        "UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Cost is per this unit of measure."
},
        "NEW_PK_VALUE": {
          "type": "VARCHAR2(400)",
          "nullable": true,
          "info": "Generated PK for the uploaded cost."
},
        "MIN_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum cost value."
},
        "MIN_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum cost value in base units."
},
        "MIN_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency of the minimum cost."
},
        "MAX_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum cost value."
},
        "MAX_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum cost value in base units."
},
        "MAX_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency of the maximum cost."
}
      },
      "fk_tables": []
    }
  }
};
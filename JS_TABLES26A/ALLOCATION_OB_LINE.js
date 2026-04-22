// ALLOCATION_OB_LINE.js

window.ALLOCATION_OB_LINE = {
  "tables": {
    "ALLOCATION_OB_LINE": {
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
        "ALLOC_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOCATION_BASE"
},
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_LINE"
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT"
},
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OB_ORDER_BASE"
},
        "PRIVATE_COST": {
          "type": "NUMBER",
          "nullable": false
},
        "PRIVATE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "PRIVATE_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "BASE_COST": {
          "type": "NUMBER",
          "nullable": false
},
        "BASE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "BASE_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "TOTAL_ALLOC_LINE_COST": {
          "type": "NUMBER",
          "nullable": false
},
        "T_LINE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "TOTAL_ALLOC_LINE_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM"
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE"
},
        "BASE_COST_FN": {
          "type": "NUMBER",
          "nullable": true
},
        "BASE_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PRIVATE_COST_FN": {
          "type": "NUMBER",
          "nullable": true
},
        "PRIVATE_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TOTAL_ALLOC_C_FN": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_ALLOC_C_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};
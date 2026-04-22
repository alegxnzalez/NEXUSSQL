// SKU_COST.js

window.SKU_COST = {
  "tables": {
    "SKU_COST": {
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU",
          "info": "SKU id "
        },
        "SKU_COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_COST_TYPE",
          "info": "SKU cost type id "
        },
        "SKU_COST_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "SKU warehousing cost "
        },
        "SKU_COST_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "SKU cost currency code "
        },
        "SKU_COST_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "SKU cost in base currency"
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

// SKU_LEVEL.js

window.SKU_LEVEL = {
  "tables": {
    "SKU_LEVEL": {
      "description": "SKU stock levels.",
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_QUANTITY",
          "info": "SKU id."
},
        "SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_QUANTITY_TYPE",
          "info": "The sku_quantity_type to which this level applies."
},
        "SKU_LEVEL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_LEVEL_TYPE",
          "info": "SKU inventory alert level type."
},
        "SKU_LEVEL_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "SKU inventory alert level. For example, when the inventory fall below the minimum level, a request can be sent out for replenishment."
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
// SKU_QUANTITY.js

window.SKU_QUANTITY = {
  "tables": {
    "SKU_QUANTITY": {
      "description": "SKU stock quantity.",
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU",
          "info": "SKU id."
},
        "SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_QUANTITY_TYPE",
          "info": "SKU inventory quantity type id."
},
        "SKU_QUANTITY_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "SKU inventory quantity."
},
        "SKU_ADJ_QUANTITY_VALUE": {
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
      "fk_tables": [
        "SKU_LEVEL",
        "SKU_QUANTITY_ASSET",
        "S_EQUIPMENT"
]
    }
  }
};
// SKU_TRANSACTION.js

window.SKU_TRANSACTION = {
  "tables": {
    "SKU_TRANSACTION": {
      "columns": {
        "SKU_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SKU_TRANSACTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "TRANSACTION_TYPE": {
          "type": "VARCHAR2(120)",
          "nullable": false
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "WAREHOUSE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SUPPLIER_CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "OWNER_CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "QUANTITY1": {
          "type": "NUMBER",
          "nullable": true
},
        "QUANTITY2": {
          "type": "NUMBER",
          "nullable": true
},
        "TRANSACTION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true
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
        "SKU_TRANSACTION_DESCRIPTOR"
]
    }
  }
};
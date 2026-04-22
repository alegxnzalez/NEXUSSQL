// SKU_QUANTITY_ASSET.js

window.SKU_QUANTITY_ASSET = {
  "tables": {
    "SKU_QUANTITY_ASSET": {
      "columns": {
        "SKU_QUANTITY_ASSET_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SKU_QUANTITY"
},
        "SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SKU_QUANTITY"
},
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER"
},
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT"
},
        "POWER_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "POWER_UNIT"
},
        "ASSOCIATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date when the asset instance got linked with this bucket"
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
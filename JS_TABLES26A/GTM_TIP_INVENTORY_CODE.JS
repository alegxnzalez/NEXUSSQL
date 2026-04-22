// GTM_TIP_INVENTORY_CODE.js

window.GTM_TIP_INVENTORY_CODE = {
  "tables": {
    "GTM_TIP_INVENTORY_CODE": {
      "description": "Trade Incentive Program User Defined Codes",
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
        "GTM_TIP_INVENTORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_INVENTORY",
          "info": "Trade Incentive Program Inventory GID"
},
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "User Defined Type GID"
},
        "GTM_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "User Defined Code"
}
      },
      "fk_tables": []
    }
  }
};
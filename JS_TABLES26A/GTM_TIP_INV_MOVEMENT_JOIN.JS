// GTM_TIP_INV_MOVEMENT_JOIN.js

window.GTM_TIP_INV_MOVEMENT_JOIN = {
  "tables": {
    "GTM_TIP_INV_MOVEMENT_JOIN": {
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
        "GTM_TIP_INV_MOVEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_INV_MOVEMENT",
          "info": "Trade Incentive Program Inventory Movement GID"
}
      },
      "fk_tables": []
    }
  }
};
// GTM_TIP_INVENTORY_REFNUM.js

window.GTM_TIP_INVENTORY_REFNUM = {
  "tables": {
    "GTM_TIP_INVENTORY_REFNUM": {
      "description": "Trade Incentive Program Inventory Reference Numbers",
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
        "GTM_TIP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_REFNUM_QUAL",
          "info": "Trade Incentive Program Reference Number Qualifier GID"
},
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "Reference Number Value"
}
      },
      "fk_tables": []
    }
  }
};
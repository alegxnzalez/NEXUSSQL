// GTM_TIP_OPERATION_SET.js

window.GTM_TIP_OPERATION_SET = {
  "tables": {
    "GTM_TIP_OPERATION_SET": {
      "description": "Set of Operations allowed to be performed in a Trade Incentive Program",
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
        "GTM_TIP_OPERATION_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Operation Set GID"
},
        "GTM_TIP_OPERATION_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Operation Set XID"
},
        "OPERATION_SET_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Operation Set Name"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description"
}
      },
      "fk_tables": [
        "GTM_TIP_OPERATION",
        "GTM_TRADE_INCENTIVE_PROGRAM"
]
    }
  }
};
// GTM_TIP_ZONE_STATUS.js

window.GTM_TIP_ZONE_STATUS = {
  "tables": {
    "GTM_TIP_ZONE_STATUS": {
      "description": "Trade Incentive Program Zone Status",
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
        "GTM_TIP_ZONE_STATUS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Trade Incentive Program Zone Status GID"
},
        "GTM_TIP_ZONE_STATUS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Incentive Program Zone Status XID"
},
        "ZONE_STATUS_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Trade Incentive Program Zone Status Name"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description"
},
        "GTM_DECL_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_DECL_TYPE_PROFILE",
          "info": "Declaration Type Profile GID"
},
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "External Reference Code"
}
      },
      "fk_tables": [
        "GTM_TIP_DUTY_TAX_CONFIG",
        "GTM_TIP_INVENTORY",
        "GTM_TIP_ZONE_STATUS_CONSTR",
        "GTM_TRANSACTION_LINE"
]
    }
  }
};
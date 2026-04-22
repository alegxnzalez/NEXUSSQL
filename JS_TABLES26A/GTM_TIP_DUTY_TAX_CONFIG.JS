// GTM_TIP_DUTY_TAX_CONFIG.js

window.GTM_TIP_DUTY_TAX_CONFIG = {
  "tables": {
    "GTM_TIP_DUTY_TAX_CONFIG": {
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
        "GTM_DECLARATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DECLARATION_TYPE",
          "info": "Declaration Type ID"
},
        "SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number"
},
        "SOURCE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "ES",
                    "CI"
          ],
          "info": "The source of the duty tax data. Value can either be ES (EXTERNAL SYSTEM) or CI (CUSTOM INVENTORY)."
},
        "SOURCE_VALUE_QUALIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The source value qualifier."
},
        "TARGET": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "DL"
          ],
          "info": "The target where the duty tax data gets stored. Value can be DL (Declaration Line)."
},
        "TARGET_VALUE_QUALIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The target value qualifier."
},
        "TARGET_ZONE_STATUS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_ZONE_STATUS",
          "info": "Trade Incentive Program Zone Status of the declaration line."
}
      },
      "fk_tables": []
    }
  }
};
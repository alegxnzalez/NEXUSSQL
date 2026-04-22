// GTM_TIP_ALLOWED_PROCEDURES.js

window.GTM_TIP_ALLOWED_PROCEDURES = {
  "tables": {
    "GTM_TIP_ALLOWED_PROCEDURES": {
      "description": "Trade Incentive Program Allowed Procedures",
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
        "GTM_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "Allowed Procedure GID"
},
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "Trade Incentive Program GID"
}
      },
      "fk_tables": []
    }
  }
};
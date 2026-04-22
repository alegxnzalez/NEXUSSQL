// GTM_TIP_AUTH_REMARK.js

window.GTM_TIP_AUTH_REMARK = {
  "tables": {
    "GTM_TIP_AUTH_REMARK": {
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
        "GTM_TIP_AUTHORIZATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_AUTHORIZATION",
          "info": "Trade Incentive Program Authorization GID "
        },
        "REMARK_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number of Remark on Trade Incentive Program Authorization "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "Remark Qualifier GID "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Remark Text for Trade Incentive Program Authorization"
        }
      },
      "fk_tables": []
    }
  }
};

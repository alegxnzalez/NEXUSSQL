// GTM_TIP_REMARK.js

window.GTM_TIP_REMARK = {
  "tables": {
    "GTM_TIP_REMARK": {
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
        "REMARK_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number of remark on Trade Incentive Program "
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
          "info": "Remark text for Trade Incentive Program "
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

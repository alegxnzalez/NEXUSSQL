// GTM_TA_RVC_METHOD.js

window.GTM_TA_RVC_METHOD = {
  "tables": {
    "GTM_TA_RVC_METHOD": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insertion. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the user who updated the data. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of data update. "
        },
        "GTM_TRADE_AGREEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRADE_AGREEMENT",
          "info": "Identifies the trade agreement corresponding to the trade agreement's regional value content method. "
        },
        "QF_RVC_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QF_RVC_METHOD",
          "info": "Identifies the regional value content method corresponding to the trade agreement's regional value content method. "
        },
        "PRIORITY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Indicates the priority of the execution to the regional value content methods."
        }
      },
      "fk_tables": []
    }
  }
};

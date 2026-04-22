// GTM_TA_DEPENDENT_FORMULA.js

window.GTM_TA_DEPENDENT_FORMULA = {
  "tables": {
    "GTM_TA_DEPENDENT_FORMULA": {
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
          "info": "Identifies the trade agreement corresponding to the dependent formula. "
        },
        "GTM_FORMULA_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Identifies the formula expression GID corresponding to the dependent formula."
        }
      },
      "fk_tables": []
    }
  }
};

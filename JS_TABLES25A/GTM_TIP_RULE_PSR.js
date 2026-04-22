// GTM_TIP_RULE_PSR.js

window.GTM_TIP_RULE_PSR = {
  "tables": {
    "GTM_TIP_RULE_PSR": {
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
        "GTM_TIP_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_RULE",
          "info": "Trade Incentive Program Rule GID "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number "
        },
        "START_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Product Classification Code starting range "
        },
        "END_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Product Classification Code ending range "
        },
        "PERIOD_OF_DISCHARGE_YEARS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Priod of Discharge in Years "
        },
        "PERIOD_OF_DISCHARGE_MONTHS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Period of Discharge in Months "
        },
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Matching Constraint Set "
        },
        "PERIOD_OF_DISCHARGE_DAYS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Period of Discharge in Days"
        }
      },
      "fk_tables": []
    }
  }
};
